import Link from "next/link";

type KodishaLogoProps = {
  href?: string;
  compact?: boolean;
  className?: string;
};

export function KodishaLogo({ href = "/", compact = false, className = "" }: KodishaLogoProps) {
  return (
    <Link className={`inline-flex items-center gap-2.5 ${className}`} href={href}>
      <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-stone-950 shadow-sm">
        <svg
          aria-hidden="true"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 32 32"
        >
          <path
            d="M7 15.4 16 8l9 7.4"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.4"
          />
          <path
            d="M10.4 14.2v10.3h11.2V14.2"
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth="2.4"
          />
          <path
            d="M13.2 24.5v-6.2h6.4v6.2"
            stroke="#ea580c"
            strokeLinejoin="round"
            strokeWidth="2.4"
          />
          <path
            d="M22.5 9.8h3.1v6"
            stroke="#ea580c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.4"
          />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-xl font-semibold tracking-tight text-stone-950">
            Kodisha
          </span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-stone-500">
            Real estate desk
          </span>
        </span>
      )}
    </Link>
  );
}
