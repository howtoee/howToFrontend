import React from "react";
import OurAchivenments from "../Pages/OurAchivenments";
import OurTravel from "../Pages/OurTravel";
import InnovationSection from "../Pages/InnovationSection";
import ServicesScrolling from "../Pages/ServicesScrolling";
import Whychoose from "../Pages/Whychoose";
import SafariImage from "../Pages/SafariImage";

const Home = () => {
  return (
    <div className="w-full">
      {/* Banner Image Only */}
      <section className="w-full">
        <img
          src="/Images/Banner.jpeg"
          alt="Banner"
          className="w-full 
                     h-[40vh] sm:h-[50vh] md:h-[65vh] lg:h-[80vh] xl:h-[85vh] 
                     object-cover 
                     rounded-b-xl sm:rounded-b-2xl md:rounded-b-3xl 
                     shadow-lg"
        />
      </section>

      {/* Achievements */}
      <OurAchivenments />
    
      <OurTravel />
      <InnovationSection />
      <ServicesScrolling />
      <SafariImage/>
    </div>
  );
};

export default Home;