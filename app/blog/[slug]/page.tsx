import type { Metadata } from "next";
import Link from "next/link";
import ArticleToc from "@/components/ArticleToc";
import Avatar from "@/components/Avatar";
import BlogCard from "@/components/BlogCard";
import CoverImage from "@/components/CoverImage";
import ProgressTracker from "@/components/ProgressTracker";
import ShareButton from "@/components/ShareButton";
import ThemeToggle from "@/components/ThemeToggle";
import { getOgImage } from "@/lib/og-image";
import {
  formatPostDate,
  getAllPosts,
  getPost,
  getPostHeadings,
} from "@/lib/posts";

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await getPost(slug);
  const ogImage = getOgImage(metadata.coverImage);

  return {
    title: `${metadata.title} | Aryan Gohil`,
    description: metadata.description,
    alternates: {
      canonical: `/blog/${slug}`,
      languages: {
        "en-GB": `/blog/${slug}`,
      },
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: "article",
      url: `/blog/${slug}`,
      siteName: "Aryan Gohil",
      locale: "en-GB",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [ogImage],
      site: "@AryanGohil_",
      creator: "@AryanGohil_",
    },
  };
}

export default async function BlogPost({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const { Content, metadata } = await getPost(slug);
  const otherPosts = (await getAllPosts())
    .filter((post) => post.slug !== slug)
    .slice(0, 2);
  const headings = getPostHeadings(slug);

  return (
    <main className="min-h-screen bg-base-300">
      <ProgressTracker />

      <div className="mx-auto max-w-4xl px-6 py-10 md:pb-16 pt-12 lg:flex lg:max-w-7xl lg:items-start lg:gap-12">
        <div className="lg:min-w-0 lg:flex-1 lg:ml-auto lg:max-w-3xl">
          <div className="flex items-center justify-between">
            <Link
              href="/#posts"
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

          <article className="mt-10">
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
              {metadata.category}
            </span>
            <h1 className="mt-2 text-3xl font-black md:text-5xl">
              {metadata.title}
            </h1>
            <p className="mt-4 text-lg text-base-content/70">
              {metadata.description}
            </p>

            <div className="mt-6 flex items-center gap-2">
              <Avatar className="w-8" />
              <span className="text-sm font-semibold text-secondary">
                Aryan Gohil
              </span>
              <span className="text-sm text-base-content/50">·</span>
              <time
                dateTime={metadata.date}
                className="text-sm text-base-content/70"
              >
                {formatPostDate(metadata.date)}
              </time>
            </div>

            <CoverImage
              src={metadata.coverImage}
              srcDark={metadata.coverImageDark}
              alt={metadata.title}
              width={1000}
              height={420}
              priority
              className="mt-10 h-auto w-full rounded-xl"
            />

            <div className="mt-10">
              <Content />
            </div>
          </article>

          {otherPosts.length > 0 && (
            <div className="mt-16 border-t border-base-content/10 pt-8">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
                Keep Reading
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                {otherPosts.map((post) => (
                  <BlogCard key={post.slug} {...post} />
                ))}
              </div>
            </div>
          )}
        </div>

        <ArticleToc headings={headings} />
      </div>

      <div className="flex justify-center pb-10">
        <ThemeToggle />
      </div>
    </main>
  );
}
