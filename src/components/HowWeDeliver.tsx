import Image from "next/image";
import Link from "next/link";
import styles from "./HowWeDeliver.module.css";

const steps = [
  { title: "Discover & Align",   img: "/images/discover.png", desc: "We analyze your business objectives, infrastructure landscape, and industry requirements to design technology that truly fits." },
  { title: "Design & Architect", img: "/images/design.png",   desc: "Our experts craft scalable, secure, and future-ready digital solutions tailored to your operational needs." },
  { title: "Deploy & Integrate", img: "/images/deploy.png",   desc: "We implement and integrate systems seamlessly with minimal disruption and maximum efficiency." },
  { title: "Monitor & Optimize", img: "/images/monitor.png",  desc: "Through continuous monitoring and proactive support, we ensure long-term performance and reliability." },
];

export default function HowWeDeliver() {
  return (
    <>
    {/* ── MOBILE ── */}
    <section className="block md:hidden bg-[#F3F4F6] px-5 py-14">
      <div className="bg-black rounded-2xl p-6 mb-6">
        <h2 className="text-white text-2xl font-bold mb-5">How RohaTech Delivers</h2>
        <Link href="/services" className="inline-flex items-center gap-2 bg-[#78EB54] hover:bg-[#60d43e] transition-colors text-white text-sm font-bold px-5 py-2.5 rounded-full">
          See More
          <svg viewBox="0 0 25 24" fill="none" className="w-4 h-4" aria-hidden="true">
            <path d="M6.5 17.5L18.5 5.5M18.5 5.5H11M18.5 5.5V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {steps.map(({ title, img, desc }) => (
          <div key={title} className="bg-white rounded-2xl p-5 flex gap-4 items-start">
            <div className="w-12 h-12 bg-[#F3F4F6] rounded-xl flex items-center justify-center flex-shrink-0">
              <Image src={img} alt={title} width={32} height={32} className="object-contain w-8 h-8" />
            </div>
            <div>
              <p className="font-bold text-sm mb-1" style={{ color: "#000000" }}>{title}</p>
              <p className="text-xs leading-relaxed" style={{ color: "#00000099" }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ── DESKTOP ── */}
    <section className={`hidden md:block relative w-full overflow-hidden ${styles.desktopSection}`}>

      {/* ── Hero card "How RohaTech Delivers" — 975×348 ── */}
      <div className={`absolute bg-black ${styles.heroCard}`}>

        {/* Decorative arrow icon — 23×24px at left=38 top=38 */}
        <Image
          src="/images/arrowicon.png"
          alt=""
          aria-hidden="true"
          width={23}
          height={24}
          className={`absolute ${styles.squiggle}`}
        />

        {/* Heading — left=56 top=48 48px bold */}
        <h2 className={`absolute text-white font-bold flex items-center ${styles.heroHeading}`}>
          How RohaTech Delivers
        </h2>

        {/* See More button — left=56 top=218 228×56 */}
        <Link href="/services" className={`absolute bg-[#78EB54] hover:bg-[#60d43e] transition-colors ${styles.heroBtn}`}>
          <span className={`absolute text-white font-bold ${styles.heroBtnText}`}>See More</span>
          <svg className={`absolute ${styles.heroBtnArrow}`} viewBox="0 0 25 24" fill="none" aria-hidden="true">
            <path d="M6.5 17.5L18.5 5.5M18.5 5.5H11M18.5 5.5V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

      {/* ── Discover & Align — left=1230 right=220 top=172 bottom=560 ── */}
      <div className={`absolute bg-white ${styles.stepCard} ${styles.stepCardDiscover}`}>
        {/* icon: left=26 top=48 78×78 */}
        <div className={`absolute ${styles.stepIconDiscover}`}>
          <Image src="/images/discover.png" alt="Discover & Align" width={78} height={78} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        </div>
        <p className={`absolute text-black font-bold flex items-center ${styles.stepTitle} ${styles.stepTitleDiscover}`}>
          Discover &amp; Align
        </p>
        <p className={`absolute text-black font-normal flex items-center ${styles.stepDescDiscover}`}>
          We analyze your business objectives, infrastructure landscape, and industry requirements to design technology that truly fits.
        </p>
      </div>

      {/* ── Design & Architect — left=220 right=1230 top=560 bottom=172 ── */}
      <div className={`absolute bg-white ${styles.stepCard} ${styles.stepCardDesign}`}>
        {/* icon: left=40 top=48 78×78 */}
        <div className={`absolute ${styles.stepIcon}`}>
          <Image src="/images/design.png" alt="Design & Architect" width={78} height={78} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        </div>
        <p className={`absolute text-black font-bold flex items-center ${styles.stepTitle} ${styles.stepTitleDesign}`}>
          Design &amp; Architect
        </p>
        <p className={`absolute text-black font-normal flex items-center ${styles.stepDescDesign}`}>
          Our experts craft scalable, secure, and future-ready digital solutions tailored to your operational needs
        </p>
      </div>

      {/* ── Deploy & Integrate — left=725 right=725 top=560 bottom=172 ── */}
      <div className={`absolute bg-white ${styles.stepCard} ${styles.stepCardDeploy}`}>
        {/* icon: left=40 top=48 78×78 */}
        <div className={`absolute ${styles.stepIcon}`}>
          <Image src="/images/deploy.png" alt="Deploy & Integrate" width={78} height={78} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        </div>
        <p className={`absolute text-black font-bold flex items-center ${styles.stepTitle} ${styles.stepTitleLeft}`}>
          Deploy &amp; Integrate
        </p>
        <p className={`absolute text-black font-normal flex items-center ${styles.stepDescDeploy}`}>
          We implement and integrate systems seamlessly with minimal disruption and maximum efficiency.
        </p>
      </div>

      {/* ── Monitor & Optimize — left=1230 right=220 top=560 bottom=172 ── */}
      <div className={`absolute bg-white ${styles.stepCard} ${styles.stepCardMonitor}`}>
        {/* icon: left=40 top=48 78×78 */}
        <div className={`absolute ${styles.stepIcon}`}>
          <Image src="/images/monitor.png" alt="Monitor & Optimize" width={78} height={78} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        </div>
        <p className={`absolute text-black font-bold flex items-center ${styles.stepTitle} ${styles.stepTitleLeft}`}>
          Monitor &amp; Optimize
        </p>
        <p className={`absolute text-black font-normal flex items-center ${styles.stepDescMonitor}`}>
          Through continuous monitoring and proactive support, we ensure long-term performance and reliability.
        </p>
      </div>

    </section>
    </>
  );
}
