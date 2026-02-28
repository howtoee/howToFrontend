
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { travelTestimonials } from "../data/travelTestimonials";

const FlipTestimonials = () => {
  const navigate = useNavigate();
  const intervalRef = useRef(null);

  const [stack, setStack] = useState(travelTestimonials);
  const active = stack[0];

  // Auto rotate
  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setStack((prev) => [...prev.slice(1), prev[0]]);
    }, 5000);
  };

  const bringToFront = (item) => {
    clearInterval(intervalRef.current);
    setStack([item, ...stack.filter((t) => t.id !== item.id)]);
    startTimer();
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-500 px-4 py-20 relative">

      {/* Testimonials Header */}
      <div className="max-w-6xl w-full mb-10 md:mb-16 text-center md:text-left z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl tracking-tight"
        >
          So, here’s what our <span className="text-teal-300">travellers</span> say!
        </motion.h2>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center z-10 relative">
        {/* LEFT STACK */}
        <div className="relative h-[380px] sm:h-[450px] flex items-center justify-center">
          <div className="relative w-64 h-80 sm:w-72 sm:h-96">
            <AnimatePresence>
              {stack.slice(0, 4).map((item, index) => (
                <motion.div
                  key={item.id}
                  className="absolute inset-0 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center cursor-grab active:cursor-grabbing border border-gray-100"
                  style={{ zIndex: 10 - index }}
                  animate={{
                    scale: 1 - index * 0.08,
                    y: index * 20,
                    rotate: index * -3,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 25 }}
                  onClick={() => bringToFront(item)}
                  drag
                  dragElastic={0.4}
                >
                  {/* Avatar */}
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-teal-400 to-teal-600 text-white text-4xl sm:text-5xl font-bold flex items-center justify-center mb-4 shadow-lg border-4 border-teal-50">
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>

                  <p className="font-extrabold text-xl sm:text-2xl text-gray-900">{item.name}</p>
                  <p className="text-sm font-bold text-indigo-500 uppercase tracking-widest mt-1">{item.role}</p>

                  <div className="mt-4 text-yellow-400 text-xl tracking-widest shadow-yellow-400 drop-shadow-md">★★★★★</div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-white/95 backdrop-blur-3xl rounded-3xl sm:rounded-[2rem] p-6 lg:p-8 shadow-[0_30px_60px_rgba(0,0,0,0.2)] border border-white/60 relative overflow-hidden group w-full lg:w-11/12 justify-self-center lg:justify-self-end">
          {/* Decorative Quote Icon Background */}
          <div className="absolute -top-6 -right-2 text-[10rem] sm:text-[12rem] text-indigo-500/5 font-serif leading-none select-none pointer-events-none transition-transform duration-700 group-hover:scale-110">
            "
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="flex items-center gap-4 sm:gap-5 mb-5 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-white text-xl sm:text-2xl font-black flex items-center justify-center shadow-xl border-4 border-blue-50">
                  {active.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-extrabold text-xl sm:text-2xl text-gray-900 tracking-tight">{active.name}</p>
                  <p className="text-xs sm:text-sm text-blue-600 font-bold uppercase tracking-widest mt-1">{active.role}</p>
                </div>
              </div>

              <div className="relative">
                <p className="text-base sm:text-lg md:text-xl text-gray-800 font-semibold leading-loose italic relative z-10">
                  "{active.quote}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Premium View All Testimonials Button */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 w-full flex justify-center mt-8 md:mt-12">
        <button
          onClick={() => navigate("/testimonials")}
          className="group cursor-pointer relative flex items-center justify-center gap-2 md:gap-3 rounded-full bg-gradient-to-r from-teal-400 to-indigo-500 p-1 text-white shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(45,212,191,0.6)] w-36 sm:w-40 md:w-48 lg:w-56"
        >
          <span className="flex h-10 sm:h-11 md:h-12 lg:h-14 w-full items-center justify-center rounded-full bg-gray-900/40 backdrop-blur-md px-4 md:px-6 text-xs sm:text-sm lg:text-base font-bold uppercase tracking-wider transition-colors duration-300 group-hover:bg-transparent">
            View All
            <span className="ml-1 md:ml-2 transform text-base md:text-lg transition-transform duration-300 group-hover:translate-x-1 md:group-hover:translate-x-2">
              →
            </span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default FlipTestimonials;
