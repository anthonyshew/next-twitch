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

import "dotenv/config";

let db:
  | VercelPgDatabase<Record<string, never>>
  | PostgresJsDatabase<Record<string, never>>;
if (process.env.VERCEL_ENV === "production") {
  db = VercelDrizzle(sql);
} else {
  // db = devDrizzle(postgres(process.env.POSTGRES_URL as string));
  db = devDrizzle(
    postgres(
      "postgresql://postgres:postgres@localhost:5432/my-local-db" as string,
    ),
  );
}

export { db };
