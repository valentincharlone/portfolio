"use client"

import type { projectsData } from "@/lib/data"
import { useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { FiLink } from "react-icons/fi"

type ProjectProps = (typeof projectsData)[number]

export default function Project({ title, description, tags, imageUrl, githubUrl, liveUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  })
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.7, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-6 sm:pr-2 sm:pt-10 sm:max-w-[55%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <div className="flex justify-between items-center gap-4">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <div className="flex items-center gap-2">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-950 dark:text-white/70 dark:hover:text-white transition"
                  aria-label={`GitHub repository for ${title}`}
                >
                  <FaGithub size={20} />
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-950 dark:text-white/70 dark:hover:text-white transition"
                  aria-label={`Live demo for ${title}`}
                >
                  <FiLink size={20} />
                </a>
              )}
            </div>
          </div>

          <p className="mt-2 leading-relaxed font-light text-gray-700 dark:text-white/80">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={`Project screenshot for ${title}`}
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  )
}
