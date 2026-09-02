import Image from "next/image";
import BackButton from "@/components/BackButton";
import Avatar from "@/components/Avatar";
import ShareButton from "@/components/ShareButton";
import type { BookMetadata } from "@/lib/books";
import { formatDate } from "@/lib/date";

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

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-10">
          <div className="min-w-0 flex-1">
            <h1 className="text-3xl leading-tight font-black text-black/90 dark:text-white md:text-7xl">
              {metadata.longTitle}
            </h1>

            <div className="mt-4 flex items-center gap-2 md:mt-8">
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
              width={300}
              height={450}
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
