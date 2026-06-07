import { StatusBadge } from "@/components/shared/StatusBadge";
import { inquiries } from "@/lib/mockData";

export default function DashboardInquiriesPage() {
  return <><h1 className="text-3xl font-semibold">Tenant inquiries</h1><div className="mt-5 grid gap-3">{inquiries.map((inquiry) => <article className="rounded-lg border border-stone-200 bg-white p-4" key={inquiry.id}><div className="flex items-center justify-between gap-4"><strong>{inquiry.tenant}</strong><StatusBadge status={inquiry.status} /></div><p className="mt-1 text-stone-600">{inquiry.listing} · {inquiry.received}</p><button className="mt-3 rounded-md border border-stone-200 px-3 py-2 text-sm font-semibold">Reply</button></article>)}</div></>;
}
