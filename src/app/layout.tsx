import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Triumph Painters | Professional Painters in Miami & South Florida",
  description: "Discover why Triumph Painters is the premier choice for your commercial and residential painting projects in Miami, Fort Lauderdale, and throughout South Florida. Licensed, insured, and experienced.",
  keywords: "painters Miami, painting contractors Florida, residential painting Miami, commercial painting South Florida, house painters Miami-Dade, interior painting Fort Lauderdale, exterior painting Broward",
  authors: [{ name: "Triumph Painters" }],
  creator: "Triumph Painters",
  publisher: "Triumph Painters",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://triumphpainters.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Triumph Painters | Professional Painters in Miami & South Florida",
    description: "Premier painting contractors serving Miami, Fort Lauderdale, and all of South Florida. Residential & commercial painting experts with 12+ years of experience.",
    url: "https://triumphpainters.com",
    siteName: "Triumph Painters",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Triumph Painters - Professional Painting Services in Miami",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triumph Painters | Professional Painters in Miami & South Florida",
    description: "Premier painting contractors serving Miami, Fort Lauderdale, and all of South Florida. Licensed, insured, and experienced.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>


        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Triumph Painters",
              "image": "https://triumphpainters.com/og-image.jpg",
              "description": "Professional painting contractors serving Miami, Fort Lauderdale, and South Florida. Residential and commercial painting services.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1450 Brickell Bay Dr",
                "addressLocality": "Miami",
                "addressRegion": "FL",
                "postalCode": "33131",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.7617,
                "longitude": -80.1918
              },
              "url": "https://triumphpainters.com",
              "telephone": "+1-305-555-0123",
              "email": "info@triumphpainters.com",
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "16:00"
                }
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 25.7617,
                  "longitude": -80.1918
                },
                "geoRadius": "100000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Painting Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Residential Painting"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Painting"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Industrial Painting"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Epoxy Flooring"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  );
}
