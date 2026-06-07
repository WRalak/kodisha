export function Skeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="grid gap-3">
      {Array.from({ length: lines }).map((_, index) => (
        <div className="h-4 animate-pulse rounded-full bg-stone-200" key={index} style={{ width: `${100 - index * 16}%` }} />
      ))}
    </div>
  );
}
