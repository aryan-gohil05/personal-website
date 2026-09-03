import BackButton from "@/components/BackButton";
import { getOgImage } from "@/lib/og-image";

const ogImage = getOgImage("/og-image.svg");

export const metadata = {
  title: "All Books | Aryan Gohil",
  description: "A collection of books I've read and recommend.",
  alternates: {
    canonical: "/books",
    languages: {
      "en-GB": "/books",
    },
  },
  openGraph: {
    title: "All Books | Aryan Gohil",
    description: "A collection of books I've read and recommend.",
    type: "website",
    url: "/books",
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
    title: "All Books | Aryan Gohil",
    description: "A collection of books I've read and recommend.",
    site: "@AryanGohil_",
    creator: "@AryanGohil_",
    images: [ogImage],
  },
};

export default function AllBooks() {
  return (
    <main className="relative min-h-screen">
      <div className="absolute top-6 left-6">
        <BackButton returnUrl="/" />
      </div>

      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">All Books</h1>
        <p className="text-lg text-gray-600">
          This page will display all books in the future.
        </p>
      </div>
    </main>
  );
}
