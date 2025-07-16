"use client";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("nav.about");

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
        I'm a <span className="font-medium">Frontend Engineer</span> who loves
        building modern web applications with exceptional user experiences. I
        specialize in creating responsive, performant interfaces that solve
        real-world problems.
      </p>

      <p>
        My core stack includes{" "}
        <span className="font-medium">React, Next.js, and TypeScript</span>, and
        I'm currently expanding into{" "}
        <span className="font-medium">
          React Native and full-stack development like Express.js
        </span>
        . I'm passionate about clean code, modern development practices, and
        staying at the forefront of web technology.
      </p>
    </motion.section>
  );
}
