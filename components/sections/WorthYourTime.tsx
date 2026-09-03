import BookCard from "@/components/BookCard";
import { getAllBooks } from "@/lib/books";
import ViewAllButton from "@/components/ViewAllButton";

const WorthYourTime = async () => {
  const books = await getAllBooks();

  return (
    <section id="worth-your-time" className="scroll-mt-24">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg md:text-xl font-bold mb-2">Book Reviews</h2>
        <ViewAllButton url="/books" />
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
        {books.map((book) => (
          <BookCard key={book.slug} {...book} />
        ))}
      </div>

      {/* 
      <div className="mt-8">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
          Watching &amp; Listening
        </h3>
        <h4 className="mt-4 text-sm text-base-content/60">
          I&apos;m currently working on a list of podcasts, YouTube channels,
          and other content that I recommend.
        </h4>
      </div>
      */}
    </section>
  );
};

export default WorthYourTime;
