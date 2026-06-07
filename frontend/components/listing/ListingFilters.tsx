"use client";

import { useState } from "react";
import { categories } from "@/lib/categories";
import { counties } from "@/lib/counties";
import { SearchIcon } from "@/components/shared/SearchControl";
import { useAppState } from "@/contexts/AppStateProvider";

type ListingFiltersProps = {
  search?: string;
  category?: string;
  county?: string;
  budget?: string;
};

export function ListingFilters({ search = "", category = "", county = "", budget = "" }: ListingFiltersProps) {
  const [open, setOpen] = useState(false);
  const { recentSearches } = useAppState();

  return (
    <form action="/listings" className="mb-5 rounded-md border border-stone-200 bg-white p-3">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="relative flex-1">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
          <input
            className="min-h-10 w-full rounded-md border border-stone-200 px-3 pl-10 text-sm outline-none focus:border-orange-600"
            defaultValue={search}
            name="search"
            placeholder="Search by title, area, county, category or amenity"
            type="search"
          />
        </div>
        <button
          aria-expanded={open}
          className="min-h-10 rounded-md border border-stone-200 px-4 text-sm font-medium"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? "Hide filters" : "Filters"}
        </button>
        <button className="min-h-10 rounded-md bg-orange-600 px-4 text-sm font-semibold text-white">
          Search
        </button>
      </div>

      {open && (
        <div className="mt-3 grid gap-3 border-t border-stone-100 pt-3 md:grid-cols-3">
          <select className="min-h-10 rounded-md border border-stone-200 px-3 text-sm" defaultValue={category} name="category">
            <option value="">All categories</option>
            {categories.map((category) => (
              <option key={category.slug} value={category.name}>{category.name}</option>
            ))}
          </select>
          <select className="min-h-10 rounded-md border border-stone-200 px-3 text-sm" defaultValue={county} name="county">
            <option value="">All counties</option>
            {counties.map((county) => (
              <option key={county.name} value={county.name}>{county.name}</option>
            ))}
          </select>
          <select className="min-h-10 rounded-md border border-stone-200 px-3 text-sm" defaultValue={budget} name="budget">
            <option value="">Any budget</option>
            <option value="below-50000">Below KSh 50,000</option>
            <option value="50000-150000">KSh 50,000-150,000</option>
            <option value="above-150000">Above KSh 150,000</option>
          </select>
        </div>
      )}
      {recentSearches.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-stone-100 pt-3">
          <span className="text-xs font-medium uppercase text-stone-500">Recent</span>
          {recentSearches.map((item) => (
            <a
              className="rounded-full border border-stone-200 bg-[#faf9f7] px-3 py-1 text-xs font-medium text-stone-700"
              href={`/listings?search=${encodeURIComponent(item)}`}
              key={item}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </form>
  );
}
