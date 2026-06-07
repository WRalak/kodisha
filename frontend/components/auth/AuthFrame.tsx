import Link from "next/link";
import { KodishaLogo } from "@/components/layout/KodishaLogo";

type AuthFrameProps = {
  title: string;
  subtitle: string;
  eyebrow?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  wide?: boolean;
};

export function AuthFrame({
  title,
  subtitle,
  eyebrow = "Kodisha access",
  children,
  footer,
  wide = false,
}: AuthFrameProps) {
  return (
    <main className="bg-[#faf9f7] px-4 py-8 md:py-12">
      <section className={`mx-auto grid min-h-[72vh] overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm ${wide ? "max-w-6xl lg:grid-cols-[0.9fr_1.1fr]" : "max-w-5xl lg:grid-cols-2"}`}>
        <aside className="relative hidden min-h-[620px] overflow-hidden lg:block">
          <img
            alt="Modern managed home exterior"
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
          />
          <div className="absolute inset-0 bg-stone-950/45" />
          <div className="relative flex h-full flex-col justify-between p-8 text-white">
            <KodishaLogo className="[&_span:last-child_span:first-child]:text-white [&_span:last-child_span:last-child]:text-white/65" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                Verified property workspaces
              </p>
              <h2 className="mt-3 max-w-md text-3xl font-semibold leading-tight">
                One clean place for agents, tenants and platform teams.
              </h2>
              <div className="mt-6 grid gap-3 text-sm text-white/80">
                <p>Verified agents manage listings and inquiries.</p>
                <p>Tenants track favourites and replies.</p>
                <p>Admins keep listings and identities trusted.</p>
              </div>
            </div>
          </div>
        </aside>

        <div className="flex items-center p-5 sm:p-8">
          <div className="mx-auto w-full max-w-xl">
            <div className="lg:hidden">
              <KodishaLogo />
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-stone-500 lg:mt-0">
              {eyebrow}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">
              {title}
            </h1>
            <p className="mt-3 leading-7 text-stone-600">{subtitle}</p>
            <div className="mt-7">{children}</div>
            {footer && <div className="mt-6 border-t border-stone-100 pt-5 text-sm text-stone-600">{footer}</div>}
          </div>
        </div>
      </section>
    </main>
  );
}

export function AuthInput({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-stone-700">
      {label}
      <input
        className="min-h-12 rounded-lg border border-stone-200 bg-[#faf9f7] px-4 text-sm font-normal text-stone-950 outline-none transition focus:border-orange-600 focus:bg-white"
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </label>
  );
}

export function AuthTextarea({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-stone-700">
      {label}
      <textarea
        className="min-h-32 rounded-lg border border-stone-200 bg-[#faf9f7] px-4 py-3 text-sm font-normal text-stone-950 outline-none transition focus:border-orange-600 focus:bg-white"
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
}

export function AuthLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link className="font-semibold text-stone-950 hover:text-orange-700" href={href}>
      {children}
    </Link>
  );
}
