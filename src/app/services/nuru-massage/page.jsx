import Image from "next/image";
import { Phone, CheckCircle, Clock, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Cards from "@/components/Cards";
export const metadata = {
  title: "Nuru Massage in Jalna ",
  description:
    "Experience Nuru Massage in Jalna Aurangabad. Relax tired muscles, improve circulation, and enjoy deep relaxation with heated stone therapy.",
};

export default function HotStoneMassagePage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
     <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/other/he1.png"
          alt="Couples Massage"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
           

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Best Nuru Massage
              <span className="block text-white">
                in Jalna 
              </span>
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
      

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
         <div className="relative h-[350px] overflow-hidden rounded-3xl shadow-2xl md:h-[520px]">
                       <Image
                       src="/gallary/1.jpg"
                       alt="Potli Massage Therapy"
                       fill
                       sizes="(max-width:768px)100vw,50vw"
                       className="object-cover object-top transition-transform duration-700 hover:scale-105"
                     />
                   </div>

          <div>
            <span className="text-[#4D3F33] font-semibold uppercase">
              Deep Relaxation Therapy
            </span>

            <h2 className="text-4xl text-[#4D3F33] font-bold mt-3 mb-6">
              What is Nuru Massage?
            </h2>

            <p className="text-gray-900 leading-8 mb-6">
             Originating from Japan, Nuru massage is a unique form of body-to-body therapy that utilizes a special,
             slippery gel made from Nori seaweed. This gel facilitates seamless, gliding movements, allowing for an 
             intimate and deeply relaxing experience. The term “Nuru” translates to “slippery” in Japanese, aptly describing the essence of this massage technique..
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#4D3F33]" size={20} />
                <span className="text-black">Relieves muscle tension and stiffness</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#4D3F33]" size={20} />
                <span className="text-black">Improves blood circulation</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#4D3F33]" size={20} />
                <span className="text-black">Promotes deep relaxation and stress relief</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#4D3F33]" size={20} />
                <span className="text-black">Enhances overall wellness and comfort</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <>
      <Cards />
      </>

      {/* Benefits */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-[#4D3F33] text-4xl font-bold mb-14">
            Benefits of Nuru Massage
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-whlte p-8 rounded-3xl shadow-sm">
              <Star className="text-[#4D3F33] mb-4" size={32} />
              <h3 className="font-bold text-[#4D3F33] text-xl mb-3">
                Deep Muscle Relaxation
              </h3>
              <p className="text-black">
                Heat helps muscles relax faster than traditional massage alone.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <Star className="text-[#4D3F33] mb-4" size={32} />
              <h3 className="font-bold text-[#4D3F33] text-xl mb-3">
                Better Blood Flow
              </h3>
              <p className="text-black">
                Encourages healthy circulation throughout the body.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <Star className="text-[#4D3F33] mb-4" size={32} />
              <h3 className="font-bold text-xl text-[#4D3F33] mb-3">
                Stress Reduction
              </h3>
              <p className="text-black">
                Provides a calming experience that reduces stress and anxiety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Duration & CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Clock
            className="mx-auto text-[#4D3F33] mb-4"
            size={40}
          />

          <h2 className="text-4xl text-[#4D3F33] font-bold mb-4">
            Session Duration
          </h2>

          <p className="text-gray-600 text-lg mb-10">
            Available in 60 Minutes, 90 Minutes, and 120 Minutes sessions for
            complete relaxation and rejuvenation.
          </p>

          <a
            href="tel:+919152289119"
            className="inline-flex items-center gap-2 bg-[#4D3F33] text-white px-8 py-4 rounded-full font-semibold transition"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      </section>
    </main>
  );
}


