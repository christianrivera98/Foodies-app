"use client";

import GridMotion from "@/components/animations/grid motion/gridMotion";
import { items } from "@/components/animations/grid motion/items";
import HomeFeatures from "@/components/home/homeFeatures";
import HomeHero from "@/components/home/homeHero";
import arrowDown from "@/assets/icons/arrow_downward.svg";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HomeHeader } from "@/components/home/header";
import ImagesSlideShow from "@/components/home/image-slideshow/image-slideshow";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    window.scrollTo(0, 0);
    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });

    //GRID ANIMATION
    if (gridRef.current) {
      const rows = gridRef.current.querySelectorAll(".grid-row");
      rows.forEach((row, i) => {
        const direction = i % 2 === 0 ? -1 : 1;
        timeLine.to(row, { x: direction * 2500, ease: "power2.out" }, 0);
      });
    }

    //HERO ANIMATION
    if (heroRef.current) {
      timeLine.to(
        heroRef.current,
        { autoAlpha: 0, y: -100, ease: "power2.out" },
        0.2
      );
    }

    //FEATURES ANIMATION
    if (featuresRef.current) {
      timeLine.fromTo(
        featuresRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, zIndex: 10, ease: "power2.out" },
        0.5
      );
    }

    return () => {
      timeLine.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
    <HomeHeader />
      <div ref={containerRef} className="relative">
        
        <motion.div className="relative flex items-center justify-center h-screen w-full  bg-barn-red">
          <div className="absolute inset-0 bg-black/10 z-10" />
          <motion.div
            ref={heroRef}
            className="absolute flex flex-col content-center justify-center z-20  p-6"
          >
            <HomeHero />
          </motion.div>
          <div className="bg-barn-red absolute">
            <button>
              <Image src={arrowDown} alt="arrow down" />
            </button>
          </div>
          <div
            ref={featuresRef}
            className="absolute w-full h-screen"
          >
            <div >
              <ImagesSlideShow />
            </div>
          </div>
          <div ref={gridRef}>
            <GridMotion items={items} gradientColor="black" />
          </div>
        </motion.div>
        <HomeFeatures />
      </div>
    </>
  );
}
