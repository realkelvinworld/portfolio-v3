import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const juniCode = localFont({
  src: [
    {
      path: "../public/Fonts/JuniCode/Junicode-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/Fonts/JuniCode/Junicode.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-juniCode",
});

const polySans = localFont({
  src: [
    {
      path: "../public/Fonts/PolySansPro/PolySans-Bulky.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/Fonts/PolySansPro/PolySans-Neutral.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/Fonts/PolySansPro/PolySans-Slim.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-polySans",
});

export const metadata: Metadata = {
  title: {
    default: "Kumordzi Kelvin Kwaku Selassie | Software Engineer",
    template: "%s | Kumordzi Kelvin",
  },
  description:
    "Software Engineer with 3+ years of experience building scalable, user-focused systems across fintech, edtech, and government platforms. Specializing in TypeScript, React, Next.js, and modern UI design systems.",
  keywords: [
    "Software Engineer",
    "Frontend Developer",
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "Tailwind CSS",
    "UI/UX Design",
    "Fintech",
    "Edtech",
    "Web Development",
    "Mobile Development",
    "Supabase",
    "Firebase",
    "Kumordzi Kelvin",
  ],
  authors: [{ name: "Kumordzi Kelvin Kwaku Selassie" }],
  creator: "Kumordzi Kelvin Kwaku Selassie",
  publisher: "Kumordzi Kelvin Kwaku Selassie",
  metadataBase: new URL("https://kelvinworld.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kelvinworld.com",
    title: "Kumordzi Kelvin Kwaku Selassie | Software Engineer",
    description:
      "Software Engineer specializing in building scalable, user-focused applications with React, Next.js, TypeScript, and modern design systems. 3+ years of experience in fintech, edtech, and government platforms.",
    siteName: "Kumordzi Kelvin Portfolio",
    images: [
      {
        url: "/public/images/me-now.svg", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Kumordzi Kelvin Kwaku Selassie - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumordzi Kelvin Kwaku Selassie | Software Engineer",
    description:
      "Building scalable, user-focused applications with React, Next.js, TypeScript & modern design systems. 3+ years in fintech, edtech & government platforms.",
    images: ["/og-image.jpg"], // Add your Twitter card image
    creator: "@kumordziii",
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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${polySans.variable} ${juniCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
