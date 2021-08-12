import { Pool } from "pg";
import dotenv from 'dotenv';

dotenv.config();


const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const proConfig = process.env.DATABASE_URL;

export const pool = new Pool ({
  // connectionString: process.env.NODE_ENV === "production" ? proConfig : devConfig
  connectionString: process.env.DATABASE_URL,
  ssl: true,

})




// const devConfig = {
//   user: process.env.PG_USER,
//   host: process.env.PG_HOST,
//   password: process.env.PG_PASSWORD,
//   database: process.env.PG_DATABASE,
//   port: Number(process.env.PG_DATABASE),
// };

// const proConfig = {
//   connectionString: process.env.DATABSE_URL,
// };

// export const pool = new Pool(
//   process.env.NODE_ENV === "production" ? proConfig : devConfig
// );


// export const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     password: "one2three",
//     database: "pernstack",
//     port: 5432,
//   });

// export const pool = new Pool({
//   user: process.env.PG_USER,
//   host: process.env.PG_HOST,
//   password: process.env.PG_PASSWORD,
//   database: process.env.PG_DATABASE,
//   port: Number(process.env.PG_DATABASE),
// });

