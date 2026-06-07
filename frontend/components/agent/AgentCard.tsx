import { AgentAvatarName } from "@/components/agent/AgentAvatarName";
import { StarRating } from "@/components/shared/StarRating";
import type { Agent } from "@/types";

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <article className="rounded-md border border-stone-200 bg-white p-4">
      <AgentAvatarName agent={agent} />
      <div className="mt-3 flex items-center justify-between">
        <StarRating rating={agent.rating} />
        <span className="rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold text-white">Verified</span>
      </div>
      <p className="mt-3 text-sm leading-6 text-stone-600">{agent.bio}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {agent.areas.map((area) => (
          <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700" key={area}>{area}</span>
        ))}
      </div>
    </article>
  );
}
