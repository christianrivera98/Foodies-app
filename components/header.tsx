'use client'
import Link from "next/link";
import logoImg from "@/assets/logoNextLevelNonBG.png";
import Image from "next/image";

export default function Header() {
  const onLogo = () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
  return (
    <header className={`flex justify-between items-center py-10 px-20 bg-papaya-whip font-semibold antialiased`}>
      <Link onClick={onLogo} className="flex items-center gap-4" href="/">
        <Image width={100} height={100} src={logoImg.src} alt="This my logo" priority/>
        <h1 className="text-4xl">NextLevel Food</h1>
      </Link>
      <nav className="mr-20">
        <ul className="flex gap-14 text-xl ">
            <li>
                <Link href='/pages/meals'>Browse Meals</Link>
            </li>
            <li>
                <Link href='/pages/community'>Foodies Community</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}
