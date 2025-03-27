'use client'

import { useEffect, useState } from "react";
import { images } from "@/components/home/image-slideshow/images";
import Image from "next/image";

export default function ImagesSlideShow(){

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    useEffect(() => {
      
      const interval = setInterval(() => {
        
        setCurrentImageIndex((prevIndex) => 
            prevIndex < images.length - 1? prevIndex + 1 : 0
        );
      }, 5000)
    
      return () => clearInterval(interval);
    }, [])
    
    return(
        <div className="relative w-2xl h-[500px] rounded-[8px] overflow-hidden">
            {images.map((image, index) => (
                <Image
                key={index}
                src={image.image}
                className={`w-full h-full object-cover absolute top-0 left-0 transition-all duration-500 ease-in-out
                    ${
                      index === currentImageIndex
                        ? "z-[20] opacity-100 scale-100 translate-x-0 rotate-0"
                        : "opacity-1 transform scale-[1.1] -translate-x-4 rotate-[-5deg]"
                    }`}                alt={image.alt}
                />
            ))}
        </div>
    );
};