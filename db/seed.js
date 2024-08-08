const { Client } = require("pg");
require("dotenv").config();

const { HOST, USER, DATABASE, PASSWORD, DB_PORT } = process.env;

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
    host: HOST,
    user: USER,
    database: DATABASE,
    password: PASSWORD,
    port: DB_PORT,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done seeding");
};

seedDB();
