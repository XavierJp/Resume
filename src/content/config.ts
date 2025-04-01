import { defineCollection, z } from "astro:content";

// Define the schema types directly
const experienceSchema = z.object({
  title: z.string(),
  period: z.string(),
  company: z.string(),
  location: z.string(),
  description: z.string(),
  achievements: z.array(z.string()).default([]),
});

const projectSchema = z.object({
  name: z.string(),
  timespan: z.string(),
  tags: z.array(z.string()),
  description: z.string(),
  img: z.string(),
});

const contactSchema = z.object({
  label: z.string(),
  href: z.string(),
});

// Define the complete resume schema
const resumeSchema = z.object({
  intro: z.string(),
  contact: z.object({
    title: z.string(),
    data: z.array(contactSchema),
  }),
  skills: z.object({
    title: z.string(),
    data: z.array(z.string()),
  }),
  education: z.object({
    title: z.string(),
    data: z.array(z.string()),
  }),
  experiences: z.object({
    title: z.string(),
    data: z.array(experienceSchema),
  }),
  projects: z.object({
    title: z.string(),
    data: z.array(projectSchema),
  }),
});

// Define poems collection schema
const poemsSchema = z.object({ haikus: z.array(z.string()) });

const poemsCollection = defineCollection({
  type: "content",
  schema: poemsSchema,
});

// Define collections
const resumeCollection = defineCollection({
  type: "content",
  schema: resumeSchema,
});

// Export collections
export const collections = {
  resume: resumeCollection,
  poems: poemsCollection,
};

// Infer the types from the schema
export type ResumeType = z.infer<typeof resumeSchema>;
export type ExperienceItem = z.infer<typeof experienceSchema>;
export type ProjectItem = z.infer<typeof projectSchema>;
export type ContactItem = z.infer<typeof contactSchema>;
export type PoemsType = z.infer<typeof poemsSchema>;
