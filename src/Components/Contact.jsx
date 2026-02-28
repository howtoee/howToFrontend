import React, { useState } from "react";
import { FaUser, FaPhone, FaEnvelope, FaRegComment, FaClipboardList } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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

  const inputClasses =
    "w-full pl-12 pr-4 py-3 sm:py-4 bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all duration-300 text-sm sm:text-base text-gray-800 placeholder-gray-400 shadow-sm hover:shadow-md";
  const iconClasses =
    "absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors duration-300 text-lg sm:text-xl";

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[35vh] sm:h-[45vh] md:h-[55vh] lg:h-[65vh] overflow-hidden rounded-b-[2rem] sm:rounded-b-[3rem] md:rounded-b-[4rem] shadow-2xl">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="/Images/Contact.png"
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
        {/* Animated gradient overlay for a premium look */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-purple-900/40 to-black/60"></div>

        {/* Text Area */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-indigo-100 text-sm sm:text-base md:text-lg max-w-2xl font-medium drop-shadow-md pb-12 sm:pb-0"
          >
            We're here to help you plan your next perfect trip. Reach out below and our experts will get back to you immediately!
          </motion.p>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 sm:-mt-24 md:-mt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 100 }}
          className="bg-white/80 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/40 rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 md:p-12"
        >
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Send an Enquiry
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              Fill out the form below and we'll be in touch shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {/* Name */}
              <motion.div whileHover={{ scale: 1.01 }} className="relative group">
                <FaUser className={iconClasses} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className={inputClasses}
                />
              </motion.div>

              {/* Mobile */}
              <motion.div whileHover={{ scale: 1.01 }} className="relative group">
                <FaPhone className={iconClasses} />
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  required
                  className={inputClasses}
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {/* Email */}
              <motion.div whileHover={{ scale: 1.01 }} className="relative group">
                <FaEnvelope className={iconClasses} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className={inputClasses}
                />
              </motion.div>

              {/* Service */}
              <motion.div whileHover={{ scale: 1.01 }} className="relative group">
                <FaClipboardList className={iconClasses} />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className={`${inputClasses} appearance-none bg-no-repeat bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%236b7280%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[position:right_1.5rem_center] cursor-pointer`}
                >
                  <option value="" disabled className="text-gray-400">Select Service...</option>
                  <option value="Flight bookings" className="text-gray-800">Flight bookings</option>
                  <option value="Hotel bookings" className="text-gray-800">Hotel bookings</option>
                  <option value="Visa appointments" className="text-gray-800">Visa appointments</option>
                  <option value="Travel insurance" className="text-gray-800">Travel insurance</option>
                  <option value="Bus bookings" className="text-gray-800">Bus bookings</option>
                  <option value="Train bookings" className="text-gray-800">Train bookings</option>
                  <option value="Airport transfers" className="text-gray-800">Airport transfers</option>
                  <option value="Local transfers" className="text-gray-800">Local transfers</option>
                  <option value="Safari trips" className="text-gray-800">Safari trips</option>
                  <option value="Tour packages" className="text-gray-800">Tour packages</option>
                </select>
              </motion.div>
            </div>

            {/* Enquiry */}
            <motion.div whileHover={{ scale: 1.005 }} className="relative group">
              <FaRegComment className="absolute left-4 top-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors duration-300 text-lg sm:text-xl" />
              <textarea
                name="enquiry"
                value={formData.enquiry}
                onChange={handleChange}
                placeholder="Briefly describe your requirements..."
                rows="4"
                className="w-full pl-12 pr-4 py-3 sm:py-4 bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all duration-300 text-sm sm:text-base text-gray-800 placeholder-gray-400 resize-none shadow-sm hover:shadow-md"
              />
            </motion.div>

            {/* Submit */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                type="submit"
                disabled={loading}
                className={`w-full relative shadow-[0_10px_20px_rgba(79,70,229,0.3)] bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-lg tracking-wide py-4 sm:py-5 rounded-xl sm:rounded-2xl transition-all duration-300 overflow-hidden flex items-center justify-center gap-2 group ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  <>
                    Send Enquiry
                    <motion.div
                      className="ml-2 text-xl"
                      initial={{ x: 0, rotate: 0 }}
                      whileHover={{ x: 5, rotate: -15, scale: 1.2 }}
                    >
                      ✈️
                    </motion.div>
                  </>
                )}
                {/* Shine effect on hover */}
                <div className="absolute inset-0 h-full w-full bg-white/20 scale-0 group-hover:scale-100 rounded-2xl transition-transform duration-300 ease-out origin-center"></div>
              </button>
            </motion.div>

            {/* Message */}
            <AnimatePresence>
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`text-center py-4 rounded-xl font-bold shadow-sm ${message.includes("successfully") ? "bg-green-100 text-green-700 border border-green-200" : "bg-red-100 text-red-700 border border-red-200"}`}
                >
                  {message}
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;