// "use client";

// import { Phone } from "lucide-react";
// import { SITE } from "@/lib/siteConfig";

// // 1. Updated the services array to include unique descriptions for each massage type
// const services = [
//   {
//     title: "Four Hand Massage",
//     description: "Experience the ultimate relaxation as two therapists work in perfect synchronization, easing tension and promoting deep tranquility.",
//   },
//   {
//     title: "Deep Tissue Massage",
//     description: "Targeting deeper layers of muscle and connective tissue to relieve chronic aches, stiffness, and built-up body tension.",
//   },
//   {
//     title: "Chocolate Massage",
//     description: "Indulge your senses with a luxurious, antioxidant-rich cocoa treatment that deeply nourishes the skin and relaxes the mind.",
//   },
//   {
//     title: "Thai Massage",
//     description: "An ancient healing art combining acupressure and assisted stretching to improve flexibility, relieve joint tension, and balance energy.",
//   },
// ];

// export default function ServicesSection() {
//   const wa = `https://wa.me/${SITE.phoneWhatsApp.replace(/\D/g, "")}`;
//   const call = `tel:${SITE.phoneCall}`;

//   return (
//     <section
//       id="services"
//       className="relative overflow-hidden bg-[#faf8f5] py-20"
//     >
//       <div className="mx-auto max-w-7xl px-5">
//         {/* Heading */}
//         <div className="mb-16 text-center">
//           <p className="text-lg font-medium tracking-widest uppercase text-[#8B7355]">
//             Our Premium Services
//           </p>

//           <h2 className="mt-3 text-4xl font-bold text-[#4D3F33] md:text-5xl">
//             Best Spa Treatments in Jalna 
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-gray-600">
//             Our team (Model images are only for advertisement purposes).
//             Experience luxury massage therapies performed by trained
//             professionals in a relaxing atmosphere.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid gap-8 md:grid-cols-2">
//           {/* 2. Updated the map function to use the new object structure */}
//           {services.map((service) => (
//             <div
//               key={service.title}
//               className="group rounded-3xl border border-[#e9dfd3] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
//             >
//               <div className="flex items-start justify-between">
//                 <div>
//                   <span className="inline-block rounded-full bg-[#F5EFE8] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#8B7355]">
//                     Premium Therapy
//                   </span>

//                   <h3 className="mt-5 text-3xl font-bold text-[#4D3F33]">
//                     {service.title}
//                   </h3>

//                   {/* 3. Rendering the unique description here */}
//                   <p className="mt-4 leading-7 text-gray-600">
//                     {service.description}
//                   </p>
//                 </div>
//               </div>

//               {/* ACTION BUTTONS */}
//               <div className="mt-8 flex items-center justify-between gap-3">
//                 <div className="flex flex-col">
//                   <p className="text-sm text-gray-500">Relax Spa Jalna</p>
//                   <p className="font-semibold text-[#4D3F33]">
//                     Certified Therapist
//                   </p>
//                 </div>

//                 <div className="flex gap-2">
//                   {/* CALL BUTTON */}
//                   <a
//                     href={call}
//                     className="flex items-center gap-2 rounded-full border border-[#4D3F33] px-4 py-2 text-sm font-semibold text-[#4D3F33] transition hover:bg-[#4D3F33] hover:text-white"
//                   >
//                     <Phone size={16} />
//                     Call
//                   </a>

//                   {/* WHATSAPP BUTTON */}
//                   <a
//                     href={wa}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="rounded-full bg-[#4D3F33] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#463d37]"
//                   >
//                     Book
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import Image from "next/image";
import { Phone, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const services = [
  {
    title: "Four Hand Massage",
    image: "/other/4.png",
    duration: "60 - 90 Min",
    description:
      "Experience complete relaxation as two therapists work together in perfect harmony to melt away stress and restore your body.",
    bullets: ["Body Relaxation", "Stress Relief", "Professional Therapists"],
  },
  {
    title: "Deep Tissue Massage",
    image: "/other/1.png",
    duration: "60 Min",
    description:
      "Relieve chronic muscle tension with firm pressure that reaches deeper muscle layers and improves flexibility.",
    bullets: ["Muscle Pain Relief", "Improved Mobility", "Deep Tension Release"],
  },
  {
    title: "Nuru Massage",
    image: "/other/2.png",
    duration: "60 Min",
    description:
      "Experience ultimate relaxation with sensual Nuru massage in Jalna. Let warm, gel-based body-to-body therapy melt away stress and awaken your senses in pure bliss.",
    bullets: ["Sensual Body Massage", "Relaxing Gel Therapy", "Premium Spa Experience"],
  },
  {
    title: "Thai Massage",
    image: "/other/3.png",
    duration: "90 Min",
    description:
      "Traditional stretching and pressure techniques improve flexibility, increase energy flow and relieve body stiffness.",
    bullets: ["Flexibility Boost", "Energy Balance", "Traditional Healing"],
  },
];

export default function ServicesSection() {
  const phone = "+919152289119";

  const call = `tel:${phone}`;
  const wa = `https://wa.me/919152289119`;

  return (
    <section
      id="services"
      className="bg-gradient-to-b from-[#faf7f3] via-white to-[#faf7f3] py-20"
    >
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F5EFE5] px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#B88A28]">
            <Sparkles size={16} />
            Premium Spa Services
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#352B27] md:text-5xl">
            Premium Spa Treatments in Jalna
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            From Four Hand Massage to Deep Tissue, Nuru and Thai Massage, our top services deliver deep relaxation, pain relief, and a luxurious wellness experience.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="grid gap-8 rounded-3xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:grid-cols-2 sm:items-stretch"
            >
            <div
  className={`relative col-span-2 overflow-hidden rounded-3xl sm:col-span-1 ${
    index % 2 === 1 ? "sm:order-2" : ""
  }`}
  style={{ minHeight: "430px" }}
>
  <Image
    src={service.image}
    alt={service.title}
    fill
    priority
    sizes="(max-width:768px) 100vw, 50vw"
    className="
      object-cover
      object-top
      transition-all
      duration-700
      group-hover:scale-105
    "
  />

  {/* Premium Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
</div>
              <div
                className={`col-span-2 rounded-3xl bg-white p-8 sm:col-span-1 sm:flex sm:flex-col sm:justify-center ${
                  index % 2 === 1 ? "sm:order-1" : ""
                }`}
              >
                <p className="text-sm uppercase tracking-[0.35em] text-[#B88A28]">
                  {service.title}
                </p>
                <h3 className="mt-4 text-3xl font-bold text-[#352B27]">
                  {service.title} in Jalna
                </h3>

                <p className="mt-5 text-lg leading-8 text-gray-600">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3 text-gray-700">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-base">
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E9E3DB] text-[#4D3F33]">
                        ✔
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-row gap-3">
  <a
    href={call}
    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#4D3F33] bg-white px-4 py-4 text-sm font-semibold text-[#4D3F33] transition hover:bg-[#4D3F33] hover:text-white"
  >
    <Phone size={18} />
    <span>Call Now</span>
  </a>

  <a
    href={wa}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-4 text-sm font-semibold text-white transition hover:bg-[#1fb85a]"
  >
    <FaWhatsapp size={18} />
    <span>WhatsApp</span>
  </a>
</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}