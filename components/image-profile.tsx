import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function ImageProfile() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            alt="valentin charlone"
            src="/me.jpg"
            width={192}
            height={192}
            quality={95}
            priority
            className="h-32 w-32 rounded-full object-cover border-[0.20rem] border-white shadow-xl"
          />
        </motion.div>
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
          className="absolute bottom-0 -right-3 text-4xl"
        >
          🤙
        </motion.span>
      </div>
    </div>
  );
}
