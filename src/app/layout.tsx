import type { Metadata } from "next";
import "./globals.css"; // Global styles
import InitialLoader from "@/components/Loader/InitialLoader";

export const metadata: Metadata = {
  title: "Draftworks",
  description:
    "Unleash your peak potential today. State-of-the-art equipment, elite personal trainers, and high-octane metabolic classes engineered to transform your physical conditioning.",
  openGraph: {
    title: "Draftworks",
    description:
      "Unleash your peak potential today. State-of-the-art equipment, elite personal trainers, and high-octane metabolic classes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Draftworks",
    description:
      "Unleash your peak potential today. High-intensity physical conditioning, elite strength protocols, and architectural athletic wellness.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {/* Initial Loader */}
        <InitialLoader />
        {children}
      </body>
    </html>
  );
}
