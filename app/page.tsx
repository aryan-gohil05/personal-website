import Image from "next/image";
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
    <main>
      <div>Aryan Gohil</div>
      <div className="fixed bottom-4 left-4">
        <ThemeToggle />
      </div>
    </main>
  );
}
