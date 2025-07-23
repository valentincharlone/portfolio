"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-white bg-opacity-80 backdrop-blur-[0.5rem] border border-gray-400 border-opacity-40 shadow-2xl rounded-full p-[5px] dark:bg-gray-950 dark:bg-opacity-80 ">
      <button
        onClick={() => setLanguage("es")}
        aria-label="Switch language"
        className={`px-3 py-2 text-sm font-medium rounded-full transition-all relative ${
          language === "es"
            ? "text-gray-900 dark:text-gray-100"
            : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        }`}
      >
        ES
        {language === "es" && (
          <motion.div
            className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-full -z-10"
            layoutId="languageIndicator"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-2 text-sm font-medium rounded-full transition-all relative ${
          language === "en"
            ? "text-gray-900 dark:text-gray-100"
            : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        }`}
      >
        EN
        {language === "en" && (
          <motion.div
            className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-full -z-10"
            layoutId="languageIndicator"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </button>
    </div>
  );
}
