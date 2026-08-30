import Image from "next/image";

export default function StartupShowcase() {
  return (
    <div id="business" className="scroll-mt-24">
      <h2 className="text-lg md:text-xl font-bold mb-2">My Business</h2>
      <a
        href="https://upvoted.tech"
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-lg border border-base-300 bg-base-100 p-3 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="flex flex-col gap-1 md:gap-4">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="flex h-10 w-10 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3">
              <Image
                src="/upvoted_logo.svg"
                alt="Upvoted logo"
                width={48}
                height={48}
                className="h-3/4 w-3/4 md:h-7/8 md:w-7/8 object-contain"
              />
            </div>
            <h2 className="flex-1 text-lg md:text-2xl font-black transition-colors duration-300 group-hover:text-[#65E03D]">
              Upvoted
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 md:h-6 md:w-6 shrink-0 text-base-content/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#65E03D]"
            >
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </div>
          {/* DESKTOP */}
          <p className="hidden md:block text-sm text-base-content/70 md:line-clamp-none md:text-base">
            Create a feedback board for your business in minutes to let your
            customers upvote on features that matter.
          </p>
          <p className="md:hidden text-sm text-base-content/70">
            A feedback board where customers upvote on what you should build
            next.
          </p>
        </div>
      </a>
    </div>
  );
}
