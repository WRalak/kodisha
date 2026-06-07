export default function AboutPage() {
  return <InfoPage title="About Kodisha" text="Kodisha is a Kenya-focused rental marketplace that verifies agents, moderates listings and gives tenants a cleaner way to find homes." />;
}

function InfoPage({ title, text }: { title: string; text: string }) {
  return <main className="mx-auto max-w-3xl px-4 py-16"><h1 className="text-4xl font-semibold">{title}</h1><p className="mt-4 text-lg leading-8 text-stone-600">{text}</p></main>;
}
