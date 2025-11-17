import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import CheckmarkCircledIcon from "@/components/CheckmarkCircledIcon";

export const metadata = {
  title: "Contact Confirmation | Monica Denais",
  description: "Thank you for contacting us. We'll be in touch soon.",
};

export default function Confirmation() {
  return (
    <>
      <div className="bg-beige px-4 py-8 lg:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Success Message Section */}
          <div className="mb-16">
            <div className="mb-6">
              <CheckmarkCircledIcon className="w-12 h-12 text-sage" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-primary mb-6">
              Thanks for reaching out!
            </h1>
            <p className="text-2xl text-secondary leading-relaxed">
              I received your message and will get back to you as soon as possible.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="mt-24">
            <h2 className="text-2xl md:text-4xl font-serif text-primary mb-12">Frequently asked questions</h2>
            <FAQ />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

