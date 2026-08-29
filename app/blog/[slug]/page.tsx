import type { Metadata } from "next";
import Link from "next/link";
import Avatar from "@/components/Avatar";
import BlogCard from "@/components/BlogCard";
import CoverImage from "@/components/CoverImage";
import ScrollProgress from "@/components/ScrollProgress";
import ThemeToggle from "@/components/ThemeToggle";
import { formatPostDate, getAllPosts, getPost } from "@/lib/posts";

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await getPost(slug);

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default async function BlogPost({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const { Content, metadata } = await getPost(slug);
  const otherPosts = (await getAllPosts())
    .filter((post) => post.slug !== slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-base-300">
      <ScrollProgress />
      <ThemeToggle />

      <div className="mx-auto max-w-3xl px-6 py-10 md:pb-16 pt-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-base-content/70 hover:text-primary"
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

        <article className="mt-10">
          <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
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
            <span className="text-sm font-semibold text-base-content">
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
            className="mt-10 w-full rounded-xl"
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
    </main>
  );
}
