import { DataTable } from "@/components/admin/DataTable";

export default function TenantsPage() {
  return <><h1 className="text-3xl font-semibold">Tenants</h1><div className="mt-5"><DataTable headers={["Tenant", "Inquiries", "Favorites"]} rows={[["Brian K.", 4, 7], ["Winnie M.", 2, 3], ["Sam O.", 6, 9]]} /></div></>;
}
