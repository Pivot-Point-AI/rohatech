import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import AboutWhatWeDo from "@/components/AboutWhatWeDo";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about RohaTech's mission, vision, and the team behind our enterprise technology solutions.",
  alternates: { canonical: "https://rohatech.com/about" },
  openGraph: {
    title: "About Us — RohaTech",
    description:
      "Learn about RohaTech's mission, vision, and the team behind our enterprise technology solutions.",
    url: "https://rohatech.com/about",
  },
  twitter: {
    title: "About Us — RohaTech",
    description:
      "Learn about RohaTech's mission, vision, and the team behind our enterprise technology solutions.",
  },
};

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full">
      <Navbar />
      <AboutHero />
      <AboutWhatWeDo />
      <Footer />
    </main>
  );
}
