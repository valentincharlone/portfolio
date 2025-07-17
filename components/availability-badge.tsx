"use client";
import { motion } from "framer-motion";

export default function AvailabilityBadge({ label }: { label: string }) {
  return (
    <motion.div
      className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg dark:bg-white/10"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      {label}
    </motion.div>
  );
}
