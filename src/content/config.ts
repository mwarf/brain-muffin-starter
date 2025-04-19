import { defineCollection, z } from 'astro:content';

// Define the schema for the blog collection
const blogCollection = defineCollection({
  type: 'content', // 'content' for markdown/mdx, 'data' for json/yaml
  schema: z.object({
    title: z.string(),
    description: z.string().optional(), // Short summary for previews
    pubDate: z.coerce.date(), // Publication date
    updatedDate: z.coerce.date().optional(), // Optional update date
    heroImage: z.string().optional(), // Optional path to a hero image (e.g., /images/blog/my-post.jpg)
    author: z.string().optional().default('BrainMuffin Team'), // Optional author, defaults to team
    categories: z.array(z.enum(["Industry Trends", "Experiments", "Thoughts", "Project Case Studies"]))
                 .nonempty({ message: "Must have at least one category" }), // Enforce specific categories
    tags: z.array(z.string()).optional(), // Optional freeform tags
    isDraft: z.boolean().default(false), // Mark posts as draft
    isFeatured: z.boolean().default(false), // Mark posts as featured
  }),
});

// Export a single `collections` object to register our collection(s)
export const collections = {
  'blog': blogCollection,
};
