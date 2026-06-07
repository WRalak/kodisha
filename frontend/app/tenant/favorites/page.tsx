import { TenantFavoritesList } from "@/components/tenant/TenantFavoritesList";
import { listings } from "@/lib/mockData";

export default function FavoritesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
      <h1 className="text-2xl font-semibold">Favourite listings</h1>
      <p className="mt-2 text-stone-600">Properties you saved while browsing verified agent portfolios.</p>
      <TenantFavoritesList listings={listings} />
    </div>
  );
}
