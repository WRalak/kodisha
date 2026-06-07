import { StatusBadge } from "@/components/shared/StatusBadge";
import { inquiries } from "@/lib/mockData";

export default function TenantInquiriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
      <h1 className="text-2xl font-semibold">Inquiry history</h1>
      <p className="mt-2 text-stone-600">Track replies from agents and follow up on active property conversations.</p>
      <div className="mt-5 grid gap-3">
        {inquiries.map((inquiry) => (
          <article className="rounded-lg border border-stone-200 bg-white p-4" key={inquiry.id}>
            <div className="flex items-center justify-between gap-4"><strong>{inquiry.listing}</strong><StatusBadge status={inquiry.status} /></div>
            <p className="mt-1 text-sm text-stone-600">{inquiry.received}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
