"use client";

import Image from "next/image";

export default function SpaDiscountSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 items-center gap-12">

          {/* LEFT CONTENT */}
          <div className="flex justify-center lg:justify-start">
            <div className="max-w-lg">

              {/* Small Tag */}
              <p
                className="italic text-[#4D3F33] text-lg"
                style={{ fontFamily: "cursive" }}
              >
                Luxury Spa Experience in Jalna 
              </p>

              {/* MAIN HEADING (SEO POWER) */}
              <h2 className="mt-6 text-4xl md:text-5xl lg:text-[60px] leading-tight font-serif text-[#4D3F33]">
                Best Spa in Jalna 
                
              </h2>

              {/* SEO PARAGRAPH */}
              <p className="mt-6 text-gray-700 text-lg leading-8">
                Relax Spa Jalna offers premium spa and massage services
                including <span className="font-semibold">full body massage</span>,
                <span className="font-semibold"> B2B massage</span>,
                <span className="font-semibold"> Female to Male massage</span>,
                <span className="font-semibold"> Sensual massage</span>, and
                <span className="font-semibold"> couple massage therapy</span>.
                Experience deep relaxation, stress relief, improved blood circulation,
                and complete body rejuvenation in a peaceful luxury environment.
              </p>

             

              {/* CTA */}
              <div className="mt-10">
                <a
                  href="https://wa.me/919152289119"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-30 h-30 rounded-full border-2 border-dashed border-[#4D3F33] text-[#4D3F33] font-bold text-2xl uppercase transition duration-300 hover:bg-[#4D3F33] hover:text-white"
                >
                  <div className="text-center leading-8">
                    BOOK
                    <br />
                    NOW
                  </div>
                </a>

              </div>

            </div>
          </div>

      {/* RIGHT IMAGE */}
<div className="relative h-[350px] sm:h-[450px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
  <Image
    src="/gallary/ga4.jpg"
    alt="Best Spa in Jalna Massage Therapy"
    fill
    className="object-cover object-center sm:object-center lg:object-center"
    priority
  />
</div>

        </div>

      </div>
    </section>
  );
}