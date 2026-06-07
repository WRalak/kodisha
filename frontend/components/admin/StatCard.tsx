export function StatCard({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="rounded-lg border border-stone-200 bg-white p-5">
      <span className="text-xs font-semibold uppercase text-stone-500">{label}</span>
      <strong className="mt-2 block text-3xl">{value}</strong>
      <p className="mt-2 text-sm text-stone-600">{detail}</p>
    </div>
  );
}
