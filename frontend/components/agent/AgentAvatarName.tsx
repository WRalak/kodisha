import type { Agent } from "@/types";

export function AgentAvatarName({ agent }: { agent: Agent }) {
  return (
    <div className="flex items-center gap-3">
      <img className="h-10 w-10 rounded-full object-cover" src={agent.image} alt="" />
      <div>
        <strong className="block font-semibold text-stone-950">{agent.name}</strong>
        <span className="text-sm text-stone-600">{agent.company}</span>
      </div>
    </div>
  );
}
