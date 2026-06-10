"use client";

import { usePathname } from "next/navigation";
import { scrollToService } from "./ServicesContent";
import styles from "./Footer.module.css";

const serviceLinks = [
  { label: "Software Development", right: "5.625vw",  width: "14.792vw", top: "19.896vw", slug: "application-modernization" },
  { label: "UI/UX Design",         right: "11.823vw", width: "8.594vw",  top: "21.979vw", slug: "ui-ux-design" },
  { label: "Web Development",      right: "8.333vw",  width: "12.083vw", top: "24.063vw", slug: "web-and-full-stack" },
  { label: "Managed Services",     right: "8.281vw",  width: "12.135vw", top: "26.146vw", slug: "application-integration" },
];

export default function Footer() {
  const pathname = usePathname();

  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault();
    if (pathname === "/services") {
      scrollToService(slug);
    } else {
      window.location.href = `/services#${slug}`;
    }
  };

  return (
    <>
    {/* ── MOBILE ── */}
    <footer id="contact" className="block md:hidden relative bg-black overflow-hidden px-5 pt-14 pb-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/footer.webp"
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-60"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10">
        <p className="text-white font-medium text-base mb-1">Do you have any questions?<br />Drop us an email and we&apos;ll get right back to you</p>
        <a href="mailto:info@rohatech.com.pk" className="text-white font-medium text-sm hover:text-[#78EB54] transition-colors">info@rohatech.com.pk</a>
        <div className="mt-8 flex flex-col gap-2">
          {serviceLinks.map(({ label, slug }) => (
            <a key={label} href={`/services#${slug}`} onClick={(e) => handleServiceClick(e, slug)} className="text-white text-sm hover:text-[#78EB54] transition-colors">{label}</a>
          ))}
        </div>
        <h2 className={`text-white font-medium mt-10 text-5xl leading-tight ${styles.mobileHeading}`}>Built for Growth</h2>
      </div>
    </footer>

    {/* ── DESKTOP ── */}
    <footer
      id="contact"
      className={`hidden md:block relative w-full overflow-hidden bg-black ${styles.footer}`}
      style={{ marginTop: 0 }}
    >
      {/* Bg image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/footer.webp"
        alt=""
        aria-hidden="true"
        className={styles.footerBg}
      />

      {/* Dark blurred vector */}
      <div className={`absolute pointer-events-none ${styles.darkBlur}`} />

      {/* Glass stripes */}
      <div className={`absolute inset-0 flex pointer-events-none ${styles.glassStripes}`}>
        {Array.from({ length: 11 }).map((_, i) => (
          <div key={i} className={`flex-1 h-full ${styles.glassStripe}`} />
        ))}
      </div>

      {/* Bottom black blur */}
      <div className={`absolute pointer-events-none ${styles.bottomBlur}`} />

      {/* "Do you have any questions?" */}
      <p className={`absolute text-white font-medium ${styles.questionText}`}>
        Do you have any questions?<br />Drop us an email and we&apos;ll get right back to you
      </p>

      {/* "info@rohatech.com.pk" */}
      <a
        href="mailto:info@rohatech.com.pk"
        className={`absolute text-white font-medium hover:text-[#78EB54] transition-colors ${styles.emailLink}`}
      >
        info@rohatech.com.pk
      </a>

      {/* Service links — right/top/width are per-item, stay inline */}
      {serviceLinks.map(({ label, right, width, top, slug }) => (
        <a
          key={label}
          href={`/services#${slug}`}
          onClick={(e) => handleServiceClick(e, slug)}
          className={`absolute text-white font-normal hover:text-[#78EB54] transition-colors flex items-center ${styles.serviceLink}`}
          style={{ right, top, width }}
        >
          {label}
        </a>
      ))}

      {/* "Built for Growth" */}
      <h2 className={`absolute text-white font-medium ${styles.footerHeading}`}>
        Built for Growth
      </h2>
    </footer>
    </>
  );
}
