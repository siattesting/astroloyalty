CREATE TABLE `comments` (
	`id` integer PRIMARY KEY NOT NULL,
	`author` text NOT NULL,
	`content` text NOT NULL
);
--> statement-breakpoint
ALTER TABLE `partners` DROP COLUMN `timestamp`;