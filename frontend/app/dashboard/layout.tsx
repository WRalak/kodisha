import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import Link from "next/link";
import { SearchControl } from "@/components/shared/SearchControl";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#faf9f7] text-stone-950">
      <DashboardSidebar />
      <section className="min-h-screen pb-24 md:ml-64 md:pb-0">
        <header className="sticky top-0 z-20 border-b border-stone-200 bg-[#faf9f7]/95 px-4 py-4 backdrop-blur md:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
                Agent workspace
              </p>
              <h1 className="text-2xl font-semibold">Kodisha Pro</h1>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <SearchControl className="w-full sm:w-80" placeholder="Search listings or tenants" />
              <Link className="rounded-lg bg-orange-600 px-4 py-3 text-center text-sm font-semibold text-white" href="/dashboard/add-listing">
                Create listing
              </Link>
            </div>
          </div>
        </header>
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">{children}</div>
      </section>

      <nav className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 gap-1 rounded-full border border-stone-200 bg-stone-950 p-1.5 shadow-lg md:hidden">
        {[
          ["Tenant", "/tenant"],
          ["Agent", "/dashboard"],
          ["Admin", "/admin"],
          ["Site", "/"],
        ].map(([label, href]) => (
          <Link className="rounded-full px-3 py-2 text-xs font-medium text-white" href={href} key={`${label}-${href}`}>
            {label}
          </Link>
        ))}
      </nav>
    </main>
  );
}
