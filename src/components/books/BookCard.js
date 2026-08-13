import { Star } from "lucide-react";

export default function BookCard({ book }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-stone-200 bg-white transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[3/4] overflow-hidden bg-stone-100">
        {book.coverUrl ? (
          <img
            src={book.coverUrl}
            alt={book.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center p-6 text-center">
            <span className="text-sm text-stone-400">No cover available</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <p className="truncate text-xs text-stone-500">by {book.author}</p>

        <h3 className="mt-1 line-clamp-2 min-h-10 text-sm font-semibold leading-5 text-stone-900">
          {book.title}
        </h3>

        <div className="mt-3 flex items-center justify-between gap-2">
          {book.rating !== null ? (
            <div className="flex items-center gap-1.5">
              <Star size={14} fill="currentColor" className="text-amber-500" />

              <span className="text-xs font-semibold text-stone-700">
                {book.rating.toFixed(1)}
              </span>
            </div>
          ) : (
            <span className="text-xs text-stone-400">No rating</span>
          )}

          {book.ratingsCount > 0 && (
            <span className="truncate text-xs text-stone-400">
              {book.ratingsCount.toLocaleString()} ratings
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
