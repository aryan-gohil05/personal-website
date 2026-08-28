import ThemeToggle from "../components/ThemeToggle";
import LeftBar from "../components/sections/LeftBar";
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
    <main>
      <section className="flex gap-14 p-14">
        <LeftBar />
        <section className="flex-1 space-y-6">
          <div>
            <h2 className="text-xl font-bold">Content block 1</h2>
            <p>Template text goes here.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Content block 2</h2>
            <p>Template text goes here.</p>
          </div>
        </section>
      </section>
      <ThemeToggle />
    </main>
  );
}
