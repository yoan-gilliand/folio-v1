import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import i18nConfig from './i18nConfig';
import initTranslations from "./i18n";
import TranslationProvider from "./[locale]/TranslationProvider";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Yoan Gilliand — Software Engineering Student",
  description:
      "Software Engineering Student, at HEIA, currently not available for work. Driven by innovation and crafting seamless digital experiences, based in Fribourg, Switzerland.",
  generator: "Next.js",
  applicationName: "Yoan Gilliand",
  keywords: [
    "software engineer",
    "developer",
    "web developer",
    "full-stack developer",
    "frontend developer",
    "backend developer",
    "full-stack engineer",
    "web development",
    "UI/UX design",
    "creative developer",
    "tech",
    "Switzerland",
    "software development",
    "portfolio",
    "web developer portfolio",
    "software engineer portfolio",
    "modern web development",
    "Vue.js",
    "Node.js",
    "JavaScript",
    "Express.js",
    "Electron",
    "app development",
    "cloud computing",
    "technology enthusiast"
  ],
  openGraph: {
    title: "Yoan Gilliand — Software Engineering Student",
    description:
        "Software Engineering Student, at HEIA, currently not available for work. Driven by innovation and crafting seamless digital experiences, based in Fribourg, Switzerland.",
    url: "",
    siteName: "",
    images: [
      {
        url: "https://i.ibb.co/Vc1n7fdy/pp-squared.jpg",
        width: 1200,
        height: 630,
        alt: "Yoan Gilliand — Software Engineering Student",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoan Gilliand — Software Engineering Student",
    description:
        "Software Engineering Student, at HEIA, currently not available for work. Driven by innovation and crafting seamless digital experiences, based in Fribourg, Switzerland.",
    creator: "",
    creatorId: "",
    images: [
      "https://i.ibb.co/Vc1n7fdy/pp-squared.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export const viewport = {
  colorScheme: "dark",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const i18nNamespaces = ['translation'];

export default async function RootLayout({children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
      <html lang={locale}>
      <body
          className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
      <TranslationProvider locale={locale} resources={resources} namespaces={i18nNamespaces}>
        {children}
      </TranslationProvider>
      <Analytics />
      </body>
      </html>
  );
}