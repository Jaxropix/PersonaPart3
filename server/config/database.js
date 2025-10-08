import dotenv from "dotenv";
dotenv.config(); // loads the .env variables

import pg from "pg";

const config = {
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  ssl: { rejectUnauthorized: false }, // required for Render
};

const pool = new pg.Pool(config);

export default pool;
