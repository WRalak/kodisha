import { AuthFrame, AuthInput, AuthLink } from "@/components/auth/AuthFrame";

export default function ForgotPasswordPage() {
  return (
    <AuthFrame
      eyebrow="Account recovery"
      footer={<>Remembered it? <AuthLink href="/auth/login">Back to login</AuthLink></>}
      subtitle="Enter your account email and we will send reset instructions for your Kodisha access."
      title="Reset your password"
    >
      <form className="grid gap-4">
        <AuthInput label="Email address" name="email" placeholder="you@example.com" type="email" />
        <button className="min-h-12 rounded-lg bg-orange-600 px-4 font-semibold text-white" type="button">
          Send reset link
        </button>
      </form>
    </AuthFrame>
  );
}
