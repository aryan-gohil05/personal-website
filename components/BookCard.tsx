import Image from "next/image";
import Link from "next/link";
import StarRating from "@/components/StarRating";
import type { Book } from "@/lib/books";

export default function BookCard({
  slug,
  title,
  longTitle,
  coverImage,
  rating,
}: Book) {
  return (
    <Link
      href={`/books/${slug}`}
      className="group flex flex-col items-center gap-2 rounded-lg bg-base-100 p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <Image
        src={coverImage}
        alt={title}
        width={300}
        height={450}
        className="aspect-2/3 w-40 shrink-0 rounded-lg object-cover ring-1 ring-base-content/10 sm:w-45"
      />
      <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-secondary">
        {longTitle}
      </h3>
      <StarRating rating={rating} />
    </Link>
  );
}
