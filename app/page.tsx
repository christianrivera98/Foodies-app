"use client";

import GridMotion from "@/components/animations/grid motion/gridMotion";
import { items } from "@/components/animations/grid motion/items";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <motion.div className="relative flex items-center justify-center h-screen w-full  bg-barn-red">
        <div className="absolute inset-0 bg-black/10 z-10" />
        <motion.div
          className="absolute z-10 backdrop-blur-sm p-10"
          initial={{ opacity: 0, z: -50, scale: 0 }}
          animate={{ opacity: 1, z: 1, scale: 1 }}
          transition={{
            duration: 1,
            scale: { type: "spring", visualDuration: 0.6, bounce: 0.4 },
          }}
        >
          <motion.h1 className=" text-[160px] text-papaya-whip font-extrabold  text-shadow shadow-black/100 text-stroke z-10">
            NEXTLEVEL FOOD
          </motion.h1>
          <div className="justify-center flex gap-10">
            <motion.button
              className="w-80 cursor-pointer hover:bg-gradient-to-l from-[#780000] to-[#540b0e]  text-papaya-whip p-4 font-light hover:font-medium border-2 border-[papaya-whip] text-3xl rounded-2xl text-stroke-buttons"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              Join the Community
            </motion.button>
            <motion.button className="w-80 cursor-pointer hover:bg-gradient-to-l from-[#780000] to-[#540b0e]  text-papaya-whip p-4 font-light hover:font-medium border-2 border-[papaya-whip] text-3xl rounded-2xl text-stroke-buttons"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              Explore Meals
            </motion.button>
          </div>
        </motion.div>

        <GridMotion items={items} gradientColor="black" />
      </motion.div>
    </>
  );
}
