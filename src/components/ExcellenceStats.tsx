import Image from "next/image";
import styles from "./ExcellenceStats.module.css";

const stats = [
  { num: "100+", label: "Project Completed" },
  { num: "60+",  label: "Satisfied Clients"  },
  { num: "250",  label: "Experienced Staff"  },
  { num: "5",    label: "Awards Received"    },
];

export default function ExcellenceStats() {
  return (
    <>
    {/* ── MOBILE ── */}
    <section className="block md:hidden relative bg-white overflow-hidden px-5 py-14 text-center">
      <Image
        src="/images/bg.webp"
        alt=""
        fill
        aria-hidden="true"
        className="object-cover object-center"
      />
      <div className="relative z-10">
        <h2 className={`text-3xl font-medium text-black mb-10 ${styles.mobileHeading}`}>A big record of<br />Excellence</h2>
        <div className="grid grid-cols-2 gap-6">
          {stats.map((s) => (
            <div key={s.label}>
              <p className={`text-4xl font-normal ${styles.mobileStatNumber}`}>{s.num}</p>
              <p className="text-sm text-black mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── DESKTOP ── */}
    <section className={`hidden md:block ${styles.desktopSection}`}>
      <Image
        src="/images/bg.webp"
        alt=""
        fill
        aria-hidden="true"
        className={styles.worldMapSvg}
      />

      <h2 className={styles.heading}>
        A big record of
        <br />
        Excellence
      </h2>

      <div className={styles.statsRow}>
        <span className={`${styles.statNum} ${styles.num100Plus}`}>100+</span>
        <span className={`${styles.statLabel} ${styles.lbl100Plus}`}>Project Completed</span>

        <span className={`${styles.statNum} ${styles.num60Plus}`}>60+</span>
        <span className={`${styles.statLabel} ${styles.lbl60Plus}`}>Satisfied Clients</span>

        <span className={`${styles.statNum} ${styles.num250}`}>250</span>
        <span className={`${styles.statLabel} ${styles.lbl250}`}>Experienced Staff</span>

        <span className={`${styles.statNum} ${styles.num5}`}>5</span>
        <span className={`${styles.statLabel} ${styles.lbl5}`}>Awards Received</span>
      </div>
    </section>
    </>
  );
}
