"use client";

import Link from "next/link";
import { useAppState } from "@/contexts/AppStateProvider";

type AgentEngagementGateProps = {
  agentName?: string;
  children: React.ReactNode;
};

export function AgentEngagementGate({ agentName = "this agent", children }: AgentEngagementGateProps) {
  const { role } = useAppState();
  const canEngage = role === "tenant" || role === "admin" || role === "super-admin";

  if (canEngage) {
    return <>{children}</>;
  }

  return (
    <section className="rounded-lg border border-orange-200 bg-orange-50 p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-stone-500">
        Login required
      </p>
      <h3 className="mt-2 text-xl font-semibold text-stone-950">
        Sign in to engage {agentName}
      </h3>
      <p className="mt-2 text-sm leading-6 text-stone-700">
        Guests can browse listings and profiles, but inquiries, direct contact and viewing requests require a tenant account.
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <Link className="rounded-lg bg-orange-600 px-4 py-3 text-center text-sm font-semibold text-white" href="/auth/login">
          Login
        </Link>
        <Link className="rounded-lg border border-orange-600 px-4 py-3 text-center text-sm font-semibold text-orange-700" href="/auth/tenant-register">
          Create tenant account
        </Link>
      </div>
    </section>
  );
}
