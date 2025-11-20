import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Monica Denais North Texas Counseling Services for Anxiety",
    template: "%s | Monica Denais"
  },
  description: "Licensed counselor in Dallas / Fort Worth, TX helping ambitious women break free from perfectionism and embrace confidence. Solution-focused therapy for lasting change.",
  keywords: ["therapy McKinney TX", "counselor McKinney Texas", "perfectionism therapy", "women's counseling", "solution-focused therapy", "confidence counseling", "mental health Plano", "North Texas counseling", "anxiety therapist McKinney", "anxiety counseling McKinney", "anxiety counseling Dallas", "anxiety counseling Fort Worth", "anxiety counseling Plano", "anxiety counseling McKinney", "anxiety counseling Dallas", "anxiety counseling Fort Worth", "anxiety counseling Plano", "North Texas anxiety counseling", "North Texas therapist", "North Texas counseling services", "North Texas counseling services for anxiety", "North Texas counseling services for perfectionism", "North Texas counseling services for confidence", "North Texas counseling services for women's counseling", "North Texas counseling services for solution-focused therapy", "North Texas counseling services for mental health", "North Texas counselor"],
  authors: [{ name: "Monica Denais" }],
  creator: "Monica Denais",
  alternates: {
    canonical: "https://monicadenais.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://monicadenais.com",
    siteName: "Monica Denais North Texas Counseling Services for Anxiety",
    title: "Break Free From Perfectionism | Monica Denais",
    description: "Licensed counselor in Dallas / Fort Worth, TX helping ambitious women break free from perfectionism and embrace confidence.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monica Denais North Texas Counseling Services for Anxiety",
    description: "Help for ambitious women dealing with perfectionism. Solution-focused therapy in Dallas / Fort Worth, TX.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Psychologist',
    name: 'Monica Denais',
    description: 'Licensed counselor helping ambitious women break free from perfectionism',
    url: 'https://monicadenais.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Plano',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    serviceType: 'Counseling, Psychotherapy, Solution-Focused Therapy',
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
