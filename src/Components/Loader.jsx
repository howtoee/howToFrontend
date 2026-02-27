import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/90 backdrop-blur-md dark:bg-slate-900/90">
      <div className="flex flex-col items-center gap-6">

        <div className="relative w-32 h-32 flex items-center justify-center">
          
          {/* Smooth rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-0 rounded-full border-4 border-[#222467]/20 border-t-[#222467] dark:border-[#428bca]/20 dark:border-t-[#428bca]"
          />

          {/* Static logo */}
          <img
            src="/logo.png"
            alt="Loading..."
            className="w-20 h-20 object-contain rounded-full bg-white dark:bg-slate-900 p-2 shadow-lg"
          />
        </div>

        {/* Subtle text animation */}
        <motion.p
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
          className="text-sm font-semibold tracking-widest text-slate-600 dark:text-slate-300"
        >
          Loading...
        </motion.p>

      </div>
    </div>
  );
};

export default Loader;