import BookGrid from "@/components/books/BookGrid";
import BookGridSkeleton from "@/components/books/BookGridSkeleton";

export default function BookSection({ books, loading, error, query }) {
  return (
    <section
      id="explore"
      className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16"
    >
      <div className="mb-8">
        <div className="h-1 w-10 rounded-full bg-amber-500" />

        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-900">
          {query ? `Search results for "${query}"` : "Popular Books"}
        </h2>

        <p className="mt-2 text-sm text-stone-500">
          {query
            ? "Books matching your search."
            : "Explore books from the Open Library."}
        </p>
      </div>

      {error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 px-6 py-10 text-center">
          <h3 className="font-medium text-red-800">Unable to load books</h3>

          <p className="mt-1 text-sm text-red-600">{error}</p>
        </div>
      ) : loading ? (
        <BookGridSkeleton />
      ) : (
        <BookGrid books={books} />
      )}
    </section>
  );
}
