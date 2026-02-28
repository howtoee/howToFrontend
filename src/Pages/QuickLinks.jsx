import { Download, CalendarCheck, ScrollText, HelpCircle, Phone } from 'lucide-react';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from "../data/Links";
import { FaWhatsapp } from "react-icons/fa";
const links = [
  {
    id: 'mobile',
    icon: Phone,
    label: 'Call Us',
    path: 'tel:+13052398055'
  },
  {
    id: 'brochure-download',
    icon: Download,
    label: 'Brochure',
    link: '/brochure-download'
  },
  {
    id: 'event-schedule',
    icon: CalendarCheck,
    label: 'Schedule',
    link: '/event_schedule'
  },
  {
    id: 'abstract-submission',
    icon: ScrollText,
    label: 'Submit Abstract',
    link: '/abstract-submission'
  },
  {
    id: 'whatsapp',
    icon: FaWhatsapp ,
    label: 'WhatsApp',
    link: 'https://api.whatsapp.com/send/?phone=13052398055&text=Hello&type=phone_number&app_absent=0'
  },
  {
    id: 'faq',
    icon: HelpCircle,
    label: 'FAQs',
    link: '/faq'
  }
];

const QuickLinks = () => {
  const [hoveredId, setHoveredId] = useState(null);

  // Drag state
  const [topOffset, setTopOffset] = useState(160); // px from top of viewport
  const isDragging = useRef(false);
  const dragStartY = useRef(0);
  const dragStartTop = useRef(0);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragStartY.current = e.clientY;
    dragStartTop.current = topOffset;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const delta = e.clientY - dragStartY.current;
   const maxTop = Math.max(60, window.innerHeight - 200);
const newTop = Math.max(60, Math.min(maxTop, dragStartTop.current + delta));
setTopOffset(newTop);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  // Touch drag support
  const handleTouchStart = (e) => {
    isDragging.current = true;
    dragStartY.current = e.touches[0].clientY;
    dragStartTop.current = topOffset;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const delta = e.touches[0].clientY - dragStartY.current;
    const newTop = Math.max(60, Math.min(window.innerHeight - 400, dragStartTop.current + delta));
    setTopOffset(newTop);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const renderLink = ({ id, icon: Icon, label, path, link }) => {
    const isActive = hoveredId === id;
    const href = path || link;

    const classes = `
      flex items-center bg-white shadow-lg overflow-hidden
      transform transition-all duration-300 ease-in-out
      ${isActive ? 'translate-x-0 rounded-l-full' : 'translate-x-0 rounded-full'}
      ${id === 'mobile' ? 'animate-pulseShadow' : ''}
    `;

    const inner = (
      <>
        <div
          className="flex items-center justify-center flex-shrink-0"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: '#e1af00',
            color: '#fff',
          }}
        >
          <Icon style={{ width: '18px', height: '18px' }} />
        </div>
        <span
          className="text-sm font-semibold text-gray-800 whitespace-nowrap overflow-hidden transition-all duration-300"
          style={{
            maxWidth: isActive ? '160px' : '0px',
            opacity: isActive ? 1 : 0,
            paddingLeft: isActive ? '10px' : '0',
            paddingRight: isActive ? '14px' : '0',
          }}
        >
          {label}
        </span>
      </>
    );

  const commonProps = {
  onMouseEnter: () => setHoveredId(id),
  onMouseLeave: () => setHoveredId(null),
  className: classes,
  style: { marginBottom: '8px', height: '44px' },
};

if (id === 'brochure-download') {
  return (
    <a
      key={id}
      {...commonProps}
      href="/foodmeet_brochure.pdf"
      download="foodmeet_brochure.pdf"
      target="_self"
      rel="noopener noreferrer"
    >
      {inner}
    </a>
  );
}

    return (
   <Link
    key={id}
    {...commonProps}
    to={href}
    rel="noopener noreferrer"
  >
    {inner}
  </Link>
);
  };

  return (
    <>
      <style>{`
        @keyframes pulseShadow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(225, 175, 0, 0.5); }
          50% { box-shadow: 0 0 16px 6px rgba(225, 175, 0, 0.6); }
        }
        .animate-pulseShadow {
          animation: pulseShadow 2s ease-in-out infinite;
        }

        /* Drag handle cursor */
        .drag-handle {
          cursor: grab;
          user-select: none;
        }
        .drag-handle:active {
          cursor: grabbing;
        }
      `}</style>

<div
  style={{
    position: "fixed",
    top: `${topOffset}px`,
    right: "12px",
    zIndex: 9999,
    pointerEvents: "none",
  }}
>
        {/* Drag handle bar */}
        <div
          className="drag-handle"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            width: '44px',
            height: '18px',
            background: '#e1af00',
            borderRadius: '6px 6px 0 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2px',
            marginRight: '0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            alignSelf: 'flex-end',
          }}
          title="Drag to reposition"
        >
          {/* Three dots grip indicator */}
          <div style={{ display: 'flex', gap: '3px' }}>
            {[0, 1, 2].map(i => (
              <div
                key={i}
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.85)',
                }}
              />
            ))}
          </div>
        </div>

        {/* Links */}
    <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    pointerEvents: "auto", // ✅ clickable
  }}
>
  {links.map(renderLink)}
</div>
      </div>
    </>
  );
};

export default QuickLinks;