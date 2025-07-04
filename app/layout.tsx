import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valentin Charlone | Portfolio",
  description: "Frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={` ${inter.className}  bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <div
          className="bg-[#e2fbe4] absolute -z-10 top-[-6rem] right-[11rem] 
          h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] 
          sm:w-[68.75rem]"
        />
        <div
          className="bg-[#fbd7d7] absolute -z-10 top-[-1rem] left-[-35rem] 
          h-[31.25rem] w-[50rem] rounded-full blur-[10rem] 
          sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        />
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
