// src/Components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  Plane,
  Hotel,
  Shield,
  Bus,
  Train,
  Car,
  MapPin,
  Compass,
  Briefcase,
  Home,
  Info,
  MessageSquare,
  Phone,
  ChevronDown,
  X,
  Menu,
  Map,
  MoreHorizontal,
  ChevronRight,
} from "lucide-react";

const customStyles = `
  .google-translate-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 140px;
  }
  .goog-te-gadget {
    font-family: 'Inter', sans-serif !important;
    font-size: 0 !important;
    display: flex !important;
    align-items: center !important;
    gap: 8px !important;
  }
  .goog-te-gadget .goog-te-combo {
    background: rgba(255, 255, 255, 0.82);
    border: 1px solid rgba(0, 0, 0, 0.08);
    color: #1e293b;
    border-radius: 12px;
    padding: 6px 12px;
    font-size: 13px !important;
    font-weight: 600;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  }
  .dark .goog-te-gadget .goog-te-combo {
    background: rgba(30, 41, 59, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #f1f5f9;
  }
  .goog-te-gadget .goog-te-combo:hover {
    background: #fff;
    border-color: #222467;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  }
  .dark .goog-te-gadget .goog-te-combo:hover {
    background: #334155;
    border-color: #428bca;
  }
  .goog-logo-link {
    display: none !important;
  }
  .goog-te-gadget span {
    display: none !important;
  }
  /* Hide Google Translate top bar but NOT the dropdown */
  body {
    top: 0 !important;
  }
  .goog-te-banner-frame {
    display: none !important;
  }
  .goog-te-menu-frame {
    max-width: 100% !important;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
  }
`;

const navLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "About Us", path: "/about", icon: Info },
  {
    name: "Services",
    path: "/services",
    icon: Briefcase,
    dropdown: [
      { name: "Flight Booking", path: "/services/flights", icon: Plane },
      { name: "Hotels", path: "/services/hotels", icon: Hotel },
      { name: "Visa Appointments", path: "/services/visa", icon: Briefcase },
      {
        name: "More",
        path: "/services",
        icon: MoreHorizontal,
        isNested: true,
        submenu: [
          {
            name: "Travel Insurance",
            path: "/services/insurance",
            icon: Shield,
          },
          { name: "Bus Bookings", path: "/services/bus", icon: Bus },
          { name: "Train Bookings", path: "/services/train", icon: Train },
          {
            name: "Airport Transfers",
            path: "/services/airport-transfer",
            icon: Car,
          },
          {
            name: "Local Transfers",
            path: "/services/local-transfer",
            icon: MapPin,
          },
          { name: "Safari Trips", path: "/services/safari", icon: Compass },
          { name: "Tour Packages", path: "/services/tours", icon: Map },
        ],
      },
    ],
  },
  { name: "Testimonials", path: "/testimonials", icon: MessageSquare },
  { name: "Contact Us", path: "/contact", icon: Phone },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [moreOpenIndex, setMoreOpenIndex] = useState(null); // 👈 fix for nested More menu
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(null); // 👈 mobile nested menu index
  const [capsuleProps, setCapsuleProps] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const navRefs = useRef([]);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  useEffect(() => {
    const updateCapsule = () => {
      const activeIndex = navLinks.findIndex(
        (link) =>
          location.pathname === link.path ||
          (link.dropdown && location.pathname.startsWith(link.path)),
      );

      const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

      if (targetIndex !== -1 && navRefs.current[targetIndex]) {
        const element = navRefs.current[targetIndex];
        setCapsuleProps({
          left: element.offsetLeft,
          width: element.offsetWidth,
          opacity: 1,
        });
      } else if (hoveredIndex === null) {
        setCapsuleProps((prev) => ({ ...prev, opacity: 0 }));
      }
    };

    updateCapsule();
    window.addEventListener("resize", updateCapsule);
    return () => window.removeEventListener("resize", updateCapsule);
  }, [location.pathname, hoveredIndex]);
const hasInitializedTranslate = useRef(false);
  // Google Translate Init
