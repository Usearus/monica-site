import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    default: "Monica Denais - Licensed Counselor",
    template: "%s | Monica Denais"
  },
  description: "Licensed counselor in Dallas / Fort Worth, TX helping ambitious women break free from perfectionism and embrace confidence. Solution-focused therapy for lasting change.",
  keywords: ["therapy McKinney TX", "counselor McKinney Texas", "perfectionism therapy", "women's counseling", "solution-focused therapy", "confidence counseling", "mental health Plano", "North Texas counseling", "anxiety therapist McKinney", "anxiety counseling McKinney" ],
  authors: [{ name: "Monica Denais" }],
  creator: "Monica Denais",
  alternates: {
    canonical: "https://monicadenais.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://monicadenais.com",
    siteName: "Monica Denais Counseling",
    title: "Break Free From Perfectionism | Monica Denais",
    description: "Licensed counselor in Dallas / Fort Worth, TX helping ambitious women break free from perfectionism and embrace confidence.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monica Denais - Licensed Counselor",
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
    </html>
  );
}
