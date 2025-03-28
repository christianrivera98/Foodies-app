"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { images } from "@/components/home/image-slideshow/images";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImagesSlideShow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slideRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const timeLine = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "bottom top",
      end: "top 10%",
      scrub: true,
      pin: true,
    },
  });

  //SlIDE ANIMATION
  if (slideRef.current) {
    timeLine.fromTo(
      slideRef.current,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, zIndex: 10, ease: "power2.out" },
      0.5
    );
  }

  const variants = {
    initial: { opacity: 0, scale: 1.1, translateX: 16, rotate: -5 },
    animate: { opacity: 1, scale: 1, translateX: 0, rotate: 0 },
    exit: { opacity: 0, scale: 1.1, translateX: -16, rotate: 5 },
  };

  return (
    <>
      <section
        ref={containerRef}
        className="flex items-center justify-center h-screen w-full gap-[80px]"
      >
        <motion.div
          className="relative w-2xl h-[500px] rounded-[8px] overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <AnimatePresence>
            {images.map(
              (image, index) =>
                index === currentImageIndex && (
                  <motion.div
                    key={index}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={image.image}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </motion.div>
        <div className=" relative flex-col flex h-fit w-[700px] p-10">
          <div className="absolute inset-0 backdrop-blur-sm bg-white/30 rounded-2xl" />
          <div className="flex-col flex justify-center items-center  z-10">
            <h1 className="font-semibold text-[54px] text-center tracking-[5px] text-papaya-whip">
              NextLevel <span className="text-persimmon">Food</span> for NextLevel <span className="text-persimmon">Foodies</span>
            </h1>
            <p className="mt-4 font-light text-[30px] text-papaya-whip">
              Taste & share food from all over the world.
            </p>
            <div className="flex gap-10 mt-10 text-[20px]">
              <button className="text-black hover:text-barn-red cursor-pointer">Join the Comunity</button>
              <button className="w-[160px] h-12 rounded-lg bg-papaya-whip text-barn-red font-bold cursor-pointer">
                Explore Meals
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
