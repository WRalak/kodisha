import { DataTable } from "@/components/admin/DataTable";
import { listings } from "@/lib/mockData";
import { formatKes } from "@/lib/utils";
import Link from "next/link";

export default function DashboardListingsPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold">My listings</h1>
      <div className="mt-4 grid gap-3 rounded-lg border border-amber-100 bg-amber-50 p-4 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <strong>Turn views into revenue</strong>
          <p className="mt-1 text-sm text-stone-700">
            Boost high-performing listings or mark completed rentals so Kodisha
            can calculate commission and release your payout.
          </p>
        </div>
        <Link className="rounded-md bg-orange-600 px-4 py-3 text-sm font-semibold text-white" href="/dashboard/boosts">
          Boost listing
        </Link>
      </div>
      <div className="mt-5">
        <DataTable headers={["Listing", "Status", "Price", "Inquiries"]} rows={listings.map((item) => [item.title, item.status, formatKes(item.price), item.inquiries])} />
      </div>
    </>
  );
}
