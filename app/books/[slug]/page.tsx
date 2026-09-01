import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleToc from "@/components/ArticleToc";
import Avatar from "@/components/Avatar";
import ProgressTracker from "@/components/ProgressTracker";
import ShareButton from "@/components/ShareButton";
import ThemeToggle from "@/components/ThemeToggle";
import { formatDate } from "@/lib/date";
import { getBook, getBookHeadings } from "@/lib/books";
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

  return (
    <main className="min-h-screen bg-base-100">
      {/* Top section */}
      <ProgressTracker />

      <div className="mx-auto max-w-7xl px-6 pt-12">
        <div className="rounded-3xl bg-base-300 p-6 md:p-10">
          <div className="flex items-center justify-between">
            <Link
              href="/#worth-your-time"
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
              Back
            </Link>
            <ShareButton title={metadata.title} />
          </div>

          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-10">
            <div className="min-w-0 flex-1">
              <h1 className="text-3xl leading-tight font-black text-black/90 dark:text-white md:text-6xl">
                {metadata.title}
              </h1>

              <div className="mt-4 flex items-center gap-2 md:mt-8">
                <Avatar className="w-8" />
                <span className="text-sm font-semibold text-secondary">
                  Aryan Gohil
                </span>
                <span className="text-sm text-base-content/50">·</span>
                <time
                  dateTime={metadata.date}
                  className="text-sm text-base-content/70"
                >
                  {formatDate(metadata.date)}
                </time>
              </div>
            </div>

            <Image
              src={metadata.coverImage}
              alt={metadata.title}
              width={300}
              height={450}
              priority
              className="aspect-2/3 w-40 shrink-0 mx-auto rounded-lg object-cover ring-1 ring-base-content/10 shadow-sm md:mx-0 md:w-55"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-10 md:pb-16 lg:flex lg:max-w-350 lg:items-start lg:gap-12">
        <div className="lg:min-w-0 lg:flex-1 lg:ml-auto lg:max-w-4xl">
          <article>
            <Content />
          </article>
        </div>

        <ArticleToc headings={headings} />
      </div>

      <div className="flex justify-center pb-10">
        <ThemeToggle />
      </div>
    </main>
  );
}
