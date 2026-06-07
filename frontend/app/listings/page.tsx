import { ListingFilters } from "@/components/listing/ListingFilters";
import { PropertyCard } from "@/components/listing/PropertyCard";
import { PropertyGrid } from "@/components/listing/PropertyGrid";
import { categories } from "@/lib/categories";
import { counties } from "@/lib/counties";
import { agents, listings } from "@/lib/mockData";
import type { Listing } from "@/types";
import Link from "next/link";

type ListingsSearchParams = {
  search?: string;
  category?: string;
  county?: string;
  budget?: string;
};

function normalize(value?: string) {
  return (value ?? "").trim().toLowerCase();
}

function matchesBudget(price: number, budget?: string) {
  if (budget === "below-50000") return price < 50000;
  if (budget === "50000-150000") return price >= 50000 && price <= 150000;
  if (budget === "above-150000") return price > 150000;
  return true;
}

function groupListingsByCounty(items: Listing[]) {
  return counties
    .map((county) => ({
      county: county.name,
      listings: items.filter((listing) => listing.county === county.name),
    }))
    .filter((group) => group.listings.length > 0);
}

export default async function ListingsPage({
  searchParams,
}: {
  searchParams?: Promise<ListingsSearchParams>;
}) {
  const params = (await searchParams) ?? {};
  const query = normalize(params.search);
  const category = normalize(params.category);
  const county = normalize(params.county);
  const filteredListings = listings.filter((listing) => {
    const agent = agents.find((item) => item.id === listing.agentId);
    const haystack = [
      listing.title,
      listing.category,
      listing.county,
      listing.area,
      listing.status,
      agent?.name,
      agent?.company,
      agent?.county,
      ...(agent?.areas ?? []),
      ...listing.amenities,
    ].filter(Boolean).join(" ").toLowerCase();

    return (
      (!query || haystack.includes(query)) &&
      (!category || listing.category.toLowerCase() === category) &&
      (!county || listing.county.toLowerCase() === county) &&
      matchesBudget(listing.price, params.budget)
    );
  });
  const matchingAgents = query
    ? agents.filter((agent) =>
        [
          agent.name,
          agent.company,
          agent.county,
          agent.bio,
          ...agent.areas,
        ].join(" ").toLowerCase().includes(query)
      )
    : [];
  const hasFilters = Boolean(query || category || county || params.budget);
  const groupedByCounty = !query && !category && !county && !params.budget;
  const locationGroups = groupListingsByCounty(filteredListings);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <section>
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-stone-500">Managed portfolio</p>
            <h1 className="mt-2 text-4xl font-semibold">Properties agents manage</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Link className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-sm font-medium" href={`/category/${category.slug}`} key={category.slug}>
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <section className="mb-5 rounded-lg border border-stone-200 bg-white p-4">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
            <div>
              <h2 className="text-lg font-semibold">Browse by location</h2>
              <p className="text-sm text-stone-600">
                Listings appear by county, and search still works across every location.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {counties.map((item) => {
                const active = county === item.name.toLowerCase();
                return (
                  <Link
                    className={`rounded-full border px-3 py-1.5 text-sm font-medium ${
                      active
                        ? "border-orange-600 bg-orange-50 text-orange-700"
                        : "border-stone-200 bg-[#faf9f7] text-stone-700"
                    }`}
                    href={active ? "/listings" : `/listings?county=${encodeURIComponent(item.name)}`}
                    key={item.name}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <ListingFilters
          budget={params.budget}
          category={params.category}
          county={params.county}
          search={params.search}
        />
        <div className="mb-4 flex flex-col justify-between gap-2 text-sm text-stone-600 md:flex-row md:items-center">
          <p>
            Showing <strong className="font-semibold text-stone-950">{filteredListings.length}</strong> of {listings.length} managed properties
            {query ? <> for <strong className="font-semibold text-stone-950">&quot;{params.search}&quot;</strong></> : null}.
          </p>
          {hasFilters && (
            <Link className="font-medium text-stone-700 hover:text-stone-950" href="/listings">
              Clear search
            </Link>
          )}
        </div>
        {matchingAgents.length > 0 && (
          <section className="mb-5 rounded-lg border border-stone-200 bg-white p-4">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <div>
                <h2 className="text-lg font-semibold">Matching agents</h2>
                <p className="text-sm text-stone-600">
                  Agents and companies matching your search.
                </p>
              </div>
              <Link className="text-sm font-medium text-stone-700" href={`/top-agents?search=${encodeURIComponent(params.search ?? "")}`}>
                View agent results
              </Link>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {matchingAgents.map((agent) => (
                <Link className="rounded-lg bg-[#faf9f7] p-4" href={`/agent/${agent.id}`} key={agent.id}>
                  <p className="font-semibold">{agent.company}</p>
                  <p className="mt-1 text-sm text-stone-600">{agent.name} · {agent.county}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
        {filteredListings.length ? (
          groupedByCounty ? (
            <div className="grid gap-8">
              {locationGroups.map((group) => (
                <section key={group.county}>
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <h2 className="text-xl font-semibold">{group.county}</h2>
                    <span className="text-sm text-stone-500">{group.listings.length} managed properties</span>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {group.listings.map((listing) => (
                      <PropertyCard listing={listing} key={listing.id} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <PropertyGrid listings={filteredListings} />
          )
        ) : (
          <section className="rounded-lg border border-stone-200 bg-white p-8 text-center">
            <h2 className="text-xl font-semibold">No matching properties</h2>
            <p className="mt-2 text-stone-600">
              Try a different area, category, county, amenity or budget range.
            </p>
            <Link className="mt-5 inline-flex rounded-lg bg-orange-600 px-4 py-3 text-sm font-semibold text-white" href="/listings">
              View all listings
            </Link>
          </section>
        )}
      </section>
    </main>
  );
}
