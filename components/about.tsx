"use client";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";

export default function About() {
  const { t } = useLanguage();
  const { ref } = useSectionInView("nav.about", );

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.3,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.3 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>{t("about.title")}</SectionHeading>
      <p className="mb-3">
        {t("about.intro.part1")}{" "}
        <span className="font-medium">{t("about.intro.role")}</span>{" "}
        {t("about.intro.part2")}
      </p>
      <p>
        {t("about.skills.part1")}{" "}
        <span className="font-medium">{t("about.skills.technologies")}</span>
        {t("about.skills.part2")}{" "}
        <span className="font-medium">{t("about.skills.expanding")}</span>
        {t("about.skills.part3")}
      </p>
    </motion.section>
  );
}
