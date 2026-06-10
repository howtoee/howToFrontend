import React, { useState, useEffect } from "react";
import Wild1 from "../assets/Images/Wild1.webp";
import Wild2 from "../assets/Images/Wild2.png";
import Wild3 from "../assets/Images/Wild3.png";
import Wild4 from "../assets/Images/Wild4.png";
import Wild5 from "../assets/Images/Wild5.png";

const SafariImage = () => {
  const images = [Wild1, Wild2, Wild3, Wild4, Wild5];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full overflow-hidden">
      <a
        href="https://wildwonders.in"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="
            relative w-full group
            h-[45vh]
            sm:h-[60vh]
            md:h-[70vh]
            lg:h-[80vh]
            xl:h-[90vh]
          "
        >
          <img
            src={images[currentIndex]}
            alt="Wildlife Safari"
            className="
              w-full h-full object-cover object-center
              transition-all duration-1000 ease-in-out
            "
          />

          {/* Overlay */}
          <div
            className="
              absolute inset-0 bg-black/50
              flex items-center justify-center
            "
          >
            <h1
              className="
                text-white font-bold tracking-wider
                text-xl
                sm:text-4xl
                md:text-5xl
                lg:text-7xl
                xl:text-8xl
              "
            >
              Wildlife Safari
            </h1>
          </div>

          {/* Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-white" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default SafariImage;