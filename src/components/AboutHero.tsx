import Image from "next/image";
import Link from "next/link";
import styles from "./AboutHero.module.css";

const stats = [
  { num: "100+", label: "Project Completed" },
  { num: "60+",  label: "Satisfied Clients"  },
  { num: "250",  label: "Experienced Staff"  },
  { num: "5",    label: "Awards Received"    },
];

export default function AboutHero() {
  return (
    <>
    {/* ── MOBILE ── */}
    <section className="block md:hidden w-full bg-[#F3F4F6]">

      {/* Hero image — fixed height, rounded bottom */}
      <div className={`relative w-full overflow-hidden ${styles.mobileHeroWrapper}`}>
        <Image
          src="/images/about-hero-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          aria-hidden="true"
        />
        <div className={`absolute inset-0 ${styles.mobileOverlay}`} />


        {/* Heading + CTA pinned to bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-8 flex flex-col gap-4">
          <div className="w-8 h-[3px] bg-[#78EB54] rounded-full" />
          <h1 className={`text-white font-normal ${styles.mobileHeading}`}>
            Powering enterprises with secure, scalable, and future-ready{" "}
            <span className={styles.mobileGreenSpan}>technology solutions.</span>
          </h1>
          <p className="text-white text-xs leading-relaxed max-w-[260px]">
            RohaTech Recognized for Excellence in Digital Infrastructure Innovation
          </p>
          <Link
            href="mailto:info@rohatech.com.pk"
            className="self-start inline-flex items-center justify-center bg-[#78EB54] hover:bg-[#60d43e] transition-colors text-white font-medium text-sm px-7 py-3 rounded-full"
          >
            Email Us
          </Link>
        </div>
      </div>

      {/* Video */}
      <div className="bg-[#F3F4F6] px-5 pt-8 pb-10">
        <div className={`relative w-full rounded-2xl overflow-hidden shadow-md ${styles.mobileVideoWrapper}`}>
          <Image src="/images/abou.webp" alt="RohaTech showcase" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
              <svg viewBox="0 0 60 60" width="36" height="36">
                <path d="M24 20L44 30L24 40V20Z" fill="#000"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="bg-[#F3F4F6] px-6 pt-2 pb-10 border-t border-black/10">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3 mt-8" style={{ color: "#000000" }}>Our Vision</p>
        <p className="text-sm leading-relaxed" style={{ color: "#000000cc" }}>
          Our vision is built upon the foundation of our core values placing customers and employees at the heart of everything we do. We are committed to being reliable, dependable, disciplined, and diligent.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-y-8 gap-x-4 px-6 pt-8 pb-12 border-t border-black/10 bg-[#F3F4F6]">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-4xl font-normal leading-none" style={{ color: "#78EB54" }}>{s.num}</p>
            <p className="text-xs mt-1" style={{ color: "#00000099" }}>{s.label}</p>
          </div>
        ))}
      </div>
    </section>



    {/* ── DESKTOP ── */}
    <section className={`hidden md:block relative w-full overflow-hidden ${styles.desktopSection}`}>

      {/* Background image wrapper */}
      <div className={`absolute left-0 right-0 overflow-hidden ${styles.bgWrapper}`}>
        <Image
          src="/images/about-hero-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Dark gradient overlay */}
      <div className={`absolute left-0 right-0 pointer-events-none ${styles.darkGradient}`} />

      {/* Main heading */}
      <h1 className={`absolute text-white font-normal text-center ${styles.heading}`}>
        Powering enterprises with secure, scalable, and future-ready{" "}
        <span className={styles.greenSpan}>technology solutions.</span>
      </h1>

      {/* Video thumbnail */}
      <div className={`absolute left-1/2 -translate-x-1/2 overflow-hidden ${styles.videoWrapper}`}>
        <Image
          src="/images/abou.webp"
          alt="RohaTech showcase"
          fill
          sizes="30vw"
          className="object-cover"
        />
      </div>

      {/* Play button */}
      <div className={`absolute flex items-center justify-center rounded-full cursor-pointer hover:scale-105 transition-transform ${styles.playBtn}`}>
        <svg viewBox="0 0 60 60" style={{ width: "100%", height: "100%" }}>
          <circle cx="30" cy="30" r="28" fill="rgba(255,255,255,0.9)"/>
          <path d="M24 20L44 30L24 40V20Z" fill="#000"/>
        </svg>
      </div>

      {/* Subtext */}
      <p className={`absolute text-white font-medium text-center ${styles.subtext}`}>
        RohaTech Recognized for Excellence in Digital Infrastructure Innovation
      </p>

      {/* "Our visions" label */}
      <p className={`absolute text-white font-medium ${styles.visionLabel}`}>
        Our visions
      </p>

      {/* Description */}
      <p className={`absolute text-white font-normal ${styles.visionDesc}`}>
        Our vision is built upon the foundation of our core values  placing customers and employees
        at the heart of everything we do. We are committed to being reliable, dependable, disciplined,
        and diligent. We believe that team spirit and collaboration are the driving forces that can
        improve lives and shape a better future for generations to come.
      </p>

      {/* Email US button */}
      <Link
        href="mailto:info@rohatech.com.pk"
        className={`absolute flex items-center justify-center bg-[#78EB54] hover:bg-[#60d43e] transition-colors ${styles.emailBtn}`}
      >
        <span className={`text-white font-medium ${styles.emailBtnText}`}>
          Email US
        </span>
      </Link>

      {/* Stats row */}
      <div className={`absolute ${styles.statsRow}`}>
        <span className={`absolute text-black font-normal flex items-center ${styles.stat100Plus}`}>100+</span>
        <span className={`absolute text-black font-normal text-center flex items-center justify-center ${styles.stat100PlusLabel}`}>Project Completed</span>

        <span className={`absolute text-black font-normal flex items-center ${styles.stat60Plus}`}>60+</span>
        <span className={`absolute text-black font-normal text-center flex items-center justify-center ${styles.stat60PlusLabel}`}>Satisfied Clients</span>

        <span className={`absolute text-black font-normal flex items-center ${styles.stat250}`}>250</span>
        <span className={`absolute text-black font-normal text-center flex items-center justify-center ${styles.stat250Label}`}>Experienced Staff</span>

        <span className={`absolute text-black font-normal flex items-center ${styles.stat5}`}>5</span>
        <span className={`absolute text-black font-normal text-center flex items-center justify-center ${styles.stat5Label}`}>Awards Received</span>
      </div>

    </section>
    </>
  );
}
