"use client";
import Link from "next/link";
import logoImg from "@/assets/logoNextLevelNonBG.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

export default function Header() {
  const path = usePathname();
  const onLogo = () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
  return (
    <header className="top-0 left-0 right-0 flex justify-between items-center px-20 py-2 text-black bg-papaya-whip backdrop-blur-lg shadow-lg font-semibold antialiased z-[100]">
      <Link onClick={onLogo} className="flex items-center gap-4" href="/">
        <Image
          width={100}
          height={100}
          src={logoImg.src}
          alt="This my logo"
          priority
        />
        <h1 className="text-4xl">NextLevel Food</h1>
      </Link>
      <nav className="mr-20">
        <ul className="flex gap-14 text-xl ">
          <motion.li
            className="hover:text-barn-red"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
          >
            <Link
              className={`${
                path.startsWith("/meals") ? "active" : undefined
              }`}
              href="/meals"
            >
              Browse Meals
            </Link>
          </motion.li>
          <motion.li
            className="hover:text-barn-red"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
          >
            <Link
              className={`${
                path.startsWith("/community") ? "active" : undefined
              }`}
              href="/community"
            >
              Foodies Community
            </Link>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}
