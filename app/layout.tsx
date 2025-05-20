import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eric Yao",
  description: "My Personal Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
