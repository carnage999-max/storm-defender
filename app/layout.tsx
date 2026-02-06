import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://stormdefender.com'),
  title: "Storm Defender® | Active Atmospheric Threat Dismantling",
  description: "A proactive system designed to disrupt tornadoes and hurricanes before impact. Engineering the future of atmospheric defense.",
  keywords: ["tornado defense", "hurricane disruption", "atmospheric intervention", "storm defender", "weather modification"],
  openGraph: {
    title: "Storm Defender® | Active Atmospheric Threat Dismantling",
    description: "Proactive disruption of severe weather structures.",
    images: ["/images/stormdef_tornado_tanks_01.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white selection:bg-brand-red selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
