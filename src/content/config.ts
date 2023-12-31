import { z, defineCollection } from "astro:content";

export const collections = {
  recipes: defineCollection({
    schema: z.object({
      draft: z.boolean().default(false),
      title: z.string(),
      related: z.array(z.string()),
      tags: z.array(z.string()),
      allergens: z.array(z.string()),
      image_urls: z.array(z.string().url()),
      introduction: z.string(),
      ingredients: z.array(z.string()),
      prep_time: z.number(),
      cook_time: z.number(),
    }),
  }),
};
