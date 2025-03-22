import type { Metadata } from "next";
import { Phudu } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Home from "./page";
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
        <Home/>
      </body>
    </html>
  );
}
