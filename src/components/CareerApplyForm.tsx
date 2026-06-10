"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

type Errors = { name?: string; phone?: string; email?: string; resume?: string };

function CareerApplyFormInner({ role: roleProp, hideHeader }: { role?: string; hideHeader?: boolean }) {
  const searchParams = useSearchParams();
  const role = roleProp || searchParams.get("role") || "";

  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function validate(): Errors {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.phone.trim()) {
      e.phone = "Phone number is required.";
    } else if (!/^[+\d][\d\s\-()]{6,19}$/.test(form.phone.trim())) {
      e.phone = "Enter a valid phone number.";
    }
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      e.email = "Enter a valid email address.";
    }
    if (!resume) e.resume = "Please attach your resume.";
    return e;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleResumeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setResume(e.target.files?.[0] ?? null);
    if (errors.resume) setErrors((prev) => ({ ...prev, resume: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");

    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("phone", form.phone);
      data.append("email", form.email);
      data.append("message", form.message);
      data.append("role", role);
      if (resume) data.append("resume", resume);

      const res = await fetch("/api/careers/apply", {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ name: "", phone: "", email: "", message: "" });
      setResume(null);
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* ── Header banner ── */}
      {!hideHeader && (
      <section className="relative w-full overflow-hidden bg-black px-6 py-16 md:px-16 lg:px-24 md:py-24">
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
          <p className="text-white/50 text-[10px] md:text-xs uppercase tracking-[0.2em] mb-3">
            Careers
          </p>
          <h1
            className="text-white font-bold text-3xl md:text-5xl leading-[1.15] max-w-2xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Apply for a position
          </h1>
          {role && (
            <p className="text-white/70 text-sm md:text-base mt-3">
              You&apos;re applying for{" "}
              <span className="text-[#78EB54] font-semibold">{role}</span>
            </p>
          )}
        </div>
      </section>
      )}

      {/* ── Form section ── */}
      <section className={`px-6 ${hideHeader ? "pb-14 md:pb-20" : "py-14 md:py-20"} md:px-16 lg:px-24`}>
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-0 bg-white rounded-3xl overflow-hidden shadow-sm border border-black/5">

          {/* Info side panel */}
          <div className="lg:col-span-2 bg-black px-8 py-10 md:px-10 md:py-12 flex flex-col justify-between">
            <div>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-3">
                Application Form
              </p>
              <h2 className="text-white font-bold text-2xl md:text-3xl mb-4" style={{ letterSpacing: "-0.02em" }}>
                Let&apos;s get to know you
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Fill out the form and attach your resume. Our team reviews every
                application and will get back to you if there&apos;s a match.
              </p>
              <ul className="flex flex-col gap-3">
                {["Tell us about your experience", "Attach your resume (PDF or Word)", "We'll reach out within a few days"].map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#78EB54] text-black text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-white/80 text-sm leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-white/70 font-medium text-xs mt-10">
              Questions? Email us at{" "}
              <a href="mailto:info@rohatech.com.pk" className="text-[#78EB54] hover:underline">
                info@rohatech.com.pk
              </a>
            </p>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 px-6 py-10 md:px-10 md:py-12">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {role && <input type="hidden" name="role" value={role} />}

        <div>
          <label className="block text-xs font-medium mb-1.5 text-black">Your Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full bg-[#F3F4F6] rounded-xl px-4 py-4 text-base outline-none border transition-colors text-black"
            style={{ borderColor: errors.name ? "#ef4444" : "transparent" }}
          />
          {errors.name && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs font-medium mb-1.5 text-black">Phone Number</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full bg-[#F3F4F6] rounded-xl px-4 py-4 text-base outline-none border transition-colors text-black"
            style={{ borderColor: errors.phone ? "#ef4444" : "transparent" }}
          />
          {errors.phone && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-xs font-medium mb-1.5 text-black">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full bg-[#F3F4F6] rounded-xl px-4 py-4 text-base outline-none border transition-colors text-black"
            style={{ borderColor: errors.email ? "#ef4444" : "transparent" }}
          />
          {errors.email && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs font-medium mb-1.5 text-black">Cover Message (optional)</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us why you'd be a great fit"
            className="w-full bg-[#F3F4F6] rounded-xl px-4 py-4 text-base font-sans outline-none border transition-colors resize-none text-black"
            style={{ fontFamily: "inherit" }}
          />
        </div>

        <div>
          <label className="block text-xs font-medium mb-1.5 text-black">Resume / CV</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeChange}
            className="w-full bg-[#F3F4F6] rounded-xl px-4 py-4 text-sm outline-none border transition-colors text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-black file:text-white file:text-sm file:font-medium file:cursor-pointer"
            style={{ borderColor: errors.resume ? "#ef4444" : "transparent" }}
          />
          {errors.resume && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.resume}</p>}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-[#78EB54] hover:bg-[#60d43e] text-white rounded-full py-4 text-sm font-medium transition-colors disabled:opacity-60"
        >
          {status === "sending" ? "Submitting..." : "Submit Application"}
        </button>
        {status === "success" && (
          <p className="text-sm text-center text-green-600">
            Thanks! Your application has been submitted.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-center text-red-600">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default function CareerApplyForm({ role, hideHeader }: { role?: string; hideHeader?: boolean }) {
  return (
    <Suspense fallback={null}>
      <CareerApplyFormInner role={role} hideHeader={hideHeader} />
    </Suspense>
  );
}
