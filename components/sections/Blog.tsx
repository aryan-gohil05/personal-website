import BlogCard from "../BlogCard";
import { getAllPosts } from "@/lib/posts";

const Blog = async () => {
  const posts = await getAllPosts();

  return (
    <section>
      <h2 className="text-xl font-bold mb-2">Latest Posts</h2>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
