import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhoneAlt, FaQuestionCircle } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const links = [
  {
    id: 'whatsapp',
    icon: FaWhatsapp,
    label: 'WhatsApp',
    link: 'https://wa.me/919014263831',
    isExternal: true,
    target: '_blank',
    color: '#25D366' // whatsapp green
  },
  {
    id: 'mobile',
    icon: FaPhoneAlt,
    label: 'Call Us',
    link: 'tel:+919014263831',
    isExternal: true,
    color: '#34d399' // emerald-400
  },
  {
    id: 'faq',
    icon: FaQuestionCircle,
    label: 'FAQs',
    link: '/faq',
    isExternal: false,
    color: '#f59e0b' // amber-500
  },
  {
    id: 'contact',
    icon: IoMail,
    label: 'Contact Us',
    link: '/contact',
    isExternal: false,
    color: '#3b82f6' // blue-500
  }
];

const QuickLinks = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.68);
          }
          50% {
            box-shadow: 0 0 20px 6px rgba(52, 211, 153, 0.8);
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 2s ease-in-out infinite;
        }

        .transition-custom {
          transition: all 0.3s ease-in-out;
        }
      `}</style>

      {/* Outer absolute container takes 0x0 size and holds the sticky context without pushing page layout */}
      <div className="absolute top-0 right-0 w-0 h-full z-[9999] pointer-events-none">
        {/* Inner sticky container actually sticks smoothly while scrolling */}
        <div className="sticky top-[420px] right-0 flex flex-col space-y-3 pointer-events-none float-right mr-0">
          {links.map(({ id, icon: Icon, label, link, isExternal, target, color }) => {
            const isActive = hoveredId === id;

            const innerContent = (
              <>
                {/* Icon Container (44px wide: p-3 is 12px, icon w-5 is 20px) */}
                <div
                  className={`text-white p-3 flex items-center justify-center rounded-l-full transition-custom ${id === 'mobile' ? 'animate-pulseShadow' : ''}`}
                  style={{ backgroundColor: color }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                {/* Label */}
                <span className="ml-3 pl-1 pr-6 text-sm font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
                  {label}
                </span>
              </>
            );

            // We use translate-x-[calc(100%-44px)] to hide the label off-screen (since the icon is 44px wide)
            const baseClass = `pointer-events-auto flex items-center bg-white dark:bg-slate-800 shadow-md rounded-l-full overflow-hidden transform transition-transform duration-300 ml-auto border border-r-0 border-gray-200 dark:border-gray-700 ${isActive ? 'translate-x-0' : 'translate-x-[calc(100%-44px)]'
              }`;

            if (isExternal) {
              return (
                <a
                  key={id}
                  href={link}
                  target={target}
                  rel={target === '_blank' ? "noopener noreferrer" : undefined}
                  onMouseEnter={() => setHoveredId(id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={baseClass}
                >
                  {innerContent}
                </a>
              );
            }

            return (
              <Link
                key={id}
                to={link}
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
                className={baseClass}
              >
                {innerContent}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default QuickLinks;