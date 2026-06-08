import Link from "next/link";
import styles from "./Footer.module.css";

const serviceLinks = [
  { label: "Software Development", right: "5.625vw",  width: "14.792vw", top: "19.896vw" },
  { label: "UI/UX Design",         right: "11.823vw", width: "8.594vw",  top: "21.979vw" },
  { label: "Web Development",      right: "8.333vw",  width: "12.083vw", top: "24.063vw" },
  { label: "Managed Services",     right: "8.281vw",  width: "12.135vw", top: "26.146vw" },
];

export default function Footer() {
  return (
    <>
    {/* ── MOBILE ── */}
    <footer id="contact" className="block md:hidden bg-black px-5 pt-14 pb-8">
      <p className="text-white font-medium text-base mb-1">Do you have any questions?<br />Drop us an email and we&apos;ll get right back to you...</p>
      <a href="mailto:info@rohatech.com.pk" className="text-white font-medium text-sm hover:text-[#78EB54] transition-colors">info@rohatech.com.pk</a>
      <div className="mt-8 flex flex-col gap-2">
        {serviceLinks.map(({ label }) => (
          <Link key={label} href="/services" className="text-white text-sm hover:text-[#78EB54] transition-colors">{label}</Link>
        ))}
      </div>
      <h2 className={`text-white font-medium mt-10 text-5xl leading-tight ${styles.mobileHeading}`}>Built for Growth</h2>
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
        src="/images/footer.png"
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
        Do you have any questions?<br />Drop us an email and we&apos;ll get right back to you...
      </p>

      {/* "info@rohatech.com.pk" */}
      <a
        href="mailto:info@rohatech.com.pk"
        className={`absolute text-white font-medium hover:text-[#78EB54] transition-colors ${styles.emailLink}`}
      >
        info@rohatech.com.pk
      </a>

      {/* Service links — right/top/width are per-item, stay inline */}
      {serviceLinks.map(({ label, right, width, top }) => (
        <Link
          key={label}
          href="/services"
          className={`absolute text-white font-normal hover:text-[#78EB54] transition-colors flex items-center ${styles.serviceLink}`}
          style={{ right, top, width }}
        >
          {label}
        </Link>
      ))}

      {/* "Built for Growth" */}
      <h2 className={`absolute text-white font-medium ${styles.footerHeading}`}>
        Built for Growth
      </h2>
    </footer>
    </>
  );
}
