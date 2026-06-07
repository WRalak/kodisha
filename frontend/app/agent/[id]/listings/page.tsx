import { PropertyGrid } from "@/components/listing/PropertyGrid";
import { agents, listings } from "@/lib/mockData";
import { notFound } from "next/navigation";

export default async function AgentListingsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const agent = agents.find((item) => item.id === id);
  if (!agent) notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <p className="text-sm font-semibold uppercase text-stone-500">Agent listings</p>
      <h1 className="mt-2 text-4xl font-semibold">{agent.name}</h1>
      <div className="mt-6">
        <PropertyGrid listings={listings.filter((listing) => listing.agentId === agent.id)} />
      </div>
    </main>
  );
}
