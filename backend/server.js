require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// PostgreSQL connection pool
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
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
