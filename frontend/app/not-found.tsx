import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto grid min-h-[60vh] max-w-3xl place-items-center px-4 text-center">
      <div>
        <p className="text-sm font-semibold uppercase text-stone-500">404</p>
        <h1 className="mt-3 text-4xl font-semibold">This Kodisha page is not available</h1>
        <p className="mt-3 text-stone-600">The listing, agent profile or console page may have moved.</p>
        <Link className="mt-6 inline-flex rounded-md bg-orange-600 px-5 py-3 font-semibold text-white" href="/listings">
          Browse listings
        </Link>
      </div>
    </main>
  );
}
