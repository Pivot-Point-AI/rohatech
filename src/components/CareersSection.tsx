"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CareersSection.module.css";
import { jobOpenings } from "@/data/jobOpenings";

const PAGE_SIZE = 4;

const perks = [
  "Competitive salary & performance bonuses",
  "Flexible & remote-friendly work",
  "Health insurance",
  "Learning & development budget",
  "Collaborative, growth-driven culture",
  "Paid time off & holidays",
];

export default function CareersSection() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(jobOpenings.length / PAGE_SIZE);
  const pageItems = jobOpenings.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      {/* ── Hero (mobile) ── */}
      <section className="block md:hidden w-full bg-[#F3F4F6]">
        <div className="relative h-[45vh] min-h-[280px] overflow-hidden rounded-b-[8vw]">
          <Image
            src="/images/about-hero-bg.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
            aria-hidden="true"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.15) 100%)" }} />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <div className="w-8 h-[3px] bg-[#78EB54] rounded-full mb-4" />
            <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] mb-3">
              Join Our Team
            </p>
            <h1 className="text-white font-normal text-[34px] leading-[1.15] mb-4 max-w-[280px] text-center" style={{ letterSpacing: "-0.025em" }}>
              Build Your Future with <span style={{ color: "#78EB54" }}>RohaTech</span>
            </h1>
            <p className="text-white text-sm leading-relaxed max-w-[260px] mb-5 text-center">
              Join a passionate team of innovators, developers, and problem-solvers creating
              cutting-edge digital solutions. Explore exciting opportunities, grow your
              expertise, and make an impact through technology.
            </p>
            <Link
              href="#openings"
              className="inline-flex items-center justify-center bg-[#78EB54] hover:bg-[#60d43e] transition-colors text-white font-medium text-sm px-7 py-3 rounded-full"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* ── Hero (desktop) ── */}
      <section className={`hidden md:block relative w-full overflow-hidden ${styles.desktopHero}`}>
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

        <div className={`absolute left-0 right-0 pointer-events-none ${styles.darkGradient}`} />

        <h1 className={`absolute text-white font-normal text-center ${styles.heading}`}>
          Build Your Future with{" "}
          <span className={styles.greenSpan}>RohaTech</span>
        </h1>

        <p className={`absolute text-white font-medium text-center ${styles.subtext}`}>
          Join a passionate team of innovators, developers, and problem-solvers creating
          cutting-edge digital solutions. Explore exciting opportunities, grow your
          expertise, and make an impact through technology.
        </p>

        <Link
          href="#openings"
          className={`absolute flex items-center justify-center bg-[#78EB54] hover:bg-[#60d43e] transition-colors ${styles.applyBtn}`}
        >
          <span className={`text-white font-medium ${styles.applyBtnText}`}>
            Apply Now
          </span>
        </Link>
      </section>

      {/* ── Why work with us ── */}
      <section className="bg-white px-6 py-14 md:px-16 lg:px-24 md:py-20">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-black/40 mb-2">
          Why RohaTech
        </p>
        <h2
          className="font-bold text-2xl md:text-4xl mb-8 md:mb-10 text-black max-w-2xl"
          style={{ letterSpacing: "-0.02em" }}
        >
          Perks &amp; benefits
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {perks.map((perk) => (
            <div
              key={perk}
              className="flex items-start gap-3 bg-[#F3F4F6] rounded-2xl px-5 py-4"
            >
              <span className="w-2 h-2 mt-1.5 rounded-full bg-[#78EB54] flex-shrink-0" />
              <span className="text-sm md:text-base text-black/80 leading-relaxed">
                {perk}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Open positions ── */}
      <section id="openings" className="bg-[#F3F4F6] px-6 py-14 md:px-16 lg:px-24 md:py-20 scroll-mt-20">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-black/40 mb-2">
          Open Positions
        </p>
        <h2
          className="font-bold text-2xl md:text-4xl mb-8 md:mb-10 text-black max-w-2xl"
          style={{ letterSpacing: "-0.02em" }}
        >
          Current openings
        </h2>
        <div className="flex flex-col gap-4">
          {pageItems.map((job) => (
            <div
              key={job.slug}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white rounded-2xl border border-black/8 px-6 py-5"
            >
              <div>
                <h3 className="font-semibold text-base md:text-lg text-black mb-1">
                  {job.title}
                </h3>
                <p className="text-xs md:text-sm text-black/50 mb-2">
                  {job.type} · {job.location}
                </p>
                <p className="text-sm text-black/70 leading-relaxed max-w-2xl">
                  {job.description}
                </p>
              </div>
              <Link
                href={`/careers/${job.slug}`}
                className="self-start md:self-center flex-shrink-0 inline-flex items-center justify-center bg-[#78EB54] hover:bg-[#60d43e] text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-black/10 text-black text-sm font-medium disabled:opacity-40 transition-colors hover:bg-black/5"
            >
              ‹
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setPage(n)}
                className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                  n === page
                    ? "bg-[#78EB54] text-white"
                    : "bg-white border border-black/10 text-black hover:bg-black/5"
                }`}
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-black/10 text-black text-sm font-medium disabled:opacity-40 transition-colors hover:bg-black/5"
            >
              ›
            </button>
          </div>
        )}
      </section>

      {/* ── CTA ── */}
      <section className="bg-white px-6 py-14 md:px-16 lg:px-24 md:py-20 text-center">
        <h2
          className="font-bold text-2xl md:text-4xl mb-4 text-black"
          style={{ letterSpacing: "-0.02em" }}
        >
          Don&apos;t see a role that fits?
        </h2>
        <p className="text-sm md:text-base text-black/60 mb-6 max-w-xl mx-auto leading-relaxed">
          We&apos;re always looking for talented people. Send us your resume and
          we&apos;ll reach out when something matches.
        </p>
        <Link
          href="/careers/apply"
          className="inline-flex items-center justify-center bg-[#78EB54] hover:bg-[#60d43e] transition-colors text-white text-sm font-medium px-8 py-3 rounded-full"
        >
          Send Your Resume
        </Link>
      </section>
    </>
  );
}
