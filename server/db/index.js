import Postgres from "pg";
const { Pool } = Postgres;
import dotenv from "dotenv";
dotenv.config();
/* connect ot db */
const pool = new Pool({
  ssl: {
    require: true,
    rejectUnauthorized: false
  }
});

export default pool;
