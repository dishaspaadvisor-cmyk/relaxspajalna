import Image from "next/image";
import { Phone, CheckCircle, Clock, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Cards from "@/components/Cards";
export const metadata = {
  title: "Deep Tissue Massage in Jalna ",
  description:
    "Experience professional Deep Tissue Massage in Jalna Aurangabad. Relieve muscle tension, chronic pain, and stress with expert therapists at yellow Spa.",
};

export default function DeepTissueMassagePage() {
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
              Deep Tissue Massage
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
          <div className="relative h-[350px] overflow-hidden rounded-3xl shadow-2xl md:h-[520px]">
                        <Image
                        src="/gallary/3.jpg"
                        alt="Potli Massage Therapy"
                        fill
                        sizes="(max-width:768px)100vw,50vw"
                        className="object-cover object-top transition-transform duration-700 hover:scale-105"
                      />
                    </div>

          <div>
            <span className="text-[#4D3F33] font-semibold uppercase">
              Muscle Recovery & Pain Relief
            </span>

            <h2 className="text-4xl text-[#4D3F33] font-bold mt-3 mb-6">
              What is Deep Tissue Massage?
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              Deep Tissue Massage focuses on the deeper layers of muscles and
              connective tissues. It uses firm pressure and slow strokes to
              relieve chronic muscle tension, improve mobility, and reduce pain
              caused by stress, poor posture, or physical activity.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#4D3F33]" size={20} />
                <span className="text-black">Relieves chronic muscle pain</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#4D3F33]" size={20} />
                <span className="text-black">Reduces muscle stiffness</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#4D3F33]" size={20} />
                <span className="text-black">Improves flexibility and mobility</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#4D3F33]" size={20} />
                <span className="text-black">Promotes faster recovery after physical activity</span>
              </div>
            </div>
          </div>
        </div>
      </section>  

      <> 
      <Cards />
      </>

      {/* Benefits Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-[#4D3F33] text-4xl font-bold mb-14">
            Benefits of Deep Tissue Massage
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <Star className="text-[#4D3F33] mb-4" size={32} />
              <h3 className="font-bold text-[#4D3F33] text-xl mb-3">
                Pain Relief
              </h3>
              <p className="text-black">
                Helps reduce chronic back, neck, shoulder, and muscle pain.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <Star className="text-[#4D3F33] mb-4" size={32} />
              <h3 className="font-bold text-[#4D3F33] text-xl mb-3">
                Improved Mobility
              </h3>
              <p className="text-black">
                Releases tight muscles and improves body movement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <Star className="text-[#4D3F33] mb-4" size={32} />
              <h3 className="font-bold text-[#4D3F33] text-xl mb-3">
                Stress Reduction
              </h3>
              <p className="text-black">
                Reduces physical tension and promotes relaxation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Session Duration */}
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
            Choose from 60 Minutes, 90 Minutes, or 120 Minutes sessions
            depending on your therapy requirements.
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


