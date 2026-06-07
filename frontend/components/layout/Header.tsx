"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { KodishaLogo } from "@/components/layout/KodishaLogo";
import { SearchControl } from "@/components/shared/SearchControl";

type NavRole = "guest" | "tenant" | "agent" | "admin";
type NavLink = [string, string];

const publicLinks: NavLink[] = [
  ["Listings", "/listings"],
  ["Top Agents", "/top-agents"],
  ["How it Works", "/how-it-works"],
  ["About", "/about"],
];

const tenantLinks: NavLink[] = [
  ["Listings", "/listings"],
  ["Top Agents", "/top-agents"],
  ["How it Works", "/how-it-works"],
];

const agentLinks: NavLink[] = [
  ["Listings", "/listings"],
  ["Top Agents", "/top-agents"],
];

function getRole(pathname: string): NavRole {
  if (pathname.startsWith("/admin")) return "admin";
  if (pathname.startsWith("/dashboard")) return "agent";
  if (pathname.startsWith("/tenant")) return "tenant";
  return "guest";
}

function Logo() {
  return <KodishaLogo />;
}

function NavItem({ active = false, href, label }: { active?: boolean; href: string; label: string }) {
  return (
    <Link
      className={`border-b-2 px-3 py-2 text-sm font-medium transition ${
        active
          ? "border-orange-600 text-stone-950"
          : "border-transparent text-stone-700 hover:border-orange-600 hover:text-stone-950"
      }`}
      href={href}
    >
      {label}
    </Link>
  );
}

function AvatarMenu({ role }: { role: NavRole }) {
  const links: NavLink[] =
    role === "tenant"
      ? [
          ["My Profile", "/tenant/inquiries"],
          ["My Favorites", "/tenant/favorites"],
          ["My Inquiries", "/tenant/inquiries"],
        ]
      : role === "agent"
        ? [
            ["My Dashboard", "/dashboard"],
            ["My Listings", "/dashboard/listings"],
            ["Add Listing", "/dashboard/add-listing"],
            ["View My Profile", "/agent/aisha"],
            ["Settings", "/dashboard/settings"],
          ]
        : [["Admin Dashboard", "/admin"]];

  return (
    <details className="relative">
      <summary className="flex h-10 cursor-pointer list-none items-center gap-2 rounded-lg border border-stone-200 bg-[#faf9f7] px-2.5 text-sm font-medium text-stone-800">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-stone-950 text-xs text-white">
          {role === "admin" ? "A" : role === "agent" ? "RA" : "T"}
        </span>
        <span className="hidden lg:inline">Account</span>
      </summary>
      <div className="absolute right-0 top-12 z-30 grid min-w-48 gap-1 rounded-lg border border-stone-200 bg-white p-2 shadow-lg">
        {links.map(([label, href]) => (
          <Link className="rounded-md px-3 py-2 text-sm font-medium hover:bg-stone-100" href={href} key={`${label}-${href}`}>
            {label}
          </Link>
        ))}
        <button className="rounded-md px-3 py-2 text-left text-sm font-medium hover:bg-stone-100">
          Sign Out
        </button>
      </div>
    </details>
  );
}

function NotificationBell({ admin = false }: { admin?: boolean }) {
  return (
    <Link
      aria-label="Notifications"
      className="relative inline-flex h-10 items-center rounded-lg border border-stone-200 bg-[#faf9f7] px-3 text-sm font-medium text-stone-700"
      href={admin ? "/admin" : "/dashboard/inquiries"}
    >
      Alerts
      <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-orange-600 px-1 text-[10px] font-semibold text-white">
        {admin ? 3 : 8}
      </span>
    </Link>
  );
}

