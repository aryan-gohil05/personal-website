import BackButton from "@/components/BackButton";
import { getOgImage } from "@/lib/og-image";

const ogImage = getOgImage("/og-image.svg");

export const metadata = {
  title: "All Blog Posts | Aryan Gohil",
  description: "A collection of my blog posts.",
  alternates: {
    canonical: "/blog",
    languages: {
      "en-GB": "/blog",
    },
  },
  openGraph: {
    title: "All Blog Posts | Aryan Gohil",
    description: "A collection of my blog posts.",
    type: "website",
    url: "/blog",
    siteName: "Aryan Gohil",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Blog Posts | Aryan Gohil",
    description: "A collection of my blog posts.",
    site: "@AryanGohil_",
    creator: "@AryanGohil_",
    images: [ogImage],
  },
};

export default function AllBlogPosts() {
  return (
    <main className="relative min-h-screen">
      <div className="absolute top-6 left-6">
        <BackButton returnUrl="/" />
      </div>

      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">All Blog Posts</h1>
        <p className="text-lg text-gray-600">
          This page will display all blog posts in the future.
        </p>
      </div>
    </main>
  );
}
