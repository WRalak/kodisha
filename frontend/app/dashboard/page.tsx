import Link from "next/link";
import { inquiries, listings } from "@/lib/mockData";
import { formatKes } from "@/lib/utils";

const activeListings = listings.filter((listing) => listing.status === "Live");
const totalViews = listings.reduce((sum, listing) => sum + listing.views, 0);
const totalInquiries = listings.reduce((sum, listing) => sum + listing.inquiries, 0);
const totalPortfolioValue = activeListings.reduce((sum, listing) => sum + listing.price, 0);
const monthlyEarnings = [180, 220, 205, 280, 320, 390, 360, 430, 470, 510, 545, 620];

const leads = [
  ["Sarah Kinyua", "Kilimani two-bedroom apartment", "2 hours ago", "New lead"],
  ["David Ochieng", "Westlands fitted office suite", "5 hours ago", "Followed up"],
  ["Anita Mutua", "Ruiru family bungalow", "Yesterday", "Viewing set"],
];

export default function AgentDashboardPage() {
  return (
    <div className="grid gap-8">
      <section className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="text-3xl font-semibold">Agent Dashboard</h2>
          <p className="mt-2 max-w-2xl text-stone-600">
            Welcome back. Track property performance, tenant leads, payouts and listing activity from one desk.
          </p>
        </div>
        <Link className="rounded-lg bg-stone-950 px-5 py-3 text-sm font-semibold text-white" href="/dashboard/listings">
          Manage properties
        </Link>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        <article className="rounded-lg border border-stone-200 bg-white p-5 md:col-span-2">
          <div className="flex justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-stone-500">Total earnings estimate</p>
              <strong className="mt-2 block text-4xl font-semibold tracking-tight">
                {formatKes(totalPortfolioValue)}
              </strong>
            </div>
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-orange-600 text-sm font-semibold text-white">
              5%
            </span>
          </div>
          <p className="mt-5 text-sm leading-6 text-stone-600">
            Based on active managed rent values and Kodisha's first-month commission model.
          </p>
        </article>

        <article className="rounded-lg border border-stone-200 bg-white p-5">
          <p className="text-sm font-medium text-stone-500">Active listings</p>
          <strong className="mt-2 block text-3xl font-semibold">{activeListings.length}</strong>
          <p className="mt-4 text-sm text-stone-600">Premium and standard portfolio units.</p>
        </article>

        <article className="rounded-lg border border-stone-200 bg-white p-5">
          <p className="text-sm font-medium text-stone-500">Pending inquiries</p>
          <strong className="mt-2 block text-3xl font-semibold">{totalInquiries}</strong>
          <p className="mt-4 text-sm text-stone-600">Tenant conversations across listings.</p>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="grid gap-6">
          <article className="rounded-lg border border-stone-200 bg-white p-5">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">Monthly earnings</h3>
                <p className="mt-1 text-sm text-stone-600">Commission and boost revenue trend.</p>
              </div>
              <div className="flex gap-2">
                <button className="rounded-md border border-stone-200 px-3 py-2 text-xs font-medium">6 months</button>
                <button className="rounded-md bg-orange-600 px-3 py-2 text-xs font-semibold text-white">1 year</button>
              </div>
            </div>
            <div className="flex h-72 items-end gap-2 border-b border-l border-stone-200 px-2 pb-2">
              {monthlyEarnings.map((value, index) => (
                <div className="flex flex-1 flex-col items-center gap-2" key={`${value}-${index}`}>
                  <div
                    className="w-full rounded-t-md bg-orange-600/85"
                    style={{ height: `${Math.max(18, (value / 620) * 230)}px` }}
                  />
                  <span className="text-[10px] text-stone-500">{["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][index]}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="overflow-hidden rounded-lg border border-stone-200 bg-white">
            <div className="flex items-center justify-between gap-4 border-b border-stone-200 p-5">
              <div>
                <h3 className="text-xl font-semibold">Recent leads</h3>
                <p className="mt-1 text-sm text-stone-600">Newest tenant interest from public listings.</p>
              </div>
              <Link className="text-sm font-medium text-stone-700" href="/dashboard/inquiries">
                View CRM
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead className="bg-[#f4f3f1] text-xs uppercase text-stone-500">
                  <tr>
                    <th className="px-5 py-4 font-semibold">Tenant</th>
                    <th className="px-5 py-4 font-semibold">Property interest</th>
                    <th className="px-5 py-4 font-semibold">Date</th>
                    <th className="px-5 py-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {leads.map(([name, property, date, status]) => (
                    <tr className="hover:bg-[#faf9f7]" key={name}>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <span className="grid h-9 w-9 place-items-center rounded-full bg-stone-950 text-xs font-semibold text-white">
                            {name.split(" ").map((part) => part[0]).join("")}
                          </span>
                          <div>
                            <p className="font-semibold">{name}</p>
                            <p className="text-xs text-stone-500">+254 7** *** ***</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-stone-700">{property}</td>
                      <td className="px-5 py-4 text-stone-600">{date}</td>
                      <td className="px-5 py-4">
                        <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700">
                          {status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </div>

        <aside className="grid content-start gap-5">
          <section className="rounded-lg bg-stone-950 p-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
              Listing performance
            </p>
            <div className="mt-5 grid gap-4">
              <div>
                <div className="flex justify-between text-sm">
                  <span>Total impressions</span>
                  <strong>{totalViews.toLocaleString("en-KE")}</strong>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/15">
                  <div className="h-full w-4/5 rounded-full bg-orange-600" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <span>Response rate</span>
                  <strong>94%</strong>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/15">
                  <div className="h-full w-[94%] rounded-full bg-white" />
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-lg border border-stone-200 bg-white p-5">
            <h3 className="text-xl font-semibold">Market insights</h3>
            <div className="mt-4 grid gap-3">
              <article className="border-l-4 border-orange-600 bg-[#faf9f7] p-4">
                <h4 className="font-semibold">Rental spike</h4>
                <p className="mt-1 text-sm leading-6 text-stone-600">
                  Apartments in Westlands are seeing stronger inquiry volume this month.
                </p>
              </article>
              <article className="border-l-4 border-stone-950 bg-[#faf9f7] p-4">
                <h4 className="font-semibold">Review queue</h4>
                <p className="mt-1 text-sm leading-6 text-stone-600">
                  {inquiries.length} tenant conversations need a timely follow-up.
                </p>
              </article>
            </div>
            <button className="mt-5 w-full rounded-lg border border-stone-200 px-4 py-3 text-sm font-medium">
              Download report
            </button>
          </section>

          <section className="grid grid-cols-2 gap-3">
            <Link className="rounded-lg border border-stone-200 bg-white p-4 text-center text-sm font-medium" href="/agent/aisha">
              Share profile
            </Link>
            <Link className="rounded-lg border border-stone-200 bg-white p-4 text-center text-sm font-medium" href="/dashboard/inquiries">
              Schedule viewings
            </Link>
          </section>
        </aside>
      </section>
    </div>
  );
}
