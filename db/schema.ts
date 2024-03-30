import { pgTable, integer, text, uuid } from "drizzle-orm/pg-core";

export const channels = pgTable("channels", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("full_name").unique().notNull(),
  avatar: text("avatar"),
  activeViewers: integer("active_viewers").notNull(),
});
