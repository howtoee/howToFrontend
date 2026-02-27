import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Plane, Hotel, Map, Smile } from "lucide-react";

const Counter = ({ end, label, icon: Icon }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200; // speed (ms)
    const stepTime = 20;
    const increment = Math.ceil(end / (duration / stepTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-[#222467]/10 dark:bg-[#428bca]/10 flex items-center justify-center mb-2 sm:mb-3">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#222467] dark:text-[#428bca]" />
      </div>

      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#222467] dark:text-[#428bca]">
        {count.toLocaleString()}+
      </h3>
      <p className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300">
        {label}
      </p>
    </motion.div>
  );
};

const OurAchievements = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 sm:mb-10 md:mb-12 text-slate-900 dark:text-white">
          Our Achievements
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          <Counter end={1200} label="Flight Bookings" icon={Plane} />
          <Counter end={850} label="Hotel Bookings" icon={Hotel} />
          <Counter end={430} label="Trips Completed" icon={Map} />
          <Counter end={1500} label="Happy Customers" icon={Smile} />
        </div>
      </div>
    </section>
  );
};

export default OurAchievements;