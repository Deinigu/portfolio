// src/content/config.ts
import { glob } from "astro/loaders";
import { defineCollection, z, type CollectionKey } from "astro:content";

const baseSchema = ({ image }: any) =>
  z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    tags: z.array(z.string()).optional(),
    collection: z.string().optional(),
    sourceCode: z.string().optional(),
  });

const posts = defineCollection({
  loader: glob({ base: "./src/content/", pattern: "**/**/*.{md,mdx}" }),
  schema: baseSchema,
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: baseSchema,
});

const music = defineCollection({
  loader: glob({ base: "./src/content/music", pattern: "**/*.{md,mdx}" }),
  schema: baseSchema,
});

const games = defineCollection({
  loader: glob({ base: "./src/content/games", pattern: "**/*.{md,mdx}" }),
  schema: baseSchema,
});

export const collectionsKeys: CollectionKey[] = ["music", "games", "projects"];

export const collections = { posts, projects, music, games };
