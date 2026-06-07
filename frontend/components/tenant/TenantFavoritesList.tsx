"use client";

import { PropertyGrid } from "@/components/listing/PropertyGrid";
import { useAppState } from "@/contexts/AppStateProvider";
import type { Listing } from "@/types";
import Link from "next/link";

export function TenantFavoritesList({ listings }: { listings: Listing[] }) {
  const { savedListingIds } = useAppState();
  const savedListings = listings.filter((listing) => savedListingIds.includes(listing.id));

  if (!savedListings.length) {
    return (
      <section className="mt-5 rounded-lg border border-stone-200 bg-white p-8 text-center">
        <h2 className="text-xl font-semibold">No saved listings yet</h2>
        <p className="mt-2 text-stone-600">Save properties from the listings page and they will appear here.</p>
        <Link className="mt-5 inline-flex rounded-lg bg-orange-600 px-4 py-3 text-sm font-semibold text-white" href="/listings">
          Browse listings
        </Link>
      </section>
    );
  }

  return (
    <>
      <p className="mt-4 text-sm text-stone-600">
        Showing {savedListings.length} saved {savedListings.length === 1 ? "listing" : "listings"}.
      </p>
      <div className="mt-5">
        <PropertyGrid listings={savedListings} />
      </div>
    </>
  );
}
