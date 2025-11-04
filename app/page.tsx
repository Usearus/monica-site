import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-beige px-4 py-8 lg:py-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-6xl font-serif text-primary leading-tight">
                Therapy for Ambitious Women & First Gens in Texas
                {/* Break Free From Perfectionism & Embrace Confidence */}
              </h1>
              <p className="text-lg text-primary leading-relaxed">
              {/* As a first-gen Latina and eldest daughter, I know what it feels like to hold everything together for everyone else. As a licensed 
              counselor, I help ambitious women break free from perfectionism and create a life they enjoy. */}
                I specialize in CBT and solution-focused therapy for perfectionism, anxiety, OCD, burnout, and family issues. Let's work through the pressure, expectations, and burnout together.
              </p>
              <p className="text-base text-secondary mt-2">
                *Sessions available in English and Spanish
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/services"
                  className="px-8 py-3 bg-sage text-white hover:brightness-90 transition-colors rounded-full"
                >
                  View services
                </Link>
                <a
                  href="https://monica-denais.clientsecure.me/contact-widget"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-bark text-white hover:bg-sage transition-colors rounded-full"
                >
                  Free consultation
                </a>
              </div>
            </div>

            {/* Right side - image */}
            <div className="hidden md:block relative rounded-lg overflow-hidden">
              <Image
                src="/homepage-hero-2.jpg"
                alt="Monica Denais - Licensed Counselor"
                width={600}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Monica Section */}
      <section className="bg-white px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - image */}
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/monica-about.jpg"
                alt="Monica Denais, Licensed Professional Counselor"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Right side - content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif text-primary">
                Meet Monica Denais, Licensed Professional Counselor in Texas
              </h2>
              <p className="text-lg text-secondary leading-relaxed">
                I'm a Licensed Professional Counselor and first-gen Latina who deeply understands the pressure to perform, succeed, and hold everything together on your own.
              </p>
              <p className="text-lg text-secondary leading-relaxed">
                For the past six years, I've specialized in supporting ambitious women, eldest daughters, and first-gens through anxiety, perfectionism, burnout, and self-doubt all through virtual therapy in Texas.
              </p>
              <p className="text-lg text-secondary leading-relaxed">
                My approach is grounded in evidence-based training and real lived experience. I don't just teach coping skills I use them, I study them, and I help clients apply them in practical, meaningful ways.
              </p>
              <p className="text-lg text-secondary leading-relaxed font-medium">
                If you're ready for a space where you don't have to be "the strong one," you're in the right place.
              </p>
              <Link
                href="/about"
                className="inline-block px-8 py-3 bg-sage text-white hover:brightness-90 transition-colors rounded-full"
              >
                Learn more about me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonies Section */}
      <section className="bg-sage px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-primary text-center mb-12">
            Client Testimonies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimony 1 - Placeholder */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4">
                <svg className="w-8 h-8 text-sage" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z"/>
                </svg>
              </div>
              <p className="text-lg text-secondary mb-4 italic leading-relaxed">
                "Testimony from Silvia - coming soon"
              </p>
              <p className="text-sm text-secondary font-medium">- Silvia</p>
            </div>

            {/* Testimony 2 - Placeholder */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4">
                <svg className="w-8 h-8 text-sage" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z"/>
                </svg>
              </div>
              <p className="text-lg text-secondary mb-4 italic leading-relaxed">
                "Testimony from Iz - coming soon"
              </p>
              <p className="text-sm text-secondary font-medium">- Iz</p>
            </div>

            {/* Testimony 3 - Placeholder */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4">
                <svg className="w-8 h-8 text-sage" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z"/>
                </svg>
              </div>
              <p className="text-lg text-secondary mb-4 italic leading-relaxed">
                "Testimony from Nyisha - coming soon"
              </p>
              <p className="text-sm text-secondary font-medium">- Nyisha</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
