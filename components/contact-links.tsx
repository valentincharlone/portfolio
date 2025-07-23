import React from 'react'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { motion } from "framer-motion";
import Link from 'next/link';
import { HiDownload } from 'react-icons/hi';
import { useLanguage } from '@/context/language-context';

export default function ContactLinks() {
    const { t } = useLanguage();
  
  return (
    <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-base sm:text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-black"
        >
          {t("hero.cta")}{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV-Valentin-Charlone.pdf"
          download="CV-Valentin-Charlone.pdf"
        >
          {t("hero.cv")}{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex gap-2">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://linkedin.com/in/valentin-charlone"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/valentincharlone"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
  )
}
