import Footer from "@/components/Footer";

export const metadata = {
  title: "About | Monica Denais",
  description: "Licensed counselor helping ambitious women break free from perfectionism and embrace confidence. Solution-focused therapy for lasting change.",
};

export default function About() {
  return (
    <>
      <div className="bg-beige px-4 py-8 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif text-secondary mb-6">About Monica Denais</h1>
          <div className="space-y-6 text-lg text-secondary leading-relaxed">
            <p className="text-xl font-serif">
              As a first-gen Latina and eldest daughter, I know what it feels like to hold everything together for everyone else. As a licensed counselor, I help ambitious women break free from perfectionism and create a life they enjoy.
            </p>
            <h2 className="text-3xl font-serif text-secondary mt-12 mb-4">My Mission</h2>
            <p>
              My mission is to help you embrace confidence and stop questioning yourself. Together, we'll uncover the root of patterns and behaviors that no longer serve you. With my unique, solution-focused approach, we'll work towards realistic, workable solutions that bring about positive change as quickly as possible. I understand the value of your time and aim to minimize the duration of counseling, while maximizing the impact on your life.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

