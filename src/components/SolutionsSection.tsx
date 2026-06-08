"use client";

import React, { useState } from "react";
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
              <path d="M25 8 L13 20 L25 32" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Previous
          </button>
          <button className={styles.nextBtn}>
            Next
            <svg className={styles.paginationArrow} viewBox="0 0 40 40" fill="none">
              <path d="M15 8 L27 20 L15 32" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>

      {/* ── MOBILE (< md) ── */}
      <section className="block md:hidden bg-white px-5 py-14">
        <h2 className={`text-center text-4xl font-bold text-black mb-3 ${styles.mobileFontFamily}`}>
          Our Work
        </h2>
        <p className={`text-center text-base text-black mb-8 ${styles.mobileFontFamily}`}>
          Delivering Real-World Digital Solutions
        </p>

        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {TAB_LABELS.map((label) => (
            <button
              key={label}
              onClick={() => setActiveTab(label)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-normal border border-black whitespace-nowrap ${styles.mobileFontFamily}`}
              style={{
                backgroundColor: activeTab === label ? "#000" : "transparent",
                color: activeTab === label ? "#fff" : "#000",
                borderColor: activeTab === label ? "transparent" : "#000",
                outline: "none",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          {CARDS.map((card, i) => {
            const IconComp = ICON_MAP[card.icon];
            return (
              <div key={i} className="rounded-2xl bg-[#F3F4F6] p-6">
                <div className="w-12 h-12 mb-4">
                  <IconComp />
                </div>
                <h3 className={`text-xl font-medium text-black mb-2 ${styles.mobileFontFamily}`}>
                  {card.title}
                </h3>
                <p className={`text-base text-black leading-relaxed ${styles.mobileFontFamily}`}>
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex mt-10 border border-black">
          <button className={`flex-1 py-4 flex items-center justify-center gap-2 text-base font-medium text-black ${styles.mobileFontFamily}`}>
            <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
              <path d="M25 8 L13 20 L25 32" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Previous
          </button>
          <button className={`flex-1 py-4 flex items-center justify-center gap-2 text-base font-medium text-black bg-[#F3F4F6] ${styles.mobileFontFamily}`}>
            Next
            <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
              <path d="M15 8 L27 20 L15 32" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}
