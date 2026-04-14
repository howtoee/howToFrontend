import React from "react";
import Wild from "../assets/Images/Wild.png";

const SafariImage = () => {
  return (
    <div className="w-screen overflow-hidden">
      <a href="https://wildwonders.in" target="_blank" rel="noopener noreferrer">
        <div
          className="
            relative w-full group
            h-[45vh]
            sm:h-[55vh]
            md:h-[60vh]
            lg:h-[70vh]
            xl:h-[80vh]
          "
        >
          <img
            src={Wild}
            alt="Wildlife Safari"
            className="
              w-full h-full object-cover
              transition-transform duration-700 ease-out
              group-hover:scale-110
            "
          />

          {/* Overlay */}
          <div
            className="
              absolute inset-0 bg-black/50
              flex items-center justify-center 
              opacity-100 sm:opacity-0
              sm:group-hover:opacity-100 
              transition-opacity duration-500
            "
          >
            <h1
              className="
                text-white font-bold tracking-wider
                animate-fadeInUp
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
        </div>
      </a>
    </div>
  );
};

export default SafariImage;