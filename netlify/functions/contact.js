const { Pool } = require("pg");

// Reuse pool across warm invocations
let pool;

function getPool() {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error("DATABASE_URL environment variable is not set.");
    }
    pool = new Pool({
      connectionString,
      ssl: { rejectUnauthorized: false }, // required for Supabase / hosted Postgres
      max: 1, // keep connections lean in serverless
    });
  }
  return pool;
}

// Ensure the table exists (runs once per cold start)
async function ensureTable(client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id           SERIAL PRIMARY KEY,
      name         VARCHAR(255) NOT NULL,
      email        VARCHAR(255) NOT NULL,
      message      TEXT NOT NULL,
      submitted_at TIMESTAMP DEFAULT NOW()
    )
  `);
}

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: false, error: "Method not allowed" }),
    };
  }

  // Parse body
  let name, email, message;
  try {
    ({ name, email, message } = JSON.parse(event.body || "{}"));
  } catch {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: false, error: "Invalid JSON body" }),
    };
  }

  // Validate
  if (!name || !email || !message) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: false, error: "All fields are required." }),
    };
  }

  if (name.length > 255 || email.length > 255) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: false, error: "Input too long." }),
    };
  }

  // Save to PostgreSQL
  let client;
  try {
    client = await getPool().connect();
    await ensureTable(client);

    const result = await client.query(
      `INSERT INTO contact_messages (name, email, message)
       VALUES ($1, $2, $3)
       RETURNING id, submitted_at`,
      [name, email, message]
    );

    const row = result.rows[0];
    console.log(`📩 Saved message from ${name} (${email}) — ID: ${row.id}`);

    return {
      statusCode: 201,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        success: true,
        message: "Message saved successfully!",
        id: row.id,
        submitted_at: row.submitted_at,
      }),
    };
  } catch (err) {
    console.error("❌ DB error:", err.message);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: false, error: "Failed to save message. Please try again." }),
    };
  } finally {
    if (client) client.release();
  }
};
