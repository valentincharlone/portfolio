"use client";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";

const staggeredContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const staggeredItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function About() {
  const { t } = useLanguage();
  const { ref } = useSectionInView("nav.about", 0.5);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      variants={staggeredContainerVariants}
      initial="hidden"
      whileInView="visible"
    >
      <motion.div variants={staggeredItemVariants}>
        <SectionHeading>{t("about.title")}</SectionHeading>
      </motion.div>
      <motion.p className="mb-3" variants={staggeredItemVariants}>
        
        <span className="font-medium">{t("about.intro.role")}</span>{" "}
        {t("about.intro")}
      </motion.p>
      <motion.p variants={staggeredItemVariants}>
        {t("about.skills.part1")}{" "}
        <span className="font-medium">{t("about.skills.technologies")}</span>
        {t("about.skills.part2")}{" "}
        <span className="font-medium">{t("about.skills.expanding")}</span>
        {t("about.skills.part3")}
      </motion.p>
    </motion.section>
  );
}
