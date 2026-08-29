import BlogCard from "../BlogCard";

const Blog = () => {
  return (
    <section>
      <h2 className="text-xl font-bold mb-2">Latest Posts</h2>
      <div className="grid grid-cols-3 space-x-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

export default Blog;
