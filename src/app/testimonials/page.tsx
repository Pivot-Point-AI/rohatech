import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "See what our clients say about RohaTech's technology solutions. Real results, real businesses.",
  alternates: { canonical: "https://rohatech.com/testimonials" },
  openGraph: {
    title: "Testimonials — RohaTech",
    description:
      "See what our clients say about RohaTech's technology solutions. Real results, real businesses.",
    url: "https://rohatech.com/testimonials",
  },
  twitter: {
    title: "Testimonials — RohaTech",
    description:
      "See what our clients say about RohaTech's technology solutions. Real results, real businesses.",
  },
};

export default function TestimonialsPage() {
  return (
    <main className="flex flex-col w-full pt-20 lg:pt-0">
      <Navbar theme="light" />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
