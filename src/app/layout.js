import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Mark Asogwa - Fullstack Developer",
  description:
    "Fullstack developer building scalable web applications with Next.js, React, Node.js, and modern JavaScript. Available for hire.",
  keywords: [
    "fullstack developer",
    "Next.js",
    "React",
    "Node.js",
    "PHP",
    "TailwindCSS",
    "web developer",
    "Mark Asogwa",
    "WordPress",
    "Woocommerce",
    "Plugins",
  ],
  authors: [{ name: "Mark Asogwa" }],
  openGraph: {
    title: "Mark Asogwa - Fullstack Developer",
    description: "Fullstack developer building scalable web applications",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-black text-white`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
