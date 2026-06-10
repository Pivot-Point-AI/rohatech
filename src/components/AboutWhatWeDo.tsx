"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./AboutWhatWeDo.module.css";

const faqs = [
  {
    q: "Does Roha Tech have a global presence?",
    a: "Our vision is built upon the foundation of our core values placing customers and employees at the heart of everything we do. We are committed to being reliable, dependable, disciplined, and diligent. We believe that team spirit and collaboration are the driving forces that can improve lives and shape a better future for generations to come.",
    qW: "71.060%",
  },
  {
    q: "How is diversity in Roha Tech?",
    a: "RohaTech embraces diversity across all levels of the organisation. We believe diverse teams build better technology and serve clients more effectively.",
    qW: "52.038%",
  },
  {
    q: "What is an environment like in Roha Tech?",
    a: "RohaTech fosters a collaborative, innovative, and growth-oriented environment where every team member is empowered to deliver their best work.",
    qW: "72.690%",
  },
];

const H_OPEN_PCT = 30.5;
const H_SHUT_PCT = 13.875;
const GAP_PCT    = 2.75;
const FIRST_TOP  = 18.125;

function cardTop(index: number, openIdx: number): string {
  let top = FIRST_TOP;
  for (let j = 0; j < index; j++) {
    top += (openIdx === j ? H_OPEN_PCT : H_SHUT_PCT) + GAP_PCT;
  }
  return `${top.toFixed(3)}%`;
}

export default function AboutWhatWeDo() {
  const [open, setOpen] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(0);

  return (
    <>
    {/* ── MOBILE ── */}
    <section className="block md:hidden bg-[#F3F4F6]">

      {/* Image card with dark overlay */}
      <div className="relative overflow-hidden mx-5 mt-6 rounded-3xl" style={{ minHeight: "320px" }}>
        <Image src="/images/about-whatwedo-bg.webp" alt="" fill sizes="100vw" className="object-cover object-center" aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.1) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3">
          <div className="w-7 h-[2px] bg-[#78EB54] rounded-full" />
          <h2 className="font-bold text-2xl leading-tight" style={{ color: "#ffffff", letterSpacing: "-0.02em" }}>Seamless &amp; Hassle-Free IT Support</h2>
          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>With 220+ skilled experts, RohaTech takes pride in exceeding client expectations 100+ solutions deployed globally since 2015.</p>
          <Link href="/contact" className="self-start inline-flex items-center justify-center bg-[#78EB54] hover:bg-[#60d43e] transition-colors text-white text-sm font-medium px-6 py-2.5 rounded-full">
            Contact Us
          </Link>
        </div>
      </div>

      {/* FAQ accordion */}
      <div className="px-5 pt-6 pb-10 flex flex-col gap-3">
        <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: "#000000",fontWeight: "500" }}>FAQs</p>
        {faqs.map((faq, i) => {
          const isOpen = mobileOpen === i;
          return (
            <div key={faq.q} className="bg-white rounded-2xl overflow-hidden border border-black/8">
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left"
                onClick={() => setMobileOpen(isOpen ? -1 : i)}
              >
                <span className="text-sm font-semibold pr-4 leading-snug" style={{ color: "#000000" }}>{faq.q}</span>
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold ${styles.mobileFaqToggle}`}
                  style={{ background: isOpen ? "#000" : "#F3F4F6", color: isOpen ? "#fff" : "#000", transform: isOpen ? "rotate(45deg)" : "none" }}
                >+</span>
              </button>
              {isOpen && (
                <p className="text-xs leading-relaxed px-5 pb-5" style={{ color: "#000000aa" }}>{faq.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>

    {/* ── DESKTOP ── */}
    <section className={`hidden md:block relative w-full overflow-hidden bg-white ${styles.desktopSection}`}>

      {/* Image frame */}
      <div className={`absolute overflow-hidden ${styles.imageFrame}`}>
        <Image
          src="/images/about-whatwedo-bg.webp"
          alt=""
          fill
          sizes="90vw"
          className="object-cover object-center"
          aria-hidden="true"
        />

        <div className={`absolute left-0 right-0 pointer-events-none ${styles.frameGradient}`} />

        {/* Left column */}
        <h2 className={`absolute text-black flex items-center ${styles.leftHeading}`}>
          Seamless &amp; Hassle-Free IT Support
        </h2>

        <p className={`absolute text-black flex items-center ${styles.leftDesc}`}>
          With a team of over 220+ skilled experts, RohaTech takes pride in exceeding client
          expectations. Since our inception in 2015, we have successfully developed and deployed
          over 100 solutions globally. Our footprint extends across Asia, Europe, and Australia,
          helping businesses thrive with tailored technology solutions across various sectors.
        </p>

        <Link
          href="/contact"
          className={`absolute bg-black flex items-center justify-center hover:bg-black/80 transition-colors ${styles.contactBtn}`}
        >
          <span className={`text-white ${styles.contactBtnText}`}>
            Contact Us
          </span>
        </Link>

        {/* FAQ Cards — top/height are state-driven, kept inline */}
        {faqs.map((faq, i) => {
          const isOpen = open === i;

          return (
            <div
              key={faq.q}
              className={`absolute cursor-pointer overflow-hidden ${styles.faqCard}`}
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
                top:    cardTop(i, open),
                height: `${isOpen ? H_OPEN_PCT : H_SHUT_PCT}%`,
              }}
            >
              {/* Question title — top/height are state-driven, kept inline */}
              <p
                className={`absolute text-black flex items-center ${styles.faqQuestion}`}
                style={{
                  top:    isOpen ? "20.902%" : "39.640%",
                  width:  faq.qW,
                  height: isOpen ? "9.836%" : "21.622%",
                }}
              >
                {faq.q}
              </p>

              {isOpen && (
                <p className={`absolute text-black font-normal flex items-center ${styles.faqAnswer}`}>
                  {faq.a}
                </p>
              )}

              {/* Toggle icon — right/top/height/transform are state-driven, kept inline */}
              <div
                className={`absolute flex items-center justify-center ${styles.faqToggle}`}
                style={{
                  right:     isOpen ? "5.435%" : "6.336%",
                  top:       isOpen ? "19.262%" : "30.063%",
                  height:    isOpen ? "13.115%" : "28.829%",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                <svg viewBox="0 0 32 32" fill="none" style={{ width: "100%", height: "100%" }}>
                  <line x1="16" y1="9.5" x2="16" y2="22.5" stroke="#000000" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="9.5" y1="16" x2="22.5" y2="16" stroke="#000000" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          );
        })}

      </div>
    </section>
    </>
  );
}
