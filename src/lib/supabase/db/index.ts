import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as env from "dotenv";
import * as schema from "@/../migrations/schema";
import { migrate } from "drizzle-orm/postgres-js/migrator";

env.config({
  path: ".env",
});

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not defined");
}

const client = postgres(process.env.DATABASE_URL!, { max: 1 });
const db = drizzle(client, { schema });

const migrateDb = async () => {
  try {
    console.log("start Migration....");
    await migrate(db, { migrationsFolder: "./migrations" });
    console.log("end Migration....");
  } catch {
    console.error("Fail Migration");
  }
};

migrateDb();
export default db;
