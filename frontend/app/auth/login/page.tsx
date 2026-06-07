import Link from "next/link";
import { AuthActionButton } from "@/components/auth/AuthActionButton";
import { AuthFrame, AuthInput, AuthLink } from "@/components/auth/AuthFrame";

export default function LoginPage() {
  return (
    <AuthFrame
      eyebrow="Welcome back"
      footer={
        <>
          New tenant? <AuthLink href="/auth/tenant-register">Create tenant account</AuthLink>
          <span className="mx-2 text-stone-300">|</span>
          Want to list? <AuthLink href="/auth/register">Become an agent after login</AuthLink>
        </>
      }
      subtitle="Access tenant tools, agent dashboards, admin moderation and platform controls."
      title="Sign in to Kodisha"
    >
      <form className="grid gap-4">
        <AuthInput label="Email address" name="email" placeholder="you@example.com" type="email" />
        <AuthInput label="Password" name="password" placeholder="Enter your password" type="password" />
        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-stone-600">
            <input className="h-4 w-4 accent-orange-600" type="checkbox" />
            Remember me
          </label>
          <Link className="font-medium text-stone-700 hover:text-stone-950" href="/auth/forgot-password">
            Forgot password?
          </Link>
        </div>
        <AuthActionButton next="/tenant" role="tenant">
          Sign in
        </AuthActionButton>
      </form>
    </AuthFrame>
  );
}
