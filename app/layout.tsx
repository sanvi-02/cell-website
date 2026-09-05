import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-Cell IIT Roorkee",
  description: "Official Entrepreneurship Cell, IIT Roorkee",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
