import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  dialect: "sqlite",
  schema: "./src/models/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.NODE_ENV === 'production' ? '/data/db.sqlite3' : './db.sqlite3',
    // url: './db.sqlite3'

  }
})