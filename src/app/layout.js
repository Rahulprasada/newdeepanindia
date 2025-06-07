import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. Import your Header and Footer components
//    (Adjust the path if your components are located elsewhere)
import Header from './components/Header/page';
import Footer from './components/Footer/page';
import FixedWhatsappButton from "./components/FixedWhatsappButton/page";
import ScrollToTopButton from "./components/ScrollToTopButton/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Update the metadata with your site's information
export const metadata = {
  title: "Deepan India",
  description: "Deepan India Financial Services",
  icons: {
    icon: "/favicon.ico", // Make sure favicon.ico is in your app/ or public/ folder
  },
};

// 3. Add the Header and Footer to the RootLayout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header will appear at the top of every page */}
        <Header />

        {/* The <main> tag wraps your page-specific content */}
        <main>
          {children}
        </main>
        <FixedWhatsappButton />
        <ScrollToTopButton /> 
        {/* Footer will appear at the bottom of every page */}
        <Footer />
      </body>
    </html>
  );
}