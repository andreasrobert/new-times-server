import { Pool } from "pg"

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'one2three',
    database: 'pernstack',
    port: 5432,
  });
