import Link from "next/link";
import BlogIcon from "@/components/BlogIcon";
import CoverImage from "@/components/CoverImage";
import { formatPostDate, type Post } from "@/lib/posts";

type BlogCardProps = Post;

export default function BlogCard({
  slug,
  title,
  description,
  date,
  category,
  coverImage,
  coverImageDark,
  readTime,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col gap-1.5 rounded-lg bg-base-100 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <span className="w-fit rounded-full bg-secondary/15 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-secondary">
        {category}
      </span>
      <CoverImage
        src={coverImage}
        srcDark={coverImageDark}
        alt={title}
        width={500}
        height={200}
        priority
        className="aspect-320/218 w-full rounded-lg object-cover"
      />
      <div className="flex items-center justify-between">
        <time dateTime={date} className="text-sm text-base-content/70">
          {formatPostDate(date)}
        </time>
        <span className="text-sm text-base-content/70">
          {readTime} min read
        </span>
      </div>
      <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-secondary">
        {title}
      </h3>
      <p className="text-base-content/90">{description}</p>
      <div className="mt-auto">
        <BlogIcon />
      </div>
    </Link>
  );
}
