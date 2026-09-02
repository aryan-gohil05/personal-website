import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/lib/books";

export default function ReadNextBookCard({
  slug,
  title,
  longTitle,
  coverImage,
}: Book) {
  return (
    <Link
      href={`/books/${slug}`}
      className="group flex flex-col items-center rounded-2xl bg-base-200 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <Image
        src={coverImage}
        alt={title}
        width={300}
        height={450}
        className="aspect-2/3 w-32 shrink-0 rounded-lg object-cover shadow-sm"
      />

      <h3 className="mt-4 text-lg font-bold text-black/90 dark:text-white">
        {longTitle}
      </h3>

      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary underline underline-offset-2 group-hover:text-primary/70">
        Read More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
