import Link from "next/link";
import { KodishaLogo } from "@/components/layout/KodishaLogo";

const items = [
  ["Dashboard", "/dashboard"],
  ["Properties", "/dashboard/listings"],
  ["Add listing", "/dashboard/add-listing"],
  ["Payments", "/dashboard/earnings"],
  ["Inquiries", "/dashboard/inquiries"],
  ["Reports", "/dashboard/stats"],
  ["Boosts", "/dashboard/boosts"],
  ["Plans", "/dashboard/plans"],
  ["Reviews", "/dashboard/reviews"],
  ["Profile", "/dashboard/profile"],
  ["Settings", "/dashboard/settings"],
];

export function DashboardSidebar() {
  return (
    <aside className="fixed left-0 top-0 z-30 hidden h-full w-64 flex-col border-r border-stone-200 bg-[#efeeeb] p-5 md:flex">
      <KodishaLogo />
      <div className="mt-8 rounded-lg border border-stone-200 bg-white p-4">
        <p className="text-sm font-semibold">Kodisha Pro</p>
        <p className="mt-1 text-sm leading-6 text-stone-600">Management portal for verified property agents.</p>
      </div>
      <nav className="mt-5 grid gap-1">
        {items.map(([label, href], index) => (
          <Link
            className={`rounded-lg px-4 py-3 text-sm font-medium ${
              index === 0 ? "bg-stone-950 text-white" : "text-stone-700 hover:bg-white"
            }`}
            href={href}
            key={href}
          >
            {label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto grid gap-3 border-t border-stone-200 pt-5">
        <Link className="rounded-lg bg-orange-600 px-4 py-3 text-center text-sm font-semibold text-white" href="/dashboard/add-listing">
          Add new listing
        </Link>
        <Link className="rounded-lg border border-stone-200 bg-white px-4 py-3 text-center text-sm font-medium" href="/">
          Back to site
        </Link>
      </div>
    </aside>
  );
}
