"use client";

import { useState } from "react";

const slugify = (title: string) =>
  title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

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
    image: "/images/services/hero-bg.png",
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
    image: "/images/services/it-solutions-bg.png",
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
    image: "/images/services/about-hero-bg.png",
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
    image: "/images/services/abou.png",
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
    image: "/images/services/hero2-bg.png",
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

  return (
    <>
    <section className="services-section">
      {/* ── Hero text ── */}
      <h1 className="services-heading">Services</h1>
      <p className="services-subtitle">
        Delivering scalable digital solutions designed to empower businesses, optimize operations, and drive sustainable growth.
      </p>

      {/* ── Tab pills ── */}
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

      {/* ── Service rows ── */}
      <div className="services-rows">
        {dtServices.map((svc) => (
          <div key={svc.num} id={slugify(svc.title)} className="services-row">

            {/* Left — number + title + description */}
            <div className="services-row__left">
              <div className={`services-row__badge ${svc.filled ? "services-row__badge--filled" : "services-row__badge--outline"}`}>
                {svc.num}
              </div>
              <h2 className="services-row__title">{svc.title}</h2>
              <p className="services-row__desc">{svc.description}</p>
            </div>

            {/* Center — image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={svc.image}
              alt={svc.title}
              className="services-row__image"
            />

            {/* Connector line + dot */}
            <div className="services-row__connector" aria-hidden="true">
              <div className="services-row__line" />
              <div className="services-row__dot" />
            </div>

            {/* Right — title + bullet list */}
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
<br/>
<br />
    {/* ── Pagination ── */}
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
    </>
  );
}
