import { DataTable } from "@/components/admin/DataTable";

export default function AdminAccountsPage() {
  return <><h1 className="text-3xl font-semibold">Admin accounts</h1><p className="mt-2 text-stone-600">Only Super Admin can create, edit or remove admin users.</p><div className="mt-5"><DataTable headers={["Name", "Role", "Status"]} rows={[["Grace W.", "Admin", "Active"], ["Main Owner", "Super Admin", "Active"]]} /></div></>;
}
