import { StatCard } from "@/components/admin/StatCard";
import { dashboardStats } from "@/lib/mockData";

export default function StatsPage() {
  return <><h1 className="text-3xl font-semibold">Performance stats</h1><div className="mt-5 grid gap-4 md:grid-cols-2">{dashboardStats.map((stat) => <StatCard {...stat} key={stat.label} />)}</div></>;
}
