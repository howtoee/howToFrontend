// src/components/AboutUs.js
import React from "react";
import { motion } from "framer-motion";
import { GlobeAltIcon, ShieldCheckIcon, TicketIcon } from "@heroicons/react/24/outline";

const AboutUs = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <div className="pt-[2px] sm:pt-20 md:pt-[2px] lg:pt-2">
      {/* Hero Section */}
      <div className="relative w-full h-[30vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh] overflow-hidden rounded-b-2xl sm:rounded-b-[2rem] lg:rounded-b-[3rem]">
        {/* Background Image */}
        <img
          src="/Images/AboutUs.jpg"
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
        />

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-800 to-blue-600 opacity-30 mix-blend-overlay animate-pulse-slow" />

        {/* Soft Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center drop-shadow-lg px-4">
            {/* About <span className="text-purple-400">HowTo Travel</span> */}
          </h1>
        </div>

        {/* Animated Icons */}
        <motion.div
          className="absolute left-4 bottom-4 flex gap-4 sm:gap-6 md:gap-8"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <GlobeAltIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white hover:text-purple-400 transition-colors duration-300" />
          <ShieldCheckIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white hover:text-purple-400 transition-colors duration-300" />
          <TicketIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white hover:text-purple-400 transition-colors duration-300" />
        </motion.div>
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 text-center">
        <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
          At HowTo Travel, we go beyond ordinary travel bookings, delivering the cheapest rates
          across all your needs while ensuring a reliable, hassle-free experience that major apps
          and websites simply can't match. Here's what truly sets us apart:
        </p>
      </div>

      {/* Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16 grid gap-5 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: GlobeAltIcon,
            title: "Who are we?",
            text: "HowTo Travel is your one-stop hub for flights, hotels, visa services, and more — built with care, transparency, and expert support.",
          },
          {
            icon: ShieldCheckIcon,
            title: "Why choose us?",
            text: "We guarantee the lowest rates, seamless bookings, 24/7 support, and stress-free travel, trusted by thousands for reliability and value.",
          },
          {
            icon: TicketIcon,
            title: "What we do?",
            text: "Flights, hotels, visas, insurance, trains, buses, transfers, safaris, and curated tour packages — all in one easy place.",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="info-card p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-start"
          >
            <card.icon className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mb-4" />
            <h3 className="info-title text-xl sm:text-2xl font-semibold mb-3 text-white">
              {card.title}
            </h3>
            <p className="text-black text-sm sm:text-base leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default AboutUs;