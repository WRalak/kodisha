import Link from "next/link";
import { inquiries, listings } from "@/lib/mockData";
import { formatKes } from "@/lib/utils";
import { SearchControl } from "@/components/shared/SearchControl";

const savedListings = listings.slice(0, 4);
const recommendations = listings.filter((listing) => listing.status === "Live").slice(0, 4);

const stats = [
  {
    label: "Saved listings",
    value: savedListings.length.toString().padStart(2, "0"),
    detail: "Across Nairobi, Mombasa and Kiambu",
  },
  {
    label: "Active inquiries",
    value: inquiries.length.toString().padStart(2, "0"),
    detail: "Replies tracked from verified agents",
  },
  {
    label: "New matches",
    value: recommendations.length.toString().padStart(2, "0"),
    detail: "Based on your recent browsing",
  },
];

const activity = [
  {
    title: "Inquiry replied",
    text: "Njeri Homes replied about Kilimani two-bedroom apartment.",
    time: "18m ago",
  },
  {
    title: "Saved listing update",
    text: "Nyali serviced maisonette moved into review with the agent.",
    time: "1h ago",
  },
  {
    title: "New match found",
    text: "Four live properties now match your residential search.",
    time: "Today",
  },
];

export default function TenantDashboardPage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-stone-200 bg-[#faf9f7]/95 px-4 py-4 backdrop-blur md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
              Tenant dashboard
            </p>
            <h1 className="mt-1 text-2xl font-semibold text-stone-950">
              Your property journey
            </h1>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <SearchControl className="w-full sm:w-80" placeholder="Search properties, agents or counties" />
            <Link className="rounded-lg bg-stone-950 px-4 py-3 text-center text-sm font-semibold text-white" href="/listings">
              Browse listings
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 md:px-8">
        <section className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <article className="rounded-lg border border-stone-200 bg-white p-5" key={stat.label}>
              <p className="text-sm font-medium text-stone-500">{stat.label}</p>
              <strong className="mt-4 block text-4xl font-semibold tracking-tight text-stone-950">
                {stat.value}
              </strong>
              <p className="mt-2 text-sm leading-6 text-stone-600">{stat.detail}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">Recommended for you</h2>
                <p className="mt-1 text-sm text-stone-600">
                  Live listings from verified agent portfolios.
                </p>
              </div>
              <Link className="text-sm font-medium text-stone-700 hover:text-stone-950" href="/listings">
                View all
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {recommendations.map((listing) => (
                <Link
                  className="overflow-hidden rounded-lg border border-stone-200 bg-white transition hover:-translate-y-1 hover:shadow-md"
                  href={`/listing/${listing.id}`}
                  key={listing.id}
                >
                  <img className="h-40 w-full object-cover" src={listing.image} alt="" />
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700">
                        {listing.category}
                      </span>
                      <span className="rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold text-white">
                        Live
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold leading-tight">{listing.title}</h3>
                    <p className="mt-1 text-sm text-stone-600">
                      {listing.area}, {listing.county}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-stone-100 pt-3">
                      <span className="text-sm text-stone-500">
                        {listing.bedrooms ? `${listing.bedrooms} beds` : "Portfolio space"} · {listing.bathrooms} baths
                      </span>
                      <strong className="font-semibold">{formatKes(listing.price)}</strong>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <aside className="grid content-start gap-5">
            <section className="rounded-lg border border-stone-200 bg-white p-5">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold">Recent activity</h2>
                <span className="rounded-full bg-orange-600 px-2.5 py-1 text-xs font-semibold text-white">
                  3 new
                </span>
              </div>
              <div className="mt-4 grid gap-3">
                {activity.map((item) => (
                  <article className="rounded-lg bg-[#faf9f7] p-4" key={item.title}>
                    <div className="flex justify-between gap-3">
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                      <span className="shrink-0 text-xs text-stone-500">{item.time}</span>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-stone-600">{item.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-lg bg-stone-950 p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                Tenant tools
              </p>
              <h2 className="mt-2 text-xl font-semibold">Follow up faster</h2>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Track saved properties, compare agent replies and keep your next rental search organized.
              </p>
              <Link className="mt-5 inline-flex rounded-lg bg-orange-600 px-4 py-3 text-sm font-semibold text-white" href="/tenant/inquiries">
                View inquiries
              </Link>
            </section>
          </aside>
        </section>
      </div>
    </div>
  );
}
