export default function BookCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-stone-200 bg-white">
      <div className="aspect-[3/4] animate-pulse bg-stone-200" />

      <div className="space-y-3 p-4">
        <div className="h-3 w-1/3 animate-pulse rounded bg-stone-200" />

        <div className="space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-stone-200" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-stone-200" />
        </div>

        <div className="h-3 w-1/2 animate-pulse rounded bg-stone-200" />
      </div>
    </div>
  );
}
