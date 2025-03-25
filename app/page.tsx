"use client";

import GridMotion from "@/components/animations/grid motion/gridMotion";
import { items } from "@/components/animations/grid motion/items";
import { motion } from "motion/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <motion.div className="relative flex items-center justify-center h-screen w-full  bg-barn-red">
        <div className="absolute inset-0 bg-black/10 z-10" />
        <motion.div
          className="absolute flex flex-col content-center justify-center z-10 backdrop-blur-sm p-6"
          initial={{ opacity: 0, z: -50, scale: 0 }}
          animate={{ opacity: 1, z: 1, scale: 1 }}
          transition={{
            duration: 1,
            scale: { type: "spring", visualDuration: 0.6, bounce: 0.4 },
          }}
        >
          <motion.h1 className="flex justify-center lg:text-[160px] text-[50px] text-papaya-whip font-extrabold  text-shadow shadow-black/100 text-stroke">
            NEXTLEVEL FOOD
          </motion.h1>
          <div className="max-md:flex-col flex md:flex justify-center items-center gap-4 p-6 ">
            <Link href={"/community"}>
              <motion.button
                className="lg:w-80 w-40 cursor-pointer hover:bg-gradient-to-l from-[#780000] to-[#540b0e]  text-papaya-whip lg:p-4 p-2 font-light hover:font-medium border-2 border-[papaya-whip] lg:text-3xl text-[14px] lg:rounded-2xl rounded-lg text-stroke-buttons"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
              >
                Join the Community
              </motion.button>
            </Link>
            <Link href="/meals">
              <motion.button
                className="lg:w-80 w-40 cursor-pointer hover:bg-gradient-to-l from-[#780000] to-[#540b0e]  text-papaya-whip lg:p-4 p-2 font-light hover:font-medium border-2 border-[papaya-whip] lg:text-3xl text-[14px] lg:rounded-2xl rounded-lg text-stroke-buttons"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
              >
                Explore Meals
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <GridMotion items={items} gradientColor="black" />
      </motion.div>
    </>
  );
}
