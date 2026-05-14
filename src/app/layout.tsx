import type { Metadata } from "next";
import { Big_Shoulders, Familjen_Grotesk } from "next/font/google";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  weight: ["400", "500", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const familjenGrotesk = Familjen_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sydney Surfboard Repair — Miranda, NSW",
  description:
    "Professional surfboard repairs in Miranda, Sydney. Dings, creases, snaps, fins, and SUPs. Poly and epoxy. Est. 2000. Call 0410 207 555.",
  openGraph: {
    title: "Sydney Surfboard Repair",
    description: "Expert surfboard repairs in Miranda, NSW. Est. 2000.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bigShoulders.variable} ${familjenGrotesk.variable}`}
    >
      <body>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
