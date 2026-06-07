import { ImageUpload } from "@/components/shared/ImageUpload";
import { StepIndicator } from "@/components/shared/StepIndicator";

export default function AddListingPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold">Add listing</h1>
      <section className="mt-5 rounded-lg border border-stone-200 bg-white p-5">
        <StepIndicator steps={["Details", "Location", "Photos", "Submit"]} current={0} />
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <input className="rounded-md border border-stone-200 px-3 py-2" placeholder="Property title" />
          <input className="rounded-md border border-stone-200 px-3 py-2" placeholder="Monthly rent" />
          <input className="rounded-md border border-stone-200 px-3 py-2" placeholder="County" />
          <input className="rounded-md border border-stone-200 px-3 py-2" placeholder="Area" />
          <div className="md:col-span-2"><ImageUpload /></div>
          <button className="rounded-md bg-orange-600 px-4 py-3 font-semibold text-white md:col-span-2">Submit for review</button>
        </div>
      </section>
    </>
  );
}
