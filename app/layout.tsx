import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Starken Verben sind toll!",
  description: "Learn starken Verben",
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
