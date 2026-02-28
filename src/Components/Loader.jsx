import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/90 backdrop-blur-md dark:bg-slate-900/90"
    >
      <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6">

        <div
          className="
            relative flex items-center justify-center
            w-20 h-20
            sm:w-24 sm:h-24
            md:w-28 md:h-28
            lg:w-32 lg:h-32
          "
        >
          {/* Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "linear" }}
            className="
              absolute inset-0 rounded-full
              border-[3px] sm:border-4
              border-[#222467]/20 border-t-[#222467]
              dark:border-[#428bca]/20 dark:border-t-[#428bca]
            "
          />

          {/* Glow pulse */}
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="
              absolute inset-2 rounded-full
              bg-[#222467]/10 dark:bg-[#428bca]/10
              blur-xl
            "
          />

          {/* Logo */}
          <motion.img
            src="/logo.png"
            alt="Loading..."
            initial={{ scale: 0.92, opacity: 0.85 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.2 }}
            className="
              relative z-10
              w-10 h-10
              sm:w-12 sm:h-12
              md:w-14 md:h-14
              lg:w-20 lg:h-20
              object-contain rounded-full
              bg-white dark:bg-slate-900
              p-2 shadow-xl
            "
          />
        </div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.1 }}
          className="
            text-[10px]
            sm:text-xs
            md:text-sm
            lg:text-base
            font-semibold tracking-widest
            text-slate-600 dark:text-slate-300
          "
        >
          Loading...
        </motion.p>

      </div>
    </motion.div>
  );
};

export default Loader;