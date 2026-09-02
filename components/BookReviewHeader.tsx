import Image from "next/image";
import BackButton from "@/components/BackButton";
import Avatar from "@/components/Avatar";
import ShareButton from "@/components/ShareButton";
import type { BookMetadata } from "@/lib/books";
import { formatDate } from "@/lib/date";
import StarRating from "./StarRating";

type BookReviewHeaderProps = {
  metadata: BookMetadata;
};

const BookReviewHeader = ({ metadata }: BookReviewHeaderProps) => {
  return (
    <div className="mx-auto max-w-360 px-6 pt-12">
      <div className="rounded-3xl bg-base-100/90 p-6 md:p-12">
        <div className="flex items-center justify-between">
          <BackButton returnUrl="/#worth-your-time" />
          <ShareButton title={metadata.longTitle} />
        </div>

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-stretch md:justify-between md:gap-10">
          <div className="flex min-w-0 flex-1 flex-col">
            <h1 className="text-3xl leading-tight font-black text-black/90 dark:text-white md:text-7xl">
              {metadata.longTitle}
            </h1>
            <div className="mt-4 md:mb-8 [&_svg]:h-6 [&_svg]:w-6 md:mt-6 md:[&_svg]:h-8 md:[&_svg]:w-8">
              <StarRating rating={metadata.rating} />
            </div>
            <div className="mt-5 flex items-center gap-2 md:mt-auto">
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

          <a
            href={metadata.linkToBuy}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto flex flex-col items-center gap-2 md:mx-0"
          >
            <Image
              src={metadata.coverImage}
              alt={metadata.title}
              width={270}
              height={430}
            />
            <span className="text-sm font-semibold text-black/90 underline transition-colors duration-200 hover:text-primary hover:no-underline dark:text-white">
              Get the book on Bookshop
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookReviewHeader;
