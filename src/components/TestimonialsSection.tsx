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
    <section className="block md:hidden bg-white px-5 py-14">
      <h1 className="text-center text-4xl font-bold text-black mb-3">Testimonials</h1>
      <p className="text-center text-base text-black mb-10 leading-relaxed">
        Rohatech delivered end-to-end technology solutions that strengthened our infrastructure and positioned us for long-term growth.
      </p>
      <div className="flex flex-col gap-5">
        {cards.map((card) => (
          <div key={card.name} className="rounded-2xl bg-[#F3F4F6] p-6 relative">
            <span className="text-4xl text-[#F39C33] font-serif leading-none">&ldquo;</span>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden relative flex-shrink-0">
                <Image src={card.avatar} alt={card.name} fill className="object-cover" />
              </div>
              <p className="text-base font-bold text-black">{card.name}</p>
            </div>
            <p className="text-sm text-black leading-relaxed">{card.text}</p>
          </div>
        ))}
      </div>
      <h2 className="text-center text-3xl font-normal text-black mt-14 mb-6">Company Testimonials</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {partners.map((p, i) => (
          <button
            key={i}
            onClick={() => setActivePartner(i)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all"
            style={{ background: activePartner === i ? "#fff" : "transparent", boxShadow: activePartner === i ? "0 2px 8px rgba(0,0,0,0.1)" : "none" }}
          >
            <Image src={p.img} alt={p.name} width={24} height={24} className="object-contain" />
            <span className="text-sm text-black">{p.name}</span>
          </button>
        ))}
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
