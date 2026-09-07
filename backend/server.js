require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const PORT = process.env.PORT || 5000;

// Allowed origins — localhost for dev, your Netlify URL for production
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4173",
  process.env.FRONTEND_URL, // e.g. https://your-site.netlify.app
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (Postman, curl, etc.)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS blocked: ${origin}`));
      }
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Accept"],
  })
);

app.use(express.json());

// PostgreSQL connection pool
// Supports both individual env vars AND a single DATABASE_URL (Render / Supabase / Railway)
const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }, // required by Render/Supabase hosted Postgres
    })
  : new Pool({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    });

// Test DB connection on startup
pool.connect((err, client, release) => {
  if (err) {
    console.error("❌ Failed to connect to PostgreSQL:", err.message);
  } else {
    console.log("✅ Connected to PostgreSQL database successfully!");
    release();
  }
});

// Ensure table exists on startup
pool.query(`
  CREATE TABLE IF NOT EXISTS contact_messages (
    id           SERIAL PRIMARY KEY,
    name         VARCHAR(255) NOT NULL,
    email        VARCHAR(255) NOT NULL,
    message      TEXT NOT NULL,
    submitted_at TIMESTAMP DEFAULT NOW()
  )
`).catch((err) => console.error("❌ Table creation error:", err.message));

// POST /api/contact — Save message to DB
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "All fields are required." });
  }

  if (name.length > 255 || email.length > 255) {
    return res.status(400).json({ success: false, error: "Input too long." });
  }

  try {
    const result = await pool.query(
      `INSERT INTO contact_messages (name, email, message)
       VALUES ($1, $2, $3)
       RETURNING id, submitted_at`,
      [name, email, message]
    );

    console.log(`📩 New message from ${name} (${email}) — ID: ${result.rows[0].id}`);

    return res.status(201).json({
      success: true,
      message: "Message saved successfully!",
      id: result.rows[0].id,
      submitted_at: result.rows[0].submitted_at,
    });
  } catch (error) {
    console.error("❌ Database error:", error.message);
    return res.status(500).json({ success: false, error: "Failed to save message. Please try again." });
  }
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running at http://localhost:${PORT}`);
});
