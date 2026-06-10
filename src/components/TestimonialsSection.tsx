"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./TestimonialsSection.module.css";

const cols = [
  "6.302vw",
  "calc(50% - 12.526vw)",
  "68.698vw",
];

const rows = [
  "24.792vw",
  "54.688vw",
];

const cards = [
  {
    name: "Abdul Aziz",
    avatar: "/images/testimonials/avatar9.png",
    col: 0, row: 0,
    textH: "63.158%",
    text: "Working with Rohatech has been one of the best decisions for our business. Their team built a fully customized digital payments platform that not only met our security standards but also enhanced the speed and reliability of our services. Since launch, user engagement has increased dramatically and we're processing 3x more transactions with zero downtime.",
  },
  {
    name: "Saba Khan",
    avatar: "/images/testimonials/avatar10.png",
    col: 1, row: 0,
    textH: "63.158%",
    text: "Rohatech transformed our legacy system into a modern, secure digital lending platform. The attention to detail and responsiveness from their developers ensured we launched on time — and with features our clients actually love. Transaction efficiency has improved by over 60%, and customer complaints have dropped significantly.",
  },
  {
    name: "Farhan Ahmed",
    avatar: "/images/testimonials/avatar11.png",
    col: 2, row: 0,
    textH: "56.140%",
    text: "Before partnering with Rohatech, we struggled with scalability and frequent outages during peak hours. Their team redesigned our backend, optimized transaction flows, and implemented robust security protocols. The platform now runs smoothly even at high loads, and we've seen retention rates climb steadily.",
  },
  {
    name: "Mariam Faiz",
    avatar: "/images/testimonials/avatar12.png",
    col: 0, row: 1,
    textH: "63.158%",
    text: "Rohatech's technical expertise is unmatched. They developed a real-time payment gateway integration for our marketplace that has eliminated settlement delays and drastically improved user satisfaction. Their team communicated clearly at every step and delivered beyond expectations. Thanks to Rohatech, our merchants are happier and our business is growing faster than ever.",
  },
  {
    name: "Usman Butt",
    avatar: "/images/testimonials/avatar13.png",
    col: 1, row: 1,
    textH: "56.140%",
    text: "When we needed a resilient digital wallet solution capable of handling millions of monthly transactions, Rohatech stepped in and delivered with excellence. The platform is secure, fast, and easy to scale. The project management was professional, deadlines were respected, and the outcome exceeded our performance targets.",
  },
  {
    name: "Hina Malik",
    avatar: "/images/testimonials/avatar14.png",
    col: 2, row: 1,
    textH: "56.140%",
    text: "Partnering with Rohatech completely changed the way we handle online banking. Their team built a secure, scalable platform that streamlined account management and payments, making transactions faster and more reliable for our customers. Since implementation, we've seen a 50% increase in digital adoption and fewer support tickets.",
  },
];

const partners = [
  { name: "Huawie",    img: "/images/partners/huawei.png",    imgW: 32, imgH: 30, frame: 0 },
  { name: "Dell",      img: "/images/partners/dell.png",      imgW: 30, imgH: 30, frame: 1 },
  { name: "Microsoft", img: "/images/partners/microsoft.png", imgW: 30, imgH: 30, frame: 2 },
  { name: "Dell",      img: "/images/partners/dell.png",      imgW: 30, imgH: 30, frame: 1 },
  { name: "Microsoft", img: "/images/partners/microsoft.png", imgW: 30, imgH: 30, frame: 2 },
  { name: "Dell",      img: "/images/partners/dell.png",      imgW: 30, imgH: 30, frame: 1 },
  { name: "Huawie",    img: "/images/partners/huawei.png",    imgW: 32, imgH: 30, frame: 0 },
];

