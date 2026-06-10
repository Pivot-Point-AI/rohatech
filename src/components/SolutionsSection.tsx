"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./SolutionsSection.module.css";

const GREEN = "#78EB54";

function SalesIcon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 90 90" fill="none">
      <path d="M45 8 L77 27 L77 63 L45 82 L13 63 L13 27 Z"
        stroke="#000" strokeWidth="5.2" fill="none" strokeLinejoin="round" />
      <line x1="30" y1="64" x2="30" y2="52" stroke="#000" strokeWidth="5.2" strokeLinecap="round" />
      <line x1="45" y1="64" x2="45" y2="36" stroke="#000" strokeWidth="5.2" strokeLinecap="round" />
      <line x1="60" y1="64" x2="60" y2="44" stroke="#000" strokeWidth="5.2" strokeLinecap="round" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 90 90" fill="none">
      <path d="M8.44 25.31 V18 Q8.44 11.25 15 11.25 H63 Q71.56 11.25 71.56 19 V25.31 Z"
        stroke="#000" strokeWidth="5.2" fill="none" strokeLinejoin="round" />
      <rect x="8.44" y="25.31" width="73.12" height="50.62" rx="6" stroke="#000" strokeWidth="5.2" fill="none" />
      <rect x="59.07" y="45" width="11.25" height="11.25" rx="5.63" fill="#000" />
    </svg>
  );
}

function CashIcon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 90 90" fill="none">
      <rect x="7.5" y="13.12" width="75" height="52.5" rx="6" stroke="#000" strokeWidth="5.2" fill="none" />
      <rect x="7.5" y="15" width="75" height="61.88" rx="6" stroke="#000" strokeWidth="5.2" fill="none" />
      <rect x="35.62" y="30" width="18.76" height="18.75" rx="3" stroke="#000" strokeWidth="5.2" fill="none" />
    </svg>
  );
}

type IconType = "sales" | "wallet" | "cash";

interface CardData {
  col: "left" | "right";
  topVw: string;
  title: string;
  desc: React.ReactNode;
  icon: IconType;
  descPos: "tall" | "short";
}

const TABS: { label: string; w: string }[] = [
  { label: "All",            w: "5.319vw"  },
  { label: "Fintech",        w: "8.756vw"  },
  { label: "Healthcare",     w: "11.178vw" },
  { label: "E Commerce",     w: "12.819vw" },
  { label: "Customized ERP", w: "15.163vw" },
  { label: "Academia",       w: "10.709vw" },
  { label: "Geo Financing",  w: "13.756vw" },
];

const TAB_LABELS = TABS.map((t) => t.label);

const CARDS: CardData[] = [
  {
    col: "right", topVw: "31.4583vw",
    title: "Sale Force Supervision Solutions",
    desc: <>Data-driven tools to <span style={{ color: GREEN }}>boost sales</span> performance.</>,
    icon: "sales", descPos: "tall",
  },
  {
    col: "left", topVw: "37.9167vw",
    title: "Digital Wallet Zindigi",
    desc: <>Seamless <span style={{ color: GREEN }}>payments</span> with smart financial control.</>,
    icon: "wallet", descPos: "short",
  },
  {
    col: "right", topVw: "59.8437vw",
    title: "Cash Management System",
    desc: <>Efficient control of <span style={{ color: GREEN }}>corporate</span> cash flow.</>,
    icon: "cash", descPos: "tall",
  },
  {
    col: "left", topVw: "66.3021vw",
    title: "Sale Force Supervision Solutions",
    desc: <>Data-driven tools to <span style={{ color: GREEN }}>boost sales</span> performance.</>,
    icon: "sales", descPos: "tall",
  },
  {
    col: "right", topVw: "88.2292vw",
    title: "Sale Force Supervision Solutions",
    desc: <>Data-driven tools to <span style={{ color: GREEN }}>boost sales</span> performance.</>,
    icon: "sales", descPos: "tall",
  },
  {
    col: "left", topVw: "94.6875vw",
    title: "Telematics Application",
    desc: <>Real-time fleet <span style={{ color: GREEN }}>tracking</span> and <span style={{ color: GREEN }}>analytics</span>.</>,
    icon: "wallet", descPos: "short",
  },
];

const ICON_MAP: Record<IconType, React.FC> = {
  sales: SalesIcon,
  wallet: WalletIcon,
  cash: CashIcon,
};

