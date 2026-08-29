import Image from "next/image";
import Link from "next/link";
import BlogIcon from "@/components/BlogIcon";
import type { Post } from "@/lib/posts";

export default function BlogCard({
  slug,
  title,
  description,
  date,
  category,
  coverImage,
  coverImageDark,
}: Post) {
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${slug}`}
      className="flex flex-col gap-1.5 rounded-lg bg-base-100 p-4 ring-1 ring-base-content/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {coverImageDark ? (
        <>
          <Image
            src={coverImage}
            alt={title}
            width={500}
            height={200}
            loading="eager"
            className="rounded-lg dark:hidden"
          />
          <Image
            src={coverImageDark}
            alt={title}
            width={500}
            height={200}
            loading="eager"
            className="hidden rounded-lg dark:block"
          />
        </>
      ) : (
        <Image
          src={coverImage}
          alt={title}
          width={500}
          height={200}
          loading="eager"
          className="rounded-lg"
        />
      )}
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
          {category}
        </span>
        <time dateTime={date} className="text-sm text-base-content/70">
          {formattedDate}
        </time>
      </div>
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-base-content/90">{description}</p>
      <BlogIcon />
    </Link>
  );
}
