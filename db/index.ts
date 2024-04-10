// import { logger } from "./logger";
import { sql } from "@vercel/postgres";
import postgres from "postgres";
import {
  drizzle as VercelDrizzle,
  type VercelPgDatabase,
} from "drizzle-orm/vercel-postgres";
import {
  drizzle as devDrizzle,
  type PostgresJsDatabase,
} from "drizzle-orm/postgres-js";

export const localDbUrl =
  "postgresql://postgres:postgres@localhost:5432/my-local-db";

let db:
  | VercelPgDatabase<Record<string, never>>
  | PostgresJsDatabase<Record<string, never>>;
if (process.env.VERCEL) {
  db = VercelDrizzle(sql);
} else {
  db = devDrizzle(
    postgres(localDbUrl),
    // { logger }
  );
}

export { db };
