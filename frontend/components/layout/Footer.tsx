import Link from "next/link";
import { KodishaLogo } from "@/components/layout/KodishaLogo";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-8 text-sm text-stone-600 md:grid-cols-2">
        <div className="grid gap-3">
          <KodishaLogo />
          <p>Kodisha verifies agents and organizes rental discovery across Kenya.</p>
        </div>
        <div className="flex flex-wrap gap-4 md:justify-end">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
