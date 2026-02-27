import React, { useState } from "react";
import { FaUser, FaPhone, FaEnvelope, FaRegComment, FaClipboardList } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    enquiry: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("https://howtobackend.onrender.com/contact/contactform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setMessage("Enquiry submitted successfully!");
        setFormData({ name: "", mobile: "", email: "", service: "", enquiry: "" });
      } else {
        setMessage(data.message || "Something went wrong");
      }
    } catch (error) {
      setMessage("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-1">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] sm:h-[60vh] md:h-[30vh] lg:h-[60vh] overflow-hidden rounded-b-2xl sm:rounded-b-[2rem] lg:rounded-b-[3rem]">
        <img
          src="/Images/Contact.png"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover object-bottom scale-105 hover:scale-110 transition-transform duration-700"
        />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 animate-gradient-xy opacity-40"></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Enquiry Form Section */}
      <div className="max-w-4xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">Send an Enquiry</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-6 sm:p-10 space-y-4 animate-fadeIn"
        >
          {/* Name */}
          <div className="flex items-center border-b border-gray-300 py-2">
            <FaUser className="text-gray-500 mr-3" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Mobile */}
          <div className="flex items-center border-b border-gray-300 py-2">
            <FaPhone className="text-gray-500 mr-3" />
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              required
              className="w-full outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border-b border-gray-300 py-2">
            <FaEnvelope className="text-gray-500 mr-3" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Service */}
          <div className="flex items-center border-b border-gray-300 py-2">
            <FaClipboardList className="text-gray-500 mr-3" />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full outline-none text-gray-700 placeholder-gray-400"
            >
              <option value="">Select Service</option>
              <option value="Flight bookings">Flight bookings</option>
              <option value="Hotel bookings">Hotel bookings</option>
              <option value="Visa appointments">Visa appointments</option>
              <option value="Travel insurance">Travel insurance</option>
              <option value="Bus bookings">Bus bookings</option>
              <option value="Train bookings">Train bookings</option>
              <option value="Airport transfers">Airport transfers</option>
              <option value="Local transfers">Local transfers</option>
              <option value="Safari trips">Safari trips</option>
              <option value="Tour packages">Tour packages</option>
            </select>
          </div>

          {/* Enquiry */}
          <div className="flex items-start border-b border-gray-300 py-2">
            <FaRegComment className="text-gray-500 mr-3 mt-2" />
            <textarea
              name="enquiry"
              value={formData.enquiry}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full outline-none text-gray-700 placeholder-gray-400 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-all duration-300"
          >
            {loading ? "Submitting..." : "Send Enquiry"}
          </button>

          {/* Message */}
          {message && <p className="text-center text-red-500 mt-2">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;