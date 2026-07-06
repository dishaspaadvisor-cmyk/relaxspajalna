import Image from "next/image";
import { Phone, CheckCircle ,Star , Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Cards from "@/components/Cards";
export const metadata = {
  title: "Four Hand Massage in Jalna ",
  description:
    "Experience Four Hand Massage in Jalna. Two therapists work together for double tension release and luxurious relaxation.",
};

export default function FourHandMassagePage() {
  return (
    <main className="bg-white">
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/other/he1.png"
          alt="Four Hand Massage"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
          
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Four Hand Massage
              <span className="block text-white">in Jalna</span>
            </h1>

           <div className="mt-10 flex items-center justify-center gap-3 sm:gap-5">
  <a
    href="tel:+919152289119"
    className="flex h-14 w-[145px] sm:w-[180px] items-center justify-center gap-2 rounded-full bg-[#4D3F33] text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#7d1f26]"
  >
    <Phone size={18} />
    <span>Call Now</span>
  </a>

  <a
    href="https://wa.me/919152289119"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-14 w-[145px] sm:w-[180px] items-center justify-center gap-2 rounded-full bg-[#25D366] text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#1fb85a]"
  >
    <FaWhatsapp size={20} />
    <span>WhatsApp</span>
  </a>
</div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/gallary/2.jpg"
              alt="Four Hand Massage"
              width={800}
              height={600}
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <span className="text-[#4D3F33] font-semibold uppercase">Double Relaxation</span>

            <h2 className="text-4xl text-[#4D3F33] font-bold mt-3 mb-6">What is Four Hand Massage?</h2>

            <p className="text-black leading-8 mb-6">
              Four Hand Massage features two therapists working simultaneously to deliver coordinated, smooth strokes for enhanced relaxation and deeper release.
            </p>

            <div className="space-y-4 text-black">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#4D3F33]" size={20} />
                <span>Double therapist harmony</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#4D3F33]" size={20} />
                <span>Deeper relaxation with balanced touch</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#4D3F33]" size={20} />
                <span>Reduces tension and promotes calm</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#4D3F33]" size={20} />
                <span>Luxurious spa-like experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cards />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-[#4D3F33] text-4xl font-bold mb-14">Benefits of Four Hand Massage</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <Star className="text-[#4D3F33] mb-4" size={32} />
              <h3 className="font-bold text-xl mb-3 text-[#4D3F33]">Coordinated Therapy</h3>
              <p className="text-black">The synchronized touch helps your body relax faster and more evenly.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <Star className="text-[#4D3F33] mb-4" size={32} />
              <h3 className="font-bold text-xl mb-3 text-[#4D3F33]">Enhanced Relaxation</h3>
              <p className="text-black">Four hands deliver deeper relaxation and greater comfort.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <Star className="text-[#4D3F33] mb-4" size={32} />
              <h3 className="font-bold text-xl mb-3 text-[#4D3F33]">Premium Experience</h3>
              <p className="text-black">Feel pampered with a luxury massage designed for full release.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Clock className="mx-auto text-[#4D3F33] mb-4" size={40} />
          <h2 className="text-4xl text-[#4D3F33] font-bold mb-4">Session Duration</h2>
          <p className="text-black text-lg mb-10">
            Available in 60 Minutes, 90 Minutes, and 120 Minutes sessions for a double-therapist massage.
          </p>
          <a
            href="tel:+919152289119"
            className="inline-flex items-center gap-2 bg-[#4D3F33] text-black px-8 py-4 rounded-full font-semibold transition"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      </section>
    </main>
  );
}


