import Image from "next/image";
import { Phone, CheckCircle, Clock, Star, Leaf } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Cards from "@/components/Cards";
export const metadata = {
  title: "Potli Massage in Jalna ",
  description:
    "Experience Potli Massage in Jalna Aurangabad. A traditional herbal therapy that relieves pain, improves circulation, and rejuvenates the body naturally.",
};

export default function PotliMassagePage() {
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
                    Best Spa
                    <span className="block text-white">
                      in Jalna 
                    </span>
                  </h1>
      
      
                  {/* Buttons */}
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
          <div className="relative h-[450px] overflow-hidden rounded-3xl shadow-2xl md:h-[520px]">
            <Image
  src="/other/ot1.jpg"
  alt="Potli Massage Therapy"
  fill
  sizes="(max-width:768px)100vw,50vw"
  className="object-cover object-top transition-transform duration-700 hover:scale-105"
/>
          </div>

          <div className="text-[#4D3F33]">
            <span className="font-semibold uppercase">
              Ayurvedic Herbal Therapy
            </span>

            <h2 className="text-4xl font-bold mt-3 mb-6">
              What is Potli Massage?
            </h2>

            <p className="text-black leading-8 mb-6">
              Potli Massage is a traditional Ayurvedic therapy where heated
              herbal pouches (Potli) are gently pressed and massaged over the
              body. The warmth and medicinal herbs help reduce pain, improve
              circulation, relieve stiffness, and rejuvenate the muscles.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#4D3F33]" size={20} />
                <span>Reduces joint and muscle pain</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#4D3F33]" size={20} />
                <span>Improves blood circulation</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#4D3F33]" size={20} />
                <span>Relieves body stiffness</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#4D3F33]" size={20} />
                <span>Promotes natural healing and relaxation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <>
      <Cards />
      </>

      {/* Benefits Section */}
      <section className="bg-[#faf7f4] py-20">
        <div className="max-w-7xl text-[#4D3F33] mx-auto px-4">
          <h2 className="text-center text-4xl text-[#4D3F33] font-bold mb-14">
            Benefits of Potli Massage
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <Leaf className="text-[#4D3F33] mb-4" size={32} />
              <h3 className="font-bold text-xl mb-3">
                Herbal Healing
              </h3>
              <p className="text-black">
                Natural herbs help rejuvenate muscles and tissues.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <Star className="text-[#4D3F33] mb-4" size={32} />
              <h3 className="font-bold text-xl mb-3">
                Pain Relief
              </h3>
              <p className="text-black">
                Effective for muscle soreness, stiffness, and joint discomfort.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <Star className="text-[#4D3F33] mb-4" size={32} />
              <h3 className="font-bold text-xl mb-3">
                Deep Relaxation
              </h3>
              <p className="text-black">
                The warmth of herbal pouches provides a calming experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Session Duration */}
      <section className="py-20 bg-[#faf7f4]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Clock className="mx-auto text-[#4D3F33] mb-4" size={40} />

          <h2 className="text-4xl text-[#4D3F33] font-bold mb-4">
            Session Duration
          </h2>

          <p className="text-gray-600 text-lg mb-10">
            Available in 60 Minutes, 90 Minutes, and 120 Minutes sessions for
            complete herbal therapy and relaxation.
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


