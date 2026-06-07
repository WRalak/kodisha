import { AuditRow } from "@/components/admin/AuditRow";
import { auditLog } from "@/lib/mockData";

export default function AuditPage() {
  return <><h1 className="text-3xl font-semibold">Audit log</h1><div className="mt-5 grid gap-3">{auditLog.map((entry) => <AuditRow entry={entry} key={entry.id} />)}</div></>;
}
