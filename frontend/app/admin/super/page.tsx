import Link from "next/link";
import { revenueMetrics } from "@/lib/revenue";

const revenueSplit = [
  ["Transaction commissions", "65%", "bg-orange-600"],
  ["Agent subscriptions", "25%", "bg-stone-950"],
  ["Featured boosts", "10%", "bg-stone-400"],
];

const systemAlerts = [
  {
    level: "Critical",
    title: "API latency",
    detail: "Payment callback checks are above normal response time.",
    tone: "border-red-500 bg-red-50 text-red-800",
  },
  {
    level: "Warning",
    title: "Signup spike",
    detail: "Nairobi tenant registration volume increased sharply.",
    tone: "border-amber-500 bg-amber-50 text-amber-800",
  },
  {
    level: "Info",
    title: "Backup complete",
    detail: "Production data snapshot and export job completed.",
    tone: "border-stone-300 bg-[#faf9f7] text-stone-700",
  },
];

const featureFlags = [
  ["M-Pesa payouts", "Allow agent commission payout requests.", true],
  ["AI listing helper", "Assist agents with polished property descriptions.", true],
  ["Maintenance mode", "Temporarily pause public actions during upgrades.", false],
  ["Tenant lead sales", "Enable paid pre-qualified tenant leads.", false],
];

export default function SuperAdminPage() {
  return (
    <div className="grid gap-8">
      <section className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
            Super Admin
          </p>
          <h2 className="mt-1 text-3xl font-semibold">Command Center</h2>
          <p className="mt-2 max-w-2xl text-stone-600">
            Platform-wide financials, system health, feature controls and global administration.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-600" />
          </span>
          <span className="text-sm font-medium text-green-700">Platform live: 99.9% uptime</span>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-lg border border-stone-200 bg-white p-5">
          <div className="flex justify-between gap-4">
            <p className="text-sm font-medium text-stone-500">Total platform revenue</p>
            <span className="text-sm font-semibold text-orange-600">+12.5%</span>
          </div>
          <strong className="mt-6 block text-3xl font-semibold tracking-tight">
            {revenueMetrics[0]?.value ?? "KSh 507,994"}
          </strong>
          <p className="mt-2 text-sm text-stone-600">Commissions, boosts, subscriptions and verification fees.</p>
        </article>

        <article className="rounded-lg border border-stone-200 bg-white p-5">
          <p className="text-sm font-medium text-stone-500">Active platform users</p>
          <strong className="mt-6 block text-3xl font-semibold tracking-tight">42,904</strong>
          <p className="mt-2 text-sm text-stone-600">Tenants, agents, admins and pending applicants.</p>
        </article>

        <article className="rounded-lg border border-stone-200 bg-white p-5">
          <div className="flex justify-between text-sm">
            <p className="font-medium text-stone-500">System health index</p>
            <span className="font-semibold text-green-700">Stable</span>
          </div>
          <div className="mt-6 grid gap-3">
            {["Main database", "Asset storage", "M-Pesa callbacks"].map((item, index) => (
              <div key={item}>
                <div className="flex justify-between text-xs text-stone-600">
                  <span>{item}</span>
                  <span>{index === 2 ? "91%" : "Optimal"}</span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-stone-100">
                  <div className={`h-full rounded-full ${index === 2 ? "w-[91%]" : "w-[96%]"} bg-orange-600`} />
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <article className="rounded-lg border border-stone-200 bg-white p-5">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-semibold">Revenue by category</h3>
              <p className="mt-1 text-sm text-stone-600">Primary streams across the Kodisha business model.</p>
            </div>
            <div className="flex gap-2">
              <button className="rounded-full border border-stone-200 px-3 py-2 text-xs font-medium">Download CSV</button>
              <Link className="rounded-full bg-orange-600 px-3 py-2 text-xs font-semibold text-white" href="/admin/revenue">
                Full report
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-[260px_1fr] md:items-center">
            <div className="relative mx-auto h-56 w-56 rounded-full bg-[conic-gradient(#ea580c_0_65%,#1c1917_65%_90%,#a8a29e_90%_100%)]">
              <div className="absolute inset-8 grid place-items-center rounded-full bg-white text-center">
                <div>
                  <strong className="block text-2xl font-semibold">KSh 508k</strong>
                  <span className="text-xs uppercase tracking-[0.16em] text-stone-500">Monthly</span>
                </div>
              </div>
            </div>
            <div className="grid gap-3">
              {revenueSplit.map(([label, percent, color]) => (
                <div className="flex items-center justify-between rounded-lg bg-[#faf9f7] p-4" key={label}>
                  <div className="flex items-center gap-3">
                    <span className={`h-3 w-3 rounded-full ${color}`} />
                    <span className="font-medium">{label}</span>
                  </div>
                  <strong className="font-semibold">{percent}</strong>
                </div>
              ))}
            </div>
          </div>
        </article>

        <aside className="rounded-lg border border-stone-200 bg-white p-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold">System alerts</h3>
            <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700">Active</span>
          </div>
          <div className="mt-5 grid gap-3">
            {systemAlerts.map((alert) => (
              <article className={`rounded-lg border-l-4 p-4 ${alert.tone}`} key={alert.title}>
                <div className="flex justify-between gap-3">
                  <h4 className="text-sm font-semibold">{alert.level}: {alert.title}</h4>
                  <span className="text-xs opacity-70">Now</span>
                </div>
                <p className="mt-1 text-sm leading-6">{alert.detail}</p>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="rounded-lg border border-stone-200 bg-white p-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl font-semibold">Global feature flags</h3>
            <p className="mt-1 text-sm text-stone-600">Super Admin controls for product-wide platform features.</p>
          </div>
          <Link className="rounded-lg border border-stone-200 px-4 py-3 text-sm font-medium" href="/admin/settings">
            Open system settings
          </Link>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featureFlags.map(([name, detail, enabled]) => (
            <article className="flex justify-between gap-4 rounded-lg border border-stone-200 p-4" key={name.toString()}>
              <div>
                <h4 className="font-semibold">{name}</h4>
                <p className="mt-1 text-sm leading-6 text-stone-600">{detail}</p>
              </div>
              <span
                className={`mt-1 h-6 w-11 shrink-0 rounded-full p-1 ${
                  enabled ? "bg-orange-600" : "bg-stone-200"
                }`}
              >
                <span className={`block h-4 w-4 rounded-full bg-white ${enabled ? "ml-5" : ""}`} />
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["Admin management", "Create, remove and assign platform admin roles.", "/admin/admins"],
          ["Audit export", "Review the full log and prepare platform data exports.", "/admin/audit"],
          ["Location control", "Manage counties, areas and coverage quality.", "/admin/locations"],
        ].map(([title, detail, href]) => (
          <Link className="rounded-lg border border-stone-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md" href={href} key={title}>
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-stone-600">{detail}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
