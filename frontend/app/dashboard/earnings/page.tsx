import { DataTable } from "@/components/admin/DataTable";
import { CommissionBreakdown } from "@/components/revenue/CommissionBreakdown";
import { agentRevenueLedger } from "@/lib/revenue";

export default function EarningsPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold">Earnings and payouts</h1>
      <p className="mt-2 text-stone-600">
        Kodisha deducts 5% from the first month&apos;s rent after a completed
        rental, then the remaining balance can be requested via M-Pesa or bank.
      </p>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_340px]">
        <DataTable
          headers={["Listing", "Rent", "Commission", "Agent payout", "Status"]}
          rows={agentRevenueLedger.map((entry) => [
            entry.listing,
            entry.rent,
            entry.commission,
            entry.payout,
            entry.status,
          ])}
        />
        <CommissionBreakdown rent={95000} />
      </div>

      <section className="mt-5 rounded-lg border border-stone-200 bg-white p-5">
        <h2 className="text-xl font-semibold">Request payout</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <input className="rounded-md border border-stone-200 px-3 py-2" placeholder="Amount" />
          <select className="rounded-md border border-stone-200 px-3 py-2">
            <option>M-Pesa</option>
            <option>Bank transfer</option>
          </select>
          <button className="rounded-md bg-orange-600 px-4 py-3 font-semibold text-white md:col-span-2">
            Request payout
          </button>
        </div>
      </section>
    </>
  );
}
