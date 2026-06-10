"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slugify = (title: string) =>
  title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const scrollToService = (slug: string) => {
  const desktop = document.getElementById(slug);
  const mobile = document.getElementById(`${slug}-m`);
  const target = desktop && desktop.offsetParent !== null ? desktop : mobile;
  (target ?? desktop ?? mobile)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

/*
  Figma canvas: 1920px wide — all px values divided by 1920 to get vw.
  Service rows: top=706,1105,1504,1903,2302 each h=299, gap≈399px
  Image block: left=671 w=476 h=299 br=28
  Connector:  left=1182 w=183 + dot at left=1351
  Right col:  left=1394
*/

const dtServices = [
  {
    num: "01",
    filled: true,
    title: "Digital Marketing",
    description:
      "Enhance your brand's online presence with data-driven marketing strategies designed to increase visibility, engagement, and measurable business growth.",
    image: "/images/services/hero-bg.webp",
    rightTitle: "Digital Marketing Services",
    rightItems: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Content Marketing",
      "Performance Marketing & Paid Advertising",
      "Analytics & Campaign Optimization",
    ],
  },
  {
    num: "02",
    filled: false,
    title: "Application Modernization",
    description:
      "Modernize legacy systems to improve performance, scalability, and security using modern architectures, frameworks, and cloud technologies.",
    image: "/images/services/it-solutions-bg.webp",
    rightTitle: "App Modernization Services",
    rightItems: [
      "Legacy System Modernization",
      "Cloud Migration & Replatforming",
      "Microservices Architecture",
      "Application Refactoring",
      "Performance & Scalability Optimization",
    ],
  },
  {
    num: "03",
    filled: false,
    title: "Application Integration",
    description:
      "Streamline and connect diverse systems to create efficient, cost-effective, and fully integrated IT ecosystems.",
    image: "/images/services/about-hero-bg.webp",
    rightTitle: "App Integration Services",
    rightItems: [
      "System Connectivity & Middleware",
      "API Development & Integration",
      "Data Synchronization Across Platforms",
      "Enterprise Application Integration",
      "Workflow Automation",
    ],
  },
  {
    num: "04",
    filled: false,
    title: "UI/UX Design",
    description:
      "Create intuitive and engaging digital experiences that enhance usability, improve customer satisfaction, and strengthen your brand identity.",
    image: "/images/services/abou.webp",
    rightTitle: "UI/UX Design Services",
    rightItems: [
      "User Interface Design",
      "User Experience Design",
      "Web & Mobile App Design",
      "Wireframing & Prototyping",
      "Design Systems",
    ],
  },
  {
    num: "05",
    filled: false,
    title: "Web & Full Stack",
    description:
      "Develop secure, scalable, and high-performance digital platforms tailored to meet evolving business needs.",
    image: "/images/services/hero2-bg.webp",
    rightTitle: "Web & Full Stack Services",
    rightItems: [
      "Web & Full Stack Development",
      "Custom Software Development",
      "API Development & Integration",
      "Application Modernization",
      "Application Integration",
    ],
  },
];

