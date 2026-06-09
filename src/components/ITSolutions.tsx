import Image from "next/image";
import Link from "next/link";
import styles from "./ITSolutions.module.css";

export default function ITSolutions() {
  return (
    <>
    {/* ── MOBILE ── */}
    <section className="block md:hidden relative w-full overflow-hidden bg-black" style={{ minHeight: "100svh" }}>
      <Image
        src="/images/it-solutions-bg.webp"
        alt="IT Solutions Provider"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* About Us btn */}
      <Link
        href="/about"
        className="absolute top-8 left-5 flex items-center justify-center bg-[#78EB54] hover:bg-[#60d43e] transition-colors rounded-full px-5 py-2 z-20"
      >
        <span className="text-white font-medium text-sm">About Us</span>
      </Link>

      {/* Arrow btn */}
      <Link
        href="#industries"
        aria-label="Next section"
        className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center justify-center bg-[#78EB54] hover:bg-[#60d43e] transition-colors rounded-full w-12 h-12 z-20"
      >
        <svg viewBox="0 0 25 24" fill="none" aria-hidden="true" className="w-5 h-5">
          <path d="M5 12H20M20 12L14 6M20 12L14 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      {/* Text at bottom */}
      <div className="absolute bottom-10 left-5 right-5 z-20">
        <p className="text-white font-medium uppercase text-xs tracking-wide mb-2">Best IT Solutions Company</p>
        <h2 className="text-white font-medium uppercase text-4xl leading-tight">IT Solutions Provider</h2>
      </div>
    </section>

    {/* ── DESKTOP ── */}
    <section className={`hidden md:block relative w-full overflow-hidden ${styles.section}`}>
      {/* Background image */}
      <Image
        src="/images/it-solutions-bg.webp"
        alt="IT Solutions Provider"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />

      {/* Glass strip */}
      <div className={`absolute inset-y-0 ${styles.glassStrip}`} />

      {/* About Us btn */}
      <Link
        href="/about"
        className={`absolute flex items-center justify-center bg-[#78EB54] hover:bg-[#60d43e] transition-colors its-about-btn ${styles.aboutBtn}`}
      >
        <span className={`text-white font-medium its-about-text ${styles.aboutBtnText}`}>
          About Us
        </span>
      </Link>

      {/* Arrow btn */}
      <Link
        href="#industries"
        aria-label="Next section"
        className={`absolute flex items-center justify-center bg-[#78EB54] hover:bg-[#60d43e] transition-colors its-arrow-btn ${styles.arrowBtn}`}
      >
        <svg
          viewBox="0 0 25 24"
          fill="none"
          aria-hidden="true"
          className={`its-arrow-btn-svg ${styles.arrowIcon}`}
        >
          <path
            d="M5 12H20M20 12L14 6M20 12L14 18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      {/* "BEST IT SOLUTIONS COMPANY" */}
      <p className={`absolute text-white font-medium uppercase flex items-center its-subtitle ${styles.subtitle}`}>
        Best IT Solutions Company
      </p>

      {/* "IT SOLUTIONS PROVIDER" */}
      <h2 className={`absolute text-white font-medium uppercase flex items-center its-title ${styles.title}`}>
        IT Solutions Provider
      </h2>
    </section>
    </>
  );
}
