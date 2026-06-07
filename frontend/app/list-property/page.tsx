import { StepIndicator } from "@/components/shared/StepIndicator";
import Link from "next/link";

const requirements = [
  "Verified agent or owner account",
  "Property location, rent and category",
  "Clear photos and amenities",
  "Ownership or authority-to-list details",
];

const listingBenefits = [
  ["Free start", "Publish up to 3 active listings on the free tier."],
  ["Admin review", "Kodisha reviews listings before they appear publicly."],
  ["Earn first", "Kodisha takes 5% only after a rental is completed."],
];

export default function ListPropertyPage() {
  return (
    <main className="bg-[#faf9f7]">
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 lg:grid-cols-[1fr_420px]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
            List a property
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight">
            Put your property in front of serious tenants.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#434655]">
            This is the entry point for agents and owners who want to submit a
            rental, commercial space, land parcel or short-stay listing for
            Kodisha review.
          </p>

          <div className="mt-8 rounded-lg border border-stone-200 bg-white p-5">
            <StepIndicator steps={["Account", "Property", "Photos", "Review"]} current={1} />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {listingBenefits.map(([title, text]) => (
              <article className="rounded-lg border border-stone-200 bg-white p-5" key={title}>
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#434655]">{text}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="grid content-start gap-5">
          <section className="rounded-lg border border-stone-200 bg-white p-5">
            <h2 className="text-2xl font-semibold">Before you submit</h2>
            <ul className="mt-5 grid gap-3">
              {requirements.map((item) => (
                <li className="rounded-md bg-[#f4f3f1] px-3 py-2 text-sm font-medium" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-lg bg-stone-950 p-5 text-white">
            <h2 className="text-2xl font-semibold">Already verified?</h2>
            <p className="mt-3 text-sm leading-6 text-white/75">
              Go straight to the agent dashboard and create a listing from the
              multi-step property form.
            </p>
            <Link
              className="mt-5 inline-flex w-full justify-center rounded-md bg-orange-600 px-4 py-3 font-semibold text-white"
              href="/dashboard/add-listing"
            >
              Open listing form
            </Link>
          </section>

          <section className="rounded-lg border border-stone-200 bg-white p-5">
            <h2 className="text-xl font-semibold">Need agent access?</h2>
            <p className="mt-2 text-sm leading-6 text-[#434655]">
              Create or login to a normal account first, then apply to become a
              verified agent before listings go live.
            </p>
            <Link
              className="mt-5 inline-flex w-full justify-center rounded-md border border-stone-200 px-4 py-3 font-semibold"
              href="/auth/login"
            >
              Login first
            </Link>
            <Link
              className="mt-3 inline-flex w-full justify-center rounded-md border border-orange-600 px-4 py-3 font-semibold text-orange-700"
              href="/auth/register"
            >
              Become an agent
            </Link>
          </section>
        </aside>
      </section>
    </main>
  );
}
