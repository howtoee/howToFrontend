import React from "react";
import { motion } from "framer-motion";
import {
  PaperAirplaneIcon,
  BuildingOffice2Icon,
  IdentificationIcon,
  ShieldCheckIcon,
  TruckIcon,
  ArrowPathRoundedSquareIcon,
  MapPinIcon,
  GlobeAsiaAustraliaIcon,
  CameraIcon,
  SparklesIcon,
  CpuChipIcon,
  HomeModernIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

// ✅ All WebP — massive size reduction (some were 20-30MB PNGs!)
import ServicesImage    from "../assets/Images/Services.webp";
import FlightBooking    from "../assets/ServicesImages/FlightBooking.webp";
import Visa             from "../assets/ServicesImages/Visa.webp";
import BusBooking       from "../assets/ServicesImages/BusBooking.webp";
import TrainBooking     from "../assets/ServicesImages/TrainBooking.webp";
import AirportTransfer  from "../assets/ServicesImages/AirportTransfer.webp";
import LocalTransfer    from "../assets/ServicesImages/LocalTransfer.webp";
import Tourpackages     from "../assets/ServicesImages/Tourpackages.webp";
import Safari           from "../assets/ServicesImages/Safari.webp";
import HotelBooking     from "../assets/ServicesImages/HotelBooking.webp";
import Travel           from "../assets/ServicesImages/Travel.webp";
import TechAI           from "../assets/ServicesImages/img1.webp";
import PhotographyImg   from "../assets/ServicesImages/img2.webp";
import TravelRealEstate from "../assets/ServicesImages/img3.webp";
import DesignConstruction from "../assets/ServicesImages/img4.webp";
import Freelance        from "../assets/ServicesImages/img5.webp";
import CoOwnership      from "../assets/ServicesImages/img6.webp";

const services = [
  {
    title: "Flight Bookings",
    desc: "Secure the most affordable domestic and international flights with HowTo Travel. We compare real-time prices across airlines to offer unbeatable deals, even at the last-minute. Easy online booking, flexible changes, and 24/7 support make your air travel simple, affordable, and stress-free, no hidden fees, just the best rates guaranteed.",
    icon: PaperAirplaneIcon,
    image: FlightBooking,
  },
  {
    title: "Hotel Bookings",
    desc: "We help you find the best hotel deals worldwide. From luxury resorts to budget stays, we guarantee the lowest prices with instant confirmation. Compare options easily, read real reviews, and book seamlessly. Enjoy comfortable, value-packed accommodations without overspending. Your perfect stay starts here.",
    icon: BuildingOffice2Icon,
    image: HotelBooking,
  },
  {
    title: "Visa Services",
    desc: "We provide hassle-free visa assistance. We guide you through applications, document requirements, and appointment scheduling for popular destinations. Fast, accurate support ensures smooth processing and higher chances of approval. Travel worry-free with expert help at the most affordable rates.",
    icon: IdentificationIcon,
    image: Visa,
  },
  {
    title: "Travel Insurance",
    desc: "Protect your journey with affordable and comprehensive travel insurance at HowTo Travel. Coverage includes medical emergencies, trip cancellations, lost baggage, and delays. Quick online purchase, instant policy, and reliable claims support. Travel confidently knowing you're covered at the lowest premiums.",
    icon: ShieldCheckIcon,
    image: Travel,
  },
  {
    title: "Bus Bookings",
    desc: "Book comfortable, budget-friendly bus tickets across India with us. Select AC, sleeper, and luxury options with the cheapest fares and real-time availability. Simple booking process, secure payments, and timely rides, making intercity travel easy, affordable, and reliable every time.",
    icon: TruckIcon,
    image: BusBooking,
  },
  {
    title: "Train Bookings",
    desc: "Reserve IRCTC and other train tickets effortlessly through HowTo Travel. Get the lowest confirmed fares, tatkal options, and seat availability checks. Fast booking, e-tickets, and helpful support for groups or last-minute plans. Enjoy smooth, cost-effective rail journeys without the usual hassle.",
    icon: ArrowPathRoundedSquareIcon,
    image: TrainBooking,
  },
  {
    title: "Airport Transfers",
    desc: "Arrive stress-free with reliable, low-cost airport transfers from HowTo Travel. Private cars, shuttles, or luxury options to/from any airport. Book in advance or last-minute at unbeatable prices with a meet-and-greet service. Safe, punctual rides ensure a smooth start and end to your trip.",
    icon: MapPinIcon,
    image: AirportTransfer,
  },
  {
    title: "Local Transfers",
    desc: "Explore cities comfortably with affordable local transfers booked through HowTo Travel. From city rides to day trips, choose taxis, private cars, or shuttles at cost-effective rates. Easy booking, professional drivers, and on-time service, making local travel convenient, safe, and budget-friendly wherever you go.",
    icon: GlobeAsiaAustraliaIcon,
    image: LocalTransfer,
  },
  {
    title: "Safari Trips",
    desc: "Experience thrilling wildlife adventures with HowTo Travel's safari packages. Affordable bookings for national parks like the Masai Mara and jeeps, guides, and stays included. Expert planning, best rates, and hassle-free arrangements for an unforgettable, value-packed nature escape.",
    icon: CameraIcon,
    image: Safari,
  },
  {
    title: "Tour Packages",
    desc: "We offer curated tour packages for group, family, or couple trips. All-inclusive deals cover flights, hotels, transfers, sightseeing, and more at pocket-friendly prices. Personalised options, seamless coordination, and stress-free planning turn your dream vacation into reality affordably and effortlessly.",
    icon: SparklesIcon,
    image: Tourpackages,
  },
  {
    title: "Technology & AI Services",
    desc: "Empower your business with cutting-edge Technology & AI solutions. We deliver advanced software, scalable architectures, and intelligent AI models that drive innovation, optimize operations, and give you a competitive edge in the digital landscape.",
    icon: CpuChipIcon,
    image: TechAI,
  },
  {
    title: "Photography & Creative Services",
    desc: "Capture unforgettable moments and elevate your brand with our Photography & Creative Services. From stunning portraits and event coverage to engaging visual content and graphic design, we turn your unique vision into captivating reality.",
    icon: CameraIcon,
    image: PhotographyImg,
  },
  {
    title: "Travel & Real Estate Services",
    desc: "Seamlessly navigate your journeys and property investments with our comprehensive Travel & Real Estate Services. We offer expert guidance on premium travel packages, visa assistance, and lucrative real estate opportunities tailored to your goals.",
    icon: HomeModernIcon,
    image: TravelRealEstate,
  },
  {
    title: "Design & Construction Services",
    desc: "Transform your spaces with our professional Design & Construction Services. Whether it's architectural planning, interior design, or complete build-outs, we deliver high-quality, sustainable solutions that bring your dream structures to life.",
    icon: WrenchScrewdriverIcon,
    image: DesignConstruction,
  },
  {
    title: "Freelance & Gig Economy",
    desc: "Tap into top-tier talent or find your next professional opportunity through our Freelance & Gig Economy platform. We connect skilled freelancers with businesses needing flexible, specialized services for projects of any scale.",
    icon: UserGroupIcon,
    image: Freelance,
  },
  {
    title: "Co-Ownership Investment Program",
    desc: "Maximize your portfolio with our Co-Ownership Investment Program. Access high-value assets and real estate ventures through secure, fractional ownership, making robust investments more accessible, diversified, and profitable.",
    icon: ChartPieIcon,
    image: CoOwnership,
  },
];


const Services = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-[0px] sm:pt-0 md:pt-[2px] lg:pt-2">
      <section className="relative overflow-hidden bg-gray-950 text-white">
        {/* Full-width Hero */}
        <div className="relative w-full h-[30vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh] overflow-hidden rounded-b-2xl sm:rounded-b-[2rem] lg:rounded-b-[3rem]">
          <img
            src={ServicesImage}
            alt="Services"
            fetchPriority="high"
            decoding="async"
            loading="eager"
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
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center ${
                    isReverse ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 180, damping: 20 }}
                    className={`relative group rounded-3xl overflow-hidden shadow-xl ${
                      isReverse ? "md:order-2" : ""
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent" />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{
                      y: -5,
                      boxShadow:
                        "0 25px 60px -15px rgba(56,189,248,0.25), 0 10px 25px -10px rgba(99,102,241,0.2)",
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 ${
                      isReverse ? "md:order-1" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 8, scale: 1.12 }}
                        transition={{ type: "spring", stiffness: 260 }}
                        className="p-3 rounded-xl bg-gradient-to-tr from-sky-400 to-indigo-500"
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-justify">
                      {service.desc}
                    </p>

                    <button
                      onClick={() => navigate("/contact")}
                      className="mt-4 sm:mt-6 inline-flex items-center gap-2 rounded-full bg-sky-500/90 px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-sky-400 transition-all cursor-pointer"
                    >
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