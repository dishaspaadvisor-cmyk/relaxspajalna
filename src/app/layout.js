import "./globals.css";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import Popup from "../components/Popup";

const siteUrl = "https://RelaxspaJalna.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Relax Spa Jalna | Best Luxury Spa & Body Massage Centre in Jalna ",
    template: "%s | Relax Spa Jalna",
  },

  description:
    "Experience premium spa and massage services at Relax Spa Jalna. Enjoy full body massage, deep tissue massage, Swedish massage, aromatherapy, couples massage, and wellness therapies in Jalna , Gujarat.",

  keywords: [
    "Spa in Jalna ",
    "Best Spa in Jalna ",
    "Luxury Spa Jalna ",
    "Massage Centre Jalna ",
    "Body Massage Jalna ",
    "Couple Massage Jalna ",
    "Swedish Massage Jalna ",
    "Deep Tissue Massage Jalna ",
    "Thai Massage Jalna ",
    "Aromatherapy Massage Jalna ",
    "Spa Near Me",
    "Wellness Spa Jalna ",
    "Relaxation Spa",
    "Spa Gujarat",
    "Relax Spa Jalna",
  ],

  authors: [
    {
      name: "Relax Spa Jalna",
    },
  ],

  creator: "Relax Spa Jalna",

  publisher: "Relax Spa Jalna",

  applicationName: "Relax Spa Jalna",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      { url: "/Relaxlogo.webp", type: "image/webp" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButton />
        <Popup />
        
      </body>
    </html>
  );
}
