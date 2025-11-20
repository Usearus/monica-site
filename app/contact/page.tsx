import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | Monica Denais",
  description: "Get in touch with us to book a session or learn more about our mental health services.",
  alternates: {
    canonical: "https://monicadenais.com/contact",
  },
};

export default function Contact() {
  return (
    <>
      <div className="bg-beige px-4 py-8 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif text-secondary mb-12">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-secondary">Get in Touch</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-serif text-secondary mb-2">Address</h3>
                  <p className="text-lg text-secondary">Plano, TX</p>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-secondary mb-2">Phone</h3>
                  <p className="text-lg text-secondary">(416) 555-0123</p>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-secondary mb-2">Email</h3>
                  <p className="text-lg text-secondary">info@monicadenais.com</p>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-secondary mb-2">Hours</h3>
                  <p className="text-lg text-secondary">
                    Monday - Friday: 9:00 AM - 7:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-bark/10">
              <h2 className="text-3xl font-serif text-secondary mb-6">Book a Session</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-secondary mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-bark/20 rounded-full focus:outline-none focus:border-sage" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-secondary mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-bark/20 rounded-full focus:outline-none focus:border-sage" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-secondary mb-2">Phone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-2 border border-bark/20 rounded-full focus:outline-none focus:border-sage" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-secondary mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-bark/20 rounded-full focus:outline-none focus:border-sage"></textarea>
                </div>
                <button type="submit" className="w-full px-8 py-3 bg-sage text-primary-inverse hover:brightness-90 transition-colors rounded-full">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

