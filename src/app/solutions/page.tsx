import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SolutionsSection from "@/components/SolutionsSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore RohaTech's real-world digital solutions across fintech, healthcare, e-commerce and more.",
  keywords: [
    "fintech solutions",
    "healthcare IT",
    "e-commerce technology",
    "digital solutions",
    "RohaTech",
  ],
  alternates: { canonical: "https://rohatech.com/solutions" },
  openGraph: {
    title: "Solutions — RohaTech",
    description:
      "Explore RohaTech's real-world digital solutions across fintech, healthcare, e-commerce and more.",
    url: "https://rohatech.com/solutions",
  },
  twitter: {
    title: "Solutions — RohaTech",
    description:
      "Explore RohaTech's real-world digital solutions across fintech, healthcare, e-commerce and more.",
  },
};

export default function SolutionsPage() {
  return (
    <main className="flex flex-col w-full pt-20 lg:pt-0">
      <Navbar theme="light" />
      <SolutionsSection />
      <br></br>
      <Footer />
    </main>
  );
}
