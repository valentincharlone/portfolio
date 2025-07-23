"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";
import { sendEmail } from "@/actions/send-email";
import toast from "react-hot-toast";
import { useLanguage } from "@/context/language-context";

export default function Contact() {
  const { t } = useLanguage();
  const { ref } = useSectionInView("nav.contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{t("contact.title")}</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80 text-balance">
        {t("contact.part1")}{" "}
        <a className="underline" href="mailto:valencharlone@gmail.com">
          valencharlone@gmail.com
        </a>{" "}
        {t("contact.part2")}
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success(t("contact.toast.success"));
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack transition-all dark:outline-none dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={t("contact.input")}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4  transition-all dark:outline-none dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100"
          name="message"
          placeholder= {t("contact.textarea")}
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
