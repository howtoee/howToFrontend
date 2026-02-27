import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { StarIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Even for a flight to Dubai, HowTo Travel gave me the cheapest rate and easy visa appointment help. The team was so accommodating with my questions. Travel planning became effortless!",
      author: "Gayatri",
      role: "",
      rating: 5,
      imageUrl: "https://placehold.co/100x100/20B2AA/FFFFFF?text=G",
    },
    {
      id: 2,
      quote: "Safari trip to Kenya was affordable and easy to arrange on HowTo Travel. Their staff accommodated all our requests, the visa application and the travel insurance, evertything was taken care of by them. So, the whole experience turned out to be stress-free from start to finish. Highly recommend!",
      author: "Lakshmi Narayana",
      role: "",
      rating: 5,
      imageUrl: "https://placehold.co/100x100/6A5ACD/FFFFFF?text=LN",
    },
    {
      id: 3,
      quote: "Because of Diwali, Bangalore to Delhi flight cost me so little compared to other apps, HowTo Travel really saved my day! Staff was accommodating, provided my old father with their wheelchair service, and even assisted us during the boarding pass issuing process. Booking to boarding HowTo made everystep quick and hassle-free.",
      author: "Srinivas Reddy",
      role: "",
      rating: 5,
      imageUrl: "https://placehold.co/100x100/FF6347/FFFFFF?text=SR",
    },
    {
      id: 4,
      quote: "We took 35 family members to Bali for our child's birthday. Vijay from HowTo Travel stayed in touch, gave us many options for best flights and hotels, handled all visas and travel insurance because Bali belly is scary. The whole trip was affordable, seamless, and zero stress!",
      author: "Lakshmi Prasad",
      role: "",
      rating: 5,
      imageUrl: "https://placehold.co/100x100/32CD32/FFFFFF?text=LP",
    },
    {
      id: 5,
      quote: "Our first honeymoon felt scary with passport work and bookings. HowTo Travel guided us through passport help, got us a perfect flight + hotel combo in Phuket at a great price, and made everything smooth. We had a dreamy, hassle-free trip, thank you!",
      author: "Sneha Rohan Mehta",
      role: "",
      rating: 5,
      imageUrl: "https://placehold.co/100x100/8A2BE2/FFFFFF?text=SM",
    },
    {
      id: 6,
      quote: "I got amazing hotel last-minute deals in Goa through HowTo Travel, way cheaper than anywhere else. The booking process was super simple, and their team was very patient, vamsi kept in touch with me as I changed my flight timinigs. The cancellation charges were also very less. No stress at all for our family trip!",
      author: "Priya Sharma",
      role: "",
      rating: 5,
      imageUrl: "https://placehold.co/100x100/FF1493/FFFFFF?text=PS",
    },
    {
      id: 7,
      quote: "Booking bus from Delhi to kullu Manali was so easy, just a chat away, and it was done! The price was much lower than other sites, even for urgent travel. 1 person - Subbaraju helped me quickly when I had a query. Travel felt totally stress-free.",
      author: "Ravi Kumar",
      role: "",
      rating: 5,
      imageUrl: "https://placehold.co/100x100/1E90FF/FFFFFF?text=RK",
    },
    {
      id: 8,
      quote: "Train tickets for our trip to Vizag were booked in minutes, and the fares were the lowest I found. HowTo Travel made everything so convenient, with helpful support whenever needed. Travel is now enjoyable, not stressful!",
      author: "Anjali Devi",
      role: "",
      rating: 5,
      imageUrl: "https://placehold.co/100x100/FFA500/FFFFFF?text=AD",
    },
    {
      id: 9,
      quote: "Airport transfers in Hyderabad were seamless and budget-friendly through HowTo Travel. I booked last-minute, and the price was unbeatable. The team was friendly and made sure everything went smoothly, no worries at all.",
      author: "Venkatesh Rao",
      role: "",
      rating: 5,
      imageUrl: "https://placehold.co/100x100/00CED1/FFFFFF?text=VR",
    },
    {
      id: 10,
      quote: "Local transfers and bus bookings for our family outing were super convenient and cheap. HowTo Travel staff was very helpful with timings and options. Made our short trip relaxing and pocket-friendly.",
      author: "Suresh Babu",
      role: "",
      rating: 5,
      imageUrl: "https://placehold.co/100x100/9ACD32/FFFFFF?text=SB",
    },
    {
      id: 11,
      quote: "Bus + hotel combo from Mumbai to Goa was incredibly cheap, even during new years. Booking on HowTo Travel was straightforward, and their support team was always ready to help. They truly made travel simple and worry-free.",
      author: "Karthik Naidu",
      role: "",
      rating: 5,
      imageUrl: "https://placehold.co/100x100/FF4500/FFFFFF?text=KN",
    },
    {
      id: 12,
      quote: "Tour package to Kerala was the best deal ever, affordable and all bookings in one place. Staff at HowTo Travel was patient and sorted everything perfectly. No stress, just pure enjoyment!",
      author: "Maheshwari",
      role: "",
      rating: 5,
      imageUrl: "https://placehold.co/100x100/7B68EE/FFFFFF?text=M",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Staggered container animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Card entrance: slide up + scale + slight rotation for a dynamic cascade
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.9,
      rotateX: 8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.8,
      },
    },
  };

