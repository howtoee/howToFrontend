import { Phone, Briefcase, Info, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  {
    id: "whatsapp",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    link: "https://wa.me/919876543210",
  },
  {
    id: "mobile",
    icon: Phone,
    label: "Call Us",
    path: "tel:+919876543210",
  },
  {
    id: "services",
    icon: Briefcase,
    label: "Services",
    link: "/services",
  },
  {
    id: "about",
    icon: Info,
    label: "About Us",
    link: "/about",
  },
  {
    id: "contact",
    icon: Mail,
    label: "Contact",
    link: "/contact",
  },
];

const QuickLinks = () => {
  const [hoveredId, setHoveredId] = useState(null);



  return (
    <>
      <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0 0 #428bc9;
          }
          50% {
            box-shadow: 0 0 20px 6px #428bc9;
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 2s ease-in-out infinite;
        }

        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}</style>
      <AnimatePresence>
       
     <motion.div
drag
dragMomentum={false}
  dragElastic={0.2}
            className="fixed top-110 right-4 z-[100] flex flex-col space-y-2"
          >
            {links.map((link) => {
              const isActive = hoveredId === link.id;
              const href = link.path || link.link;
              const Icon = link.icon;
              const isExternal = link.id === "whatsapp" || link.id === "mobile";

              const content = (
                <>
                  <div
                    className={`bg-[#222467] text-white p-3 flex items-center justify-center rounded-l-full group-hover:bg-blue-600 transition-colors duration-300 ${
                      link.id === "whatsapp" ? "animate-pulseShadow" : ""
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{
                      width: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    className="overflow-hidden whitespace-nowrap bg-white text-gray-800 font-bold text-sm px-0 group-hover:px-4 h-full flex items-center shadow-lg rounded-l-md border-y border-l border-slate-200"
                  >
                    {link.label}
                  </motion.span>
                </>
              );

              const commonProps = {
                key: link.id,
                onMouseEnter: () => setHoveredId(link.id),
                onMouseLeave: () => setHoveredId(null),
                className: `flex flex-row-reverse items-center group cursor-pointer transition-all duration-300 ${
                  isActive ? "translate-x-0" : "translate-x-[calc(0%)]"
                }`,
                style: { zIndex: isActive ? 50 : 10 },
              };

              if (isExternal) {
                return (
                  <a
                    {...commonProps}
                    href={href}
                    target={link.id === "whatsapp" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link {...commonProps} to={href}>
                  {content}
                </Link>
              );
            })}
          </motion.div>
        
      </AnimatePresence>
    </>
  );
};

export default QuickLinks;