export default function TestimonialsSection() {
  const [activePartner, setActivePartner] = useState(0);

  return (
    <>
    {/* ── MOBILE (< md) ── */}
    <section className="block md:hidden bg-white">

      {/* Dark hero header */}
      <div className="relative overflow-hidden px-6 pt-16 pb-12 rounded-b-3xl">
        <Image src="/images/about-hero-bg.webp" alt="" fill sizes="100vw" className="object-cover object-center" priority aria-hidden="true" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10">
        <div className="w-8 h-[3px] bg-[#78EB54] rounded-full mb-4" />
        <p className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">Client Stories</p>
        <h1 className="text-white font-bold text-[34px] leading-[1.15] mb-3" style={{ letterSpacing: "-0.02em" }}>
          What Our Clients Say
        </h1>
        <p className="text-white text-sm leading-relaxed max-w-[90%]">
          Real results from real businesses — powered by RohaTech solutions.
        </p>

        {/* Stats row */}
        <div className="flex gap-4 mt-7">
          <div className="flex-1 bg-white/8 border border-white/10 rounded-2xl px-4 py-4 text-center">
            <p className="text-[#78EB54] text-2xl font-bold leading-none">60+</p>
            <p className="text-white/50 text-[10px] mt-1 uppercase tracking-wide">Clients</p>
          </div>
          <div className="flex-1 bg-white/8 border border-white/10 rounded-2xl px-4 py-4 text-center">
            <p className="text-[#78EB54] text-2xl font-bold leading-none">100+</p>
            <p className="text-white/50 text-[10px] mt-1 uppercase tracking-wide">Projects</p>
          </div>
          <div className="flex-1 bg-white/8 border border-white/10 rounded-2xl px-4 py-4 text-center">
            <p className="text-[#78EB54] text-2xl font-bold leading-none">5★</p>
            <p className="text-white/50 text-[10px] mt-1 uppercase tracking-wide">Rated</p>
          </div>
        </div>
        </div>
      </div>

      {/* Testimonial cards */}
      <div className="px-5 py-8 flex flex-col gap-4">
        {cards.map((card) => (
          <div key={card.name} className="bg-white rounded-2xl border border-black/8 overflow-hidden">
            {/* Card top — avatar + name */}
            <div className="bg-[#F3F4F6] px-5 py-4 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden relative flex-shrink-0 border-2 border-white shadow-sm">
                <Image src={card.avatar} alt={card.name} fill className="object-cover" />
              </div>
              <div>
                <p className="font-bold text-sm" style={{ color: "#000000" }}>{card.name}</p>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#78EB54"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
              </div>
            </div>
            {/* Card body — quote */}
            <div className="px-5 py-4">
              <span className="text-3xl text-black/15 font-serif leading-none block mb-2">&ldquo;</span>
              <p className="text-sm leading-relaxed" style={{ color: "#000000cc" }}>{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Partners section */}
      <div className="px-5 pb-10">
        <div className="bg-[#F3F4F6] rounded-2xl px-5 py-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-1">Trusted By</p>
          <h2 className="text-xl font-bold mb-5" style={{ color: "#000000" }}>Company Testimonials</h2>
          <div className="flex flex-wrap gap-3">
            {partners.map((p, i) => (
              <button
                key={i}
                onClick={() => setActivePartner(i)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all border"
                style={{
                  background: activePartner === i ? "#000" : "#fff",
                  borderColor: activePartner === i ? "#000" : "#00000015",
                }}
              >
                <Image src={p.img} alt={p.name} width={24} height={24} className="object-contain" />
                <span className="text-xs font-medium" style={{ color: activePartner === i ? "#fff" : "#000" }}>{p.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

    </section>

    {/* ── DESKTOP (md+) ── */}
    <section className={`hidden md:block relative w-full bg-white overflow-hidden ${styles.desktopSection}`}>

      <h1 className={`absolute text-black ${styles.pageHeading}`}>
        Testimonials
      </h1>

      <p className={`absolute text-black ${styles.featuredQuote}`}>
        Rohatech delivered end-to-end technology solutions that strengthened our infrastructure and positioned us for long-term growth.
      </p>

      {/* Testimonial cards — left/top from data, kept inline */}
      {cards.map((card) => (
        <div
          key={card.name}
          className={`absolute overflow-hidden ${styles.testimonialCard}`}
          style={{
            left: cols[card.col],
            top:  rows[card.row],
          }}
        >
          <span className={`absolute select-none ${styles.quoteMark}`} aria-hidden="true">
            &ldquo;
          </span>

          <p className={`absolute text-black ${styles.cardName}`}>
            {card.name}
          </p>

          <div className={`absolute rounded-full overflow-hidden ${styles.cardAvatar}`}>
            <Image src={card.avatar} alt={card.name} fill className="object-cover" />
          </div>

          {/* textH is data-driven, kept inline */}
          <p
            className={`absolute text-black ${styles.cardText}`}
            style={{ height: card.textH }}
          >
            {card.text}
          </p>
        </div>
      ))}

      <h2 className={`absolute text-black ${styles.partnersHeading}`}>
        Company Testimonials
      </h2>

      <div className={`absolute flex ${styles.partnerTabs}`}>
        {partners.map((p, i) => (
          <button
            key={i}
            onClick={() => setActivePartner(i)}
            className={`flex flex-col items-center justify-center transition-all ${styles.partnerBtn}`}
            style={{ background: activePartner === i ? "#FFFFFF" : "transparent" }}
          >
            <div className={`flex items-center ${styles.partnerLogoWrapper}`}>
              {/* imgW/imgH are data-driven, kept inline */}
              <Image
                src={p.img}
                alt={p.name}
                width={p.imgW}
                height={p.imgH}
                className="object-contain flex-shrink-0"
                style={{
                  width:  `${(p.imgW / 1920 * 100).toFixed(3)}vw`,
                  height: `${(p.imgH / 1920 * 100).toFixed(3)}vw`,
                }}
              />
              <span className={styles.partnerName}>{p.name}</span>
            </div>
          </button>
        ))}
      </div>

    </section>
    </>
  );
}
