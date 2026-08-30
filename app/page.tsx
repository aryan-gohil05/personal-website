import LeftBar from "../components/sections/LeftBar";
import StartupShowcase from "../components/sections/StartupShowcase";
import Blog from "../components/sections/Blog";
import WorthYourTime from "../components/sections/WorthYourTime";
import Socials from "../components/Socials";
import type { Metadata } from "next";

const metaTitle = "Aryan Gohil | Personal Website | SaaS Founder";

const metaDescription =
  "My personal website featuring my portfolio of SaaS startups, blog posts on business, mindset, anything I find interesting, and content I recommend.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: {
    canonical: "/",
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
        url: "/og-image.png",
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
    images: ["/og-image.png"],
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
          <div className="border-t border-base-content py-8 md:hidden">
            <Socials />
          </div>
        </section>
      </div>
    </main>
  );
}
