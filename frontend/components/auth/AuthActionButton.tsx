"use client";

import { useRouter } from "next/navigation";
import { useAppState } from "@/contexts/AppStateProvider";
import type { Role } from "@/types";

export function AuthActionButton({
  children,
  next,
  role,
}: {
  children: React.ReactNode;
  next: string;
  role: Role;
}) {
  const router = useRouter();
  const { setRole } = useAppState();

  return (
    <button
      className="min-h-12 rounded-lg bg-orange-600 px-4 font-semibold text-white"
      onClick={() => {
        setRole(role);
        router.push(next);
      }}
      type="button"
    >
      {children}
    </button>
  );
}