useEffect(() => {
  const initGoogleTranslate = () => {
    if (
      window.google &&
      window.google.translate &&
      !hasInitializedTranslate.current &&
      !document.querySelector(".goog-te-gadget")
    ) {
      hasInitializedTranslate.current = true;

      new window.google.translate.TranslateElement(
        { pageLanguage: "en", autoDisplay: false },
        "google_translate_element"
      );
    }
  };

  window.googleTranslateElementInit = initGoogleTranslate;

  if (!document.getElementById("google-translate-script")) {
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  } else {
    initGoogleTranslate();
  }
}, []);

  return (
    <>
      <style>{customStyles}</style>
      <nav
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? "bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border-b border-white/20 py-3"
            : "bg-transparent py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-5 md:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo - Column 1 */}
            <div className="flex-1 flex justify-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex-shrink-0 flex items-center cursor-pointer group"
              >
                <div className="relative w-20 h-14 sm:w-24 sm:h-16 lg:w-28 lg:h-18 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/logo.png"
                    alt="howTo Logo"
                    className="w-full h-full object-contain filter drop-shadow-sm"
                  />
                </div>
              </motion.div>
            </div>

            {/* Desktop Navigation - Column 2 (Centered) */}
            <div className="hidden lg:flex flex-initial items-center gap-1 relative px-2 py-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-full border border-slate-200 dark:border-slate-700 shadow-md mx-4">
              <motion.div
                initial={false}
                animate={{
                  left: capsuleProps.left,
                  width: capsuleProps.width,
                  opacity: capsuleProps.opacity,
                }}
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                className="absolute h-[80%] my-auto inset-y-0 rounded-full bg-[#222467]/10 dark:bg-[#428bca]/20 shadow-[0_0_15px_rgba(34,36,103,0.1)]"
              />

              {navLinks.map((link, index) => (
                <div
                  key={link.name}
                  ref={(el) => (navRefs.current[index] = el)}
                  className="relative flex items-center"
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    if (link.dropdown) setIsServicesOpen(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    if (link.dropdown) setIsServicesOpen(false);
                  }}
                >
                  <div className="px-5 py-2.5">
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center gap-2 text-sm font-bold transition-colors duration-300 ${isActive ? "text-[#222467] dark:text-[#428bca]" : "text-slate-600 dark:text-slate-400 hover:text-[#222467] dark:hover:text-[#428bca]"}`
                      }
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <link.icon className="w-4 h-4" />
                      </motion.div>
                      {link.name}
                      {link.dropdown && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                        />
                      )}
                    </NavLink>
                  </div>

                  {/* Dropdown Menu */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{
                            type: "spring",
                            bounce: 0,
                            duration: 0.4,
                          }}
                          className="absolute top-full left-0 mt-3 w-64 rounded-3xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/20 dark:border-slate-700/50 overflow-hidden"
                        >
                          <div className="p-3 grid gap-1">
                            {link.dropdown.map((subItem, subIdx) => (
                              <div key={subItem.name} className="relative">
                                {subItem.isNested ? (
                                  <>
                                    <NavLink
                                      to={subItem.path}
                                      onMouseEnter={() =>
                                        setMoreOpenIndex(subIdx)
                                      }
                                      className="w-full group flex items-center justify-between gap-4 px-4 py-3 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-[#222467] dark:hover:bg-[#428bca] hover:text-white rounded-2xl transition-all duration-300"
                                    >
                                      <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-700/50 flex items-center justify-center group-hover:bg-white/20 group-hover:rotate-6 transition-all duration-300">
                                          <subItem.icon className="w-5 h-5 text-[#222467] dark:text-[#428bca] group-hover:text-white" />
                                        </div>
                                        <div className="flex flex-col text-left">
                                          <span>{subItem.name}</span>
                                          <span className="text-[10px] opacity-60 group-hover:opacity-100">
                                            Explore more
                                          </span>
                                        </div>
                                      </div>
                                      <ChevronRight
                                        className={`w-4 h-4 transition-transform duration-300 ${moreOpenIndex === subIdx ? "rotate-90 lg:rotate-0 lg:translate-x-1" : ""}`}
                                      />
                                    </NavLink>

                                    {/* Nested Submenu */}
                                    <AnimatePresence>
                                      {moreOpenIndex === subIdx && (
                                        <motion.div
                                          initial={{
                                            opacity: 0,
                                            x: 10,
                                            scale: 0.95,
                                          }}
                                          animate={{
                                            opacity: 1,
                                            x: 0,
                                            scale: 1,
                                          }}
                                          exit={{
                                            opacity: 0,
                                            x: 5,
                                            scale: 0.95,
                                          }}
                                          onMouseEnter={() =>
                                            setMoreOpenIndex(subIdx)
                                          }
                                          onMouseLeave={() =>
                                            setMoreOpenIndex(null)
                                          }
                                          className="absolute left-full top-0 ml-2 w-64 rounded-3xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/20 dark:border-slate-700/50 overflow-hidden p-3 grid gap-1"
                                        >
                                          {subItem.submenu.map((nestedItem) => (
                                            <NavLink
                                              key={nestedItem.name}
                                              to={nestedItem.path}
                                              className="group flex items-center gap-4 px-4 py-3 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-[#222467] dark:hover:bg-[#428bca] hover:text-white rounded-2xl transition-all duration-300"
                                            >
                                              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-700/50 flex items-center justify-center group-hover:bg-white/20 group-hover:rotate-6 transition-all duration-300">
                                                <nestedItem.icon className="w-5 h-5 text-[#222467] dark:text-[#428bca] group-hover:text-white" />
                                              </div>
                                              <span>{nestedItem.name}</span>
                                            </NavLink>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </>
                                ) : (
                                  <NavLink
                                    to={subItem.path}
                                    className="group flex items-center gap-4 px-4 py-3 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-[#222467] dark:hover:bg-[#428bca] hover:text-white rounded-2xl transition-all duration-300"
                                  >
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-700/50 flex items-center justify-center group-hover:bg-white/20 group-hover:rotate-6 transition-all duration-300">
                                      <subItem.icon className="w-5 h-5 text-[#222467] dark:text-[#428bca] group-hover:text-white" />
                                    </div>
                                    <div className="flex flex-col">
                                      <span>{subItem.name}</span>

                                      <span className="text-[10px] opacity-60 group-hover:opacity-100">
                                        Click to explore
                                      </span>
                                    </div>
                                  </NavLink>
                                )}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Actions/Translate/Mobile Menu - Column 3 */}
            <div className="flex-1 flex justify-end items-center gap-4">
              {/* Google Translate - Desktop Only */}
              <div className="hidden lg:flex items-center">
                <div
                  id="google_translate_element"
                  className="google-translate-container scale-90 origin-right pr-2"
                ></div>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex lg:hidden items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="relative w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white transition-all active:scale-90"
                  aria-label="Toggle menu"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isOpen ? "close" : "open"}
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isOpen ? (
                        <X className="w-5 h-5 sm:w-6 sm:h-6" />
                      ) : (
                        <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.dropdown ? (
                      <div className="space-y-2">
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className={`flex items-center justify-between w-full px-4 py-3 rounded-2xl text-base font-bold transition-all ${isServicesOpen
                              ? "bg-[#222467]/10 text-[#222467] dark:bg-[#428bca]/20 dark:text-[#428bca]"
                              : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            <link.icon className="w-5 h-5" />
                            {link.name}
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                          />
                        </button>

                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-6 space-y-2 overflow-hidden"
                            >
                              {link.dropdown.map((subItem, subIdx) => (
                                <div key={subItem.name}>
                                  {subItem.isNested ? (
                                    <div className="space-y-1">
                                      <button
                                        onClick={() =>
                                          setIsMobileMoreOpen(
                                            isMobileMoreOpen === subIdx
                                              ? null
                                              : subIdx,
                                          )
                                        }
                                        className="flex items-center justify-between w-full px-4 py-2 rounded-xl text-sm font-bold text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                                      >
                                        <div className="flex items-center gap-3">
                                          <subItem.icon className="w-4 h-4" />
                                          {subItem.name}
                                        </div>
                                        <ChevronDown
                                          className={`w-3.5 h-3.5 transition-transform duration-300 ${isMobileMoreOpen === subIdx ? "rotate-180" : ""}`}
                                        />
                                      </button>

                                      <AnimatePresence>
                                        {isMobileMoreOpen === subIdx && (
                                          <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{
                                              opacity: 1,
                                              height: "auto",
                                            }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="pl-4 space-y-1 overflow-hidden"
                                          >
                                            {subItem.submenu.map(
                                              (nestedItem) => (
                                                <NavLink
                                                  key={nestedItem.name}
                                                  to={nestedItem.path}
                                                  onClick={() =>
                                                    setIsOpen(false)
                                                  }
                                                  className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-bold text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/20"
                                                >
                                                  <nestedItem.icon className="w-4 h-4" />
                                                  {nestedItem.name}
                                                </NavLink>
                                              ),
                                            )}
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </div>
                                  ) : (
                                    <NavLink
                                      to={subItem.path}
                                      onClick={() => setIsOpen(false)}
                                      className="flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                                    >
                                      <subItem.icon className="w-4 h-4" />
                                      {subItem.name}
                                    </NavLink>
                                  )}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <NavLink
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-bold transition-all ${isActive
                            ? "bg-[#222467]/10 text-[#222467] dark:bg-[#428bca]/20 dark:text-[#428bca]"
                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                          }`
                        }
                      >
                        <link.icon className="w-5 h-5" />
                        {link.name}
                      </NavLink>
                    )}
                  </div>
                ))}

                {/* Google Translate in Mobile Menu */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <p className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Language
                  </p>
                  <div className="px-4 py-2">
                    <div
                      id="google_translate_mobile_placeholder"
                      className="google-translate-container"
                    >
                      {/* Note: Google Translate usually only supports one widget per page. 
                          On mobile, we can either re-mount or rely on the desktop one if it's visible.
                          For consistency, it's often better to just have it once. */}
                      <div className="text-xs text-slate-500 italic">
                        Select language from top menu
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
