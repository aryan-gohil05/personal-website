import Link from "next/link";
import BlogIcon from "@/components/BlogIcon";
import CoverImage from "@/components/CoverImage";
import { formatPostDate, type Post } from "@/lib/posts";

type BlogCardProps = Post & {
  cropCoverOnDesktop?: boolean;
};

export default function BlogCard({
  slug,
  title,
  description,
  date,
  category,
  coverImage,
  coverImageDark,
  cropCoverOnDesktop = false,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col gap-1.5 rounded-lg bg-base-100 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <CoverImage
        src={coverImage}
        srcDark={coverImageDark}
        alt={title}
        width={500}
        height={200}
        priority
        className={
          cropCoverOnDesktop
            ? "rounded-lg md:aspect-320/218 md:h-auto md:w-full md:object-cover"
            : "rounded-lg"
        }
      />
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
          {category}
        </span>
        <time dateTime={date} className="text-sm text-base-content/70">
          {formatPostDate(date)}
        </time>
      </div>
      <h2 className="text-lg font-bold transition-colors duration-300 group-hover:text-secondary">
        {title}
      </h2>
      <p className="text-base-content/90">{description}</p>
      <div className="mt-auto">
        <BlogIcon />
      </div>
    </Link>
  );
}
