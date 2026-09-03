import fs from "fs";
import path from "path";
import { cache, type ComponentType } from "react";
import { z } from "zod";
import { formatDate } from "./date";
import { extractHeadings, type Heading } from "./headings";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export const postMetadataSchema = z.object({
  title: z.string().min(1, "title is required"),
  description: z.string().min(1, "description is required"),
  date: z.iso.date("date must be in YYYY-MM-DD format"),
  category: z.string().min(1, "category is required"),
  coverImage: z.string().min(1, "coverImage is required"),
  coverImageDark: z.string().min(1).optional(),
  readTime: z.number().int("readTime must be a whole number").positive(),
});

export type PostMetadata = z.infer<typeof postMetadataSchema>;

export interface Post extends PostMetadata {
  slug: string;
}

function parsePostMetadata(slug: string, metadata: unknown): PostMetadata {
  const result = postMetadataSchema.safeParse(metadata);

  if (!result.success) {
    const issues = result.error.issues
      .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
      .join(", ");
    throw new Error(
      `content/blog/${slug}.mdx has invalid metadata (${issues}).`,
    );
  }

  return result.data;
}

async function importPost(slug: string) {
  const mod: { default: ComponentType; metadata: unknown } = await import(
    `../content/blog/${slug}.mdx`
  );
  const metadata = parsePostMetadata(slug, mod.metadata);
  return { default: mod.default, metadata };
}

export async function getAllPosts(): Promise<Post[]> {
  const filenames = fs
    .readdirSync(POSTS_DIR)
    .filter((filename) => filename.endsWith(".mdx"));

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const { metadata } = await importPost(slug);
      return { slug, ...metadata };
    }),
  );

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const getPost = cache(async (slug: string) => {
  const { default: Content, metadata } = await importPost(slug);
  return { Content, metadata };
});

export type PostHeading = Heading;

export function getPostHeadings(slug: string): PostHeading[] {
  return extractHeadings(path.join(POSTS_DIR, `${slug}.mdx`));
}

export const formatPostDate = formatDate;