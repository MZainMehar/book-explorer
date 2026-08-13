import BookCardSkeleton from "./BookCardSkeleton";
import { MAX_BOOKS } from "@/lib/constants/api";

export default function BookGridSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
      {Array.from({ length: MAX_BOOKS }).map((_, index) => (
        <BookCardSkeleton key={index} />
      ))}
    </div>
  );
}
