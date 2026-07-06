import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaYoutube, FaInstagram, FaPaperPlane, FaPinterest, FaXTwitter } from "react-icons/fa6";
import { SITE } from "@/lib/siteConfig";



const services = [
  { name: "Thai Massage", slug: "thai-massage" },
  { name: "Body to Body Massage", slug: "body-to-body-massage" },
  { name: "Swedish Massage", slug: "swedish-massage" },
  { name: "Deep Tissue Massage", slug: "deep-tissue-massage" },
  { name: "Nuru Massage", slug: "nuru-massage" },
  { name: "Happy Ending Massage", slug: "happy-ending-massage" },
  { name: "Couples Massage", slug: "couples-massage" },
  { name: "Potli Massage", slug: "potli-massage" },
  { name: "Female to Male Massage", slug: "female-to-male-massage" },
  { name: "Sandwich Massage", slug: "sandwich-massage" },
  { name: "Hot Stone Massage", slug: "hotstone-massage" },
  { name: "Four Hand Massage", slug: "four-hand-massage" },
];

const keywords = [
  "Massage in Jalna Aurangabad",
  "Massage Center in Jalna Aurangabad",
  "Massage Parlour in Jalna Aurangabad",
  "Female to Male Body Massage in Jalna Aurangabad",
  "Body Massage Center in Jalna Aurangabad",
  "Massage Spa in Jalna Aurangabad",
  "Massage Service in Jalna Aurangabad",
  "Russian Massage Girl in Jalna Aurangabad",
  "Spa near me Jalna Aurangabad",
  "Massage near me Jalna Aurangabad",
  "Sensual Massage",
  "Adult Massage Service",
  "Full Massage Service in Jalna Aurangabad",
  "Full Body Massage in Jalna Aurangabad",
  "Sandwich Massage in Jalna Aurangabad",
  "Body to Body Massage in Jalna Aurangabad",
  "Nuru Massage in Jalna Aurangabad",
  "Couples Massage in Jalna Aurangabad",
  "Four Hand Massage in Jalna Aurangabad",
  "Sensual Spa Massage in Jalna Aurangabad",
  "Deep Tissue Massage in Jalna Aurangabad",
  "Chocolate Massage in Jalna Aurangabad",
  "Balinese Massage in Jalna Aurangabad",
  "Swedish Massage in Jalna Aurangabad",
  "Thai Massage in Jalna Aurangabad",
  "Hot Stone Massage in Jalna Aurangabad",
  "Relax with Beautiful Girls in Jalna Aurangabad",
  "Jacuzzi Milk Bath in Jalna Aurangabad",
  "Oil Massage in Jalna Aurangabad",
  "Shiatsu Massage in Jalna Aurangabad",
  "Signature Massage in Jalna Aurangabad",
  "Back Massage in Jalna Aurangabad",
  "Happy Ending Massage Jalna Aurangabad",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.05),transparent_18rem)]" />
      <div className="relative mx-auto grid max-w-[85rem] gap-14 px-6 py-14 md:grid-cols-2 lg:grid-cols-[1.15fr_0.55fr_0.85fr_1fr] lg:px-10">
        <div>
          <Image
            src="/logo7.png"
            alt={SITE.title}
            width={196}
            height={64}
            className="h-auto w-48"
          />
          <div className="mt-8 space-y-7 text-base leading-8 text-black">
            <p>
              Relax Spa Jalna is one of the best Spa in Civil Lines
              Jalna that provides beauty, healing and rejuvenation spa
              treatments in an elegant, professional and relaxing environment.
            </p>
            <p>
              Our services are designed for both men and women of all ages who
              wish to reinvigorate their health and fitness. Our friendly and
              professional services will gently ease away your stresses and
              pressures of the day-to-day life.
            </p>
          </div>

          <form className="mt-8 flex max-w-sm items-center bg-[#F3F0F1]">
            <input
              type="email"
              aria-label="Email address"
              placeholder={SITE.email}
              className="min-w-0 flex-1 bg-transparent px-7 py-5 text-sm text-black outline-none placeholder:text-black"
            />
            <button
              type="submit"
              className="grid h-14 w-14 place-items-center text-[#4D3F33]"
              aria-label="Send email"
            >
              <FaPaperPlane />
            </button>
          </form>

          <div className="mt-6 flex gap-6 text-3xl text-[#4D3F33]">
  <a
    href={SITE.twitter}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X"
    className="transition hover:text-[#4D3F33]"
  >
    <FaXTwitter />
  </a>

  <a
    href={SITE.youtube}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="transition hover:text-[#4D3F33]"
  >
    <FaYoutube />
  </a>

  <a
    href={SITE.pintrest}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="transition hover:text-[#4D3F33]"
  >
    <FaPinterest />
  </a>
</div>
        </div>

        <div>

            <h2 className="text-2xl text-[#4D3F33]  font-semibold mb-6">
              Massage Services
            </h2>

            <ul className="grid grid-cols-2 gap-4">

              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-black hover:text-[#4D3F33] transition"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

        <div>
          <h3 className="font-display text-4xl text-[#4D3F33] font-bold">Open Hours</h3>
          <dl className="mt-12 grid grid-cols-[1fr_auto] gap-x-8 gap-y-6 text-black">
            <dt>Monday to Friday :</dt>
            <dd>10:00-10:00</dd>
            <dt>Saturday:</dt>
            <dd>10:00-10:00</dd>
            <dt>Sunday:</dt>
            <dd>10:00-10:00</dd>
          </dl>
        </div>

        <div>
          <h3 className="font-display text-4xl text-[#4D3F33] font-bold">Contact</h3>
          <p className="text-black mt-8 leading-7">
                 Shop No. 1, 1st Floor, Vishal Corner, Opp Hotel Highway, Jalna-Aurangabad Road, Modikhana, Jalna, Maharashtra 431203
                </p>
          <p className="mt-6 text-[#4D3F33] font-bold">
            Call Us : <a href={`tel:${SITE.phoneCall}`}>{SITE.phoneCall.replace("+91", "")}</a>
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-7 block underline decoration-black/60 underline-offset-4 transition hover:text-[#4D3F33]"
          >
            {SITE.email}
          </a>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1450px] px-6 pb-12 lg:px-10">
        <div className="keyword-box px-5 py-6 text-center text-base leading-8 text-black">
          <span>
            &copy; Relax Spa Jalna, Reserved By Relax Spa Jalna,{" "}
            {keywords.join(", ")}
          </span>
        </div>
        {/* Bottom */}
        <div className="border-t border-black mt-8 pt-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-5">

            <p className="text-black text-center">
              © 2026 Relax Spa Jalna. All Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6">

              <Link
                href="/privacy-policy"
                className="text-black hover:text-[#4D3F33] transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-black hover:text-[#4D3F33] transition"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>
      </div>
      
    </footer>
  );
}
