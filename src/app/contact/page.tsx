import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with RohaTech. Reach us via phone, email, or the contact form — we're here to help.",
  alternates: { canonical: "https://rohatech.com/contact" },
  openGraph: {
    title: "Contact Us — RohaTech",
    description:
      "Get in touch with RohaTech. Reach us via phone, email, or the contact form — we're here to help.",
    url: "https://rohatech.com/contact",
  },
  twitter: {
    title: "Contact Us — RohaTech",
    description:
      "Get in touch with RohaTech. Reach us via phone, email, or the contact form — we're here to help.",
  },
};

export default function ContactPage() {
  return (
    <main className="flex flex-col w-full pt-20 lg:pt-0">
      <Navbar theme="light" />
      <ContactSection />
      <Footer />
    </main>
  );
}
