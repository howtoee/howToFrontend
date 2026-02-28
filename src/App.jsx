import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/AboutUs";
import Services from "./Components/Services";
import Loader from "./Components/Loader";
import ContactPage from "./Components/Contact";
import ScrollToTop from "./Components/ScrollToTop";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import QuickLinks from "./Pages/QuickLinks";

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700); // faster = smoother feel
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}

      <ScrollToTop />
      <div className={`${loading ? "pointer-events-none" : ""} overflow-x-hidden w-full`}>
        <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-x-hidden">
          <Navbar />

          <AnimatePresence mode="wait">
            <motion.main
              key={location.pathname}
              variants={pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />

                <Route path="/services/flights" element={<Services />} />
                <Route path="/services/hotels" element={<Services />} />
                <Route path="/services/visa" element={<Services />} />
                <Route path="/services/insurance" element={<Services />} />
                <Route path="/services/bus" element={<Services />} />
                <Route path="/services/train" element={<Services />} />
                <Route
                  path="/services/airport-transfer"
                  element={<Services />}
                />
                <Route path="/services/local-transfer" element={<Services />} />
                <Route path="/services/safari" element={<Services />} />
                <Route path="/services/tours" element={<Services />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </motion.main>
          </AnimatePresence>

          <Footer />
        </div>
      </div>

      {/* QuickLinks moved completely outside of layout wrappers to guarantee "fixed" positioning isn't affected by any parent transforms */}
      <QuickLinks />
    </>
  );
};

export default App;
