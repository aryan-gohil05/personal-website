import BlogCard from "../BlogCard";
import { getAllPosts } from "@/lib/posts";

const Blog = async () => {
  const posts = await getAllPosts();

  return (
    <section id="posts" className="scroll-mt-24">
      <h2 className="text-lg md:text-xl font-bold mb-2">Latest Posts</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
        {posts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
