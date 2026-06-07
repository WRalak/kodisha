import { AmenitiesGrid } from "@/components/listing/AmenitiesGrid";
import { AgentEngagementGate } from "@/components/shared/AgentEngagementGate";
import { InquiryModal } from "@/components/shared/InquiryModal";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { agents, listings } from "@/lib/mockData";
import { formatKes } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ListingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const listing = listings.find((item) => item.id === id);
  if (!listing) notFound();
  const agent = agents.find((item) => item.id === listing.agentId);

  return (
    <main className="mx-auto grid max-w-7xl gap-6 px-4 py-8 lg:grid-cols-[1fr_340px]">
      <section>
        <img className="max-h-72 w-full rounded-md object-cover" src={listing.image} alt="" />
        <div className="mt-5 flex flex-col justify-between gap-4 md:flex-row">
          <div>
            <StatusBadge status={listing.status} />
            <h1 className="mt-3 text-3xl font-semibold">{listing.title}</h1>
            <p className="mt-2 text-stone-600">{listing.area}, {listing.county}</p>
          </div>
          <strong className="text-2xl">{formatKes(listing.price)}</strong>
        </div>
        <div className="mt-5 grid gap-3 rounded-md border border-stone-200 bg-white p-4 sm:grid-cols-3">
          <strong>{listing.bedrooms || "Office"} bedrooms</strong>
          <strong>{listing.bathrooms} bathrooms</strong>
          <strong>{listing.views.toLocaleString()} views</strong>
        </div>
        <h2 className="mt-6 text-2xl font-semibold">Amenities</h2>
        <div className="mt-4">
          <AmenitiesGrid amenities={listing.amenities} />
        </div>
      </section>
      <aside className="grid content-start gap-4">
        {agent && (
          <div className="rounded-md border border-stone-200 bg-white p-4">
            <p className="text-sm font-semibold uppercase text-stone-500">Verified agent</p>
            <h2 className="mt-2 text-2xl font-semibold">{agent.name}</h2>
            <p className="mt-1 text-stone-600">{agent.company}</p>
            <div className="mt-4 grid gap-2">
              <Link className="inline-flex rounded-md border border-stone-200 px-4 py-2 font-semibold" href={`/agent/${agent.id}`}>
                View profile
              </Link>
              <AgentEngagementGate agentName={agent.name}>
                <a className="inline-flex rounded-md bg-orange-600 px-4 py-2 font-semibold text-white" href="tel:+254700000000">
                  Call agent
                </a>
              </AgentEngagementGate>
            </div>
          </div>
        )}
        <AgentEngagementGate agentName={agent?.name}>
          <InquiryModal listingTitle={listing.title} />
        </AgentEngagementGate>
      </aside>
    </main>
  );
}
