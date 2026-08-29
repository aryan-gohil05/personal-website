import Image from "next/image";
import BlogIcon from "@/components/BlogIcon";

export default function BlogCard() {
  return (
    <div className="flex flex-col gap-1.5 rounded-lg bg-base-100 p-4 ring-1 ring-base-content/10 hover:ring-primary/20 transition-all duration-200">
      <Image
        src="/cover_images/first-saas.png"
        alt="Blog Cover Image"
        width={500}
        height={200}
        className="rounded-lg"
      />
      <time dateTime="2023-01-01" className="text-sm text-base-content/70">
        Aug 29, 2026
      </time>
      <h2 className="text-lg font-bold">
        How I launched my first SaaS in 3 months
      </h2>
      <p className="text-base-content/90">
        I learnt more about computer science than my degree ever taught me.
      </p>
      <BlogIcon />
    </div>
  );
}
