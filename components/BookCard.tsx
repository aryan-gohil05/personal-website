import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/lib/books";

export default function BookCard({ slug, title, author, coverImage }: Book) {
  return (
    <Link
      href={`/books/${slug}`}
      className="group block transition-all duration-300 hover:-translate-y-1"
    >
      <Image
        src={coverImage}
        alt={title}
        width={300}
        height={450}
        className="aspect-2/3 w-full rounded-lg object-cover ring-1 ring-base-content/10 shadow-sm transition-all duration-300 group-hover:shadow-xl"
      />
      <h3 className="mt-2 line-clamp-2 text-sm font-bold">{title}</h3>
      <p className="text-xs text-base-content/60">{author}</p>
    </Link>
  );
}