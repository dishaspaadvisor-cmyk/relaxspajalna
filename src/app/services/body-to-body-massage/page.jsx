import Image from "next/image";
import { Phone, CheckCircle , Star, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Cards from "@/components/Cards";
export const metadata = {
  title: "Body to Body Massage in Jalna ",
  description:
    "Experience professional Body to Body Massage in Jalna . Relax your muscles, reduce stress and rejuvenate your body with expert therapists.",
};

export default function BodyMassagePage() {
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
                        Best Spa Services
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
  src="/gallary/2.jpg"
  alt="Potli Massage Therapy"
  fill
  sizes="(max-width:768px)100vw,50vw"
  className="object-cover object-top transition-transform duration-700 hover:scale-105"
/>
          </div>

          <div>
            <span className="text-[#4D3F33] font-semibold uppercase">
              Total Relaxation
            </span>

            <h2 className="text-4xl text-[#4D3F33] font-bold mt-3 mb-6">
              What is Body to Body Massage?
            </h2>

            <p className="text-black leading-8 mb-6">
             Indulge in a sensual and relaxing body to body massage by skilled therapists.
             Enjoy smooth gliding motions, soothing touch, and a deeply intimate experience that melts away stress and tension.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#4D3F33]" size={20} />
                <span className="text-black">Relieves body pain and stiffness</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#4D3F33]" size={20} />
                <span className="text-black">Reduces stress and fatigue</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#4D3F33]" size={20} />
                <span className="text-black">Improves blood circulation</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#4D3F33]" size={20} />
                <span className="text-black">Promotes better sleep and wellness</span>
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
            Benefits of Body to Body Massage
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <Star className="text-[#4D3F33] mb-4" size={32} />
              <h3 className="text-[#4D3F33] font-bold text-xl mb-3">
                Stress Reduction
              </h3>
              <p className="text-black">
                Feel refreshed and relaxed after every massage session.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <Star className="text-[#4D3F33] mb-4" size={32} />
              <h3 className="font-bold text-[#4D3F33] text-xl mb-3">
                Pain Relief
              </h3>
              <p className="text-black">
                Helps relieve muscle tension and body discomfort.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <Star className="text-[#4D3F33] mb-4" size={32} />
              <h3 className="font-bold text-[#4D3F33] text-xl mb-3">
                Better Wellness
              </h3>
              <p className="text-black">
                Improves overall physical and mental well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Duration Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Clock
            className="mx-auto text-[#4D3F33] mb-4"
            size={40}
          />

          <h2 className="text-4xl text-[#4D3F33] font-bold mb-4">
            Session Duration
          </h2>

          <p className="text-black text-lg mb-10">
            Available in 60 Minutes, 90 Minutes and 120 Minutes sessions
            based on your preference.
          </p>

          <a
            href="tel:+919152289119"
            className="inline-flex items-center gap-2 bg-[#4D3F33] hover:bg-[#4D3F33] text-black px-8 py-4 rounded-full font-semibold transition"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      </section>
    </main>
  );
}


