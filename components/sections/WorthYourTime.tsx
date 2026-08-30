import BookCard from "@/components/BookCard";
import { getAllBooks } from "@/lib/books";

const WorthYourTime = async () => {
  const books = await getAllBooks();

  return (
    <section>
      <h2 className="text-lg md:text-xl font-bold mb-2">Worth Your Time</h2>

      <div className="mt-6">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
          Books
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {books.map((book) => (
            <BookCard key={book.slug} {...book} />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
          Watching &amp; Listening
        </h3>
      </div>
    </section>
  );
};

export default WorthYourTime;
