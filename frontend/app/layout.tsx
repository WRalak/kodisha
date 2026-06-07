import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { AppStateProvider } from "@/contexts/AppStateProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kodisha | Real Estate Agent Platform",
  description:
    "Frontend for Kodisha agents, tenants, listings, approvals and platform administration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <AppStateProvider>
          <AppShell>{children}</AppShell>
        </AppStateProvider>
      </body>
    </html>
  );
}
