// src/Components/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-white pt-16 pb-8 border-t-[6px] border-purple-600 relative overflow-hidden">
      {/* Decorative background blur and gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-purple-600 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-500 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

        {/* Logo & About */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            HowTo Travel
          </h2>
          <p className="text-indigo-200/80 text-sm leading-relaxed mb-6 font-light">
            Your one-stop solution for flight bookings, hotels, visa assistance, travel insurance, and more. Affordable, reliable, and stress-free travel at your fingertips.
          </p>
          <div className="flex space-x-4 mt-auto">
            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-purple-600 border border-white/10 hover:border-purple-500 transition-all duration-300 hover:-translate-y-1 shadow-lg group">
              <FaFacebookF className="text-indigo-200 group-hover:text-white transition-colors" />
            </a>
            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-blue-500 border border-white/10 hover:border-blue-400 transition-all duration-300 hover:-translate-y-1 shadow-lg group">
              <FaTwitter className="text-indigo-200 group-hover:text-white transition-colors" />
            </a>
            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-pink-500 border border-white/10 hover:border-pink-400 transition-all duration-300 hover:-translate-y-1 shadow-lg group">
              <FaInstagram className="text-indigo-200 group-hover:text-white transition-colors" />
            </a>
            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 shadow-lg group">
              <FaLinkedin className="text-indigo-200 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-purple-500 after:rounded-full">
            Quick Links
          </h3>
          <ul className="space-y-3 font-light text-indigo-200/80">
            <li><Link to="/" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>About Us</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>Services</Link></li>
            <li><Link to="/testimonials" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-blue-500 after:rounded-full">
            Our Services
          </h3>
          <ul className="space-y-3 font-light text-indigo-200/80 text-sm">
            <li><Link to="/services/flights" className="hover:text-white hover:translate-x-1 block transition-all duration-300">Flight bookings</Link></li>
            <li><Link to="/services/hotels" className="hover:text-white hover:translate-x-1 block transition-all duration-300">Hotel bookings</Link></li>
            <li><Link to="/services/visa" className="hover:text-white hover:translate-x-1 block transition-all duration-300">Visa appointments</Link></li>
            <li><Link to="/services/insurance" className="hover:text-white hover:translate-x-1 block transition-all duration-300">Travel insurance</Link></li>
            <li><Link to="/services/bus" className="hover:text-white hover:translate-x-1 block transition-all duration-300">Bus & Train bookings</Link></li>
            <li><Link to="/services/airport-transfer" className="hover:text-white hover:translate-x-1 block transition-all duration-300">Airport & Local transfers</Link></li>
            <li><Link to="/services/safari" className="hover:text-white hover:translate-x-1 block transition-all duration-300">Safari trips</Link></li>
            <li><Link to="/services/tours" className="hover:text-white hover:translate-x-1 block transition-all duration-300">Tour packages</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-pink-500 after:rounded-full">
            Contact Us
          </h3>
          <ul className="space-y-4 font-light text-indigo-200/80 text-sm">
            <li className="flex items-start justify-start space-x-3 group cursor-pointer">
              <div className="mt-1 h-8 w-8 min-w-[32px] rounded-full bg-white/5 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                <FaMapMarkerAlt />
              </div>
              <span className="group-hover:text-white transition-colors duration-300 pt-1">1-61/AS/B/703, #703, 7th floor Block-B of ASIAN SUNCITY, Kothaguda Hyderabad 500084.</span>
            </li>
            <li className="flex items-start justify-start space-x-3 group cursor-pointer">
              <div className="mt-1 h-8 w-8 min-w-[32px] rounded-full bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <FaPhoneAlt />
              </div>
              <span className="group-hover:text-white transition-colors duration-300 pt-1">+91 90142 63831</span>
            </li>
            <li className="flex items-start justify-start space-x-3 group cursor-pointer">
              <div className="mt-1 h-8 w-8 min-w-[32px] rounded-full bg-white/5 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <FaEnvelope />
              </div>
              <span className="group-hover:text-white transition-colors duration-300 pt-1 break-all">support@howtotravel.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent relative z-10"></div>

      <div className="mt-8 px-6 text-center text-indigo-300/60 font-light text-sm relative z-10 flex flex-col md:flex-row justify-center items-center gap-2">
        <span>&copy; {new Date().getFullYear()} HowTo Travel. All rights reserved.</span>
        <span className="hidden md:inline">|</span>
        <span className="flex gap-4">
          <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;