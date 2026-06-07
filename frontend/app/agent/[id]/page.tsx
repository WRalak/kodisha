import { AgentStatGrid } from "@/components/agent/AgentStatGrid";
import { PropertyGrid } from "@/components/listing/PropertyGrid";
import { AgentEngagementGate } from "@/components/shared/AgentEngagementGate";
import { ReviewCard } from "@/components/shared/ReviewCard";
import { agents, listings } from "@/lib/mockData";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function AgentProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const agent = agents.find((item) => item.id === id);
  if (!agent) notFound();
  const agentListings = listings.filter((listing) => listing.agentId === agent.id);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <section className="grid gap-5 rounded-md border border-stone-200 bg-white p-5 lg:grid-cols-[160px_1fr]">
        <img className="h-36 w-full rounded-md object-cover" src={agent.image} alt="" />
        <div>
          <span className="rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold text-white">
            Verified agent
          </span>
          <h1 className="mt-3 text-3xl font-semibold">{agent.name}</h1>
          <p className="mt-1 font-medium text-stone-700">
            {agent.company} - {agent.county}
          </p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-600">{agent.bio}</p>
          <Link
            className="mt-5 inline-flex rounded-md bg-orange-600 px-4 py-3 font-semibold text-white"
            href={`/agent/${agent.id}/listings`}
          >
            View all listings
          </Link>
          <div className="mt-4 max-w-xl">
            <AgentEngagementGate agentName={agent.name}>
              <div className="flex flex-col gap-2 sm:flex-row">
                <a className="rounded-lg bg-orange-600 px-4 py-3 text-center text-sm font-semibold text-white" href="tel:+254700000000">
                  Call agent
                </a>
                <a className="rounded-lg border border-orange-600 px-4 py-3 text-center text-sm font-semibold text-orange-700" href={`mailto:${agent.id}@kodisha.test`}>
                  Email agent
                </a>
              </div>
            </AgentEngagementGate>
          </div>
        </div>
      </section>
      <div className="mt-5 grid gap-5 lg:grid-cols-[320px_1fr]">
        <AgentStatGrid agent={agent} />
        <ReviewCard
          name="Tenant review"
          rating={agent.rating}
          text="Fast response, accurate photos and clear viewing instructions."
        />
      </div>
      <h2 className="mt-8 text-3xl font-semibold">Active listings</h2>
      <div className="mt-5">
        <PropertyGrid listings={agentListings} />
      </div>
    </main>
  );
}
