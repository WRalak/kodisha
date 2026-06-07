export function AmenitiesGrid({ amenities }: { amenities: string[] }) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {amenities.map((amenity) => (
        <div className="rounded-md border border-stone-200 bg-white px-3 py-2 text-sm font-medium text-stone-700" key={amenity}>
          {amenity}
        </div>
      ))}
    </div>
  );
}
