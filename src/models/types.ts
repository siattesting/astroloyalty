import type { InferSelectModel } from "drizzle-orm";
import { partners } from "./schema";

export type Partner = InferSelectModel<typeof partners>