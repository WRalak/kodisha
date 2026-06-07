import Link from "next/link";

const managedProperties = [
  {
    id: "kilimani-2-bed",
    title: "Safari Heights Villa",
    category: "Residential",
    location: "Karen, Nairobi",
    price: "KSh 250k/mo",
    detail: "4 beds - 3 baths - 3,200 sqft",
    status: "Live",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "westlands-office",
    title: "The Exchange Office",
    category: "Commercial",
    location: "Upper Hill, Nairobi",
    price: "KSh 180k/mo",
    detail: "25 seats - 4 rooms - 1,850 sqft",
    status: "Review",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "naivasha-agricultural-land",
    title: "Maji Mazuri Estate",
    category: "Land",
    location: "Naivasha, Nakuru",
    price: "KSh 1.2M/acre",
    detail: "Water access - Fenced - 10 acres",
    status: "Featured",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "nyali-maisonette",
    title: "Nyali Serviced Maisonette",
    category: "Hospitality",
    location: "Nyali, Mombasa",
    price: "KSh 140k/mo",
    detail: "4 beds - Pool - Furnished",
    status: "Live",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80",
  },
];

const stats = [
  ["384", "verified agents"],
  ["2,400+", "managed listings"],
  ["1,092", "tenant inquiries"],
];

const agentCompanies = [
  {
    id: "aisha",
    name: "Aisha Njeri",
    company: "Njeri Homes",
    focus: "Residential apartments and family homes",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "mercy",
    name: "Mercy Wairimu",
    company: "Metro Commercial",
    focus: "Offices, retail and mixed-use portfolios",
    image:
      "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "daniel",
    name: "Daniel Otieno",
    company: "Coastline Realty",
    focus: "Coastal rentals and hospitality properties",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Home() {
  return (
    <main className="bg-[#faf9f7] text-stone-950">
      <section className="border-b border-stone-200 py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative min-h-[640px] overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-sm">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
              alt="Modern managed house exterior"
            />
            <div className="absolute inset-0 bg-black/35" />
            <div className="relative flex min-h-[640px] flex-col justify-end p-5 text-white md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                Kodisha for real estate agents
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-4xl">
                A clean property desk for everything you manage.
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-normal leading-8 text-white/82">
                Show your managed portfolio, keep listings organized, respond to
                tenant interest, and track the work that turns properties into
                completed rentals.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-lg bg-orange-600 px-5 text-sm font-semibold text-white"
                  href="/list-property"
                >
                  List a property
                </Link>
                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/40 bg-white/95 px-5 text-sm font-semibold text-stone-900"
                  href="/listings"
                >
                  View managed properties
                </Link>
              </div>

              <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
                {stats.map(([value, label]) => (
                  <div className="rounded-lg border border-white/20 bg-white/92 p-4 text-stone-950" key={label}>
                    <strong className="block text-xl font-semibold">{value}</strong>
                    <span className="text-sm font-medium text-stone-500">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#faf9f7] py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
                Portfolio preview
              </p>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Managed properties</h2>
              <p className="mt-2 max-w-2xl text-stone-600">
                A polished public view for tenants, landlords and teams to see
                what an agent is managing.
              </p>
            </div>
            <Link className="rounded-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white" href="/listings">
              Open properties
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {managedProperties.map((listing) => (
              <Link
                className="overflow-hidden rounded-xl border border-stone-200 bg-white transition hover:-translate-y-1 hover:shadow-md"
                key={listing.title}
                href={`/listing/${listing.id}`}
              >
                <img className="h-32 w-full object-cover" src={listing.image} alt="" />
                <div className="p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase text-stone-500">
                      {listing.category}
                    </span>
                    <span className="rounded-full bg-stone-100 px-2 py-1 text-xs font-medium text-stone-600">
                      {listing.status}
                    </span>
                  </div>
                  <h3 className="mt-3 min-h-11 text-base font-semibold leading-tight">
                    {listing.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-stone-500">{listing.location}</p>
                  <div className="mt-4 flex items-end justify-between gap-3 border-t border-stone-100 pt-3">
                    <span className="text-xs font-medium text-stone-500">{listing.detail}</span>
                    <strong className="text-sm font-semibold">{listing.price}</strong>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf9f7] py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
                Agent companies
              </p>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Managed by professionals</h2>
              <p className="mt-2 max-w-2xl text-stone-600">
                Show the people and companies behind each portfolio.
              </p>
            </div>
            <Link className="rounded-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white" href="/top-agents">
              View agents
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {agentCompanies.map((agent) => (
              <Link
                className="grid gap-4 rounded-xl border border-stone-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-md"
                href={`/agent/${agent.id}`}
                key={agent.id}
              >
                <div className="flex items-center gap-3">
                  <img className="h-14 w-14 rounded-full object-cover" src={agent.image} alt="" />
                  <div>
                    <h3 className="font-semibold">{agent.company}</h3>
                    <p className="text-sm font-medium text-stone-500">{agent.name}</p>
                  </div>
                </div>
                <p className="text-sm leading-6 text-stone-600">{agent.focus}</p>
                <span className="w-fit rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold text-white">
                  Verified company
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-950 py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
              Agent-ready
            </p>
            <h2 className="mt-2 max-w-2xl text-2xl font-semibold md:text-3xl">
              Start with a portfolio. Grow into a full operating desk.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link className="rounded-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white" href="/auth/register">
              Register agent
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
