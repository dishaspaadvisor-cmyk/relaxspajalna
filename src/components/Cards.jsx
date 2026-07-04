"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const therapists = [
  {
    id: 1,
    image: "/other/1.png",
  },
  {
    id: 2,
    image: "/other/2.png",
  },
  {
    id: 3,
    image: "/other/3.png",
  },
  {
    id: 4,
    image: "/other/4.png",
  },
];

export default function AboutTherapists() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background Decoration */}
      <div className="absolute right-0 top-0 opacity-10">
        <div className="h-52 w-52 rounded-full border-[30px] border-[#D4AF37]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 text-center">

        {/* Heading */}
        <div className="mb-14">

          <span className="font-serif text-2xl italic text-bold text-black">
            Relax. Refresh. Renew.
          </span>

          <h2 className="mt-2 text-5xl font-bold text-[#4D3F33] md:text-6xl">
            Meet Our Expert Staff
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-black">
            A happy ending offers ultimate relaxation, combining soothing body techniques with a sensual finale. Discreet, luxurious, and deeply satisfying, it’s the perfect escape for stress relief and personal indulgence.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {therapists.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-[520px] w-full">

                <Image
                  src={item.image}
                  alt="Therapist"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Bottom Glass */}
                <div className="absolute bottom-0 w-full">

                  <div
                    className="backdrop-blur-md"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(255,255,255,.95), rgba(255,255,255,.55))",
                    }}
                  >
                    
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

       {/* CTA Buttons */}
<div className="mt-16 text-center">
  <p className="mb-6 text-lg font-semibold text-[#3B2F2A]">
    Ready to book your relaxation session?
  </p>

  <div className="mx-auto flex max-w-md gap-3">
    {/* Call Button */}
    <a
      href="tel:+919152289119"
      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl  px-4 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 bg-[#4D3F33] hover:text-white"
    >
      <Phone size={18} />
      <span>Call Now</span>
    </a>

    {/* WhatsApp Button */}
    <a
      href="https://wa.me/919152289119"
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#1EBE5D]"
    >
      <FaWhatsapp size={18} />
      <span>WhatsApp</span>
    </a>
  </div>
</div>
      </div>
    </section>
  );
}