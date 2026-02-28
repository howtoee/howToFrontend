// src/Components/Whychoose.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPlane, FaUsers, FaUmbrellaBeach } from "react-icons/fa";

const Whychoose = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
        >
          Why Us?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 text-base sm:text-lg md:text-xl"
        >
          At HowTo Travel, we go beyond ordinary travel bookings, delivering the cheapest rates across all your needs while ensuring a reliable, hassle-free experience that major apps and websites simply can't match.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-700 leading-relaxed text-justify"
        >
          Redefining the way you travel! When it comes to discovering new places, new cultures, and new parts of yourself, HowTo Travels stands as more than just a travel service, it is a trusted companion for every journey you dream of taking. We are not simply booking tickets and hotels, we are opening doors to experiences that stay with you long after you return home. At HowTo Travels, we understand that every trip carries a story. The excitement of a long-awaited vacation, the nervous anticipation of a business meeting abroad, the joy of a family getaway, each moment matters. Our team works with care and precision to ensure that from your first booking to your safe return, everything flows effortlessly. From seamless flight and hotel reservations to visa appointments, travel insurance, train and bus tickets, airport transfers, safari adventures, and thoughtfully curated tour packages, we handle every detail so you can focus on the experience itself. While we deliver comfort and reliability, we also remain committed to offering some of the most affordable fares available, because unforgettable journeys should be accessible, not overwhelming. With HowTo Travels, every journey begins with trust and ends with beautiful memories.
        </motion.p>

      </div>
    </div>
  );
};

export default Whychoose;