import { AuthActionButton } from "@/components/auth/AuthActionButton";
import { AuthFrame, AuthInput, AuthLink } from "@/components/auth/AuthFrame";

export default function TenantRegisterPage() {
  return (
    <AuthFrame
      eyebrow="Kodisha account"
      footer={<>Want to list properties? <AuthLink href="/auth/register">Login first, then become an agent</AuthLink></>}
      subtitle="Create one Kodisha account first. You can browse as a tenant now and apply to become an agent later."
      title="Create your Kodisha account"
    >
      <form className="grid gap-4">
        <AuthInput label="Full name" name="name" placeholder="Brian Kariuki" />
        <AuthInput label="Email address" name="email" placeholder="tenant@example.com" type="email" />
        <AuthInput label="Phone number" name="phone" placeholder="+254 7..." type="tel" />
        <AuthInput label="Password" name="password" placeholder="Create a password" type="password" />
        <AuthActionButton next="/tenant" role="tenant">
          Create account and login
        </AuthActionButton>
      </form>
    </AuthFrame>
  );
}
