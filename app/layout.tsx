import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mallika M — Frontend & Flutter Developer",
  description:
    "Portfolio of Mallika M — Frontend Developer & Flutter Mobile App Developer with 1.9 years of production experience building React.js web apps and Flutter mobile apps for live EdTech clients.",
  keywords: [
    "Mallika M", "Frontend Developer", "Flutter Developer",
    "React.js", "Next.js", "Mobile App Developer", "Chennai", "Portfolio",
  ],
  authors: [{ name: "Mallika M", url: "https://github.com/MallikaMariyappan" }],
  openGraph: {
    title: "Mallika M — Frontend & Flutter Developer",
    description: "2+ years building React.js web apps & Flutter mobile apps for EdTech clients.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${syne.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
