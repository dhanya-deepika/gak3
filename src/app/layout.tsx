import type { Metadata } from "next";
import type { ReactNode } from "react";
import { sora } from "./fonts";
import "./globals.css";
import LayoutClientWrapper from "./LayoutClientWrapper";
export const metadata: Metadata = {
  title: "GAK Group",
  description: "description.",

  icons: {
    icon: [
      { url: "/favicons/favicon.ico" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicons/apple-touch-icon.png",
  },
  manifest: "/favicons/site.webmanifest",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <LayoutClientWrapper>{children}</LayoutClientWrapper>
      </body>
    </html>
  );
}
