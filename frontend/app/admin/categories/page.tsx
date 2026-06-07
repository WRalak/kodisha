import { CategoryPill } from "@/components/shared/CategoryPill";
import { categories } from "@/lib/categories";

export default function CategoriesPage() {
  return <><h1 className="text-3xl font-semibold">Categories and colors</h1><div className="mt-5 grid gap-3 rounded-lg border border-stone-200 bg-white p-5">{categories.map((category) => <div className="flex items-center justify-between gap-4" key={category.slug}><CategoryPill name={category.name} color={category.color} /><button className="rounded-md border border-stone-200 px-3 py-2 text-sm font-semibold">Edit</button></div>)}</div></>;
}
