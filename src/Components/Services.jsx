import React from "react";
import { motion } from "framer-motion";
import {
  PaperAirplaneIcon,        // flights
  BuildingOffice2Icon,     // hotels
  IdentificationIcon,      // visa
  ShieldCheckIcon,         // insurance
  TruckIcon,               // bus
  ArrowPathRoundedSquareIcon, // train alternative
  MapPinIcon,              // transfers
  GlobeAsiaAustraliaIcon,  // tours / safari
  CameraIcon,              // trips
  SparklesIcon,            // packages
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "Flight Bookings",
    desc: "Secure the cheapest domestic and international flights with HowTo Travel. We compare real-time prices across airlines to offer unbeatable last-minute and advance deals. Easy online booking, flexible changes, and 24/7 support make your air travel simple, affordable, and stress-free, no hidden fees, just the lowest rates guaranteed.",
    icon: PaperAirplaneIcon,
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
  },
  {
    title: "Hotel Bookings",
    desc: "FWe help you find the best hotel deals worldwide. From luxury resorts to budget stays, we guarantee the lowest prices with instant confirmation. Compare options easily, read real reviews, and book seamlessly. Enjoy comfortable, value-packed accommodations without overspending, your perfect stay starts here.",
    icon: BuildingOffice2Icon,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    title: "Visa Appointments",
    desc: "Get hassle-free visa assistance with us. We guide you through applications, document requirements, and appointment scheduling for popular destinations. Fast, accurate support ensures smooth processing and higher approval chances. Travel worry-free with expert help at the most affordable service rates available.",
    icon: IdentificationIcon,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
  },
  {
    title: "Travel Insurance",
    desc: "Protect your journey with affordable and comprehensive travel insurance at HowTo Travel. Coverage includes medical emergencies, trip cancellations, lost baggage, and delays. Quick online purchase, instant policy, and reliable claims support. Travel confidently knowing you're covered at the lowest premiums.",
    icon: ShieldCheckIcon,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "Bus Bookings",
    desc: "Book comfortable, budget-friendly bus tickets across India with us. Select AC, sleeper, and luxury options with the cheapest fares and real-time availability. Simple booking process, secure payments, and timely rides, making intercity travel easy, affordable, and reliable every time.",
    icon: TruckIcon,
    image: "https://images.unsplash.com/photo-1509749837427-ac94a2553d0e",
  },
  {
    title: "Train Bookings",
    desc: "Reserve IRCTC and other train tickets effortlessly through HowTo Travel. Get the lowest confirmed fares, tatkal options, and seat availability checks. Fast booking, e-tickets, and helpful support for groups or last-minute plans. Enjoy smooth, cost-effective rail journeys without the usual hassle.",
    icon: ArrowPathRoundedSquareIcon,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    title: "Airport Transfers",
    desc: "Arrive stress-free with reliable, low-cost airport transfers from HowTo Travel. Private cars, shuttles, or luxury options to/from any airport. Book in advance or last-minute at unbeatable prices with a meet-and-greet service. Safe, punctual rides ensure a smooth start or end to your trip.",
    icon: MapPinIcon,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
  },
  {
    title: "Local Transfers",
    desc: "Explore cities comfortably with affordable local transfers booked through HowTo Travel. From city rides to day trips, choose taxis, private cars, or shuttles at the cheapest rates. Easy booking, professional drivers, and on-time service, making local travel convenient, safe, and budget-friendly wherever you go..",
    icon: GlobeAsiaAustraliaIcon,
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
  },
  {
    title: "Safari Trips",
    desc: "Experience thrilling wildlife adventures with HowTo Travel's safari packages. Affordable bookings for national parks like the Masai Mara and jeeps, guides, and stays included. Expert planning, best rates, and hassle-free arrangements for an unforgettable, value-packed nature escape.",
    icon: CameraIcon,
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
  },
  {
    title: "Tour Packages",
    desc: "We offer curated tour packages at for group, family, or couple trips. All-inclusive deals cover flights, hotels, transfers, sightseeing, and more at the lowest prices. Personalised options, seamless coordination, and stress-free planning turn your dream vacation into reality affordably and effortlessly.",
    icon: SparklesIcon,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
];


const Services = () => {
  return (
    <div className="pt-[0px] sm:pt-0 md:pt-[2px] lg:pt-2">
      <section className="relative overflow-hidden bg-gray-950 text-white">
        {/* Full-width Hero */}
        <div className="relative w-full h-[30vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh] overflow-hidden rounded-b-2xl sm:rounded-b-[2rem] lg:rounded-b-[3rem]">
          <img
            src="/Images/Services.png"
            alt="Services"
            className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700 brightness-220"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
<br />
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_70%)]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20">
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isReverse = i % 2 !== 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center ${
                    isReverse ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className={`relative group rounded-3xl overflow-hidden shadow-xl ${
                      isReverse ? "md:order-2" : ""
                    }`}
                  >
                   
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent" />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{
                      y: -6,
                      boxShadow:
                        "0 25px 60px -15px rgba(56,189,248,0.35), 0 10px 25px -10px rgba(99,102,241,0.3)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 ${
                      isReverse ? "md:order-1" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 8, scale: 1.15 }}
                        className="p-3 rounded-xl bg-gradient-to-tr from-sky-400 to-indigo-500"
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {service.desc}
                    </p>

                    <button className="mt-4 sm:mt-6 inline-flex items-center gap-2 rounded-full bg-sky-500/90 px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-sky-400 transition-all">
                      Explore Service
                    </button>

                    <div className="absolute -inset-[1px] -z-10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-sky-500/40 via-indigo-500/40 to-pink-500/40 blur-xl" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};


export default Services;