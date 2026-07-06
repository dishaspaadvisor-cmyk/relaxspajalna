// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { CalendarCheck, Phone } from "lucide-react";

// const slides = [
//   {
//     image: "/hero/hero11.png",
//     title: "Expert Staff Available",
//     subtitle: "Relax Spa Jalna",
//     description:
//       "Experience luxury body massage therapy with expert therapists in a peaceful spa environment.",
//   },
//   {
//     image: "/hero/hero22.png",
//     title: "Best Spa Experience",
//     subtitle: "Relax Together",
//     description:
//       "Enjoy a rejuvenating spa experience with your loved one in our premium couples spa rooms.",
//   },
// ];

// export default function Hero() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative h-[75vh] md:h-screen overflow-hidden">
//       {/* Background Image */}
//       <Image
//         src={slides[current].image}
//         alt={slides[current].title}
//         fill
//         priority
//         className="object-cover object-top transition-all duration-700"
//       />

   

//       {/* Content */}
//       <div className="absolute inset-0 z-20 flex items-center justify-center">
//         <div className="max-w-7xl mx-auto px-4 w-full">
//           <div className="flex flex-col items-center justify-center text-center">

//             {/* Title */}
//             <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
//               {slides[current].title}
//             </h1>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-5">
//               <a
//                 href="tel:+919152289119"
//                 className="inline-flex items-center justify-center gap-2 bg-[#4D3F33] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
//               >
//                 <Phone size={20} />
//                 Call Now
//               </a>

//               <a
//                 href={`https://wa.me/919152289119?text=${encodeURIComponent(
//                   "Hello Relax Spa, I would like to book an appointment."
//                 )}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300"
//               >
//                 <CalendarCheck size={20} />
//                 Book Appointment
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck, Phone, ChevronDown } from "lucide-react";

const slides = [
  {
    image: "/hero/hero11.png",
    title: "Expert Staff Available",
    subtitle: "Relax Spa Jalna",
    description:
      "Experience luxury body massage therapy with expert therapists in a peaceful spa environment.",
  },
  {
    image: "/hero/hero22.png",
    title: "Best Spa Experience",
    subtitle: "Relax Together",
    description:
      "Enjoy a rejuvenating spa experience with your loved one in our premium couples spa rooms.",
  },
];

// Text animation variants
const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[75vh] md:h-screen overflow-hidden bg-black">
      {/* Background Images with crossfade + Ken Burns zoom */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.15 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" },
            scale: { duration: 6, ease: "linear" },
          }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            priority
            className="object-cover object-top"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark gradient overlay for text contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Animated decorative glow blobs */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-[#4D3F33]/30 rounded-full blur-3xl z-10"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl z-10"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={textContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col items-center justify-center text-center"
            >


              {/* Title */}
              <motion.h1
                variants={textItem}
                className="text-4xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
              >
                {slides[current].title}
              </motion.h1>

            

              {/* Buttons */}
              <motion.div
                variants={textItem}
                className="flex flex-col sm:flex-row gap-5"
              >
                <motion.a
                  href="tel:+919152289119"
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center gap-2 bg-[#4D3F33] text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-black/30 transition-colors duration-300 hover:bg-[#5c4c3e]"
                >
                  <Phone size={20} />
                  Call Now
                </motion.a>

                <motion.a
                  href={`https://wa.me/919152289119?text=${encodeURIComponent(
                    "Hello Relax Spa, I would like to book an appointment."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold shadow-lg shadow-black/20 transition-colors duration-300 hover:bg-gray-100"
                >
                  <CalendarCheck size={20} />
                  Book Appointment
                </motion.a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="relative h-1.5 w-10 rounded-full bg-white/30 overflow-hidden"
            aria-label={`Go to slide ${i + 1}`}
          >
            {i === current && (
              <motion.div
                layoutId="activeSlide"
                className="absolute inset-0 bg-white rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 6, ease: "linear" }}
                style={{ transformOrigin: "left" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}