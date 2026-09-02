import type { Metadata } from "next";
import ArticleToc from "@/components/InThisArticle";
import BookReviewHeader from "@/components/BookReviewHeader";
import ReadNextBookCard from "@/components/ReadNextBookCard";
import ProgressTracker from "@/components/ProgressTracker";
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
    title: `${metadata.title} | Aryan Gohil`,
    description,
    alternates: {
      canonical: `/books/${slug}`,
      languages: {
        "en-GB": `/books/${slug}`,
      },
    },
    openGraph: {
      title: metadata.title,
      description,
      type: "article",
      url: `/books/${slug}`,
      siteName: "Aryan Gohil",
      locale: "en-GB",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
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
        <div className="mx-auto max-w-4xl px-6 pb-10 md:pb-16 lg:flex lg:max-w-350 lg:gap-12">
          <div className="lg:min-w-0 lg:flex-1 lg:ml-auto lg:max-w-4xl">
            <div className="mt-16 border-t border-base-content/10 pt-8">
              <h2 className="text-2xl font-semibold text-black/90 dark:text-white md:text-3xl">
                Read Next
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {otherBooks.map((book) => (
                  <ReadNextBookCard key={book.slug} {...book} />
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:w-80 lg:shrink-0" />
        </div>
      )}
      <Footer />
    </main>
  );
}
