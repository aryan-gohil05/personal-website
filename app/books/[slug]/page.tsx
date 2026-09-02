import type { Metadata } from "next";
import ArticleToc from "@/components/InThisArticle";
import BookReviewHeader from "@/components/BookReviewHeader";
import ProgressTracker from "@/components/ProgressTracker";
import ReadNext from "@/components/ReadNext";
import ReadNextBookCard from "@/components/ReadNextBookCard";
import Footer from "@/components/sections/Footer";
import { getAllBooks, getBook, getBookHeadings } from "@/lib/books";
import { getOgImage } from "@/lib/og-image";

export async function generateMetadata({
  params,
}: PageProps<"/books/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await getBook(slug);
  const description = `My review of ${metadata.title} by ${metadata.author}.`;
  const ogImage = getOgImage(metadata.coverImage);

  return {
    title: `${metadata.longTitle} | Aryan Gohil`,
    description,
    alternates: {
      canonical: `/books/${slug}`,
      languages: {
        "en-GB": `/books/${slug}`,
      },
    },
    openGraph: {
      title: metadata.longTitle,
      description,
      type: "article",
      url: `/books/${slug}`,
      siteName: "Aryan Gohil",
      locale: "en-GB",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.longTitle,
      description,
      images: [ogImage],
      site: "@AryanGohil_",
      creator: "@AryanGohil_",
    },
  };
}

export default async function BookReview({
  params,
}: PageProps<"/books/[slug]">) {
  const { slug } = await params;
  const { Content, metadata } = await getBook(slug);
  const headings = getBookHeadings(slug);
  const otherBooks = (await getAllBooks())
    .filter((book) => book.slug !== slug)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-base-300">
      {/* Top section */}
      <ProgressTracker />
      <BookReviewHeader metadata={metadata} />

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 pt-10 md:pt-16 lg:flex lg:max-w-350 lg:items-start lg:gap-12">
        <div className="lg:min-w-0 lg:flex-1 lg:ml-auto lg:max-w-4xl">
          <article>
            <Content />
          </article>
        </div>

        <ArticleToc headings={headings} />
      </div>

      {/* Read Next */}
      {otherBooks.length > 0 && (
        <ReadNext>
          {otherBooks.map((book) => (
            <ReadNextBookCard key={book.slug} {...book} />
          ))}
        </ReadNext>
      )}
      <Footer />
    </main>
  );
}
