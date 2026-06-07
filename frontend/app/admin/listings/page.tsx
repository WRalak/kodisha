import { DataTable } from "@/components/admin/DataTable";
import { listings } from "@/lib/mockData";

export default function AdminListingsPage() {
  return <><h1 className="text-3xl font-semibold">All listings</h1><div className="mt-5"><DataTable headers={["Listing", "County", "Status", "Agent"]} rows={listings.map((item) => [item.title, item.county, item.status, item.agentId])} /></div></>;
}
