import Link from "next/link";
import { KodishaLogo } from "@/components/layout/KodishaLogo";

const navItems = [
  ["Overview", "/tenant"],
  ["Saved listings", "/tenant/favorites"],
  ["My inquiries", "/tenant/inquiries"],
  ["Recommendations", "/listings"],
  ["Settings", "/tenant"],
];

export default function TenantLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#faf9f7] text-stone-950">
      <aside className="fixed left-0 top-0 z-30 hidden h-full w-64 flex-col border-r border-stone-200 bg-[#efeeeb] p-5 md:flex">
        <KodishaLogo />
        <div className="mt-8 rounded-lg border border-stone-200 bg-white p-4">
          <p className="text-sm font-semibold">Tenant account</p>
          <p className="mt-1 text-sm leading-6 text-stone-600">
            Saved homes, inquiry replies and property matches.
          </p>
        </div>
        <nav className="mt-5 grid gap-1">
          {navItems.map(([label, href], index) => (
            <Link
              className={`rounded-lg px-4 py-3 text-sm font-medium ${
                index === 0 ? "bg-stone-950 text-white" : "text-stone-700 hover:bg-white"
              }`}
              href={href}
              key={`${label}-${href}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto grid gap-3 border-t border-stone-200 pt-5">
          <Link className="rounded-lg bg-orange-600 px-4 py-3 text-center text-sm font-semibold text-white" href="/listings">
            Browse properties
          </Link>
          <Link className="rounded-lg border border-stone-200 bg-white px-4 py-3 text-center text-sm font-medium" href="/">
            Back to site
          </Link>
        </div>
      </aside>

      <section className="min-h-screen pb-24 md:ml-64 md:pb-0">{children}</section>

      <nav className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 gap-1 rounded-full border border-stone-200 bg-stone-950 p-1.5 shadow-lg md:hidden">
        {[
          ["Home", "/tenant"],
          ["Saved", "/tenant/favorites"],
          ["Inbox", "/tenant/inquiries"],
          ["Browse", "/listings"],
        ].map(([label, href]) => (
          <Link
            className="rounded-full px-3 py-2 text-xs font-medium text-white"
            href={href}
            key={`${label}-${href}`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </main>
  );
}
