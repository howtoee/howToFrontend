// src/Components/Whychoose.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPlane, FaUsers, FaUmbrellaBeach } from "react-icons/fa";
const points = [
  "Redefining the way you travel! When it comes to discovering new places, new cultures, and new parts of yourself, HowTo Travels stands as more than just a travel service. It is a trusted companion for every journey you dream of taking. We are not simply booking tickets and hotels; we open doors to experiences that stay with you long after you return home.",

  "At HowTo Travels, we understand that every trip carries a story. The excitement of a long-awaited vacation, the nervous anticipation of a business meeting abroad, and the joy of a family getaway. Our team ensures that from your first booking to your safe return, everything flows effortlessly.",

  "From seamless flight and hotel reservations to visa appointments, travel insurance, train and bus tickets, airport transfers, safari adventures, and curated tour packages, we handle every detail so you can focus on the experience itself while enjoying reliable service and affordable fares."
];
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

<motion.ul
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  }}
  className="mt-8 space-y-6 text-left"
>
  {points.map((point, index) => (
    <motion.li
      key={index}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.7 }}
      className="flex items-start gap-3 text-gray-700 leading-relaxed"
    >
      <FaCheckCircle className="text-blue-600 mt-1 text-lg flex-shrink-0" />
      <span>{point}</span>
    </motion.li>
  ))}
</motion.ul>

      </div>
    </div>
  );
};

export default Whychoose;