// src/Components/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">HowTo Travel</h2>
          <p className="text-gray-400 text-sm">
            Your one-stop solution for flight bookings, hotels, visa assistance, travel insurance, and more. Affordable, reliable, and stress-free travel at your fingertips.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-600"><FaLinkedin /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
            <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
            <li><Link to="/testimonials" className="hover:text-blue-400">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/services/flights" className="hover:text-blue-400">Flight bookings</Link></li>
            <li><Link to="/services/hotels" className="hover:text-blue-400">Hotel bookings</Link></li>
            <li><Link to="/services/visa" className="hover:text-blue-400">Visa appointments</Link></li>
            <li><Link to="/services/insurance" className="hover:text-blue-400">Travel insurance</Link></li>
            <li><Link to="/services/bus" className="hover:text-blue-400">Bus & Train bookings</Link></li>
            <li><Link to="/services/airport-transfer" className="hover:text-blue-400">Airport & Local transfers</Link></li>
            <li><Link to="/services/safari" className="hover:text-blue-400">Safari trips</Link></li>
            <li><Link to="/services/tours" className="hover:text-blue-400">Tour packages</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt /> <span>123 Travel Street, City, Country</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhoneAlt /> <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope /> <span>support@howtotravel.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} HowTo Travel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;