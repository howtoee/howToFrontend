import { Phone, HelpCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  {
    id: "whatsapp",
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    link: "https://wa.me/919014263831",
    color: "bg-green-500",
  },
  {
    id: "mobile",
    icon: Phone,
    label: "Call Us",
    path: "tel:+919014263831",
    color: "bg-blue-600",
  },
  {
    id: "faq",
    icon: HelpCircle,
    label: "FAQ",
    link: "/faq",
    color: "bg-purple-600",
  },
  {
    id: "contact",
    icon: Mail,
    label: "Contact",
    link: "/contact",
    color: "bg-indigo-600",
  },
];

const QuickLinks = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[9999] flex flex-col items-end space-y-3 md:space-y-4 pointer-events-none">
      {links.map((link) => {
        const href = link.path || link.link;
        const Icon = link.icon;
        const isExternal = link.id === "whatsapp" || link.id === "mobile";

        const content = (
          <div className="group flex justify-end">
            {/* 
              This is the pill container. It is perfectly aligned to the right edge.
              When hovered, the width increases. Because it's justify-end from the parent, 
              it expands to the LEFT. 
              The icon pushes to the left, and the text is revealed behind it!
            */}
            <div className="flex items-center w-12 md:w-14 group-hover:w-36 md:group-hover:w-40 transition-all duration-300 ease-out shadow-[-3px_3px_12px_rgba(0,0,0,0.15)] rounded-l-full overflow-hidden bg-white">

              {/* ICON (LEFT SIDE) */}
              <div className={`h-12 w-12 md:h-14 md:w-14 shrink-0 flex items-center justify-center text-white ${link.color} transition-colors rounded-l-full`}>
                <Icon className="h-5 w-5 md:h-6 md:w-6" />
              </div>

              {/* NAME (RIGHT SIDE) */}
              <div className="text-gray-800 font-extrabold text-xs md:text-sm pl-3 whitespace-nowrap">
                {link.label}
              </div>

            </div>
          </div>
        );

        // pointer-events-auto restores clicking because the parent is pointer-events-none (so you can click 'through' the blank space)
        if (isExternal) {
          return (
            <a key={link.id} href={href} target={link.id === "whatsapp" ? "_blank" : "_self"} rel="noopener noreferrer" className="outline-none block pointer-events-auto">
              {content}
            </a>
          );
        }

        return (
          <Link key={link.id} to={href} className="outline-none block pointer-events-auto">
            {content}
          </Link>
        );
      })}
    </div>
  );
};

export default QuickLinks;
