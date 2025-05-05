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
          className= "fixed top-0 left-0 right-0 flex justify-between items-center px-20 py-2 text-black bg-papaya-whip backdrop-blur-lg shadow-lg font-semibold antialiased z-[100]"
          style={{ opacity: headerVisible, y: headerY }}
        >
          <div onClick={onLogo} className="flex items-center gap-4" >
            <Image
              width={80}
              height={80}
              src={logo.src}
              alt="This my logo"
              priority
            />
            <h1 className="text-2xl">NextLevel Food</h1>
          </div>
          <nav className="mr-20">
            <ul className="flex gap-14 text-[18px] ">
              <motion.li className= "hover:text-barn-red"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
              >
                <Link  onClick={onLinks} href="/meals">
                  Browse Meals
                </Link>
              </motion.li>
              <motion.li className="hover:text-barn-red"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
              >
                <Link onClick={onLinks} href="/pages/community">
                  Foodies Community
                </Link>
              </motion.li>
            </ul>
          </nav>
        </motion.header>
      </div>
    </>
  );
}
