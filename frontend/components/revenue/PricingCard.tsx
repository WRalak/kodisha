export function PricingCard({
  name,
  price,
  listings,
  perks,
  featured = false,
}: {
  name: string;
  price: string;
  listings: string;
  perks: string[];
  featured?: boolean;
}) {
  return (
    <article className={`rounded-lg border p-5 ${featured ? "border-orange-600 bg-orange-50" : "border-stone-200 bg-white"}`}>
      <span className="text-sm font-semibold uppercase text-stone-500">{name}</span>
      <strong className="mt-2 block text-3xl">{price}</strong>
      <p className="mt-1 text-sm font-medium text-stone-600">{listings} active listings</p>
      <ul className="mt-4 grid gap-2 text-sm text-stone-700">
        {perks.map((perk) => (
          <li className="font-medium" key={perk}>{perk}</li>
        ))}
      </ul>
      <button className="mt-5 w-full rounded-md bg-orange-600 px-4 py-3 font-semibold text-white">
        {featured ? "Current best fit" : "Choose plan"}
      </button>
    </article>
  );
}
