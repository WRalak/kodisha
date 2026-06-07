import { AgentCard } from "@/components/agent/AgentCard";
import { agents } from "@/lib/mockData";

export default function AdminAgentsPage() {
  return <><h1 className="text-3xl font-semibold">Agents</h1><div className="mt-5 grid gap-4 md:grid-cols-2">{agents.map((agent) => <AgentCard agent={agent} key={agent.id} />)}</div></>;
}
