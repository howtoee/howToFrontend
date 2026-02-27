// src/Components/Whychoose.jsx
import React from "react";
import { FaCheckCircle, FaPlane, FaUsers, FaUmbrellaBeach } from "react-icons/fa";

const features = [
  {
    icon: <FaCheckCircle className="text-blue-600 text-3xl" />,
    title: "Guaranteed Lowest Rates",
    description:
      "We constantly compare and beat prices on flights, hotels, visas, insurance, buses, trains, transfers, safaris, and tour packages. No hidden fees, just unbeatable value.",
  },
  {
    icon: <FaPlane className="text-blue-600 text-3xl" />,
    title: "One-Stop Travel Pitstop",
    description:
      "Book everything in a single place with seamless integration, saving you time and effort compared to juggling multiple platforms.",
  },
  {
    icon: <FaUsers className="text-blue-600 text-3xl" />,
    title: "Personalised Expertise & Support",
    description:
      "Our dedicated team provides tailored advice and 24/7 assistance, turning complex plans into effortless journeys.",
  },
  {
    icon: <FaUmbrellaBeach className="text-blue-600 text-3xl" />,
    title: "Comprehensive & Secure Service",
    description:
      "From visa appointments to airport transfers and thrilling safaris, we handle it all with top security and real-time updates for peace of mind.",
  },
  {
    icon: <FaCheckCircle className="text-blue-600 text-3xl" />,
    title: "Proven Traveller Satisfaction",
    description:
      "Thousands of happy customers trust us for reliable bookings and memorable trips, backed by transparent processes and genuine commitment.",
  },
];

const Whychoose = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
          Why Us?
        </h2>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl">
          At HowTo Travel, we go beyond ordinary travel bookings, delivering the cheapest rates across all your needs while ensuring a reliable, hassle-free experience that major apps and websites simply can't match.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <div className="flex items-center justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whychoose; 