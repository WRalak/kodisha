export function StarRating({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600">
      <span aria-hidden="true">★★★★★</span>
      <span className="text-stone-800">{rating.toFixed(1)}</span>
    </span>
  );
}
