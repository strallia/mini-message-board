const { Client } = require("pg");
require("dotenv").config();

const SQL = `
  CREATE TABLE messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    text TEXT,
    name TEXT,
    added TIMESTAMP WITH TIME ZONE DEFAULT NOW()
  );
  
  INSERT INTO messages (text, name)
  VALUES
    ('Hi there!', 'Amando'),
    ('Hello World!', 'Charles');
`;

const seedDB = async () => {
  console.log("seeding db...");
  const client = new Client({
    // Seeds the local database.
    connectionString: process.env.DATABASE_URL,
  });
  try {
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done seeding");
  } catch (e) {
    console.error("Error seeding db:", e);
  }
};

seedDB();
