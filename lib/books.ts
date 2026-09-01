import fs from "fs";
import path from "path";
import { cache, type ComponentType } from "react";

const BOOKS_DIR = path.join(process.cwd(), "content/books");

export interface BookMetadata {
  title: string;
  author: string;
  date: string;
  coverImage: string;
  linkToBuy: string;
}

export interface Book extends BookMetadata {
  slug: string;
}

const REQUIRED_FIELDS: (keyof BookMetadata)[] = [
  "title",
  "author",
  "date",
  "coverImage",
  "linkToBuy",
];

function validateBookMetadata(slug: string, metadata: BookMetadata): void {
  for (const field of REQUIRED_FIELDS) {
    if (!metadata[field]) {
      throw new Error(
        `content/books/${slug}.mdx is missing required metadata field "${field}". See content/books/_template.mdx.`,
      );
    }
  }
}

async function importBook(slug: string) {
  const mod: { default: ComponentType; metadata: BookMetadata } =
    await import(`../content/books/${slug}.mdx`);
  validateBookMetadata(slug, mod.metadata);
  return mod;
}

export async function getAllBooks(): Promise<Book[]> {
  const filenames = fs
    .readdirSync(BOOKS_DIR)
    .filter(
      (filename) => filename.endsWith(".mdx") && !filename.startsWith("_"),
    );

  const books = await Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const { metadata } = await importBook(slug);
      return { slug, ...metadata };
    }),
  );

  return books.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const getBook = cache(async (slug: string) => {
  const { default: Content, metadata } = await importBook(slug);
  return { Content, metadata };
});