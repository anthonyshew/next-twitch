"use server";

import { seedDb } from "#scripts/seed.ts";

export async function seedDatabase() {
  await seedDb();
  return "Database seeded. 🌱";
}
