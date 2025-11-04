import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services | Monica Denais",
  description: "Explore our comprehensive mental health counselling services including individual, family, children, and teen therapy.",
};

export default function Services() {
  const services = [
    {
      title: "Individual Counselling",
      description: "One-on-one therapy sessions tailored to your specific needs and goals.",
    },
    {
      title: "Children & Teen Therapy",
      description: "Specialized counselling services designed for younger clients, addressing issues unique to their age group.",
    },
    {
      title: "Family Counselling",
      description: "Family-focused therapy sessions to improve communication, resolve conflicts, and strengthen relationships.",
    },
    {
      title: "Couples Therapy",
      description: "Support for couples seeking to improve their relationship and work through challenges together.",
    },
    {
      title: "Virtual Counselling",
      description: "Convenient online therapy sessions from the comfort of your home.",
    },
    {
      title: "In-Person Sessions",
      description: "Face-to-face counselling at our comfortable Toronto office location.",
    },
  ];

  return (
    <>
      {/* New Hero Section */}
      <section className="bg-white px-4 py-8 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-6 leading-tight">
            Therapy for the women who carry everything.
          </h1>
          <div className="space-y-6 text-lg md:text-xl text-secondary leading-relaxed">
            <p>
              You've always been the strong one, the responsible one, the person everyone turns to. But when you're used to holding it all together, it's easy to lose sight of your own needs.
            </p>
            <p>
              I help first gen ambitious women and eldest daughters navigate the emotional weight of responsibility, perfectionism, and cultural expectations. Using CBT, ACT, and solution-focused therapy, we work together to untangle the stress, overthinking, and silent pressure you've been carrying for years.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section - What We Specialize In */}
      <section className="bg-beige px-4 py-8 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - content */}
            <div className="space-y-6">
              <h3 className="text-sm font-sans text-primary uppercase tracking-wide">
                We offer a range of counselling services
              </h3>
              <h2 className="text-4xl md:text-5xl font-serif text-primary">
                What We Specialize In
              </h2>
              <p className="text-lg text-secondary leading-relaxed">
                I help first gen ambitious women and eldest daughters navigate the emotional weight of responsibility, perfectionism, and cultural expectations. Using CBT, ACT, and solution-focused therapy, we work together to untangle the stress, overthinking, and silent pressure you've been carrying for years.
              </p>
              
              <div>
                <p className="text-lg font-medium text-secondary mb-4">
                  <strong>I specialize in supporting women who experience:</strong>
                </p>
                <ul className="space-y-2 text-lg text-secondary leading-relaxed list-disc">
                  <li>Anxiety, overthinking, and constant worry</li>
                  <li>OCD and intrusive thoughts that feel impossible to shut off</li>
                  <li>Burnout from work, caregiving, school, or responsibilities at home</li>
                  <li>Perfectionism and the fear of disappointing others</li>
                  <li>Family conflict or feeling "stuck in the middle"</li>
                  <li>The pressure of being the first to do everything (first-gen stress)</li>
                  <li>Trouble setting boundaries or saying "no" without guilt</li>
                  <li>Emotional exhaustion from always being the reliable one</li>
                  <li>Self-doubt, low self-esteem, or never feeling "good enough"</li>
                  <li>Life transitions and identity changes</li>
                </ul>
              </div>

              {/* <p className="text-lg text-secondary leading-relaxed">
                <strong>Therapy doesn't have to be heavy or intimidating.</strong> Together, we create a space where you can talk freely, process what's weighing on you, and learn practical tools to feel less overwhelmed and more in control.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <span className="px-4 py-2 bg-sage text-white rounded-full text-sm">✅ CBT</span>
                <span className="px-4 py-2 bg-sage text-white rounded-full text-sm">✅ ACT</span>
                <span className="px-4 py-2 bg-sage text-white rounded-full text-sm">✅ Solution-Focused Therapy</span>
                <span className="px-4 py-2 bg-sage text-white rounded-full text-sm">✅ Virtual Sessions in English & Spanish</span>
              </div> */}

              <a
                href="https://monica-denais.clientsecure.me/contact-widget"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-sage text-white hover:brightness-90 transition-colors rounded-full mt-6"
              >
                Book a session
              </a>
            </div>

            {/* Right side - image */}
            <div className="hidden md:block relative rounded-lg overflow-hidden">
              <Image
                src="/services-1.JPG"
                alt="Monica Denais, Licensed Professional Counselor"
                width={600}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Therapy for Anxiety Section */}
      <section className="bg-white px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4 text-center">
              Therapy for Anxiety & Overthinking
            </h2>
            <p className="text-xl text-secondary italic text-center mb-8">
              For the women who can't turn their brain off.
            </p>

            <div className="space-y-6 text-lg text-secondary leading-relaxed">
              <p>
                If your mind is always running, replaying conversations, planning for the worst, or worrying about disappointing someone, anxiety can feel like a full-time job.
              </p>
              <p className="font-medium">
                And the hard part?
              </p>
              <p>
                Everyone sees you as capable, strong, dependable so it's easy to hide how overwhelmed you really are.
              </p>
              <p>
                Many of my clients are ambitious women, eldest daughters, or first-generation professionals who carry a lot of responsibility. You may be the one holding things together for everyone else, but quietly falling apart on the inside.
              </p>
              <p className="font-medium text-primary text-xl">
                You don't have to push through it alone anymore.
              </p>
            </div>

            <div className="mt-12 mb-8">
              <h3 className="text-3xl font-serif text-primary mb-6">
                What anxiety can look like
              </h3>
              <ul className="space-y-3 text-lg text-secondary leading-relaxed list-disc">
                <li>Constant overthinking and racing thoughts</li>
                <li>Feeling tense, restless, or on edge</li>
                <li>Trouble relaxing or sleeping because your mind won't shut off</li>
                <li>Second-guessing every decision</li>
                <li>The fear of making a mistake or letting people down</li>
                <li>Being "high-functioning" but emotionally exhausted</li>
                <li>Feeling overwhelmed by family or cultural expectations</li>
              </ul>
              <p className="mt-6 text-lg text-secondary leading-relaxed">
                If this sounds familiar, therapy can help you learn to respond to anxiety instead of getting pulled into it.
              </p>
            </div>

            <div className="border-t border-bark/20 pt-8 mt-12">
              <h3 className="text-3xl font-serif text-primary mb-6">
                How I help
              </h3>
              <p className="text-lg text-secondary leading-relaxed mb-6">
                I integrate <strong>Cognitive Behavioral Therapy (CBT)</strong>, <strong>Acceptance and Commitment Therapy (ACT)</strong>, and <strong>Solution-Focused Therapy</strong> to give you both insight and practical tools.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-serif text-primary mb-3">
                    With CBT, you'll learn:
                  </h4>
                  <ul className="space-y-2 text-lg text-secondary leading-relaxed list-disc">
                    <li>How to challenge anxious thought patterns</li>
                    <li>Why your brain jumps to worst-case scenarios</li>
                    <li>Tools to calm your body and nervous system</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-serif text-primary mb-3">
                    With ACT, you'll learn:
                  </h4>
                  <ul className="space-y-2 text-lg text-secondary leading-relaxed list-disc">
                    <li>How to stop fighting your thoughts and gain control back</li>
                    <li>How to let go of perfectionism and self-criticism</li>
                    <li>How to create space between your thoughts and your identity</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-serif text-primary mb-3">
                    With Solution-Focused strategies, you'll learn:
                  </h4>
                  <ul className="space-y-2 text-lg text-secondary leading-relaxed list-disc">
                    <li>Real-life coping skills you can use immediately</li>
                    <li>Small changes that make a big impact</li>
                    <li>Confidence in your ability to handle whatever comes next</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8 text-lg text-secondary leading-relaxed italic">
                Therapy isn't about "just thinking positive."
              </p>
              <p className="text-lg text-secondary leading-relaxed">
                It's about understanding <em>why</em> your brain reacts the way it does and learning ways to feel calmer, safer, and more grounded.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-3xl font-serif text-primary mb-6">
                What changes when anxiety loosens its grip
              </h3>
              <ul className="space-y-3 text-lg text-secondary leading-relaxed list-disc">
                <li>You make decisions without spiraling</li>
                <li>You stop replaying every conversation</li>
                <li>You can rest without guilt</li>
                <li>You feel more confident setting boundaries</li>
                <li>You can enjoy your life without carrying everyone's expectations</li>
              </ul>
              <p className="mt-6 text-lg font-medium text-primary">
                You don't have to live in your head anymore. There is another way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to feel better - Full Width Section */}
      <section className="bg-sage/10 px-4 py-16 border-t border-sage/20 border-b">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
            Ready to feel better?
          </h2>
          <div className="text-lg text-secondary leading-relaxed">
            {/* <p>
              If anxiety has been running your life, therapy can help you take the power back.
            </p>
            <p>
              You're not "too sensitive," "too dramatic," or "overreacting."
            </p>
            <p className="font-medium">
              Your feelings make sense and they matter.
            </p> */}
            <p className="text-secondary mt-4">
              <strong>Click below to schedule a free 15-minute consult.</strong>
            </p>
            <a
              href="https://monica-denais.clientsecure.me/contact-widget"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-sage text-white hover:brightness-90 transition-colors rounded-full mt-4"
            >
              Book a free consult
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

