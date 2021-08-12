import { Pool } from "pg";

// export const pool = new Pool({
//     user: process.env.PG_USER,
//     host: process.env.PG_HOST,
//     password: process.env.PG_PASSWORD,
//     database: process.env.PG_DATABASE,
//     port: 5432,
//   });

const devConfig = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: 5432,
};

const proConfig = {
  connectionString: process.env.DATABSE_URL,
};

export const pool = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);
