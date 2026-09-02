import fs from "fs";
import path from "path";
import { cache, type ComponentType } from "react";
import { z } from "zod";
import { extractHeadings, type Heading } from "./headings";

const BOOKS_DIR = path.join(process.cwd(), "content/books");

export const bookMetadataSchema = z.object({
  title: z.string().min(1, "title is required"),
  longTitle: z.string().min(1, "longTitle is required"),
  author: z.string().min(1, "author is required"),
  date: z.iso.date("date must be in YYYY-MM-DD format"),
  coverImage: z.string().min(1, "coverImage is required"),
  linkToBuy: z.url("linkToBuy must be a valid URL"),
  rating: z
    .number()
    .int("rating must be a whole number")
    .min(1, "rating must be between 1 and 5")
    .max(5, "rating must be between 1 and 5"),
});

export type BookMetadata = z.infer<typeof bookMetadataSchema>;

export interface Book extends BookMetadata {
  slug: string;
}

function parseBookMetadata(slug: string, metadata: unknown): BookMetadata {
  const result = bookMetadataSchema.safeParse(metadata);

  if (!result.success) {
    const issues = result.error.issues
      .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
      .join(", ");
    throw new Error(
      `content/books/${slug}.mdx has invalid metadata (${issues}). See content/books/_template.mdx.`,
    );
  }

  return result.data;
}

async function importBook(slug: string) {
  const mod: { default: ComponentType; metadata: unknown } = await import(
    `../content/books/${slug}.mdx`
  );
  const metadata = parseBookMetadata(slug, mod.metadata);
  return { default: mod.default, metadata };
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

export type BookHeading = Heading;

export function getBookHeadings(slug: string): BookHeading[] {
  return extractHeadings(path.join(BOOKS_DIR, `${slug}.mdx`));
}