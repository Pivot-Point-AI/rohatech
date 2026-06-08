import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
    {/* ── MOBILE ── */}
    <section className={`block md:hidden relative w-full overflow-hidden bg-black ${styles.mobileSection}`}>
      <Image src="/images/hero-bg.png" alt="RohaTech Hero Background" fill sizes="100vw" className="object-cover object-center" priority />
      <div className={`absolute inset-0 ${styles.mobileGradient}`} />

      <div className="absolute bottom-0 left-0 right-0 px-5 pb-10 z-10">
        <h1 className={`text-white font-normal uppercase leading-tight mb-4 ${styles.mobileHeading}`}>
          Transforming Ideas into Digital Reality
        </h1>
        <p className="text-white/80 text-sm leading-relaxed mb-6">
          We build smart, scalable solutions that boost efficiency and give you a competitive edge.
        </p>

        <div className="flex items-end gap-3 mb-2">
          <Link href="/services" className="flex-shrink-0 bg-white text-black font-medium text-sm px-5 py-3 rounded-full">
            Learn More
          </Link>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 flex-1">
            <span className="text-[#78EB54] text-3xl font-semibold leading-none">100+</span>
            <p className="text-white text-xs mt-1 leading-snug">Digital Infrastructure Projects Delivered</p>
          </div>
        </div>
      </div>
    </section>

    {/* ── DESKTOP ── */}
    <section className={`hidden md:block relative w-full overflow-hidden bg-black ${styles.desktopSection}`}>
      <Image
        src="/images/hero-bg.png"
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
