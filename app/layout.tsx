import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import { Poppins } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/layout/footer";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/context/theme-context";
import { LanguageProvider } from "@/context/language-context";
import FloatingControls from "@/components/floating-controls";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Valentin Charlone",
    default: "Valentin Charlone | Portfolio",
  },
  manifest: "/site.webmanifest",
  description:
    "Desarrollador Frontend especializado en React, Next.js y TypeScript. Explora mis proyectos, habilidades y experiencia profesional.",

  metadataBase: new URL("https://valentin-charlone.vercel.app/"),

  keywords: [
    "Frontend Developer",
    "Frontend Engineer",
    "Desarrollador Frontend",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Portafolio",
    "Web Developer",
    "Valentin Charlone",
  ],

  authors: [
    {
      name: "Valentin Charlone",
      url: "https://valentin-charlone.vercel.app/",
    },
  ],
  creator: "Valentin Charlone",

  openGraph: {
    title: "Valentin Charlone | Portfolio",
    description:
      "Especializado en React, Next.js y TypeScript. Explora mis proyectos y experiencia.",
    url: "https://valentin-charlone.vercel.app/",
    siteName: "Portfolio of Valentin Charlone",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={` ${poppins.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-32 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <div className="bg-[#e2fbe4] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#183751]" />
          <div className="bg-[#fbd7d7] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#133626]" />

          <LanguageProvider>
            <ActiveSectionContextProvider>
              <FloatingControls />
              <Header />
              {children}
              <Footer />
              <Toaster position="top-right" />
            </ActiveSectionContextProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
