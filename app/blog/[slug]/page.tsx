import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import ArticleToc from "@/components/InThisArticle";
import Avatar from "@/components/Avatar";
import BlogCard from "@/components/BlogCard";
import CoverImage from "@/components/CoverImage";
import ProgressTracker from "@/components/ProgressTracker";
import ReadNext from "@/components/ReadNext";
import ShareButton from "@/components/ShareButton";
import Footer from "@/components/sections/Footer";
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

      <div className="mx-auto max-w-4xl px-6 pt-12 lg:grid lg:max-w-350 lg:grid-cols-[minmax(0,56rem)_20rem] lg:items-start lg:justify-end lg:gap-x-12">
        <div className="flex items-center justify-between lg:col-start-1">
          <BackButton returnUrl="/#posts" />
          <ShareButton title={metadata.title} />
        </div>

        <article className="lg:contents">
          <div className="mt-10 lg:col-start-1">
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
              {metadata.category}
            </span>
            <h1 className="text-3xl leading-tight font-black text-black/90 dark:text-white md:text-6xl">
              {metadata.title}
            </h1>
            <p className="mt-4 text-lg text-base-content">
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
          </div>

          <CoverImage
            src={metadata.coverImage}
            srcDark={metadata.coverImageDark}
            alt={metadata.title}
            width={1000}
            height={420}
            priority
            className="mt-10 h-auto w-full rounded-xl lg:col-start-1 lg:row-start-3"
          />

          <div className="mt-10 lg:col-start-1">
            <Content />
          </div>
        </article>

        <ArticleToc
          headings={headings}
          topOffsetClassName="lg:col-start-2 lg:row-start-3 lg:row-span-2 lg:mt-10 lg:self-start"
        />
      </div>

      {otherPosts.length > 0 && (
        <ReadNext>
          {otherPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </ReadNext>
      )}
      <Footer />
    </main>
  );
}
