// @ts-ignore
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    pubDate: z.union([z.string().datetime(), z.date()]),
  }),
});

export const collections = { posts };
