import ThemeToggle from "../components/ThemeToggle";
import LeftBar from "../components/sections/LeftBar";
import StartupShowcase from "../components/sections/StartupShowcase";
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
    <main className="min-h-screen bg-secondary/5">
      <section className="flex gap-12 p-14">
        <LeftBar />
        <section className="flex-1 space-y-6">
          <StartupShowcase />
          <div>
            <h2 className="text-xl font-bold">Content block 2</h2>
            <p>Template text goes here.</p>
          </div>
        </section>
      </section>
    </main>
  );
}
