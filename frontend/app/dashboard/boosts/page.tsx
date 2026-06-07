import { BoostPackageCard } from "@/components/revenue/BoostPackageCard";
import { featuredPackages } from "@/lib/revenue";

export default function DashboardBoostsPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold">Featured listing boosts</h1>
      <p className="mt-2 text-stone-600">
        Pin strong listings into featured homepage and browse placements for a
        fixed duration.
      </p>
      <div className="mt-5 grid gap-4 xl:grid-cols-3">
        {featuredPackages.map((item) => (
          <BoostPackageCard {...item} key={item.name} />
        ))}
      </div>
    </>
  );
}
