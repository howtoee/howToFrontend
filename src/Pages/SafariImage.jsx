import React from "react";

const SafariImage = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="relative w-full h-full group">
        <img
          src="/Images/Safari.jpg"
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
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
          "
        >
          <h1
            className="
              text-white font-bold tracking-wider
              animate-fadeInUp
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
            "
          >
            Wildlife Safari
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SafariImage;