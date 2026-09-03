import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { headers } from "next/headers";
import { MobileBooking, SiteFooter, SiteHeader } from "./components/SiteChrome";
import { media } from "./media";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sans = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const origin = `${protocol}://${host}`;
  const title = "Lavender Lash Love | Luxury Lash Artistry by Jen Shedrock";
  const description =
    "A refined, personalized lash experience in Studio City and Thousand Oaks.";

  return {
    metadataBase: new URL(origin),
    title,
    description,
    icons: { icon: media.brand.logo },
    openGraph: {
      title,
      description,
      images: [
        {
          url: `${origin}${media.brand.logo}`,
          width: 3782,
          height: 1508,
          alt: "Lavender Lash Love by Jen Shedrock",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}${media.brand.logo}`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileBooking />
      </body>
    </html>
  );
}
