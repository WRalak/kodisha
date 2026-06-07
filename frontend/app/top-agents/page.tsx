import { AgentCard } from "@/components/agent/AgentCard";
import { SearchControl } from "@/components/shared/SearchControl";
import { counties } from "@/lib/counties";
import { agents } from "@/lib/mockData";
import type { Agent } from "@/types";
import Link from "next/link";

type TopAgentsSearchParams = {
  search?: string;
  county?: string;
};

function normalize(value?: string) {
  return (value ?? "").trim().toLowerCase();
}

function groupAgentsByCounty(items: Agent[]) {
  return counties
    .map((county) => ({
      county: county.name,
      agents: items.filter((agent) => agent.county === county.name),
    }))
    .filter((group) => group.agents.length > 0);
}

export default async function TopAgentsPage({
  searchParams,
}: {
  searchParams?: Promise<TopAgentsSearchParams>;
}) {
  const params = (await searchParams) ?? {};
  const query = normalize(params.search);
  const county = normalize(params.county);
  const filteredAgents = agents.filter((agent) =>
    (!query ||
      [
        agent.name,
        agent.company,
        agent.county,
        agent.bio,
        ...agent.areas,
      ].join(" ").toLowerCase().includes(query)) &&
    (!county || agent.county.toLowerCase() === county)
  );
  const groupedByCounty = !query && !county;
  const locationGroups = groupAgentsByCounty(filteredAgents);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase text-stone-500">Top agents</p>
          <h1 className="mt-2 text-4xl font-semibold">Verified professionals tenants can trust</h1>
        </div>
        <SearchControl
          action="/top-agents"
          className="w-full md:w-80"
          initialValue={params.search}
          placeholder="Search agents or companies"
        />
      </div>
      <div className="mt-6 flex justify-between gap-4 text-sm text-stone-600">
        <p>
          Showing <strong className="font-semibold text-stone-950">{filteredAgents.length}</strong> of {agents.length} agents
          {query ? <> for <strong className="font-semibold text-stone-950">&quot;{params.search}&quot;</strong></> : null}.
        </p>
        {(query || county) && <a className="font-medium text-stone-700" href="/top-agents">Clear search</a>}
      </div>

      <section className="mt-5 rounded-lg border border-stone-200 bg-white p-4">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <div>
            <h2 className="text-lg font-semibold">Browse agents by location</h2>
            <p className="text-sm text-stone-600">Agent companies appear by county, and search still works across all locations.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {counties.map((item) => {
              const active = county === item.name.toLowerCase();
              return (
                <Link
                  className={`rounded-full border px-3 py-1.5 text-sm font-medium ${
                    active ? "border-orange-600 bg-orange-50 text-orange-700" : "border-stone-200 bg-[#faf9f7] text-stone-700"
                  }`}
                  href={active ? "/top-agents" : `/top-agents?county=${encodeURIComponent(item.name)}`}
                  key={item.name}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {filteredAgents.length > 0 && groupedByCounty ? (
        <div className="mt-6 grid gap-8">
          {locationGroups.map((group) => (
            <section key={group.county}>
              <div className="mb-3 flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold">{group.county}</h2>
                <span className="text-sm text-stone-500">{group.agents.length} verified agents</span>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {group.agents.map((agent) => <AgentCard agent={agent} key={agent.id} />)}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredAgents.map((agent) => <AgentCard agent={agent} key={agent.id} />)}
        </div>
      )}
      {filteredAgents.length === 0 && (
        <section className="mt-6 rounded-lg border border-stone-200 bg-white p-8 text-center">
          <h2 className="text-xl font-semibold">No matching agents</h2>
          <p className="mt-2 text-stone-600">Try a company name, area, county or specialization.</p>
        </section>
      )}
    </main>
  );
}
