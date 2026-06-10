import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CareerApplyForm from "@/components/CareerApplyForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Apply Now",
  description: "Apply for a position at RohaTech.",
  alternates: { canonical: "https://rohatech.com/careers/apply" },
};

export default function CareerApplyPage() {
  return (
    <main className="flex flex-col w-full pt-14 lg:pt-0">
      <Navbar theme="dark" />
      <CareerApplyForm />
      <Footer />
    </main>
  );
}
