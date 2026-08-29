import ProfileCard from "../ProfileCard";
import Socials from "../Socials";
import ThemeToggle from "../ThemeToggle";

const LeftBar = () => {
  return (
    <section className="md:sticky top-20 h-fit w-full md:w-72 lg:w-96 shrink-0 noscrollbar">
      <div className="flex flex-col items-start space-y-4 rounded-lg pt-6 pb-2 md:px-6">
        <ProfileCard />
        <p className="mt-2 md:mt-4 text-base-content text-sm md:text-base">
          Hi, I build and ship SaaS businesses, including the one I&apos;m
          running right now.
        </p>
        <p className="text-base-content md:mb-8 italic text-sm md:text-base">
          This is where I write about my experiences and share content that I
          find useful.
        </p>
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
