import type { Metadata, Viewport } from "next";
import CakeIntro from "./components/CakeIntro";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Little World Made for You ♡",
  description:
    "A birthday surprise filled with memories, little love notes, and all my love.",
  openGraph: {
    title: "A Little World Made for You ♡",
    description:
      "Someone made a little something just for you.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fffaf4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><CakeIntro>{children}</CakeIntro></body>
    </html>
  );
}