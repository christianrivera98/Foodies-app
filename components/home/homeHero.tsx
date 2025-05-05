'use client';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import arrowDown from "@/assets/icons/arrow_downward.svg";

gsap.registerPlugin(ScrollTrigger);

export default function HomeHero() {
  const onButton = () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, z: -50, scale: 0 }}
        animate={{ opacity: 1, z: 1, scale: 1 }}
        transition={{
          duration: 1,
          scale: { type: "spring", visualDuration: 0.6, bounce: 0.2 },
        }}
      >
        <motion.h1 className="flex justify-center lg:text-[160px] text-[50px] text-papaya-whip font-extrabold  text-shadow shadow-black/100 text-stroke">
          NEXTLEVEL FOOD
        </motion.h1>
        <div className="max-md:flex-col flex md:flex justify-center items-center gap-4 p-6 ">
          <Link href={"/community"}>
            <motion.button
              onClick={onButton}
              className="lg:w-80 w-40 backdrop-blur-sm cursor-pointer hover:bg-gradient-to-l from-[#780000] to-[#540b0e]  text-papaya-whip lg:p-4 p-2 font-light hover:font-medium border-2 border-[papaya-whip] lg:text-3xl text-[14px] lg:rounded-2xl rounded-lg text-stroke-buttons"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, marginRight: 8 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              Join the Community
            </motion.button>
          </Link>
          <Link href="/meals">
            <motion.button
              onClick={onButton}
              className="lg:w-80 w-40 backdrop-blur-sm  cursor-pointer hover:bg-gradient-to-l from-[#780000] to-[#540b0e]  text-papaya-whip lg:p-4 p-2 font-light hover:font-medium border-2 border-[papaya-whip] lg:text-3xl text-[14px] lg:rounded-2xl rounded-lg text-stroke-buttons"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, marginLeft: 8 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              Explore Meals
            </motion.button>
          </Link>
          <motion.div className="flex justify-center opacity-70 items-center animate-bounce absolute bottom-[-200px] w-[80px] h-[80px] z-10 bg-barn-red  rounded-full "
            initial= {{opacity: 0, y: -500}}
            animate={{opacity: 1, y: 0}}
            transition={{
              duration: 1,
              delay: 1.2 ,
              scale: { type: "spring", visualDuration: 0.6, bounce: 0.2 },
            }}
          >
            <button>
              <Image className="w-[50px]" src={arrowDown} alt="arrow down" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
