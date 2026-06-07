import { DataTable } from "@/components/admin/DataTable";
import { RevenueMetricStrip } from "@/components/revenue/RevenueMetricStrip";
import { RevenueTable } from "@/components/revenue/RevenueTable";
import {
  agentRevenueLedger,
  revenueControls,
  revenueSummary,
} from "@/lib/revenue";

export default function AdminRevenuePage() {
  return (
    <>
      <h1 className="text-3xl font-semibold">Revenue operations</h1>
      <p className="mt-2 text-stone-600">
        Track Kodisha commissions, featured upgrades, subscriptions and
        monetization controls from one super-admin surface.
      </p>

      <div className="mt-5">
        <RevenueMetricStrip />
      </div>

      <section className="mt-6 grid gap-5 xl:grid-cols-[1fr_360px]">
        <div className="grid gap-5">
          <RevenueTable
            headers={["Source", "Calculation", "Monthly revenue"]}
            rows={revenueSummary.map((item) => [
              item.source,
              item.calculation,
              item.revenue,
            ])}
          />
          <DataTable
            headers={["Listing", "Rent", "Commission", "Payout", "Status"]}
            rows={agentRevenueLedger.map((entry) => [
              entry.listing,
              entry.rent,
              entry.commission,
              entry.payout,
              entry.status,
            ])}
          />
        </div>

        <aside className="grid content-start gap-3">
          {revenueControls.map((control) => (
            <article className="rounded-lg border border-stone-200 bg-white p-4" key={control.name}>
              <span className="text-sm font-semibold uppercase text-stone-500">
                {control.name}
              </span>
              <strong className="mt-2 block text-2xl">{control.value}</strong>
              <p className="mt-1 text-sm text-stone-600">{control.detail}</p>
            </article>
          ))}
        </aside>
      </section>
    </>
  );
}
