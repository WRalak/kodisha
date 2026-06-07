import { BoostPackageCard } from "@/components/revenue/BoostPackageCard";
import { PricingCard } from "@/components/revenue/PricingCard";
import { RevenueMetricStrip } from "@/components/revenue/RevenueMetricStrip";
import { RevenueTable } from "@/components/revenue/RevenueTable";
import {
  commissionExamples,
  featuredPackages,
  revenueSummary,
  subscriptionPlans,
} from "@/lib/revenue";

export default function HowKodishaMakesMoneyPage() {
  return (
    <main className="bg-[#f5f3ef]">
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-stone-500">
            Kodisha revenue model
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight">
            How Kodisha makes money
          </h1>
          <p className="mt-4 text-lg leading-8 text-stone-600">
            Kodisha earns when agents earn, then layers recurring upgrades,
            subscriptions, enhanced verification and future tenant lead
            generation as marketplace activity grows.
          </p>
        </div>
        <div className="mt-8">
          <RevenueMetricStrip />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-12">
        <section>
          <div className="mb-4">
            <p className="text-sm font-semibold uppercase text-stone-500">
              Revenue stream 1
            </p>
            <h2 className="text-3xl font-semibold">Transaction commission</h2>
          </div>
          <RevenueTable
            headers={["Property", "Monthly rent", "Kodisha commission"]}
            rows={commissionExamples.map((item) => [
              item.property,
              item.rent,
              item.commission,
            ])}
          />
        </section>

        <section>
          <div className="mb-4">
            <p className="text-sm font-semibold uppercase text-stone-500">
              Revenue stream 2
            </p>
            <h2 className="text-3xl font-semibold">Featured listing upgrades</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {featuredPackages.map((item) => (
              <BoostPackageCard {...item} key={item.name} />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-4">
            <p className="text-sm font-semibold uppercase text-stone-500">
              Revenue stream 3
            </p>
            <h2 className="text-3xl font-semibold">Agent subscription plans</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {subscriptionPlans.map((plan, index) => (
              <PricingCard {...plan} featured={index === 1} key={plan.name} />
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="mb-4">
              <p className="text-sm font-semibold uppercase text-stone-500">
                Unit economics
              </p>
              <h2 className="text-3xl font-semibold">10-agent monthly example</h2>
            </div>
            <RevenueTable
              headers={["Source", "Calculation", "Monthly revenue"]}
              rows={revenueSummary.map((item) => [
                item.source,
                item.calculation,
                item.revenue,
              ])}
            />
          </div>

          <aside className="grid content-start gap-5">
            <article className="rounded-lg border border-stone-200 bg-white p-5">
              <p className="text-sm font-semibold uppercase text-stone-500">
                Revenue stream 4
              </p>
              <h2 className="mt-2 text-2xl font-semibold">Verified Agent Badge</h2>
              <strong className="mt-5 block text-3xl">KSh 1,500</strong>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                One-time enhanced Verified Pro badge displayed across agent
                listings and profile.
              </p>
            </article>
            <article className="rounded-lg border border-stone-200 bg-white p-5">
              <p className="text-sm font-semibold uppercase text-stone-500">
                Revenue stream 5
              </p>
              <h2 className="mt-2 text-2xl font-semibold">Tenant lead generation</h2>
              <strong className="mt-5 block text-3xl">KSh 500-2,000</strong>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                Future pre-qualified tenant leads matched to agent specialty and
                operating area.
              </p>
            </article>
          </aside>
        </section>
      </section>
    </main>
  );
}
