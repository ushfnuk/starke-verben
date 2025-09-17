import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Starke Verben sind toll!",
  description: "Learn starke Verben",
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
