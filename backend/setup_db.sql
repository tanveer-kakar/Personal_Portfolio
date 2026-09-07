-- Run this script in pgAdmin Query Tool
-- Step 1: Create the database (run this connected to 'postgres' maintenance db)
CREATE DATABASE portfolio_db;

-- Step 2: Connect to portfolio_db, then run the below:
-- (In pgAdmin: right-click portfolio_db > Query Tool, then run below)

CREATE TABLE IF NOT EXISTS contact_messages (
  id           SERIAL PRIMARY KEY,
  name         VARCHAR(255) NOT NULL,
  email        VARCHAR(255) NOT NULL,
  message      TEXT NOT NULL,
  submitted_at TIMESTAMP DEFAULT NOW()
);

-- Optional: verify table was created
SELECT * FROM contact_messages;
