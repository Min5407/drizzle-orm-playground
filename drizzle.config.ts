import type { Config } from "drizzle-kit";
import * as env from "dotenv";

env.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not defined");
}

export default {
  dialect: "postgresql",
  schema: "./src/lib/supabase/schema/index.ts",
  out: "./migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
