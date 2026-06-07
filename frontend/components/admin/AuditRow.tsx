import type { AuditEntry } from "@/types";

export function AuditRow({ entry }: { entry: AuditEntry }) {
  return (
    <div className="rounded-lg border border-stone-200 bg-white p-4">
      <div className="flex items-center justify-between gap-4">
        <strong>{entry.action}</strong>
        <span className="text-sm text-stone-500">{entry.time}</span>
      </div>
      <p className="mt-1 text-sm text-stone-600">{entry.actor} on {entry.target}</p>
    </div>
  );
}
