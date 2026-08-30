import LeftBar from "../components/sections/LeftBar";
import StartupShowcase from "../components/sections/StartupShowcase";
import Blog from "../components/sections/Blog";
import WorthYourTime from "../components/sections/WorthYourTime";
import Socials from "../components/Socials";
import ThemeToggle from "../components/ThemeToggle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aryan Gohil | Personal Website | SaaS Startup Founder",
  description:
    "My personal website to show my portfolio of startups, blogs, and content that I recommend.",
  appleWebApp: {
    title: "Aryan Gohil",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-base-300">
      <div className="flex md:flex-row flex-col md:gap-12 px-6 py-2 md:p-14">
        <LeftBar />
        <div className="mt-2 mb-6 border-t border-base-content md:hidden" />
        <section className="min-w-0 flex-1 space-y-12">
          <StartupShowcase />
          <Blog />
          <WorthYourTime />
          <div className="border-t border-base-content pt-8 md:hidden">
            <Socials />
          </div>
          <div className="flex justify-center md:hidden">
            <ThemeToggle />
          </div>
        </section>
      </div>
    </main>
  );
}
