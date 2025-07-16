"use client";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { t, language } = useLanguage();

  return (
    <header className="z-[999] relative">
      <motion.div
        className={clsx(
          "fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none",
          "border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03]",
          "backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:rounded-full ",
          "dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75",
          {
            "sm:w-[42rem]": language === "es",
            "sm:w-[36rem]": language === "en",
          }
        )}
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
      />
      <nav
        className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 
        sm:top-[1.7rem] sm:h-[initial] sm:py-0"
        aria-label="Main navigation"
      >
        <ul
          className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] 
          font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5"
        >
          {links.map((link) => {
            const translatedName = t(link.name);
            // Comparar con el key literal, no con la traducción
            const isActive = activeSection === link.name;

            return (
              <motion.li
                className="h-3/4 flex items-center justify-center relative"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 rounded-full",
                    {
                      "text-gray-950 dark:text-gray-200": isActive,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    // Guardar el key literal, no la traducción
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {translatedName}
                  {isActive && (
                    <motion.span
                      className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
