import { permissions, roleLabels } from "@/lib/auth";

export default function RolesPage() {
  return <><h1 className="text-3xl font-semibold">Roles and permissions</h1><div className="mt-5 grid gap-3">{permissions.map((permission) => <article className="rounded-lg border border-stone-200 bg-white p-4" key={permission.action}><strong>{permission.action}</strong><div className="mt-2 flex flex-wrap gap-2">{permission.roles.map((role) => <span className="rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold text-white" key={role}>{roleLabels[role]}</span>)}</div></article>)}</div></>;
}
