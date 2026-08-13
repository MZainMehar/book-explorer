import BookCard from "./BookCard";

export default function BookGrid({ books }) {
  if (!books.length) {
    return (
      <div className="rounded-xl border border-dashed border-stone-300 bg-white px-6 py-16 text-center">
        <h3 className="text-lg font-semibold text-stone-900">No books found</h3>

        <p className="mt-2 text-sm text-stone-500">
          Try searching for another title or author.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
