"use client";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a <span className="font-medium">Frontend Engineer</span> passionate
        about creating modern web applications with exceptional user
        experiences. I recently worked at{" "}
        <span className="font-medium">TUXDI</span> developing the Artic CMS
        platform and building engaging interfaces with advanced animations.
      </p>

      <p>
        I specialize in{" "}
        <span className="font-medium">React, Next.js, and TypeScript</span>, and
        I'm currently expanding my skills with{" "}
        <span className="font-medium">React Native and Express.js</span>. I love
        solving complex problems and bringing creative ideas to life through
        code.
      </p>
    </motion.section>
  );
}
