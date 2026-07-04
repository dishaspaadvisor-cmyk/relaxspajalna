"use client";

import { MapPin } from "lucide-react";
import { SITE } from "@/lib/siteConfig";

export default function MapSection() {
  return (
    <section className="section-shell py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-12 text-center">
          <span
            className="inline-flex rounded-full px-5 py-2 text-sm font-medium uppercase tracking-[0.2em]"
            style={{
              backgroundColor: `${SITE.brand}15`,
              color: SITE.brand,
            }}
          >
            Find Us
          </span>

          <h2 className="font-display mt-5 text-4xl font-bold text-[#4D3F33] md:text-5xl">
            Visit Relax Spa Jalna
          </h2>
        </div>

        {/* Map Card */}
        <div
          className="overflow-hidden rounded-[32px] bg-white shadow-2xl"
          style={{
            border: `1px solid ${SITE.brand}20`,
          }}
        >
          {/* Address Bar */}
          <div
            className="flex items-center gap-3 border-b px-8 py-5"
            style={{
              borderColor: `${SITE.brand}20`,
            }}
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full"
              style={{
                backgroundColor: `${SITE.brand}15`,
              }}
            >
              <MapPin size={22} color={SITE.brand} />
            </div>

            <div>
              <h3
                className="font-semibold text-lg"
                style={{ color: SITE.brand }}
              >
                Relax Spa Jalna
              </h3>

              <p className="text-sm text-gray-600">
                Shop No. 1, 1st Floor, Vishal Corner, Opp Hotel Highway, Jalna-Aurangabad Road, Modikhana, Jalna, Maharashtra 431203
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="h-[350px] md:h-[550px]">
            <iframe
              title="Relax Spa Jalna Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120088.62641370157!2d75.7171824972656!3d19.8497004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bda57361c749a6d%3A0x93a39366af90a7bd!2sRelux%20Spa%20Jalna!5e0!3m2!1sen!2sin!4v1782974733492!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}