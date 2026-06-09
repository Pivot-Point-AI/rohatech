import Image from "next/image";
import Link from "next/link";
import styles from "./ITSolutions.module.css";

export default function ITSolutions() {
  return (
    <section className={`relative w-full overflow-hidden ${styles.section}`}>
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
  );
}
