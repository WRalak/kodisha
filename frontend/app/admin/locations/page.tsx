import { CountyMap } from "@/components/admin/CountyMap";

export default function LocationsPage() {
  return <><h1 className="text-3xl font-semibold">Location management</h1><p className="mt-2 text-stone-600">Manage areas, county coverage and location quality.</p><div className="mt-5"><CountyMap /></div></>;
}
