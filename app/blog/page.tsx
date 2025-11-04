import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog | Monica Denais",
  description: "Read our latest articles and insights on mental health and counselling.",
};

export default function Blog() {
  const posts = [
    {
      slug: "eldest-daughter-syndrome",
      title: "Eldest Daughter Syndrome",
      date: "January 15, 2025",
      excerpt: "Understanding the unique pressures faced by first-born daughters and how to break free from perfectionism and people-pleasing tendencies.",
    },
    {
      slug: "understanding-teen-mental-health",
      title: "Understanding Teen Mental Health",
      date: "December 15, 2024",
      excerpt: "Learn about common mental health challenges facing teenagers today and how to support them.",
    },
    {
      slug: "benefits-of-family-therapy",
      title: "The Benefits of Family Therapy",
      date: "December 10, 2024",
      excerpt: "Discover how family counselling can strengthen relationships and improve communication.",
    },
    {
      slug: "managing-holiday-stress",
      title: "Managing Holiday Stress",
      date: "December 5, 2024",
      excerpt: "Tips and strategies for coping with stress during the holiday season.",
    },
  ];

  return (
    <>
      <div className="bg-beige px-4 py-8 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif text-primary mb-12">Blog</h1>
          <div>
            {posts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`} className="block mb-4 last:mb-0">
                <article className="bg-white p-8 rounded-lg shadow-sm border border-olivewood/10 hover:shadow-md transition-shadow cursor-pointer">
                  <p className="text-sm text-sage mb-2">{post.date}</p>
                  <h2 className="text-3xl font-serif text-primary mb-4">{post.title}</h2>
                  <p className="text-lg text-primary leading-relaxed">{post.excerpt}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

