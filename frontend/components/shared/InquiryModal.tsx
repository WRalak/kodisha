export function InquiryModal({ listingTitle }: { listingTitle: string }) {
  return (
    <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold">Send inquiry</h3>
      <p className="mt-1 text-sm text-stone-600">{listingTitle}</p>
      <div className="mt-4 grid gap-3">
        <input className="rounded-md border border-stone-200 px-3 py-2" placeholder="Your name" />
        <input className="rounded-md border border-stone-200 px-3 py-2" placeholder="Phone or email" />
        <textarea className="min-h-28 rounded-md border border-stone-200 px-3 py-2" placeholder="Viewing request" />
        <button className="rounded-md bg-orange-600 px-4 py-3 font-semibold text-white">Send to agent</button>
      </div>
    </div>
  );
}
