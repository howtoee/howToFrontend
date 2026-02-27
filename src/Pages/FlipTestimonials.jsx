
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-500 px-4 py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT STACK */}
        <div className="relative h-[380px] flex items-center justify-center">
          <div className="relative w-60 h-80">
            <AnimatePresence>
              {stack.slice(0, 4).map((item, index) => (
                <motion.div
                  key={item.id}
                  className="absolute inset-0 bg-white rounded-xl shadow-xl flex flex-col items-center justify-center cursor-pointer"
                  style={{ zIndex: 10 - index }}
                  animate={{
                    scale: 1 - index * 0.08,
                    y: index * 18,
                    rotate: index * -3,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 25 }}
                  onClick={() => bringToFront(item)}
                  drag
                  dragElastic={0.4}
                >
                  {/* Avatar */}
                  <div className="w-28 h-28 rounded-full bg-teal-500 text-white text-4xl font-bold flex items-center justify-center mb-3">
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>

                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.role}</p>

                  <div className="mt-2 text-yellow-400">★★★★★</div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-teal-500 text-white text-xl font-bold flex items-center justify-center">
                  {active.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{active.name}</p>
                  <p className="text-sm text-gray-600">{active.role}</p>
                </div>
              </div>

              <p className="italic text-gray-800 leading-relaxed">
                “{active.quote}”
              </p>
            </motion.div>
          </AnimatePresence>

      
        </div>
<button
  onClick={() => navigate("/testimonials")}
  className="mx-auto flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg hover:scale-105 ml-[500px]"
>
  Read all testimonials
  <span className="text-lg">→</span>
</button>
      </div>
    </section>
  );
};

export default FlipTestimonials;
