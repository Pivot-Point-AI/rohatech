import Image from "next/image";
import Link from "next/link";
import styles from "./WhatWeDo.module.css";

const services = [
  { title: "Network & Infrastructure", desc: "Secure, high-performance network architecture, data centers, servers, and storage solutions built for reliability and scalability." },
  { title: "Digital Solutions", desc: "Custom software, mobile banking solutions, and digital platforms designed to enhance user experience and business performance." },
  { title: "Cloud Modernization", desc: "Transform legacy systems into agile, cloud-enabled platforms that improve efficiency and accelerate innovation." },
  { title: "Cybersecurity & Risk", desc: "Advanced security frameworks and monitoring solutions to protect critical systems, data, and digital assets." },
];

export default function WhatWeDo() {
  return (
    <>
    {/* ── MOBILE ── */}
    <section id="services" className="block md:hidden bg-white px-5 py-14">
      <p className="text-xs uppercase text-black mb-2 tracking-wide">Services</p>
      <h2 className="text-3xl font-normal text-black mb-4">What we do</h2>
      <p className="text-sm text-black leading-relaxed mb-8">Delivering end-to-end technology solutions that power secure, scalable, and future-ready enterprises</p>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {services.map((s) => (
          <div key={s.title} className="bg-[#F3F4F6] rounded-xl p-4">
            <p className="text-xs font-semibold uppercase text-black mb-2">{s.title}</p>
            <p className="text-xs text-black leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="/contact" className="inline-flex items-center justify-center bg-[#78EB54] text-white text-sm font-medium px-6 py-3 rounded-full">Get In Touch</Link>
      </div>
    </section>

    {/* ── DESKTOP ── */}
    <section id="services" className={`hidden md:block relative w-full overflow-hidden bg-white ${styles.desktopSection}`}>

      <p className={`absolute text-black font-normal uppercase ${styles.servicesLabel}`}>
        Services
      </p>

      <h2 className={`absolute text-black font-normal ${styles.heading}`}>
        What we do
      </h2>

      <p className={`absolute text-black font-normal flex items-center ${styles.description}`}>
        Delivering end-to-end technology solutions that power secure, scalable,
        and future-ready enterprises
      </p>

      <Link
        href="/contact"
        className={`absolute bg-[#78EB54] flex items-center justify-center text-white font-medium hover:bg-[#60d43e] transition-colors ${styles.btn}`}
      >
        Get In Touch
      </Link>

      {/* Network & Infrastructure */}
      <div className={`absolute ${styles.iconNetwork}`}>
        <Image src="/images/icon.png" alt="Network & Infrastructure" width={28} height={28} className={styles.iconImg} />
      </div>
      <p className={`absolute text-black font-medium uppercase flex items-center ${styles.titleNetwork}`}>
        Network &amp; Infrastructure
      </p>
      <p className={`absolute text-black font-normal flex items-center ${styles.descNetwork}`}>
        Secure, high-performance network architecture, data centers, servers,
        and storage solutions built for reliability and scalability.
      </p>

      {/* Digital Solutions */}
      <div className={`absolute ${styles.iconDigital}`}>
        <Image src="/images/icon2.png" alt="Digital Solutions" width={28} height={28} className={styles.iconImg} />
      </div>
      <p className={`absolute text-black font-medium uppercase flex items-center ${styles.titleDigital}`}>
        Digital Solutions
      </p>
      <p className={`absolute text-black font-normal flex items-center ${styles.descDigital}`}>
        Custom software, mobile banking solutions, and digital platforms
        designed to enhance user experience and business performance.
      </p>

      {/* Cloud Modernization */}
      <div className={`absolute ${styles.iconCloud}`}>
        <Image src="/images/icon3.png" alt="Cloud Modernization" width={28} height={28} className={styles.iconImg} />
      </div>
      <p className={`absolute text-black font-medium uppercase flex items-center ${styles.titleCloud}`}>
        Cloud Modernization
      </p>
      <p className={`absolute text-black font-normal flex items-center ${styles.descCloud}`}>
        Transform legacy systems into agile, cloud-enabled platforms that
        improve efficiency and accelerate innovation.
      </p>

      {/* Cybersecurity & Risk */}
      <div className={`absolute ${styles.iconCyber}`}>
        <Image src="/images/icon4.png" alt="Cybersecurity & Risk" width={28} height={28} className={styles.iconImg} />
      </div>
      <p className={`absolute text-black font-medium uppercase flex items-center ${styles.titleCyber}`}>
        Cybersecurity &amp; Risk
      </p>
      <p className={`absolute text-black font-normal flex items-center ${styles.descCyber}`}>
        Advanced security frameworks and monitoring solutions to protect
        critical systems, data, and digital assets.
      </p>

    </section>
    </>
  );
}
