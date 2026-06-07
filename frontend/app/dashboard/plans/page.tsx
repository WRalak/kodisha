import { PricingCard } from "@/components/revenue/PricingCard";
import { subscriptionPlans } from "@/lib/revenue";

export default function DashboardPlansPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold">Agent plans</h1>
      <p className="mt-2 text-stone-600">
        Free agents can keep 3 active listings. Paid plans unlock more capacity,
        analytics and premium marketplace tools.
      </p>
      <div className="mt-5 grid gap-4 xl:grid-cols-3">
        {subscriptionPlans.map((plan, index) => (
          <PricingCard {...plan} featured={index === 1} key={plan.name} />
        ))}
      </div>
    </>
  );
}
