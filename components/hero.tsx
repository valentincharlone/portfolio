"use client";

import { motion } from "framer-motion";
import ImageProfile from "./image-profile";
import { useSectionInView } from "@/lib/hooks";
import AvailabilityBadge from "./availability-badge";
import { useLanguage } from "@/context/language-context";
import ContactLinks from "./contact-links";

export default function Hero() {
  const { t } = useLanguage();
  const { ref } = useSectionInView(t("nav.home"), 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[55rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="mb-6">
        <AvailabilityBadge />
      </div>
      <ImageProfile />
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.4] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bolder">{t("hero.title")}</span>
        <span className="underline"> React, Next.js & TypeScript</span>.
      </motion.h1>

      <ContactLinks />
    </section>
  );
}
