
import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const googleAnalyticsId = "G-R1T61SMPR4";

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
    "Mallika M",
    "Frontend Developer",
    "Flutter Developer",
    "React.js",
    "Next.js",
    "Mobile App Developer",
    "Chennai",
    "Portfolio",
  ],
  authors: [
    {
      name: "Mallika M",
      url: "https://github.com/MallikaMariyappan",
    },
  ],
  openGraph: {
    title: "Mallika M — Frontend & Flutter Developer",
    description:
      "2+ years building React.js web apps & Flutter mobile apps for EdTech clients.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${syne.variable}`}
    >
      <body suppressHydrationWarning>
        {children}

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', '${googleAnalyticsId}');
    `}
        </Script>
      </body>
    </html>
  );
}
