import type { Metadata } from "next";
import { getPost } from "@/lib/posts";

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await getPost(slug);

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default async function BlogPost({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const { Content, metadata } = await getPost(slug);

  return (
    <article>
      <h1 className="text-3xl font-black">{metadata.title}</h1>
      <p className="mt-2 text-base-content/70">{metadata.description}</p>
      <div className="mt-8">
        <Content />
      </div>
    </article>
  );
}
