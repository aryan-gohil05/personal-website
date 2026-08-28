import ProfileCard from "../ProfileCard";
import Socials from "../Socials";
import ThemeToggle from "../ThemeToggle";

const LeftBar = () => {
  return (
    <section className="sticky top-6 h-fit w-96 shrink-0 noscrollbar">
      <div className="flex flex-col items-start space-y-4 rounded-lg p-6">
        <ProfileCard />
        <p className="mt-6 text-base-content">
          Hi, I build and ship SaaS businesses, including the one I&apos;m
          running right now.
        </p>
        <p className="text-base-content mb-8 italic">
          This is where I write about my experiences and share content that I
          find useful.
        </p>
        <div className="border-t border-base-content w-full pt-8">
          <Socials />
        </div>
        <ThemeToggle />
      </div>
    </section>
  );
};

export default LeftBar;
