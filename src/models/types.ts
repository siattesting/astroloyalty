import type { InferSelectModel } from "drizzle-orm";
import { comments, partners } from "./schema";

export type Partner = InferSelectModel<typeof partners>
export type Comment = InferSelectModel<typeof comments>;
