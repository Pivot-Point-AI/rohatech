import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import CareerApplyForm from "@/components/CareerApplyForm";
import Footer from "@/components/Footer";
import { jobOpenings } from "@/data/jobOpenings";

export function generateStaticParams() {
  return jobOpenings.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const job = jobOpenings.find((j) => j.slug === slug);
  if (!job) return {};
  return {
    title: job.title,
    description: job.description,
    alternates: { canonical: `https://rohatech.com/careers/${job.slug}` },
  };
}

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = jobOpenings.find((j) => j.slug === slug);
  if (!job) notFound();

  return (
    <main className="flex flex-col w-full pt-14 lg:pt-0 overflow-x-hidden">
      <Navbar theme="dark" />

      {/* ── Header banner ── */}
      <section className="relative w-full overflow-hidden bg-black px-4 py-12 sm:px-6 sm:py-16 md:px-16 lg:px-24 md:py-24">
        <div className="absolute inset-0 opacity-40">
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
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10">
          <div className="w-8 h-[3px] bg-[#78EB54] rounded-full mb-4" />
          <h1
            className="text-white font-bold text-2xl sm:text-3xl md:text-5xl leading-[1.15] max-w-2xl break-words"
            style={{ letterSpacing: "-0.02em" }}
          >
            {job.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2 mt-4">
            <span className="inline-flex items-center bg-white/10 text-white text-xs md:text-sm font-medium px-3 py-1.5 rounded-full">
              {job.type}
            </span>
            <span className="inline-flex items-center bg-white/10 text-white text-xs md:text-sm font-medium px-3 py-1.5 rounded-full">
              {job.location}
            </span>
          </div>
          <p className="text-white/70 text-sm md:text-base mt-4 max-w-2xl leading-relaxed">
            {job.description}
          </p>
          <a
            href="#apply"
            className="inline-flex items-center justify-center bg-[#78EB54] hover:bg-[#60d43e] transition-colors text-white text-sm font-medium px-7 py-3 rounded-full mt-6"
          >
            Apply for this role
          </a>
        </div>
      </section>

      {/* ── Job details ── */}
      <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 md:px-16 lg:px-24 md:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-black/40 mb-2">
            Job Description
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mt-2">
            <div>
              <h2
                className="font-bold text-xl md:text-2xl mb-4 text-black"
                style={{ letterSpacing: "-0.02em" }}
              >
                Responsibilities
              </h2>
              <ul className="flex flex-col gap-3">
                {job.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#78EB54] flex-shrink-0" />
                    <span className="text-sm md:text-base text-black/70 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2
                className="font-bold text-xl md:text-2xl mb-4 text-black"
                style={{ letterSpacing: "-0.02em" }}
              >
                Requirements
              </h2>
              <ul className="flex flex-col gap-3">
                {job.requirements.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#78EB54] flex-shrink-0" />
                    <span className="text-sm md:text-base text-black/70 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div id="apply" className="scroll-mt-20" />

      {/* ── Application form ── */}
      <CareerApplyForm role={job.title} hideHeader />

      <Footer />
    </main>
  );
}
