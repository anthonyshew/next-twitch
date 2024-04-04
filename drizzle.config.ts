import type { Config } from "drizzle-kit";
import { localDbUrl } from "#db/index.ts";

export default {
  schema: "./db/schema.ts",
  out: "./db/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.VERCEL
      ? (process.env.POSTGRES_URL as string)
      : localDbUrl,
  },
} satisfies Config;
