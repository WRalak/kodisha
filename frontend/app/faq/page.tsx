export default function FaqPage() {
  const questions = [
    ["Can guests contact agents?", "No. Guests can browse public listings, but enquiries and direct contact require login."],
    ["How long does agent verification take?", "The approval target is 1-2 days after ID and business details are submitted."],
    ["Who can delete listings?", "Only Super Admins can delete content permanently."],
  ];
  return <main className="mx-auto max-w-3xl px-4 py-16"><h1 className="text-4xl font-semibold">FAQ</h1><div className="mt-6 grid gap-3">{questions.map(([q, a]) => <article className="rounded-lg border border-stone-200 bg-white p-5" key={q}><h2 className="font-semibold">{q}</h2><p className="mt-2 text-stone-600">{a}</p></article>)}</div></main>;
}
