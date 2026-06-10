import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CareersSection from "@/components/CareersSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the RohaTech team. Explore current openings and discover why RohaTech is a great place to grow your career.",
  alternates: { canonical: "https://rohatech.com/careers" },
  openGraph: {
    title: "Careers — RohaTech",
    description:
      "Join the RohaTech team. Explore current openings and discover why RohaTech is a great place to grow your career.",
    url: "https://rohatech.com/careers",
  },
  twitter: {
    title: "Careers — RohaTech",
    description:
      "Join the RohaTech team. Explore current openings and discover why RohaTech is a great place to grow your career.",
  },
};

export default function CareersPage() {
  return (
    <main className="flex flex-col w-full pt-14 lg:pt-0">
      <Navbar theme="dark" />
      <CareersSection />
      <Footer />
    </main>
  );
}
