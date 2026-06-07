"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hidePublicChrome =
    pathname.startsWith("/tenant") ||
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/admin");

  if (hidePublicChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </>
  );
}
