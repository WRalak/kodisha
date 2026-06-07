import { ApprovalRow } from "@/components/admin/ApprovalRow";
import { listings } from "@/lib/mockData";

export default function PendingListingsPage() {
  return <><h1 className="text-3xl font-semibold">Pending listings</h1><div className="mt-5 grid gap-3">{listings.filter((item) => item.status !== "Live").map((item) => <ApprovalRow title={item.title} detail={`${item.area}, ${item.county}`} status={item.status} key={item.id} />)}</div></>;
}
