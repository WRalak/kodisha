import { PropertyCard } from "@/components/listing/PropertyCard";
import type { Listing } from "@/types";

export function PropertyGrid({ listings }: { listings: Listing[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {listings.map((listing) => (
        <PropertyCard listing={listing} key={listing.id} />
      ))}
    </div>
  );
}
