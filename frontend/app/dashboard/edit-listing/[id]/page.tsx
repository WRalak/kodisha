import { listings } from "@/lib/mockData";
import { notFound } from "next/navigation";

export default async function EditListingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const listing = listings.find((item) => item.id === id);
  if (!listing) notFound();
  return (
    <>
      <h1 className="text-3xl font-semibold">Edit listing</h1>
      <section className="mt-5 grid gap-3 rounded-lg border border-stone-200 bg-white p-5">
        <input className="rounded-md border border-stone-200 px-3 py-2" defaultValue={listing.title} />
        <input className="rounded-md border border-stone-200 px-3 py-2" defaultValue={listing.area} />
        <p className="text-sm font-medium text-amber-700">Listings under review cannot be edited until moderation is complete.</p>
        <button className="rounded-md bg-orange-600 px-4 py-3 font-semibold text-white">Save changes</button>
      </section>
    </>
  );
}
