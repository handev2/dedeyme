'use client';
import { useState,useEffect } from "react";
import crsl1 from "../assets/CAROUSEL/CAROUSEL.jpg";
import crsl2 from "../assets/CAROUSEL/CAROUSEL-1.jpg";
import crsl3 from "../assets/CAROUSEL/CAROUSEL-2.jpg";
import crsl4 from "../assets/CAROUSEL/CAROUSEL-3.jpg";
import crsl5 from "../assets/CAROUSEL/CAROUSEL-4.jpg";
import crsl6 from "../assets/CAROUSEL/CAROUSEL-5.jpg";
import crsl7 from "../assets/CAROUSEL/CAROUSEL-6.jpg";

import samsung from "../assets/CAROUSEL/samsung.jpg";
import iphone from "../assets/CAROUSEL/iphone.jpg";
import Image from "next/image";

const Carousel = () => {

    const images = [
        crsl1,
        crsl2,
        crsl3,
        crsl4,
        crsl5,
        crsl6,
        crsl7,
    ]

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Move to the next image
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    },5000); // Change image every 1 second

    return () => clearInterval(timer); // Clean up the interval on unmount
  }, [images.length]);

  return (
    <div className="lg:flex gap-8">
    <div className="relative lg:w-[900px]">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`absolute top-0 left-0 transition-opacity duration-300 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>

    <div className="flex max-lg:hidden gap-5 flex-col">
      <div className="w-[270px]">
        <Image alt="" src={iphone}/>
      </div>
      <div className="w-[270px]">
      <Image alt="" src={samsung}/>
      </div>
    </div>
</div>
// return(
//     <h1>kjfkj</h1>
// )
    
)
  
};

export default Carousel;
