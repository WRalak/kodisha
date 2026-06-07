import { StatCard } from "@/components/admin/StatCard";
import { RevenueMetricStrip } from "@/components/revenue/RevenueMetricStrip";

export default function AnalyticsPage() {
  const stats = [{ label: "Agent performance", value: "94%", detail: "Average response rate" }, { label: "Approval speed", value: "1.4d", detail: "Verification median" }, { label: "Listings rented", value: "312", detail: "Last 30 days" }, { label: "Exports", value: "7", detail: "This month" }];
  return <><h1 className="text-3xl font-semibold">Analytics</h1><div className="mt-5"><RevenueMetricStrip /></div><div className="mt-5 grid gap-4 md:grid-cols-2">{stats.map((stat) => <StatCard {...stat} key={stat.label} />)}</div></>;
}
