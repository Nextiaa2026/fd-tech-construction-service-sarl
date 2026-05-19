import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const siteUrl = "https://fdtechconstruction.cm";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FD-TECH CONSTRUCTION SERVICE SARL | BTP & Immobilier au Cameroun",
    template: "%s | FD-TECH CONSTRUCTION SERVICE SARL",
  },
  description:
    "FD-TECH CONSTRUCTION SERVICE SARL — bâtiment, travaux publics, immobilier, location, vente de terrain, construction et matériaux au Cameroun depuis 2019.",
  keywords: ["construction Cameroun", "BTP Douala", "FD-TECH construction", "immobilier Cameroun", "location maison Cameroun", "vente terrain Cameroun"],
  authors: [{ name: "FD-TECH CONSTRUCTION SERVICE SARL", url: siteUrl }],
  creator: "FD-TECH CONSTRUCTION SERVICE SARL",
  openGraph: {
    type: "website", locale: "fr_CM", url: siteUrl,
    siteName: "FD-TECH CONSTRUCTION SERVICE SARL",
    title: "FD-TECH CONSTRUCTION SERVICE SARL | BTP & Immobilier",
    description: "Spécialiste du bâtiment, travaux publics et immobilier au Cameroun depuis 2019.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FD-TECH Construction" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FD-TECH CONSTRUCTION SERVICE SARL | BTP Cameroun",
    description: "Spécialiste du bâtiment et travaux publics au Cameroun depuis 2019.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${oswald.variable} ${roboto.variable}`}>
      <body className="min-h-screen bg-[#111110] text-[#f5f0eb] font-[family-name:var(--font-roboto)] antialiased flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
