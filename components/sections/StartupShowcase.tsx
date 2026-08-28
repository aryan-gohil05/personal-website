import Image from "next/image";

export default function StartupShowcase() {
  return (
    <a
      href="https://upvoted.tech"
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-base-300 bg-linear-to-br from-[#65E03D]/5 via-base-100 to-base-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex items-center gap-6">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3">
          <Image
            src="/upvoted_logo.svg"
            alt="Upvoted logo"
            width={48}
            height={48}
            className="h-7/8 w-7/8 object-contain"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-black transition-colors duration-300 group-hover:text-[#65E03D]">
            Upvoted
          </h2>
          <p className="mt-1 text-base-content/70">
            A feedback board where customers upvote on what you should build
            next for your business.
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 shrink-0 text-base-content/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#65E03D]"
        >
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </div>
    </a>
  );
}
