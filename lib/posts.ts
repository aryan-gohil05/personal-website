import fs from "fs";
import path from "path";
import { cache, type ComponentType } from "react";
import { slugify } from "./slugify";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export interface PostMetadata {
  title: string;
  description: string;
  date: string;
  category: string;
  coverImage: string;
  coverImageDark?: string;
}

export interface Post extends PostMetadata {
  slug: string;
}

async function importPost(slug: string) {
  const mod: { default: ComponentType; metadata: PostMetadata } =
    await import(`../content/blog/${slug}.mdx`);
  return mod;
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

export interface PostHeading {
  text: string;
  slug: string;
}

export function getPostHeadings(slug: string): PostHeading[] {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const matches = raw.matchAll(/^##\s+(.+)$/gm);

  return Array.from(matches).map((match) => {
    const text = match[1].trim();
    return { text, slug: slugify(text) };
  });
}

export function formatPostDate(date: string): string {
  return new Date(date).toLocaleDateString("en-GB", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
