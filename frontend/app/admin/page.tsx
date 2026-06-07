"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { agents, auditLog, dashboardStats, listings } from "@/lib/mockData";
import { formatKes } from "@/lib/utils";

const userGrowth = [
  { week: "W1", tenants: 40, agents: 20 },
  { week: "W2", tenants: 55, agents: 25 },
  { week: "W3", tenants: 70, agents: 30 },
  { week: "W4", tenants: 90, agents: 45 },
  { week: "W5", tenants: 65, agents: 35 },
];

const recentActivities = [
  ["New listing submitted", "Aisha Njeri submitted a Lavington penthouse for review.", "2 minutes ago"],
  ["Listing flagged", "Downtown showroom needs fraud and duplicate checks.", "1 hour ago"],
  ["Agent verified", "Metro Commercial identity documents were approved.", "3 hours ago"],
  ["Report generated", "Weekly platform revenue report is ready.", "5 hours ago"],
];

export default function AdminPage() {
  const initialPending = useMemo(
    () => listings.filter((listing) => listing.status !== "Live").slice(0, 5),
    []
  );
  const [pendingListings, setPendingListings] = useState(initialPending);
  const maxGrowth = Math.max(...userGrowth.map((item) => item.tenants));

  function removePending(id: string) {
    setPendingListings((current) => current.filter((listing) => listing.id !== id));
  }

  return (
    <div className="grid gap-8">
      <section className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="text-3xl font-semibold">System Overview</h2>
          <p className="mt-2 max-w-2xl text-stone-600">
            Real-time platform activity, pending moderation actions and user growth across Kodisha.
          </p>
        </div>
        <div className="flex gap-2">
          <Link className="rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm font-medium" href="/admin/analytics">
            Reports
          </Link>
          <Link className="rounded-lg bg-orange-600 px-4 py-3 text-sm font-semibold text-white" href="/admin/pending-listings">
            Approval queue
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["Pending approvals", pendingListings.length.toString().padStart(2, "0"), "Listings and agent checks waiting"],
          ["Reported listings", "08", "Critical items requiring admin review"],
          ["New user signups", "1,248", `${agents.length} verified agent companies seeded`],
        ].map(([label, value, detail], index) => (
          <article className="rounded-lg border border-stone-200 bg-white p-5" key={label}>
            <div className="flex justify-between gap-3">
              <p className="text-sm font-medium text-stone-500">{label}</p>
              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${index === 1 ? "bg-red-50 text-red-700" : "bg-orange-600 text-white"}`}>
                {index === 1 ? "Critical" : "Live"}
              </span>
            </div>
            <strong className="mt-5 block text-4xl font-semibold tracking-tight">{value}</strong>
            <p className="mt-2 text-sm leading-6 text-stone-600">{detail}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <article className="rounded-lg border border-stone-200 bg-white p-5">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-semibold">User growth by type</h3>
              <p className="mt-1 text-sm text-stone-600">Tenant and agent growth by weekly activity.</p>
            </div>
            <div className="flex gap-4 text-xs text-stone-600">
              <span className="inline-flex items-center gap-2"><i className="h-2.5 w-2.5 rounded-full bg-orange-600" /> Tenants</span>
              <span className="inline-flex items-center gap-2"><i className="h-2.5 w-2.5 rounded-full bg-stone-950" /> Agents</span>
            </div>
          </div>

          <div className="mt-8 flex h-64 items-end gap-4 border-b border-l border-stone-200 px-3 pb-3">
            {userGrowth.map((item) => (
              <div className="flex flex-1 flex-col items-center gap-2" key={item.week}>
                <div className="flex h-52 w-full items-end gap-1.5">
                  <div
                    className="flex-1 rounded-t-md bg-orange-600/85"
                    style={{ height: `${Math.max(8, (item.tenants / maxGrowth) * 100)}%` }}
                  />
                  <div
                    className="flex-1 rounded-t-md bg-stone-950"
                    style={{ height: `${Math.max(8, (item.agents / maxGrowth) * 100)}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-stone-500">{item.week}</span>
              </div>
            ))}
          </div>
        </article>

        <aside className="rounded-lg border border-stone-200 bg-white p-5">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold">Recent activity</h3>
            <span className="rounded-full bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-600">
              {auditLog.length} logs
            </span>
          </div>
          <div className="mt-5 grid gap-4">
            {recentActivities.map(([title, detail, time], index) => (
              <article className="grid grid-cols-[10px_1fr] gap-3" key={title}>
                <span className={`mt-2 h-2.5 w-2.5 rounded-full ${index === 1 ? "bg-red-600" : index === 2 ? "bg-stone-950" : "bg-orange-600"}`} />
                <div>
                  <h4 className="text-sm font-semibold">{title}</h4>
                  <p className="mt-1 text-sm leading-6 text-stone-600">{detail}</p>
                  <p className="mt-1 text-xs text-stone-500">{time}</p>
                </div>
              </article>
            ))}
          </div>
          <Link className="mt-5 inline-flex w-full justify-center rounded-lg border border-stone-200 px-4 py-3 text-sm font-medium" href="/admin/audit">
            View all logs
          </Link>
        </aside>
      </section>

      <section className="overflow-hidden rounded-lg border border-stone-200 bg-white">
        <div className="flex flex-col justify-between gap-4 border-b border-stone-200 p-5 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl font-semibold">Pending listings</h3>
            <p className="mt-1 text-sm text-stone-600">Approve or reject listings before they go public.</p>
          </div>
          <button className="rounded-lg border border-stone-200 bg-[#faf9f7] px-4 py-2 text-sm font-medium">
            Filter
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[780px] text-left text-sm">
            <thead className="bg-[#f4f3f1] text-xs uppercase text-stone-500">
              <tr>
                <th className="px-5 py-4 font-semibold">Property</th>
                <th className="px-5 py-4 font-semibold">Agent</th>
                <th className="px-5 py-4 font-semibold">Category</th>
                <th className="px-5 py-4 font-semibold">Price</th>
                <th className="px-5 py-4 text-right font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {pendingListings.map((listing) => {
                const agent = agents.find((item) => item.id === listing.agentId);
                return (
                  <tr className="hover:bg-[#faf9f7]" key={listing.id}>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <img className="h-12 w-16 rounded-md object-cover" src={listing.image} alt="" />
                        <div>
                          <p className="font-semibold">{listing.title}</p>
                          <p className="mt-1 text-xs text-stone-500">{listing.area}, {listing.county}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-stone-700">{agent?.name ?? "Assigned agent"}</td>
                    <td className="px-5 py-4">
                      <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700">
                        {listing.category}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-semibold">{formatKes(listing.price)}</td>
                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        <button
                          className="rounded-lg bg-orange-600 px-3 py-2 text-xs font-semibold text-white"
                          onClick={() => removePending(listing.id)}
                        >
                          Approve
                        </button>
                        <button
                          className="rounded-lg border border-stone-200 px-3 py-2 text-xs font-medium"
                          onClick={() => removePending(listing.id)}
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {pendingListings.length === 0 && (
                <tr>
                  <td className="px-5 py-8 text-center text-stone-600" colSpan={5}>
                    Queue cleared. No pending listings remain in this demo.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between gap-4 bg-[#f4f3f1] px-5 py-4">
          <p className="text-xs font-medium text-stone-600">
            Showing {pendingListings.length} of {dashboardStats[1].detail}
          </p>
          <div className="flex gap-2">
            <button className="rounded-md border border-stone-200 bg-white px-3 py-2 text-sm">Prev</button>
            <button className="rounded-md border border-stone-200 bg-white px-3 py-2 text-sm">Next</button>
          </div>
        </div>
      </section>
    </div>
  );
}
