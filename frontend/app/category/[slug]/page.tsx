import { PropertyGrid } from "@/components/listing/PropertyGrid";
import { categories } from "@/lib/categories";
import { listings } from "@/lib/mockData";
import { notFound } from "next/navigation";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (!category) notFound();
  const filtered = listings.filter((listing) => listing.category === category.name);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <p className="text-sm font-semibold uppercase" style={{ color: category.color }}>Category</p>
      <h1 className="mt-2 text-4xl font-semibold">{category.name}</h1>
      <div className="mt-6">
        <PropertyGrid listings={filtered.length ? filtered : listings} />
      </div>
    </main>
  );
}
