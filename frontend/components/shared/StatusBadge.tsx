import type { ListingStatus } from "@/types";

const tones: Record<ListingStatus | string, string> = {
  Live: "bg-orange-600 text-white border-orange-600",
  "Under review": "bg-amber-50 text-amber-700 border-amber-100",
  Draft: "bg-stone-100 text-stone-700 border-stone-200",
  Rented: "bg-sky-50 text-sky-700 border-sky-100",
  Rejected: "bg-rose-50 text-rose-700 border-rose-100",
  Open: "bg-amber-50 text-amber-700 border-amber-100",
  Replied: "bg-orange-600 text-white border-orange-600",
  Closed: "bg-stone-100 text-stone-700 border-stone-200",
};

export function StatusBadge({ status }: { status: ListingStatus | string }) {
  return (
    <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${tones[status] ?? tones.Draft}`}>
      {status}
    </span>
  );
}
