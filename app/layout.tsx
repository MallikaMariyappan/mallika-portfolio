import type { Metadata } from "next";
import "./globals.css";

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
  authors: [{ name: "Mallika M", url: "https://github.com/MallikaMariyappan" }],
  openGraph: {
    title: "Mallika M — Frontend & Flutter Developer",
    description:
      "Portfolio of Mallika M — 1.9 years building React.js web apps & Flutter mobile apps for EdTech clients.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
