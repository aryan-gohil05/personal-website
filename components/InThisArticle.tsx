import type { Heading } from "@/lib/headings";

type ArticleTocProps = {
  headings: Heading[];
};

export default function inThisArticle({ headings }: ArticleTocProps) {
  if (headings.length === 0) return null;

  return (
    <aside className="hidden lg:sticky lg:top-40 lg:mt-28 lg:block lg:w-80 lg:shrink-0">
      <div className="border-l pl-4 text-base-300">
        <h2 className="text-lg font-semibold text-black/90 dark:text-white">
          In this article:
        </h2>
        <ul className="mt-4 space-y-4">
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
                  className="h-5 w-5 shrink-0 text-primary transition-transform duration-200 group-hover:translate-x-1 group-hover:scale-110"
                >
                  <path d="m9 6 6 6-6 6" />
                </svg>
                <span className="text-sm md:text-base text-base-content/70 transition-colors duration-200 group-hover:text-black dark:group-hover:text-white">
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
