import Link from "next/link";
import { AuthFrame } from "@/components/auth/AuthFrame";

export default function PendingPage() {
  return (
    <AuthFrame
      eyebrow="Verification pending"
      subtitle="Kodisha admins usually complete identity and business checks within 1-2 days."
      title="Your agent account is under review"
    >
      <div className="grid gap-4">
        {["Business details received", "Identity review in progress", "Admin approval pending"].map((item, index) => (
          <div className="flex items-center gap-3 rounded-lg border border-stone-200 bg-[#faf9f7] p-4" key={item}>
            <span className={`grid h-8 w-8 place-items-center rounded-full text-xs font-semibold ${index === 0 ? "bg-orange-600 text-white" : "bg-white text-stone-600"}`}>
              {index + 1}
            </span>
            <span className="text-sm font-medium text-stone-700">{item}</span>
          </div>
        ))}
        <Link className="mt-2 inline-flex min-h-12 items-center justify-center rounded-lg bg-stone-950 px-4 text-sm font-semibold text-white" href="/">
          Back to site
        </Link>
      </div>
    </AuthFrame>
  );
}
