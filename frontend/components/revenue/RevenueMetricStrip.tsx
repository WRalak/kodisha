import { StatCard } from "@/components/admin/StatCard";
import { revenueMetrics } from "@/lib/revenue";

export function RevenueMetricStrip() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {revenueMetrics.map((metric) => (
        <StatCard {...metric} key={metric.label} />
      ))}
    </div>
  );
}
