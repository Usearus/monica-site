import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | Monica Denais",
  description: "Frequently asked questions about therapy services, scheduling, and what to expect.",
  alternates: {
    canonical: "https://monicadenais.com/faqs",
  },
};

export default function FAQs() {
  return (
    <>
      <div className="bg-beige px-4 py-8 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif text-primary mb-12">Frequently asked questions</h1>
          <FAQ />
        </div>
      </div>
      <Footer />
    </>
  );
}
