import type { Metadata } from "next";
import { Phudu } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { phuduSans } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "Foodies App",
  description: "Delicius meals prepared and shared for you by meals lovers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${phuduSans.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
