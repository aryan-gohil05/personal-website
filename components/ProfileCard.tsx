import Avatar from "./Avatar";

export default function ProfileCard() {
  return (
    <div className="flex w-full flex-row md:flex-col gap-3">
      <div className="relative self-start md:mb-5">
        <Avatar className="w-26 md:w-48" priority />
      </div>
      <div className="w-full text-left">
        <h1 className="text-3xl md:text-4xl font-black">Aryan Gohil</h1>
        <div className="mt-2 md:mt-4 flex flex-col md:flex-row w-full items-start md:items-center gap-2 md:gap-6 text-base-content/90">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 shrink-0 text-secondary"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p className="text-sm md:text-base">UK</p>
          </div>
          <div className="flex items-center gap-1.5 py-1 md:pl-2 pr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4 shrink-0 text-secondary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              />
            </svg>
            <p className="text-sm md:text-base whitespace-nowrap">
              Founder of{" "}
              <a
                href="https://upvoted.tech"
                className="underline-offset-2 hover:text-[#65E03D] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Upvoted
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
