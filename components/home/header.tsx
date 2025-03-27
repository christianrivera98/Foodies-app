import { motion, useScroll, useTransform } from "motion/react";
import logo from "@/assets/logoNextLevelNonBG.png";
import Link from "next/link";
import Image from "next/image";

export function HomeHeader() {
  const { scrollY } = useScroll();
  const headerVisible = useTransform(scrollY, [0, 800], [0, 1]);
  const headerY = useTransform(scrollY, [0, 300], [-50, 0]);

  const onLinks = () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
  const onLogo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div>
        <motion.header
          className={`fixed top-0 left-0 right-0 flex justify-between items-center  px-20 bg-papaya-whip font-semibold antialiased z-[100]`}
          style={{ opacity: headerVisible, y: headerY }}
        >
          <Link onClick={onLogo} className="flex items-center gap-4" href="/">
            <Image
              width={100}
              height={100}
              src={logo.src}
              alt="This my logo"
              priority
            />
            <h1 className="text-4xl">NextLevel Food</h1>
          </Link>
          <nav className="mr-20">
            <ul className="flex gap-14 text-xl ">
              <li>
                <Link onClick={onLinks} href="/pages/meals">
                  Browse Meals
                </Link>
              </li>
              <li>
                <Link onClick={onLinks} href="/pages/community">
                  Foodies Community
                </Link>
              </li>
            </ul>
          </nav>
        </motion.header>
      </div>
    </>
  );
}
