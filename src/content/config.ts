import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    excerpt: z.string(),
    publishDate: z.string(),
    category: z.string(),
    readTime: z.string(),
    image: z.string(),
    author: z.object({
      name: z.string(),
      avatar: z.string()
    })
  })
});

export const collections = {
  blog
};