export default function ServicesContent() {
  const [activeTab, setActiveTab] = useState<"dts" | "dis">("dts");

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const timer = setTimeout(() => scrollToService(hash), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {/* ── MOBILE (< lg) ── */}
    <section className="block lg:hidden bg-white">

      {/* Dark hero header */}
      <div className="relative overflow-hidden px-6 pt-16 pb-12 rounded-b-3xl">
        <Image src="/images/about-hero-bg.webp" alt="" fill sizes="100vw" className="object-cover object-center" priority aria-hidden="true" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10">
          <div className="w-8 h-[3px] bg-[#78EB54] rounded-full mb-4" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>What We Offer</p>
          <h1 className="font-bold text-[34px] leading-[1.15] mb-3" style={{ color: "#ffffff", letterSpacing: "-0.02em" }}>Services</h1>
          <p className="text-sm leading-relaxed max-w-[90%]" style={{ color: "#ffffff" }}>
            Delivering scalable digital solutions designed to empower businesses, optimize operations, and drive sustainable growth.
          </p>
        </div>
      </div>

      {/* Tab pills */}
      <div className="px-5 py-5 border-b border-black/8 flex flex-col gap-3">
        <button
          onClick={() => setActiveTab("dts")}
          className="w-full py-3 rounded-full text-sm font-medium transition-colors"
          style={{ background: activeTab === "dts" ? "#000" : "#F3F4F6", color: activeTab === "dts" ? "#fff" : "#000" }}
        >
          Digital Technology Services (DTS)
        </button>
        <button
          onClick={() => setActiveTab("dis")}
          className="w-full py-3 rounded-full text-sm font-medium transition-colors"
          style={{ background: activeTab === "dis" ? "#000" : "#F3F4F6", color: activeTab === "dis" ? "#fff" : "#000" }}
        >
          Digital Infrastructure Services (DIS)
        </button>
      </div>

      {/* Service cards */}
      <div className="px-5 py-6 flex flex-col gap-5">
        {dtServices.map((svc) => (
          <div key={svc.num} id={`${slugify(svc.title)}-m`} className="bg-white rounded-2xl border border-black/8 overflow-hidden" style={{ scrollMarginTop: "6rem" }}>
            {/* Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={svc.image} alt={svc.title} className="w-full h-48 object-cover" />

            {/* Body */}
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: svc.filled ? "#78EB54" : "transparent", color: "#000", border: svc.filled ? "none" : "2px solid #78EB54" }}
                >
                  {svc.num}
                </div>
                <h2 className="font-bold text-base leading-snug" style={{ color: "#000000" }}>{svc.title}</h2>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#00000099" }}>{svc.description}</p>

              {/* Bullet list */}
              <div className="border-t border-black/8 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "#000000" }}>{svc.rightTitle}</p>
                <ul className="flex flex-col gap-2">
                  {svc.rightItems.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#000000cc" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#78EB54] flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="px-5 pb-10 flex gap-3">
        <button className="flex-1 py-3 rounded-full border border-black/20 flex items-center justify-center gap-2 text-sm font-medium" style={{ color: "#000" }}>
          <svg width="16" height="16" viewBox="0 0 36 36" fill="none">
            <line x1="28" y1="18" x2="8" y2="18" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
            <polyline points="16,10 8,18 16,26" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
          Previous
        </button>
        <button className="flex-1 py-3 rounded-full bg-black flex items-center justify-center gap-2 text-sm font-medium text-white">
          Next
          <svg width="16" height="16" viewBox="0 0 36 36" fill="none">
            <line x1="8" y1="18" x2="28" y2="18" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            <polyline points="20,10 28,18 20,26" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </button>
      </div>

    </section>

    {/* ── DESKTOP (lg+) ── */}
    <div className="hidden lg:block">
      <section className="services-section">
        <h1 className="services-heading">Services</h1>
        <p className="services-subtitle">
          Delivering scalable digital solutions designed to empower businesses, optimize operations, and drive sustainable growth.
        </p>

        <div className="services-tabnav">
          <button
            className={`services-tab-pill ${activeTab === "dts" ? "services-tab-pill--active" : "services-tab-pill--inactive"}`}
            onClick={() => setActiveTab("dts")}
          >
            Digital Technology Services (DTS)
          </button>
          <button
            className={`services-tab-pill ${activeTab === "dis" ? "services-tab-pill--active" : "services-tab-pill--inactive"}`}
            onClick={() => setActiveTab("dis")}
          >
            Digital Infrastructure Services (DIS)
          </button>
        </div>

        <div className="services-rows">
          {dtServices.map((svc) => (
            <div key={svc.num} id={slugify(svc.title)} className="services-row">
              <div className="services-row__left">
                <div className={`services-row__badge ${svc.filled ? "services-row__badge--filled" : "services-row__badge--outline"}`}>
                  {svc.num}
                </div>
                <h2 className="services-row__title">{svc.title}</h2>
                <p className="services-row__desc">{svc.description}</p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={svc.image} alt={svc.title} className="services-row__image" />
              <div className="services-row__connector" aria-hidden="true">
                <div className="services-row__line" />
                <div className="services-row__dot" />
              </div>
              <div className="services-row__right">
                <h3 className="services-row__right-title">{svc.rightTitle}</h3>
                <ul className="services-row__list">
                  {svc.rightItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      <br/><br/>
      <div className="services-pagination">
        <button className="services-pagination__prev">
          <svg className="services-pagination__arrow" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <line x1="28" y1="18" x2="8" y2="18" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <polyline points="16,10 8,18 16,26" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          Previous
        </button>
        <button className="services-pagination__next">
          Next
          <svg className="services-pagination__arrow" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <line x1="8" y1="18" x2="28" y2="18" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <polyline points="20,10 28,18 20,26" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </button>
      </div>
    </div>
</>
  );
}
