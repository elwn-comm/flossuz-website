import { type Metadata } from "next";

import { RootLayout } from "@/components/RootLayout";

import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Floss O'zbekiston",
    default:
      "Floss O'zbekiston - O'zbekistondagi yagona IT hamjamiyat aggregatori.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
