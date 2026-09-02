import type { Heading } from "@/lib/headings";

type ArticleTocProps = {
  headings: Heading[];
  topOffsetClassName?: string;
};

export default function inThisArticle({
  headings,
  topOffsetClassName = "lg:mt-28",
}: ArticleTocProps) {
  if (headings.length === 0) return null;

  return (
    <aside
      className={`lg:sticky lg:top-40 lg:w-80 lg:shrink-0 ${topOffsetClassName}`}
    >
      <div className="border-l pl-3 text-base-300 lg:pl-4">
        <h2 className="text-base font-semibold text-black/90 dark:text-white lg:text-lg">
          In this article:
        </h2>
        <ul className="mt-3 space-y-2 lg:mt-4 lg:space-y-4">
          {headings.map((heading, index) => (
            <li key={heading.slug}>
              <a
                href={`#${heading.slug}`}
                className="group flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 shrink-0 text-primary transition-transform duration-200 group-hover:translate-x-1 group-hover:scale-110 lg:h-5 lg:w-5"
                >
                  <path d="m9 6 6 6-6 6" />
                </svg>
                <span className="text-base text-base-content/70 transition-colors duration-200 group-hover:text-black dark:group-hover:text-white">
                  {index + 1}) {heading.text}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
