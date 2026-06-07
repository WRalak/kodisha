import { StepIndicator } from "@/components/shared/StepIndicator";
import { AuthActionButton } from "@/components/auth/AuthActionButton";
import { AuthFrame, AuthInput, AuthLink, AuthTextarea } from "@/components/auth/AuthFrame";

export default function RegisterPage() {
  return (
    <AuthFrame
      eyebrow="Become an agent"
      footer={<>No Kodisha account yet? <AuthLink href="/auth/tenant-register">Create an account first</AuthLink></>}
      subtitle="Use your logged-in Kodisha account to submit business details for admin verification. After approval, your account becomes an agent account."
      title="Apply to become an agent"
      wide
    >
      <div className="rounded-lg border border-stone-200 bg-[#faf9f7] p-4">
        <StepIndicator steps={["Login", "Agent details", "Verification", "Approval"]} current={2} />
      </div>

      <form className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 md:col-span-2">
          <p className="text-sm font-semibold text-stone-950">Account required</p>
          <p className="mt-1 text-sm leading-6 text-stone-700">
            Agent verification is an upgrade on top of a normal Kodisha account. Login first, then submit this application.
          </p>
        </div>
        <AuthInput label="Business name" name="business" placeholder="Njeri Homes" />
        <AuthInput label="ID or business registration" name="identity" placeholder="National ID or registration number" />
        <AuthInput label="Operating county" name="county" placeholder="Nairobi" />
        <div className="md:col-span-2">
          <AuthTextarea
            label="Areas and specializations"
            name="specializations"
            placeholder="Kilimani apartments, Westlands offices, Ruiru family homes..."
          />
        </div>
        <div className="rounded-lg border border-stone-200 bg-white p-4 md:col-span-2">
          <p className="text-sm font-semibold">What admins review</p>
          <div className="mt-3 grid gap-2 text-sm text-stone-600 sm:grid-cols-3">
            <span>Identity match</span>
            <span>Business legitimacy</span>
            <span>Listing area quality</span>
          </div>
        </div>
        <div className="grid gap-3 md:col-span-2 sm:grid-cols-2">
          <AuthActionButton next="/auth/pending" role="tenant">
            Submit agent application
          </AuthActionButton>
          <AuthLink href="/auth/login">Login before applying</AuthLink>
        </div>
      </form>
    </AuthFrame>
  );
}
