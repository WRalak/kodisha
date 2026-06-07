import { commissionRate } from "@/lib/revenue";
import { formatKes } from "@/lib/utils";

export function CommissionBreakdown({ rent }: { rent: number }) {
  const commission = rent * commissionRate;
  const payout = rent - commission;

  return (
    <div className="rounded-lg border border-stone-200 bg-white p-5">
      <p className="text-sm font-semibold uppercase text-stone-500">Completed rental</p>
      <h3 className="mt-2 text-2xl font-semibold">Commission breakdown</h3>
      <div className="mt-5 grid gap-3">
        <div className="flex justify-between gap-4 border-b border-stone-100 pb-3">
          <span className="font-medium text-stone-600">First month&apos;s rent</span>
          <strong>{formatKes(rent)}</strong>
        </div>
        <div className="flex justify-between gap-4 border-b border-stone-100 pb-3">
          <span className="font-medium text-stone-600">Kodisha commission</span>
          <strong>{formatKes(commission)}</strong>
        </div>
        <div className="flex justify-between gap-4">
          <span className="font-medium text-stone-600">Agent payout</span>
          <strong>{formatKes(payout)}</strong>
        </div>
      </div>
      <button className="mt-5 w-full rounded-md bg-orange-600 px-4 py-3 font-semibold text-white">
        Mark rental completed
      </button>
    </div>
  );
}
