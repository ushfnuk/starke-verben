import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Starken verben sind toll!",
  description: "Lern starke verben",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
