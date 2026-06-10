"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ContactSection.module.css";

type Errors = { name?: string; phone?: string; email?: string; message?: string };

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
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
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof Errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
    {/* ── MOBILE (< md) ── */}
    <section className="block md:hidden bg-white">

      {/* Hero header */}
      <div className="relative overflow-hidden px-6 pt-16 pb-12 rounded-b-3xl">
        <Image src="/images/about-hero-bg.webp" alt="" fill sizes="100vw" className="object-cover object-center" priority aria-hidden="true" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10">
        <div className="w-8 h-[3px] bg-[#78EB54] rounded-full mb-4" />
        <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] mb-3">Get In Touch</p>
        <h1 className="text-white font-bold text-[34px] leading-[1.15] mb-3" style={{ letterSpacing: "-0.02em" }}>
          Contact Us
        </h1>
        <p className="text-white text-sm leading-relaxed max-w-[90%]">
          Reach us via phone, email, or the form below — we&apos;re here to help.
        </p>

        {/* Quick contact chips */}
        <div className="flex flex-col gap-3 mt-6">
          <a href="tel:0512745817" className="flex items-center gap-3 bg-white/8 border border-white/10 rounded-2xl px-4 py-3">
            <div className="w-9 h-9 bg-[#78EB54] rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.29 21 3 13.71 3 4.5c0-.55.45-1 1-1H7.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.58.11.35.03.74-.24 1.01L6.6 10.8z" fill="white"/>
              </svg>
            </div>
            <div>
              <p className="text-white/50 text-[10px] uppercase tracking-wide">Phone</p>
              <p className="text-white text-sm font-medium">051-2745817</p>
            </div>
          </a>
          <a href="mailto:info@rohatech.com.pk" className="flex items-center gap-3 bg-white/8 border border-white/10 rounded-2xl px-4 py-3">
            <div className="w-9 h-9 bg-[#78EB54] rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 30 30" fill="none">
                <rect x="2.5" y="5" width="25" height="20" rx="2" fill="white"/>
                <path d="M2.5 8l12.5 9L27.5 8" stroke="#78EB54" strokeWidth="2.5"/>
              </svg>
            </div>
            <div>
              <p className="text-white/50 text-[10px] uppercase tracking-wide">Email</p>
              <p className="text-white text-sm font-medium">info@rohatech.com.pk</p>
            </div>
          </a>
          <div className="flex items-center gap-3 bg-white/8 border border-white/10 rounded-2xl px-4 py-3">
            <div className="w-9 h-9 bg-[#78EB54] rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 31 31" fill="none">
                <path d="M15.5 2C10.25 2 6 6.25 6 11.5c0 8.25 9.5 17.5 9.5 17.5s9.5-9.25 9.5-17.5C25 6.25 20.75 2 15.5 2zm0 13a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" fill="white"/>
              </svg>
            </div>
            <div>
              <p className="text-white/50 text-[10px] uppercase tracking-wide mb-1">Address</p>
              <p className="text-white text-sm leading-relaxed">Corporate and Business Square, 1st/2nd floor wazir arcade, Park Ave, Block C Gulberg Greens, Islamabad, Islamabad Capital Territory 44000.</p>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Form */}
      <div className="px-5 py-8">
        <p className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-2">Send a Message</p>
        <h2 className="text-2xl font-bold mb-6" style={{ color: "#000000" }}>Get in touch</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-medium mb-1.5" style={{ color: "#000000" }}>Your Name</label>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Enter your name"
              className="w-full bg-[#F3F4F6] rounded-xl px-4 py-4 text-lg outline-none border transition-colors"
              style={{ color: "#000000", borderColor: errors.name ? "#ef4444" : "transparent" }} />
            {errors.name && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.name}</p>}
          </div>
          <div>
            <label className="block text-xs font-medium mb-1.5" style={{ color: "#000000" }}>Phone Number</label>
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Enter your phone number"
              className="w-full bg-[#F3F4F6] rounded-xl px-4 py-4 text-lg outline-none border transition-colors"
              style={{ color: "#000000", borderColor: errors.phone ? "#ef4444" : "transparent" }} />
            {errors.phone && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-xs font-medium mb-1.5" style={{ color: "#000000" }}>Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter your email"
              className="w-full bg-[#F3F4F6] rounded-xl px-4 py-4 text-lg outline-none border transition-colors"
              style={{ color: "#000000", borderColor: errors.email ? "#ef4444" : "transparent" }} />
            {errors.email && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.email}</p>}
          </div>
          <div>
            <label className="block text-xs font-medium mb-1.5" style={{ color: "#000000" }}>Your Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows={4}
              className="w-full bg-[#F3F4F6] rounded-xl px-4 py-4 text-lg font-sans outline-none border transition-colors resize-none"
              style={{ color: "#000000", fontFamily: "inherit", borderColor: errors.message ? "#ef4444" : "transparent" }} />
            {errors.message && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.message}</p>}
          </div>
          <button type="submit" disabled={status === "sending"}
            className="w-full bg-black text-white rounded-full py-4 text-sm font-medium hover:bg-black/80 transition-colors disabled:opacity-60">
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && <p className="text-sm text-center text-green-600">Thanks! Your message has been sent.</p>}
          {status === "error" && <p className="text-sm text-center text-red-600">Something went wrong. Please try again.</p>}
        </form>
      </div>

      {/* Map */}
      <div className="px-5 pb-10">
        <div className="rounded-2xl overflow-hidden h-56 border border-black/8">
          <iframe title="RohaTech Location" width="100%" height="100%" className={styles.iframe}
            loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.0!2d73.0698!3d33.6582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbef7c0000001%3A0x1!2sGulberg+Greens%2C+Islamabad!5e0!3m2!1sen!2s!4v1" />
        </div>
      </div>

    </section>

    {/* ── DESKTOP (md+) ── */}
    <section className={`hidden md:block relative w-full bg-white overflow-hidden ${styles.desktopSection}`}>

      <h1 className={`absolute text-black ${styles.heading}`}>
        Contact Us
      </h1>

      <p className={`absolute ${styles.subtitle}`}>
        If you have any question, please feel free to get in touch via phone, text, email, the form below, or even on social media!
      </p>

      {/* Form card */}
      <form onSubmit={handleSubmit} className={`absolute ${styles.formCard}`}>

        <h2 className={`absolute text-black ${styles.formHeading}`}>
          Get in touch
        </h2>

        <label className={`absolute text-black ${styles.labelName}`}>Your Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className={`absolute bg-white outline-none text-black ${styles.inputName}`}
          style={errors.name ? { border: "1px solid #ef4444", borderRadius: "8px" } : {}}
        />
        {errors.name && <p className={`absolute text-xs ${styles.errorName}`} style={{ color: "#ef4444" }}>{errors.name}</p>}

        <label className={`absolute text-black ${styles.labelPhone}`}>Phone Number</label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          className={`absolute bg-white outline-none text-black ${styles.inputPhone}`}
          style={errors.phone ? { border: "1px solid #ef4444", borderRadius: "8px" } : {}}
        />
        {errors.phone && <p className={`absolute text-xs ${styles.errorPhone}`} style={{ color: "#ef4444" }}>{errors.phone}</p>}

        <label className={`absolute text-black ${styles.labelEmail}`}>Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className={`absolute bg-white outline-none text-black ${styles.inputEmail}`}
          style={errors.email ? { border: "1px solid #ef4444", borderRadius: "8px" } : {}}
        />
        {errors.email && <p className={`absolute text-xs ${styles.errorEmail}`} style={{ color: "#ef4444" }}>{errors.email}</p>}

        <label className={`absolute text-black ${styles.labelMessage}`}>Your Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className={`absolute bg-white outline-none text-black resize-none ${styles.textarea}`}
          style={errors.message ? { border: "1px solid #ef4444", borderRadius: "8px" } : {}}
        />
        {errors.message && <p className={`absolute text-xs ${styles.errorMessage}`} style={{ color: "#ef4444" }}>{errors.message}</p>}

        <button
          type="submit"
          disabled={status === "sending"}
          className={`absolute bg-black text-white flex items-center justify-center hover:bg-black/80 transition-colors disabled:opacity-60 ${styles.submitBtn}`}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className={`absolute text-green-600 ${styles.statusMsg}`}>
            Thanks! Your message has been sent.
          </p>
        )}
        {status === "error" && (
          <p className={`absolute text-red-600 ${styles.statusMsg}`}>
            Something went wrong. Please try again.
          </p>
        )}

      </form>

      {/* Contact info card */}
      <div className={`absolute ${styles.infoCard}`}>

        <h2 className={`absolute text-black ${styles.infoHeading}`}>
          Contact Information
        </h2>

        <a href="tel:0512745817" className={`absolute flex items-center gap-[0.781vw] ${styles.infoPhone}`}>
          <svg className={styles.infoIcon} viewBox="0 0 24 24" fill="none">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.29 21 3 13.71 3 4.5c0-.55.45-1 1-1H7.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.58.11.35.03.74-.24 1.01L6.6 10.8z" fill="#000"/>
            <path d="M15.5 5.5a5 5 0 012.83 4.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M17.5 2.5a9 9 0 014.5 7.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className={styles.infoText}>051-2745817</span>
        </a>

        <a href="mailto:info@rohatech.com.pk" className={`absolute flex items-center gap-[0.781vw] ${styles.infoEmail}`}>
          <svg className={styles.infoIcon} viewBox="0 0 30 30" fill="none">
            <rect x="2.5" y="5" width="25" height="20" rx="2" fill="#000"/>
            <path d="M2.5 8l12.5 9L27.5 8" stroke="white" strokeWidth="2"/>
          </svg>
          <span className={styles.infoText}>info@rohatech.com.pk</span>
        </a>

        <div className={`absolute flex items-start gap-[0.781vw] ${styles.infoAddress}`}>
          <svg className={styles.infoIconLg} viewBox="0 0 31 31" fill="none">
            <path d="M15.5 2C10.25 2 6 6.25 6 11.5c0 8.25 9.5 17.5 9.5 17.5s9.5-9.25 9.5-17.5C25 6.25 20.75 2 15.5 2zm0 13a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" fill="#000"/>
          </svg>
          <span className={styles.infoTextAddress}>
            Corporate and Business Square, 1st/2nd floor wazir arcade, Park Ave, Block C Gulberg Greens, Islamabad, Islamabad Capital Territory 44000.
          </span>
        </div>

      </div>

      {/* Map card */}
      <div className={`absolute overflow-hidden ${styles.mapCard}`}>
        <iframe
          title="RohaTech Location"
          width="100%"
          height="100%"
          className={styles.iframe}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.0!2d73.0698!3d33.6582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbef7c0000001%3A0x1!2sGulberg+Greens%2C+Islamabad!5e0!3m2!1sen!2s!4v1"
        />
      </div>

    </section>
    </>
  );
}
