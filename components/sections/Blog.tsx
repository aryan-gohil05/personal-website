import BlogCard from "../BlogCard";
import { getAllPosts } from "@/lib/posts";

const Blog = async () => {
  const posts = await getAllPosts();

  return (
    <section>
      <h2 className="text-lg md:text-xl font-bold mb-2">Latest Posts</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} {...post} cropCoverOnDesktop />
        ))}
      </div>
    </section>
  );
};

export default Blog;
