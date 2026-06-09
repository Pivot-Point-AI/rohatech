import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicesContent from "@/components/ServicesContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Delivering scalable digital solutions designed to empower businesses, optimize operations, and drive sustainable growth.",
  keywords: [
    "IT services",
    "network infrastructure",
    "cloud services",
    "cybersecurity",
    "digital transformation",
  ],
  alternates: { canonical: "https://rohatech.com/services" },
  openGraph: {
    title: "Services — RohaTech",
    description:
      "Delivering scalable digital solutions designed to empower businesses, optimize operations, and drive sustainable growth.",
    url: "https://rohatech.com/services",
  },
  twitter: {
    title: "Services — RohaTech",
    description:
      "Delivering scalable digital solutions designed to empower businesses, optimize operations, and drive sustainable growth.",
  },
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col w-full gap-0 pt-20 lg:pt-0">
      <Navbar theme="light" />
      <ServicesContent />
      <Footer />
    </main>
  );
}
