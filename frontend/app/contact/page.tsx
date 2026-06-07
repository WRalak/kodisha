export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-semibold">Contact Kodisha</h1>
      <div className="mt-6 grid gap-3 rounded-lg border border-stone-200 bg-white p-5">
        <input className="rounded-md border border-stone-200 px-3 py-2" placeholder="Name" />
        <input className="rounded-md border border-stone-200 px-3 py-2" placeholder="Email" />
        <textarea className="min-h-32 rounded-md border border-stone-200 px-3 py-2" placeholder="Message" />
        <button className="rounded-md bg-orange-600 px-4 py-3 font-semibold text-white">Send message</button>
      </div>
    </main>
  );
}
