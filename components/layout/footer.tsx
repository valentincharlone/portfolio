'use client'

import { useLanguage } from "@/context/language-context";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2025 Valentín Charlone. {t("footer.copyright")}
      </small>
      <p className="text-xs">
        <span className="font-semibold">{t("footer.builtWith")}</span> React & Next.js (App
        Router), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend.
      </p>
    </footer>
  );
}
