import type { Role } from "@/types";

export const roleLabels: Record<Role, string> = {
  guest: "Guest",
  tenant: "Tenant",
  agent: "Agent",
  admin: "Admin",
  "super-admin": "Super Admin",
};

export const permissions = [
  { action: "Browse listings", roles: ["guest", "tenant", "agent", "admin", "super-admin"] },
  { action: "Send inquiry", roles: ["tenant", "super-admin"] },
  { action: "Post listing", roles: ["agent", "admin", "super-admin"] },
  { action: "Approve listing", roles: ["admin", "super-admin"] },
  { action: "Approve agent", roles: ["admin", "super-admin"] },
  { action: "Delete content", roles: ["super-admin"] },
  { action: "Manage admins", roles: ["super-admin"] },
  { action: "View audit log", roles: ["super-admin"] },
  { action: "Request payout", roles: ["agent", "super-admin"] },
  { action: "Leave review", roles: ["tenant", "super-admin"] },
] satisfies { action: string; roles: Role[] }[];
