export function BoostPackageCard({
  name,
  displayPrice,
  duration,
  placement,
}: {
  name: string;
  displayPrice: string;
  duration: string;
  placement: string;
}) {
  return (
    <article className="rounded-lg border border-stone-200 bg-white p-5">
      <h3 className="text-xl font-semibold">{name}</h3>
      <strong className="mt-2 block text-3xl">{displayPrice}</strong>
      <p className="mt-1 text-sm font-medium text-stone-500">{duration}</p>
      <p className="mt-4 min-h-12 text-sm leading-6 text-stone-600">{placement}</p>
      <button className="mt-5 w-full rounded-md border border-stone-200 px-4 py-3 font-semibold">
        Boost listing
      </button>
    </article>
  );
}
