import { counties } from "@/lib/counties";

export function CountyMap() {
  return (
    <div className="rounded-lg border border-stone-200 bg-white p-5">
      <h3 className="text-lg font-semibold">County coverage</h3>
      <div className="mt-4 grid gap-3">
        {counties.map((county) => (
          <div key={county.name}>
            <div className="flex justify-between text-sm font-medium">
              <span>{county.name}</span>
              <span>{county.listings} listings</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-stone-100">
              <div className="h-2 rounded-full bg-orange-600" style={{ width: `${county.demand}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
