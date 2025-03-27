import Header from "@/components/header";
import "../globals.css";
import { phuduSans } from "@/fonts/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
