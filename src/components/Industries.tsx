import Link from "next/link";
import styles from "./Industries.module.css";

/* Roman numeral SVGs — 24.39×24.39 viewBox, white fills/strokes on black bg
   Vectors match Figma: bars at left%/right%/top%/bottom% within 24.39px square */
const RomanI = () => (
  <svg viewBox="0 0 24.39 24.39" fill="none" style={{ width: "100%", height: "100%" }}>
    {/* left=46.85% right=46.85% top=28.12% bottom=28.13% → x=11.43, y=6.86, w=1.53, h=10.67 */}
    <rect x="11.43" y="6.86" width="1.53" height="10.67" fill="white"/>
  </svg>
);

const RomanII = () => (
  <svg viewBox="0 0 24.39 24.39" fill="none" style={{ width: "100%", height: "100%" }}>
    {/* left=34.35% → x=8.38 */}
    <rect x="8.38"  y="6.86" width="1.53" height="10.67" fill="white"/>
    {/* left=59.35% → x=14.47 */}
    <rect x="14.47" y="6.86" width="1.53" height="10.67" fill="white"/>
  </svg>
);

const RomanIII = () => (
  <svg viewBox="0 0 24.39 24.39" fill="none" style={{ width: "100%", height: "100%" }}>
    {/* left=21.85% → x=5.33 */}
    <rect x="5.33"  y="6.86" width="1.53" height="10.67" fill="white"/>
    {/* left=46.85% → x=11.43 */}
    <rect x="11.43" y="6.86" width="1.53" height="10.67" fill="white"/>
    {/* left=71.85% → x=17.52 */}
    <rect x="17.52" y="6.86" width="1.53" height="10.67" fill="white"/>
  </svg>
);

const RomanIV = () => (
  <svg viewBox="0 0 24.39 24.39" fill="none" style={{ width: "100%", height: "100%" }}>
    {/* left=21.85% → x=5.33 (vertical I bar) */}
    <rect x="5.33" y="6.86" width="1.53" height="10.67" fill="white"/>
    {/* V left diagonal: left=47.31% → x=11.54, left=59.81% → x=14.59 (bottom center) */}
    <line x1="12.2"  y1="6.86" x2="16.5" y2="17.53" stroke="white" strokeWidth="1.53" strokeLinecap="butt"/>
    {/* V right diagonal */}
    <line x1="20.86" y1="6.86" x2="16.5" y2="17.53" stroke="white" strokeWidth="1.53" strokeLinecap="butt"/>
  </svg>
);

const industries = [
  { title: "Fintech",    icon: <RomanI />,   desc: "We act as the legal employer on your behalf, managing all employment responsibilities so you can hire global talent without setting up local entities." },
  { title: "Healthcare", icon: <RomanII />,  desc: "Accurate, on-time payroll processing with full tax handling, ensuring compliance across regions while removing administrative complexity." },
  { title: "E-Commerce", icon: <RomanIII />, desc: "Locally compliant employment contracts and adherence to labor laws, reducing legal risk and ensuring smooth international hiring." },
  { title: "Logistics",  icon: <RomanIV />,  desc: "End-to-end HR support, including benefits administration, employee management, and ongoing assistance for your remote workforce." },
];

export default function Industries() {
  return (
    <>
    {/* ── MOBILE ── */}
    <section id="solutions" className="block md:hidden bg-[#F3F4F6] px-5 py-14">
      <p className="text-xs uppercase mb-2 tracking-wide" style={{ color: "#000000" }}>Industries</p>
      <h2 className="text-3xl font-normal mb-3" style={{ color: "#000000" }}>Innovation Across Industries</h2>
      <p className="text-sm leading-relaxed mb-8" style={{ color: "#00000099" }}>RohaTech delivers enterprise-grade technology solutions tailored to the unique demands of every sector we serve.</p>
      <div className="flex flex-col gap-4 mb-8">
        {industries.map(({ title, icon, desc }) => (
          <div key={title} className="bg-white rounded-2xl p-5 flex gap-4 items-start">
            <div className="w-11 h-11 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
              <div className="w-6 h-6">{icon}</div>
            </div>
            <div>
              <p className="font-bold text-sm mb-1" style={{ color: "#000000" }}>{title}</p>
              <p className="text-xs leading-relaxed" style={{ color: "#00000099" }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <Link href="/contact" className="flex items-center justify-center bg-[#78EB54] hover:bg-[#60d43e] transition-colors text-white text-sm font-medium px-6 py-3 rounded-full">Learn More</Link>
    </section>

    {/* ── DESKTOP ── */}
    <section id="solutions" className={`hidden md:block relative w-full overflow-hidden ${styles.desktopSection}`}>

      {/* "Industries" label */}
      <p className={`absolute text-black font-normal uppercase ${styles.label}`}>
        Industries
      </p>

      {/* Heading */}
      <h2 className={`absolute text-black font-normal ${styles.heading}`}>
        Innovation Across Industries
      </h2>

      {/* Description */}
      <p className={`absolute text-black font-normal flex items-center ${styles.description}`}>
        RohaTech delivers enterprise-grade technology solutions tailored to the
        unique demands of every sector we serve.
      </p>

      {/* Learn More button */}
      <Link
        href="/contact"
        className={`absolute flex items-center justify-center bg-[#78EB54] hover:bg-[#60d43e] transition-colors ${styles.btn}`}
      >
        <span className={`text-white font-medium ${styles.btnText}`}>
          Learn More
        </span>
      </Link>

      {/* Cards column — left=1008 top=202 w=782 h=677 gap=16.3 */}
      <div className={`absolute flex flex-col ${styles.cardsContainer}`}>
        {industries.map(({ title, icon, desc }) => (
          <div key={title} className={`relative bg-white flex-none ${styles.card}`}>

            {/* Icon — 32.53×32.53px black box, left=-15.28px (overflows card left by design) */}
            <div className={`absolute bg-black flex items-center justify-center ${styles.cardIcon}`}>
              <div className={styles.cardIconInner}>
                {icon}
              </div>
            </div>

            {/* Title — left=33.52px (aligns with description), top=33.53px, bold 23.26px */}
            <p className={`absolute font-bold flex items-center ${styles.cardTitle}`}>
              {title}
            </p>

            {/* Description — left=33px top=78px right=35px h=46px 16.3px/23px */}
            <p className={`absolute font-normal flex items-center ${styles.cardDesc}`}>
              {desc}
            </p>
          </div>
        ))}
      </div>

    </section>
    </>
  );
}
