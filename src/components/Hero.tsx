import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
    {/* ── MOBILE ── */}
    <section className={`block md:hidden relative w-full overflow-hidden bg-black ${styles.mobileSection}`}>
      <Image src="/images/hero-bg.webp" alt="RohaTech Hero Background" fill sizes="100vw" className="object-cover object-[center_65%]" priority />
      <div className={`absolute inset-0 ${styles.mobileGradient}`} />

      <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-12 flex flex-col gap-4">

        {/* Label */}
        {/* <p className="text-white/60 text-[11px] uppercase tracking-[0.2em] font-medium pl-px">Best IT Solutions Company</p> */}

        {/* Headline */}
        <h1 className={`text-white font-normal uppercase leading-tight ${styles.mobileHeading}`}>
          Transforming<br />Ideas into<br />Digital Reality
        </h1>

        {/* Description */}
        <p className="text-white text-[13px] leading-relaxed max-w-[90%]">
          We build smart, scalable solutions that boost efficiency and give you a competitive edge.
        </p>

        {/* CTA row */}
        <div className="flex items-stretch gap-3 mt-2">
          <Link href="/services" className="shrink-0 flex items-center justify-center bg-white text-black font-medium text-sm px-7 rounded-full hover:bg-white/90 transition-colors">
            Learn More
          </Link>
          <div className="flex items-center justify-center gap-3 flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-3">
            <span className={`text-[#78EB54] font-semibold leading-none ${styles.mobileBadgeNumber}`}>100+</span>
            <span className="text-white/60 text-[11px] leading-tight">Projects<br />Delivered</span>
          </div>
        </div>

      </div>
    </section>

    {/* ── DESKTOP ── */}
    <section className={`hidden md:block relative w-full overflow-hidden bg-black ${styles.desktopSection}`}>
      <Image
        src="/images/hero-bg.webp"
        alt="RohaTech Hero Background"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />

      <div className="absolute inset-0 hero-gradient" />

      {/* Card */}
      <div className={`absolute bg-white ${styles.card}`}>
        <p className={`absolute text-black font-normal ${styles.cardTopText}`}>
          We design and deploy intelligent, secure, and scalable technology
          ecosystems for modern enterprises.
        </p>

        <span className={`absolute text-black font-normal flex items-center overflow-visible ${styles.cardNumber}`}>
          100+
        </span>

        <p className={`absolute text-black font-normal flex items-center ${styles.cardBottomText}`}>
          Digital Infrastructure Projects Successfully Delivered
        </p>
      </div>

      {/* Headline */}
      <h1 className={`absolute text-white font-normal uppercase flex items-center ${styles.headline}`}>
        Transforming Ideas into Digital Reality
      </h1>

      {/* Description */}
      <p className={`absolute text-white font-normal text-justify flex items-center ${styles.description}`}>
        We empower businesses to thrive through custom software development. By
        leveraging the latest technologies, we build smart solutions that boost
        efficiency, foster growth, and give you a competitive edge.
      </p>

      {/* Learn More */}
      <Link
        href="/services"
        className={`absolute bg-white flex items-center justify-center text-black font-medium hover:bg-white/90 transition-colors ${styles.learnMoreBtn}`}
      >
        Learn More
      </Link>
    </section>
    </>
  );
}
