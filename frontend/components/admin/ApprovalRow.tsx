import { StatusBadge } from "@/components/shared/StatusBadge";

export function ApprovalRow({ title, detail, status }: { title: string; detail: string; status: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-stone-200 bg-white p-4">
      <div>
        <strong className="block">{title}</strong>
        <p className="mt-1 text-sm text-stone-600">{detail}</p>
      </div>
      <StatusBadge status={status} />
    </div>
  );
}
