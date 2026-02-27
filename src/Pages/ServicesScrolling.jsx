import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Conference data with correct image paths based on your folder structure
const services = [
  {
    title: "Flight bookings",
    description: "Secure the cheapest domestic and international flights with HowTo Travel. We compare real-time prices across airlines to offer unbeatable last-minute and advance deals. Easy online booking, flexible changes, and 24/7 support make your air travel simple, affordable, and stress-free, no hidden fees, just the lowest rates guaranteed.",
    image: "/ServicesImages/img1.png"  // Path from public directory
  },
  {
    title: "Hotel bookings",
    description: "We help you find the best hotel deals worldwide. From luxury resorts to budget stays, we guarantee the lowest prices with instant confirmation. Compare options easily, read real reviews, and book seamlessly. Enjoy comfortable, value-packed accommodations without overspending, your perfect stay starts here.",
    image: "/ServicesImages/img2.png",
  },
  {
    title: "Visa appointments",
    description: "Get hassle-free visa assistance with us. We guide you through applications, document requirements, and appointment scheduling for popular destinations. Fast, accurate support ensures smooth processing and higher approval chances. Travel worry-free with expert help at the most affordable service rates available.",
    image: "/ServicesImages/img3.png",
  },
  {
    title: "Travel insurance",
    description: "Protect your journey with affordable and comprehensive travel insurance at HowTo Travel. Coverage includes medical emergencies, trip cancellations, lost baggage, and delays. Quick online purchase, instant policy, and reliable claims support. Travel confidently knowing you're covered at the lowest premiums.",
    image: "/ServicesImages/img4.png",
  },
  {
    title: "Bus bookings",
    description: "Book comfortable, budget-friendly bus tickets across India with us. Select AC, sleeper, and luxury options with the cheapest fares and real-time availability. Simple booking process, secure payments, and timely rides, making intercity travel easy, affordable, and reliable every time.",
    image: "/ServicesImages/img5.png",
  },
  {
    title: "Train bookings",
    description: "Reserve IRCTC and other train tickets effortlessly through HowTo Travel. Get the lowest confirmed fares, tatkal options, and seat availability checks. Fast booking, e-tickets, and helpful support for groups or last-minute plans. Enjoy smooth, cost-effective rail journeys without the usual hassle.",
    image: "/ServicesImages/img6.png",
  },
  {
    title: "Airport transfers",
    description: "Arrive stress-free with reliable, low-cost airport transfers from HowTo Travel. Private cars, shuttles, or luxury options to/from any airport. Book in advance or last-minute at unbeatable prices with a meet-and-greet service. Safe, punctual rides ensure a smooth start or end to your trip.",
    image: "/ServicesImages/img7.png",
  },
  {
    title: "Local transfers",
    description: "Explore cities comfortably with affordable local transfers booked through HowTo Travel. From city rides to day trips, choose taxis, private cars, or shuttles at the cheapest rates. Easy booking, professional drivers, and on-time service, making local travel convenient, safe, and budget-friendly wherever you go.",
    image: "/ServicesImages/img8.png",
  },
  {
    title: "Safari trips",
    description: "Experience thrilling wildlife adventures with HowTo Travel's safari packages. Affordable bookings for national parks like the Masai Mara and jeeps, guides, and stays included. Expert planning, best rates, and hassle-free arrangements for an unforgettable, value-packed nature escape.",
    image: "/ServicesImages/img9.png",
  },
  {
    title: "Tour packages",
    description: "We offer curated tour packages for group, family, or couple trips. All-inclusive deals cover flights, hotels, transfers, sightseeing, and more at the lowest prices. Personalised options, seamless coordination, and stress-free planning turn your dream vacation into reality affordably and effortlessly.",
    image: "/ServicesImages/img10.png",
  },
];

const ServicesScrolling = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  // Auto-scroll functionality with increased speed
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval = setInterval(() => {
      // If reached end or close to end, smoothly go back to start
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 10) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Scroll by one card width (including gap) - faster scrolling
        const cardWidth = scrollContainer.querySelector("div")?.offsetWidth || 280;
        const gap = 24; // gap-6 = 1.5rem = 24px
        scrollContainer.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
      }
    }, 2000); // Reduced to 2 seconds for faster scrolling (was 3000)

    return () => clearInterval(scrollInterval);
  }, []);

  // Handle image error
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found";
  };

  return (
    <div className="px-4 py-12 bg-gradient-to-r from-purple-700 to-blue-700">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8">
        Our Services
      </h2>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto scrollbar-hide py-4 px-2"
        style={{ scrollBehavior: "smooth" }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg flex-shrink-0 hover:scale-105 transition-transform duration-300 
                      w-[280px] sm:w-[300px] md:w-[340px] lg:w-[380px]" // Responsive widths
          >
            {/* Image with fixed height for consistency */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-44 sm:h-48 md:h-52 lg:h-56 object-cover rounded-t-2xl"
              loading="lazy"
              onError={handleImageError}
            />
            <div className="p-4">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 line-clamp-2 min-h-[3.5rem]">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-3 text-xs sm:text-sm md:text-base line-clamp-3 min-h-[4.5rem]">
                {service.description}
              </p>
              <button
                onClick={() => navigate("/services")}
                className="text-blue-600 font-semibold hover:underline mt-1 inline-flex items-center text-xs sm:text-sm md:text-base"
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Custom CSS for scrollbar hiding and responsive adjustments */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Media queries for better phone responsiveness */
        @media (max-width: 640px) {
          .px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          /* Ensure cards are fully visible on small screens */
          .flex.space-x-6 {
            margin-left: -0.5rem;
            padding-left: 0.5rem;
          }
          
          /* Add subtle gradient fade on edges for better UX */
          .flex.overflow-x-auto {
            mask-image: linear-gradient(
              to right,
              transparent,
              black 5%,
              black 95%,
              transparent
            );
            -webkit-mask-image: linear-gradient(
              to right,
              transparent,
              black 5%,
              black 95%,
              transparent
            );
          }
        }

        /* Tablet adjustments */
        @media (min-width: 641px) and (max-width: 1024px) {
          .flex.space-x-6 {
            margin-left: -1rem;
            padding-left: 1rem;
          }
        }

        /* Ensure smooth scrolling on all devices */
        .flex.overflow-x-auto {
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
        }

        /* Prevent content shift during auto-scroll */
        .hover\\:scale-105:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease-in-out;
          z-index: 10;
        }
      `}</style>
    </div>
  );
};

export default ServicesScrolling;