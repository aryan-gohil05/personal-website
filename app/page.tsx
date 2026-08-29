import LeftBar from "../components/sections/LeftBar";
import StartupShowcase from "../components/sections/StartupShowcase";
import Socials from "../components/Socials";
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
      <div className="flex md:flex-row flex-col md:gap-12 p-2 md:p-14">
        <LeftBar />
        <div className="mx-auto mt-2 mb-6 w-7/8 border-t border-base-content md:hidden" />
        <section className="space-y-18">
          <StartupShowcase />
          <div>
            <h2 className="text-xl font-bold">Thoughts</h2>
          </div>
          <div>
            <h2 className="text-xl font-bold">Worth Your Time</h2>
          </div>
          <div className="mx-auto w-7/8 border-t border-base-content pt-8 md:hidden">
            <Socials />
          </div>
        </section>
      </div>
    </main>
  );
}
