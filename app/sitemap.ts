import type { MetadataRoute } from "next";
import { getAllBooks } from "@/lib/books";
import { getAllPosts } from "@/lib/posts";

const BASE_URL = "https://aryangohil.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, books] = await Promise.all([getAllPosts(), getAllBooks()]);

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const bookEntries: MetadataRoute.Sitemap = books.map((book) => ({
    url: `${BASE_URL}/books/${book.slug}`,
    lastModified: book.date,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...postEntries,
    ...bookEntries,
  ];
}