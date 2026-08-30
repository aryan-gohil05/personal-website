import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProgressTracker from "@/components/ProgressTracker";
import ShareButton from "@/components/ShareButton";
import ThemeToggle from "@/components/ThemeToggle";
import { formatDate } from "@/lib/date";
import { getBook } from "@/lib/books";

export async function generateMetadata({
  params,
}: PageProps<"/books/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await getBook(slug);
  const description = `My review of ${metadata.title} by ${metadata.author}.`;

  return {
    title: `${metadata.title} | Aryan Gohil`,
    description,
    openGraph: {
      title: metadata.title,
      description,
      type: "article",
      url: `/books/${slug}`,
      siteName: "Aryan Gohil",
      locale: "en-GB",
      images: [metadata.coverImage],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description,
      images: [metadata.coverImage],
    },
  };
}

export default async function BookReview({
  params,
}: PageProps<"/books/[slug]">) {
  const { slug } = await params;
  const { Content, metadata } = await getBook(slug);

  return (
    <main className="min-h-screen bg-base-300">
      <ProgressTracker />

      <div className="mx-auto max-w-3xl px-6 py-10 md:pb-16 pt-12">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-base-content/70 hover:text-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            Home
          </Link>
          <ShareButton title={metadata.title} />
        </div>

        <article className="mt-10">
          <div className="flex gap-6">
            <Image
              src={metadata.coverImage}
              alt={metadata.title}
              width={300}
              height={450}
              priority
              className="aspect-2/3 w-28 shrink-0 rounded-lg object-cover ring-1 ring-base-content/10 shadow-sm md:w-40"
            />
            <div className="min-w-0">
              <h1 className="text-2xl font-black md:text-4xl">
                {metadata.title}
              </h1>
              <p className="mt-1 text-base-content/70">{metadata.author}</p>
              <time
                dateTime={metadata.date}
                className="mt-1 block text-sm text-base-content/50"
              >
                {formatDate(metadata.date)}
              </time>
              <a
                href={metadata.externalReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                Also see my review on Goodreads
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-10">
            <Content />
          </div>
        </article>
      </div>

      <div className="flex justify-center pb-10">
        <ThemeToggle />
      </div>
    </main>
  );
}