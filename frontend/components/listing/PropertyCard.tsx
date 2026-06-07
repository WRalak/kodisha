"use client";

import { StatusBadge } from "@/components/shared/StatusBadge";
import { useAppState } from "@/contexts/AppStateProvider";
import { formatKes } from "@/lib/utils";
import type { Listing } from "@/types";
import Link from "next/link";

export function PropertyCard({ listing }: { listing: Listing }) {
  const { isSavedListing, toggleSavedListing } = useAppState();
  const saved = isSavedListing(listing.id);

  return (
    <article className="overflow-hidden rounded-md border border-stone-200 bg-white">
      <div className="relative">
        <img className="aspect-[16/9] max-h-40 w-full object-cover" src={listing.image} alt="" />
        <button
          aria-pressed={saved}
          className={`absolute right-3 top-3 rounded-full border px-3 py-1.5 text-xs font-semibold shadow-sm ${
            saved
              ? "border-orange-600 bg-orange-600 text-white"
              : "border-white/70 bg-white/90 text-stone-800"
          }`}
          onClick={() => toggleSavedListing(listing.id)}
          type="button"
        >
          {saved ? "Saved" : "Save"}
        </button>
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase text-stone-500">{listing.category}</span>
          <StatusBadge status={listing.status} />
        </div>
        <h3 className="mt-2 min-h-11 text-base font-semibold leading-tight">{listing.title}</h3>
        <p className="mt-1 text-sm text-stone-600">{listing.area}, {listing.county}</p>
        <div className="mt-3 flex items-center justify-between gap-3">
          <strong className="font-semibold">{formatKes(listing.price)}</strong>
          <Link className="rounded-md border border-orange-600 px-3 py-2 text-sm font-medium text-orange-600 transition hover:bg-orange-50" href={`/listing/${listing.id}`}>View</Link>
        </div>
      </div>
    </article>
  );
}
