import LeftBar from "../components/sections/LeftBar";
import Blog from "../components/sections/Blog";
import WorthYourTime from "../components/sections/WorthYourTime";
import Socials from "../components/Socials";
import type { Metadata } from "next";
import { getOgImage } from "@/lib/og-image";

const metaTitle = "Aryan Gohil | SaaS Founder & Software Engineer";

const metaDescription =
  "Hi, I'm Aryan, a SaaS founder sharing my journey building and scaling startups, plus blog posts, book recommendations, and other content worth your time.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": "/",
    },
  },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: "website",
    url: "/",
    siteName: "Aryan Gohil",
    locale: "en-GB",
    images: [
      {
        url: getOgImage("/og-image.svg"),
        width: 1200,
        height: 630,
        alt: metaTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    creator: "@AryanGohil_",
    site: "@AryanGohil_",
    images: [getOgImage("/og-image.svg")],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-base-300">
      <div className="mx-auto flex max-w-384 md:flex-row flex-col md:gap-16 px-6 py-2 md:p-14">
        <LeftBar />
        <div className="mt-2 mb-6 border-t border-base-content md:hidden" />
        <section className="min-w-0 flex-1 space-y-12">
          <Blog />
          <WorthYourTime />
          <div className="border-t border-base-content py-8 md:hidden">
            <Socials />
          </div>
        </section>
      </div>
    </main>
  );
}
