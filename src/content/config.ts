import { z } from "astro:content";

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
export const resumeSchema = z.object({
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

// Infer the types from the schema
export type ResumeType = z.infer<typeof resumeSchema>;

// Helper types for specific sections
export type ExperienceItem = z.infer<typeof experienceSchema>;
export type ProjectItem = z.infer<typeof projectSchema>;
export type ContactItem = z.infer<typeof contactSchema>;
