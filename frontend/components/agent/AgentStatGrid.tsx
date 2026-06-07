import type { Agent } from "@/types";

export function AgentStatGrid({ agent }: { agent: Agent }) {
  const stats = [
    ["Listings", agent.listings],
    ["Response", `${agent.responseRate}%`],
    ["Reviews", agent.reviews],
    ["Rating", agent.rating.toFixed(1)],
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map(([label, value]) => (
        <div className="rounded-lg border border-stone-200 bg-white p-4" key={label}>
          <span className="text-xs font-semibold uppercase text-stone-500">{label}</span>
          <strong className="mt-1 block text-xl font-semibold">{value}</strong>
        </div>
      ))}
    </div>
  );
}
