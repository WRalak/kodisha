import { StepIndicator } from "@/components/shared/StepIndicator";

export default function HowItWorksPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-semibold">How Kodisha works</h1>
      <p className="mt-4 text-lg text-stone-600">Agents verify first, listings are moderated, and tenants use the platform to enquire, save and review.</p>
      <div className="mt-8 rounded-lg border border-stone-200 bg-white p-5">
        <StepIndicator steps={["Register", "Verify", "List", "Lease"]} current={3} />
      </div>
    </main>
  );
}
