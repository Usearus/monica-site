import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

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