function MobileDrawer({
  role,
  open,
  onClose,
}: {
  role: NavRole;
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  const roleLinks: NavLink[] =
    role === "guest"
      ? [...publicLinks, ["Search", "/listings"], ["Login", "/auth/login"], ["List Property", "/list-property"]]
      : role === "tenant"
        ? [
            ...tenantLinks,
            ["Search", "/listings"],
            ["Favorites", "/tenant/favorites"],
            ["Inquiries", "/tenant/inquiries"],
            ["My Profile", "/tenant/inquiries"],
            ["Sign Out", "/"],
          ]
        : role === "agent"
          ? [
              ...agentLinks,
              ["Search", "/listings"],
              ["Alerts", "/dashboard/inquiries"],
              ["Dashboard", "/dashboard"],
              ["My Listings", "/dashboard/listings"],
              ["Add Listing", "/dashboard/add-listing"],
              ["Settings", "/dashboard/settings"],
              ["Sign Out", "/"],
            ]
          : [
              ["Back to Site", "/"],
              ["Alerts", "/admin"],
              ["Admin Dashboard", "/admin"],
              ["Sign Out", "/"],
            ];

  return (
    <div className="fixed inset-0 z-50 bg-[#f5f3ef] px-4 py-4 md:hidden">
      <div className="flex items-center justify-between">
        <Logo />
        <button className="rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm font-medium" onClick={onClose}>
          Close
        </button>
      </div>
      <nav className="mt-8 grid gap-2">
        {roleLinks.map(([label, href]) => (
          <Link
            className="rounded-lg border border-stone-200 bg-white px-4 py-4 text-lg font-semibold"
            href={href}
            key={`${label}-${href}`}
            onClick={onClose}
          >
            {label}
          </Link>
        ))}
      </nav>
      {role !== "guest" && (
        <div className="absolute bottom-6 left-4 right-4 rounded-lg bg-stone-950 p-4 text-sm font-medium text-white">
          Signed in as {role === "admin" ? "ADMIN" : role === "agent" ? "Agent" : "Tenant"}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const role = getRole(pathname);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mainLinks = role === "guest" ? publicLinks : role === "tenant" ? tenantLinks : agentLinks;
  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header className="sticky top-0 z-20 border-b border-stone-200 bg-[#faf9f7]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
        <Logo />

        {role === "admin" ? (
          <div className="hidden flex-1 items-center justify-between md:flex">
            <NavItem active={pathname === "/"} href="/" label="Back to Site" />
            <div className="flex items-center gap-2">
              <NotificationBell admin />
              <AvatarMenu role={role} />
              <span className="rounded-lg bg-stone-950 px-3 py-2 text-xs font-semibold text-white">
                ADMIN
              </span>
            </div>
          </div>
        ) : (
          <>
            <nav className="hidden items-center gap-1 md:flex">
              {mainLinks.map(([label, href]) => (
                <NavItem active={isActive(href)} href={href} label={label} key={href} />
              ))}
            </nav>

            <div className="hidden items-center gap-2 md:flex">
              <SearchControl className="w-72" placeholder="Search listings or agents" />
              {role === "guest" && (
                <>
                  <NavItem active={isActive("/auth/login")} href="/auth/login" label="Login" />
                  <Link className="rounded-lg bg-stone-950 px-4 py-2 text-sm font-semibold text-white" href="/list-property">
                    List Property
                  </Link>
                </>
              )}
              {role === "tenant" && (
                <>
                  <NavItem active={isActive("/tenant/favorites")} href="/tenant/favorites" label="Favorites" />
                  <NavItem active={isActive("/tenant/inquiries")} href="/tenant/inquiries" label="Inquiries" />
                  <AvatarMenu role={role} />
                </>
              )}
              {role === "agent" && (
                <>
                  <NotificationBell />
                  <Link className="rounded-lg bg-stone-950 px-4 py-2 text-sm font-semibold text-white" href="/dashboard">
                    Dashboard
                  </Link>
                  <AvatarMenu role={role} />
                </>
              )}
            </div>
          </>
        )}

        <button
          className="rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm font-medium md:hidden"
          onClick={() => setMobileOpen(true)}
        >
          Menu
        </button>
      </div>

      <MobileDrawer role={role} open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
