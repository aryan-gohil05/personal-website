import Image from "next/image";
import ProfileCard from "../ProfileCard";
import Socials from "../Socials";
import ThemeToggle from "../ThemeToggle";
import HamburgerIcon from "../HamburgerIcon";

const STARTUPS = [
  {
    name: "Upvoted",
    url: "https://upvoted.tech",
    logo: "/upvoted_logo.svg",
  },
];

const LeftBar = () => {
  return (
    <section className="md:sticky top-30 h-fit w-full md:w-72 lg:w-96 shrink-0 noscrollbar">
      <div className="flex flex-col items-start space-y-4 rounded-lg pt-6 pb-2 md:px-6">
        <div className="flex w-full items-start justify-between gap-2">
          <ProfileCard />
          <HamburgerIcon />
        </div>
        <div className="flex flex-col gap-2">
          <p className="mt-2 text-base-content text-sm md:mt-4 md:text-base">
            Hi, I build and ship SaaS businesses, including the one I&apos;m
            running right now.
          </p>
          <p className="text-base-content italic text-sm md:text-base">
            This is where I write about my experiences and share content that I
            find useful.
          </p>
        </div>
        <div className="flex w-full flex-col gap-2 rounded-lg bg-base-200/60 p-3 md:mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-secondary">
            Building
          </h2>
          {STARTUPS.map((startup) => (
            <a
              key={startup.name}
              href={startup.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-base-content/90 transition-colors duration-200 hover:text-secondary md:text-base"
            >
              <Image
                src={startup.logo}
                alt=""
                width={20}
                height={20}
                className="h-5 w-5 shrink-0 object-contain"
              />
              <span className="font-semibold">{startup.name}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5 shrink-0 text-base-content/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-secondary"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          ))}
        </div>
        <div className="hidden md:block border-t border-base-content pt-8 md:w-full">
          <Socials />
        </div>
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </div>
    </section>
  );
};

export default LeftBar;
