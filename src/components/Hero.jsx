"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CalendarCheck, Phone } from "lucide-react";

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

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[75vh] md:h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={slides[current].image}
        alt={slides[current].title}
        fill
        priority
        className="object-cover object-top transition-all duration-700"
      />

   

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex flex-col items-center justify-center text-center">

            {/* Title */}
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
              {slides[current].title}
            </h1>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="tel:+919152289119"
                className="inline-flex items-center justify-center gap-2 bg-[#4D3F33] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                <Phone size={20} />
                Call Now
              </a>

              <a
                href={`https://wa.me/919152289119?text=${encodeURIComponent(
                  "Hello Relax Spa, I would like to book an appointment."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                <CalendarCheck size={20} />
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}