const postgres = require("postgres");

// Cache connection across warm invocations
let sql;

function getDb() {
  if (!sql) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error("DATABASE_URL environment variable is not set in Netlify.");
    }
    sql = postgres(connectionString, {
      ssl: "require",   // Supabase requires SSL
      max: 1,           // one connection per function instance
      idle_timeout: 20,
      connect_timeout: 10,
    });
  }
  return sql;
}

exports.handler = async (event) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
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
      headers,
      body: JSON.stringify({ success: false, error: "Invalid request body." }),
    };
  }

  // Validate
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ success: false, error: "All fields are required." }),
    };
  }
  if (name.length > 255 || email.length > 255) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ success: false, error: "Input too long." }),
    };
  }

  try {
    const db = getDb();

    // Ensure table exists
    await db`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id           SERIAL PRIMARY KEY,
        name         VARCHAR(255) NOT NULL,
        email        VARCHAR(255) NOT NULL,
        message      TEXT NOT NULL,
        submitted_at TIMESTAMP DEFAULT NOW()
      )
    `;

    // Insert row
    const [row] = await db`
      INSERT INTO contact_messages (name, email, message)
      VALUES (${name.trim()}, ${email.trim()}, ${message.trim()})
      RETURNING id, submitted_at
    `;

    console.log(`✅ Saved contact from ${name} (${email}) — ID: ${row.id}`);

    return {
      statusCode: 201,
      headers,
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
      headers,
      body: JSON.stringify({
        success: false,
        error: "Database error. Please try again.",
        detail: err.message,   // visible in Netlify function logs
      }),
    };
  }
};
