import fs from "fs";
import path from "path";
import { cache, type ComponentType } from "react";
import { formatDate } from "./date";
import { extractHeadings, type Heading } from "./headings";

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
  const mod: { default: ComponentType; metadata: PostMetadata } = await import(
    `../content/blog/${slug}.mdx`
  );
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

export type PostHeading = Heading;

export function getPostHeadings(slug: string): PostHeading[] {
  return extractHeadings(path.join(POSTS_DIR, `${slug}.mdx`));
}

export const formatPostDate = formatDate;
