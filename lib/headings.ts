import fs from "fs";
import { slugify } from "./slugify";

export interface Heading {
  text: string;
  slug: string;
}

export function extractHeadings(filePath: string): Heading[] {
  const raw = fs.readFileSync(filePath, "utf-8");
  const matches = raw.matchAll(/^##\s+(.+)$/gm);

  return Array.from(matches).map((match) => {
    const text = match[1].trim();
    return { text, slug: slugify(text) };
  });
}