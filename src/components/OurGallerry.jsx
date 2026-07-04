
"use client";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";
// ==========================================
// 1. DATA SOURCE
// ==========================================
const services = [
  {
    name: "Thai Massage",
    image: "/gallary/2.jpg",
  },
  {
    name: "Body Massage",
    image: "/gallary/1.jpg",
  },
  {
    name: "Sandwich Massage",
    image: "/gallary/3.jpg",
  },
  {
    name: "Couples Massage",
    image: "/gallary/ga4.jpg",
  },
  {
    name: "Hot Stone Massage",
    image: "/gallary/6.jpg",
  },
  {
    name: "Deep Tissue Massage",
    image: "/gallary/ga5.jpg",
  },
  {
    name: "Swedish Massage",
    image: "/gallary/ga7.jpg",
  },
  {
    name: "Aromatherapy Massage",
    image: "/gallary/ga8.jpg",
  },
];

// ==========================================
// 2. MODULAR COMPONENT: GALLERY CARD
// ==========================================
const GalleryCard = ({ service, phone, whatsapp }) => {
  return (
    <div className="group relative h-[380px] w-full overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 bg-white">

      {/* Image */}
      <Image
        src={service.image}
        alt={service.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-6">

        {/* Top spacer for layout */}
        <div />

        {/* Bottom Content */}
        <div className="space-y-6 md:space-y-8">

          {/* Service Name */}
          <div className="text-center transition-all duration-500 group-hover:-translate-y-2">
            <h3 className="text-white text-2xl md:text-3xl font-serif font-semibold">
              {service.name}
            </h3>
            <div className="mx-auto h-[2px] w-16 bg-[#c6a86c] mt-3 transition-all duration-500 group-hover:w-24" />
          </div>

          {/* Buttons */}
          <div className="flex w-full flex-row flex-wrap justify-center gap-3">
            <a
              href={`tel:${phone}`}
              className="flex-1 min-w-[140px] max-w-[48%] inline-flex items-center justify-center gap-2 rounded-full bg-[#4D3F33] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#7b1d24] hover:shadow-lg"
            >
              <Phone size={18} className="hover:animate-shake group-hover:animate-shake" />
              Call Now
            </a>

            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[140px] max-w-[48%] inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#1fb85a] hover:shadow-lg"
            >
              <FaWhatsapp size={18} className="hover:animate-shake group-hover:animate-shake" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


// 3. MAIN COMPONENT

export default function ServiceGallery() {
  const phone = "+919152289119"; 
  const whatsapp = "919152289119"; 

  return (
    <section className="py-24 bg-[#FAF9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block bg-[#4D3F33]/10 text-[#4D3F33] font-semibold uppercase tracking-[4px] text-xs py-2 px-6 rounded-full mb-6">
            Our Gallery
          </span>
          <h2 className="text-4xl md:text-5xl text-[#4D3F33] font-serif font-bold mb-6">
           Luxury Spa Gallery
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Experience the finest wellness and relaxation therapies designed
            to rejuvenate your body, mind, and soul. Take a look at our tranquil spaces.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <GalleryCard 
              key={index} 
              service={service} 
              phone={phone} 
              whatsapp={whatsapp} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}