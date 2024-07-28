import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const partners = sqliteTable('partners', {
    id: integer('id', { mode: 'number'}).primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    description: text('description').notNull(),
    // createdAT: integer('createdAT', { mode: 'timestamp_ms' }).notNull(),
    // timestamp: text("timestamp").default(sql`(CURRENT_TIMESTAMP)`),

})

export const comments = sqliteTable('comments', {
    id: integer('id').primaryKey(),
    author: text('author').notNull(),
    content: text('content').notNull()
});