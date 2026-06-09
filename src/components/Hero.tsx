import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
    {/* ── MOBILE ── */}
    <section className={`block md:hidden relative w-full overflow-hidden bg-black ${styles.mobileSection}`}>
      <Image src="/images/hero-bg.webp" alt="RohaTech Hero Background" fill sizes="100vw" className="object-cover object-center" priority />
      <div className={`absolute inset-0 ${styles.mobileGradient}`} />

      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-12 flex flex-col gap-5">

        {/* Label */}
        <p className="text-white/60 text-xs uppercase tracking-widest font-medium">Best IT Solutions Company</p>

        {/* Headline */}
        <h1 className={`text-white font-normal uppercase leading-none ${styles.mobileHeading}`}>
          Transforming<br />Ideas into<br />Digital Reality
        </h1>

        {/* Divider */}
        <div className="w-10 h-px bg-white/30" />

        {/* Description */}
        <p className="text-white/70 text-sm leading-relaxed max-w-xs">
          We build smart, scalable solutions that boost efficiency and give you a competitive edge.
        </p>

        {/* CTA row */}
        <div className="flex items-center gap-4">
          <Link href="/services" className="bg-white text-black font-medium text-sm px-6 py-3 rounded-full hover:bg-white/90 transition-colors">
            Learn More
          </Link>
          <div className="flex flex-col">
            <span className="text-[#78EB54] text-2xl font-semibold leading-none">100+</span>
            <span className="text-white/60 text-[10px] leading-tight mt-1">Projects Delivered</span>
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
