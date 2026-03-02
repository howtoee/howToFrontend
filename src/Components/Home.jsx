import React from "react";
import OurAchivenments from "../Pages/OurAchivenments";
import OurTravel from "../Pages/OurTravel";
import InnovationSection from "../Pages/InnovationSection";
import ServicesScrolling from "../Pages/ServicesScrolling";
import Whychoose from "../Pages/Whychoose";
import SafariImage from "../Pages/SafariImage";
import FlipTestimonials from "../Pages/FlipTestimonials";
import BannerImage from "../assets/Images/BannerImage12.png";
const Home = () => {
  return (
    <div className="w-full">
   <section className="w-full relative">
  <img
    src={BannerImage}
    alt="Banner"
    fetchPriority="high"
    decoding="async"
    loading="eager"
    className="w-full 
               h-[32vh] sm:h-[45vh] md:h-[50vh] lg:h-[75vh] xl:h-[85vh] 
               object-cover object-center 
               rounded-b-[2rem] sm:rounded-b-[3rem] md:rounded-b-[4.5rem] lg:rounded-b-[5rem]
               shadow-[0_20px_50px_rgba(0,0,0,0.15)] filter brightness-105"
  />

  <div className="absolute inset-0 
                  bg-gradient-to-t from-black/30 via-transparent to-black/10 
                  rounded-b-[2rem] sm:rounded-b-[3rem] md:rounded-b-[4.5rem] lg:rounded-b-[5rem] 
                  pointer-events-none"></div>
</section>

      {/* Achievements */}
      <OurAchivenments />

      {/* <OurTravel /> */}
      <InnovationSection />
      <ServicesScrolling />
      <SafariImage />
      <FlipTestimonials />
    </div>
  );
};

export default Home;