import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 1. Import your Header and Footer components
//    (Adjust the path if your components are located elsewhere)
import Header from "./components/Header/page";
import Footer from "./components/Footer/page";
import FixedWhatsappButton from "./components/FixedWhatsappButton/page";
import ScrollToTopButton from "./components/ScrollToTopButton/page";
import StyledComponentsRegistry from "./lib/registry";
import { ScrollProvider } from "@/context/ScrollContext";
// import Loginform from "./LoginPage/page"; // This component is not used in the layout

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Ensures font is always displayed
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Ensures font is always displayed
});

// 2. Update the metadata with your site's comprehensive SEO information
export const metadata = {
  // Primary SEO Information
  title: {
    default: "Deepan India Financial Services - Your Partner in Wealth Growth",
    template: "%s | Deepan India",
  },
  description:
    "Deepan India offers comprehensive financial services including mutual funds, retirement planning, algo trading, wealth management, and financial education. Grow and secure your wealth with expert guidance.",
  keywords: [
    "Deepan India",
    "Financial Services",
    "Mutual Funds",
    "Retirement Planning",
    "Algo Trading",
    "Wealth Management",
    "Financial Education",
    "Investment Solutions",
    "SIP Calculator",
    "Lumpsum Calculator",
    "SWP Calculator",
    "Chennai Financial Advisor",
    "India Investments",
  ],
  authors: [{ name: "Deepan India Financial Services" }],
  creator: "Deepan India Financial Services",
  publisher: "Deepan India Financial Services",

  openGraph: {
    title: "Deepan India Financial Services - Grow Your Wealth Smartly",
    description:
      "Deepan India offers comprehensive financial solutions: mutual funds, retirement planning, algo trading, wealth management, and financial education.",
    url: "https://www.deepanindia.com",
    siteName: "Deepan India Financial Services",
    images: [
      {
        url: "https://www.deepanindia.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Deepan India Financial Services - Building Wealth",
      },
      {
        url: "https://www.deepanindia.com/og-image-alt.jpg",
        width: 800,
        height: 600,
        alt: "Deepan India Financial Services - Financial Planning",
      },
    ],
    locale: "en_IN", // Indian English locale
    type: "website",
  },

  // Twitter Card (for sharing on Twitter)
  twitter: {
    card: "summary_large_image", // Recommended for rich previews
    site: "@deepanindia", // Your Twitter handle
    creator: "@deepanindia", // Your Twitter handle
    title: "Deepan India Financial Services - Expert Investment Solutions",
    description:
      "Secure your financial future with Deepan India. Explore mutual funds, algo trading, retirement planning, and wealth management services.",
    images: ["https://www.deepanindia.com/twitter-image.jpg"], // Replace with your actual Twitter image URL (at least 800x418px)
  },

  // Favicons and Icons
  icons: {
    icon: "/favicon.ico", // Path to your favicon.ico
    shortcut: "/shortcut-icon.png", // Path to a shortcut icon (e.g., for mobile)
    apple: "/apple-touch-icon.png", // Path to Apple touch icon
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },

  // Robots meta tag to guide search engine crawlers
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow following links
    nocache: false, // Don't cache page
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false, // Allow images to be indexed
      "max-video-preview": -1, // Allow full video previews
      "max-image-preview": "large", // Allow large image previews
      "max-snippet": -1, // Allow full text snippets
    },
  },

  // Canonical URL (helps prevent duplicate content issues)
  alternates: {
    canonical: "https://www.deepanindia.com", // Replace with your actual canonical URL
  },
};

// 3. Add the Header and Footer to the RootLayout
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ScrollProvider>
          <Header />
          {/* The <main> tag wraps your page-specific content */}

          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>

          <FixedWhatsappButton />
          <ScrollToTopButton />
          {/* Footer will appear at the bottom of every page */}
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
