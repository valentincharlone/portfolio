"use client";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: (index: number) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    };
  },
};

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 max-w-[53rem] mx-auto"
    >
      <SectionHeading>My Experience</SectionHeading>

      <div className="space-y-8">
        {experiencesData.map((item, index) => (
          <ExperienceItem
            key={index}
            title={item.title}
            company={item.company}
            description={item.description}
            icon={item.icon}
            date={item.date}
            technologies={[...item.technologies]}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

function ExperienceItem({
  title,
  company,
  description,
  icon,
  date,
  technologies,
}: {
  title: string;
  company: string;
  description: string;
  icon: string;
  date: string;
  technologies: string[];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group"
    >
      <section className="bg-gray-100 border border-black/5 rounded-lg p-6 hover:bg-gray-200 transition-colors">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="text-2xl">{icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-700 font-medium">{company}</p>
            </div>
          </div>
          <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full border border-black/[0.1]">
            {date}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-4">{description}</p>

        {/* Technologies */}
        <ul className="flex flex-wrap gap-2">
          {technologies.map((tech, techIndex) => (
            <motion.li
              key={techIndex}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              custom={techIndex}
              viewport={{ once: true }}
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
            >
              {tech}
            </motion.li>
          ))}
        </ul>
      </section>
    </motion.div>
  );
}
