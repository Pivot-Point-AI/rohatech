"use client";

import { useState } from "react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <>
    {/* ── MOBILE (< md) ── */}
    <section className="block md:hidden bg-white px-5 py-14">
      <h1 className="text-3xl font-bold text-black mb-2">Contact Us</h1>
      <p className="text-sm text-[#717171] mb-8 leading-relaxed">
        If you have any question, please feel free to get in touch via phone, text, email, the form below, or even on social media!
      </p>

      <form onSubmit={handleSubmit} className="bg-[#F3F4F6] rounded-2xl p-6 mb-5">
        <h2 className="text-xl font-normal text-black mb-5">Get in touch</h2>
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-xs text-black mb-1">Your Name</label>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Enter your name"
              className="w-full bg-white rounded-xl px-4 py-3 text-sm text-[#717171] outline-none border-none" />
          </div>
          <div>
            <label className="block text-xs text-black mb-1">Phone Number</label>
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Enter your phone number"
              className="w-full bg-white rounded-xl px-4 py-3 text-sm text-[#717171] outline-none border-none" />
          </div>
          <div>
            <label className="block text-xs text-black mb-1">Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter your email"
              className="w-full bg-white rounded-xl px-4 py-3 text-sm text-[#717171] outline-none border-none" />
          </div>
          <div>
            <label className="block text-xs text-black mb-1">Your Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows={4}
              className="w-full bg-white rounded-xl px-4 py-3 text-sm text-[#717171] outline-none border-none resize-none" />
          </div>
          <button type="submit" className="bg-black text-white rounded-full py-3 px-8 text-sm font-normal self-start">
            Send Message
          </button>
        </div>
      </form>

      <div className="bg-[#F3F4F6] rounded-2xl p-6 mb-5">
        <h2 className="text-xl font-normal text-black mb-5">Contact Information</h2>
        <div className="flex items-center gap-3 mb-4">
          <svg width="20" height="20" viewBox="0 0 30 30" fill="none">
            <path d="M6 4h5l2 5-2.5 2.5c1.5 3 4 5.5 7 7L20 16l5 2v5c0 1.1-.9 2-2 2C9.4 25 5 10.6 5 6c0-1.1.9-2 2-2h-.1L6 4z" fill="#000"/>
          </svg>
          <span className="text-sm text-black">051-2745817</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <svg width="20" height="20" viewBox="0 0 30 30" fill="none">
            <rect x="2.5" y="5" width="25" height="20" rx="2" fill="#000"/>
            <path d="M2.5 8l12.5 9L27.5 8" stroke="white" strokeWidth="2"/>
          </svg>
          <span className="text-sm text-black">info@rohatech.com.pk</span>
        </div>
        <div className="flex items-start gap-3">
          <svg width="20" height="20" viewBox="0 0 31 31" fill="none" className="flex-shrink-0 mt-0.5">
            <path d="M15.5 2C10.25 2 6 6.25 6 11.5c0 8.25 9.5 17.5 9.5 17.5s9.5-9.25 9.5-17.5C25 6.25 20.75 2 15.5 2zm0 13a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" fill="#000"/>
          </svg>
          <span className="text-sm text-black leading-relaxed">
            Corporate and Business Square, 1st/2nd floor wazir arcade, Park Ave, Block C Gulberg Greens, Islamabad, Islamabad Capital Territory 44000.
          </span>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden h-48">
        <iframe title="RohaTech Location" width="100%" height="100%" className={styles.iframe}
          loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.0!2d73.0698!3d33.6582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbef7c0000001%3A0x1!2sGulberg+Greens%2C+Islamabad!5e0!3m2!1sen!2s!4v1" />
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
        />

        <label className={`absolute text-black ${styles.labelPhone}`}>Phone Number</label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          className={`absolute bg-white outline-none text-black ${styles.inputPhone}`}
        />

        <label className={`absolute text-black ${styles.labelEmail}`}>Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className={`absolute bg-white outline-none text-black ${styles.inputEmail}`}
        />

        <label className={`absolute text-black ${styles.labelMessage}`}>Your Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className={`absolute bg-white outline-none text-black resize-none ${styles.textarea}`}
        />

        <button
          type="submit"
          className={`absolute bg-black text-white flex items-center justify-center hover:bg-black/80 transition-colors ${styles.submitBtn}`}
        >
          Send Message
        </button>

      </form>

      {/* Contact info card */}
      <div className={`absolute ${styles.infoCard}`}>

        <h2 className={`absolute text-black ${styles.infoHeading}`}>
          Contact Information
        </h2>

        <div className={`absolute flex items-center gap-[0.781vw] ${styles.infoPhone}`}>
          <svg className={styles.infoIcon} viewBox="0 0 30 30" fill="none">
            <path d="M6 4h5l2 5-2.5 2.5c1.5 3 4 5.5 7 7L20 16l5 2v5c0 1.1-.9 2-2 2C9.4 25 5 10.6 5 6c0-1.1.9-2 2-2h-.1L6 4z" fill="#000"/>
          </svg>
          <span className={styles.infoText}>051-2745817</span>
        </div>

        <div className={`absolute flex items-center gap-[0.781vw] ${styles.infoEmail}`}>
          <svg className={styles.infoIcon} viewBox="0 0 30 30" fill="none">
            <rect x="2.5" y="5" width="25" height="20" rx="2" fill="#000"/>
            <path d="M2.5 8l12.5 9L27.5 8" stroke="white" strokeWidth="2"/>
          </svg>
          <span className={styles.infoText}>info@rohatech.com.pk</span>
        </div>

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
