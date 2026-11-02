import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/work' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    kicker: z.string(),
    lead: z.string(),
    description: z.string(),
    facts: z.array(z.object({ label: z.string(), value: z.string() })),
    figureCaption: z.string(),
    resultHeading: z.string(),
    stats: z.array(z.object({ value: z.string(), caption: z.string(), hot: z.boolean().default(false) })),
    ctaTitle: z.string(),
    tags: z.array(z.string()),
    home: z.object({ label: z.string(), title: z.string(), text: z.string() }),
    list: z.object({ label: z.string(), title: z.string(), dates: z.string(), text: z.string() }),
  }),
});

export const collections = { work };