return (
  <div className="pt-[0px] sm:pt-0 md:pt-[2px] lg:pt-2">
    <section className="relative overflow-hidden text-white bg-gray-900">
      
      {/* Full-width Hero */}
      <div className="relative w-full h-[30vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh] overflow-hidden rounded-b-2xl sm:rounded-b-[2rem] lg:rounded-b-[3rem]">
        <img
          src="/Images/Testimonials.png"
          alt="Testimonials"
          className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
<br />
      {/* Animated Nebula Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(circle at center, rgba(74, 40, 104, 0.6), rgba(46, 101, 154, 0.6), rgba(154, 46, 101, 0.6))',
          backgroundSize: '300% 300%',
          animation: 'swirl-bg 40s linear infinite',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          What Our Travelers Say
        </motion.h1>

        <motion.p
          className="text-lg text-center mb-14 max-w-3xl mx-auto text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Real stories from customers who booked their trips with HowTo Travel.
          Your smooth journey is our biggest reward.
        </motion.p>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          style={{ perspective: "1200px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="relative bg-gray-800/70 p-6 rounded-2xl shadow-lg backdrop-blur-sm border border-white/10 max-w-[560px] mx-auto group cursor-default"
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow:
                  "0 20px 50px -12px rgba(59, 130, 246, 0.25), 0 8px 24px -8px rgba(139, 92, 246, 0.2)",
                borderColor: "rgba(99, 102, 241, 0.4)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Glow border */}
              <div
                className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(139,92,246,0.3), rgba(236,72,153,0.3))',
                  filter: 'blur(8px)',
                }}
              />

              <div className="flex items-start mb-5">
                <motion.img
                  src={testimonial.imageUrl}
                  alt={testimonial.author}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-400/60 flex-shrink-0"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                />
                <div>
                  <h3 className="text-lg font-semibold text-white leading-tight">
                    {testimonial.author}
                  </h3>
                  <div className="flex mt-1 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.08, type: "spring", stiffness: 200 }}
                      >
                        <StarIcon
                          className={`w-5 h-5 ${
                            i < testimonial.rating ? "text-yellow-400" : "text-gray-600"
                          }`}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-sm italic text-gray-200 leading-relaxed relative pl-4">
                <span className="absolute top-0 left-0 text-3xl text-blue-400/30 font-serif leading-none">"</span>
                {testimonial.quote}
                <span className="text-3xl text-blue-400/30 font-serif leading-none ml-1">"</span>
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </div>
);
};
export default Testimonials;