function SolutionCard({ card }: { card: CardData }) {
  const IconComp = ICON_MAP[card.icon];
  const leftVw = card.col === "left" ? "12.1354vw" : "56.0417vw";
  const descTopVw = card.descPos === "tall" ? "15.4375vw" : "12.7292vw";

  return (
    <div
      className={styles.solutionCard}
      style={{ position: "absolute", left: leftVw, top: card.topVw }}
    >
      <div className={styles.cardIcon}>
        <IconComp />
      </div>
      <div className={styles.cardTitle}>
        {card.title}
      </div>
      {/* descTopVw is data-driven (descPos), kept inline */}
      <div className={styles.cardDesc} style={{ top: descTopVw }}>
        {card.desc}
      </div>
    </div>
  );
}

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <>
      {/* ── DESKTOP (md+) ── */}
      <section className={`hidden md:block ${styles.desktopSection}`}>
        <h2 className={styles.heading}>Our Work</h2>

        <p className={styles.subheading}>Delivering Real-World Digital Solutions</p>

        <div className={styles.tabsContainer}>
          {TABS.map(({ label, w }) => {
            const active = activeTab === label;
            return (
              <button
                key={label}
                onClick={() => setActiveTab(label)}
                className={styles.tabBtn}
                style={{
                  width: w,
                  border: active ? "none" : "1px solid #000",
                  backgroundColor: active ? "#000" : "transparent",
                  color: active ? "#FFF" : "#000",
                }}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Connector SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1920 2460">
          <path d="M844,833 C960,833 960,709 1076,709" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="8 8" strokeLinecap="round" />
          <path d="M844,1044 C960,1044 960,1254 1076,1254" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="8 8" strokeLinecap="round" />
          <path d="M844,1378 C960,1378 960,1254 1076,1254" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="8 8" strokeLinecap="round" />
          <path d="M844,1589 C960,1589 960,1799 1076,1799" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="8 8" strokeLinecap="round" />
          <path d="M844,1923 C960,1923 960,1799 1076,1799" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="8 8" strokeLinecap="round" />
        </svg>

        {CARDS.map((card, i) => <SolutionCard key={i} card={card} />)}

        <div className={styles.pagination}>
          <button className={styles.prevBtn}>
            <svg className={styles.paginationArrow} viewBox="0 0 40 40" fill="none">
              <line x1="30" y1="20" x2="10" y2="20" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
              <polyline points="18,12 10,20 18,28" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            Previous
          </button>
          <button className={styles.nextBtn}>
            Next
            <svg className={styles.paginationArrow} viewBox="0 0 40 40" fill="none">
              <line x1="10" y1="20" x2="30" y2="20" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
              <polyline points="22,12 30,20 22,28" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </button>
        </div>
      </section>

      {/* ── MOBILE (< md) ── */}
      <section className={`block md:hidden bg-white ${styles.mobileFontFamily}`}>

        {/* Hero header */}
        <div className="relative overflow-hidden px-6 pt-16 pb-12 rounded-b-3xl">
          <Image src="/images/about-hero-bg.webp" alt="" fill sizes="100vw" className="object-cover object-center" priority aria-hidden="true" />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10">
          <div className="w-8 h-[3px] bg-[#78EB54] rounded-full mb-4" />
          <p className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">Our Work</p>
          <h2 className="text-white font-bold text-[34px] leading-[1.15] mb-3" style={{ letterSpacing: "-0.02em" }}>
            Delivering Real-World<br />Digital Solutions
          </h2>
          <p className="text-white text-sm leading-relaxed max-w-[90%]">
            Innovative technology built for every industry and sector.
          </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="px-5 py-5 border-b border-black/8">
          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {TAB_LABELS.map((label) => (
              <button
                key={label}
                onClick={() => setActiveTab(label)}
                className="flex-shrink-0 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors"
                style={{
                  backgroundColor: activeTab === label ? "#000" : "#F3F4F6",
                  color: activeTab === label ? "#fff" : "#000",
                  outline: "none",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="px-5 py-6 flex flex-col gap-4">
          {CARDS.filter((card, i) => CARDS.findIndex((c) => c.title === card.title) === i).map((card, i) => {
            const IconComp = ICON_MAP[card.icon];
            return (
              <div key={i} className="bg-white rounded-2xl border border-black/8 overflow-hidden">
                {/* Card header strip */}
                <div className="bg-[#F3F4F6] px-5 pt-5 pb-4">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm p-2">
                    <IconComp />
                  </div>
                </div>
                {/* Card body */}
                <div className="px-5 py-4">
                  <h3 className="font-bold text-base mb-2 leading-snug" style={{ color: "#000000" }}>
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#000000cc" }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="px-5 pb-10 flex gap-3">
          <button className="flex-1 py-3 rounded-full border border-black/20 flex items-center justify-center gap-2 text-sm font-medium" style={{ color: "#000000" }}>
            <svg width="16" height="16" viewBox="0 0 40 40" fill="none">
              <line x1="30" y1="20" x2="10" y2="20" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
              <polyline points="18,12 10,20 18,28" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            Previous
          </button>
          <button className="flex-1 py-3 rounded-full bg-black flex items-center justify-center gap-2 text-sm font-medium text-white">
            Next
            <svg width="16" height="16" viewBox="0 0 40 40" fill="none">
              <line x1="10" y1="20" x2="30" y2="20" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
              <polyline points="22,12 30,20 22,28" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </button>
        </div>

      </section>
    </>
  );
}
