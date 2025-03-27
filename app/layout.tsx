import type { Metadata } from "next";
import "./globals.css";
import { phuduSans } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "Foodies App",
  description: "Delicius meals prepared and shared for you by meals lovers",
  icons: {
    icon: '../assets/logoNextLevelNonBG.png'
  }
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
        {children}
      </body>
    </html>
  );
}
