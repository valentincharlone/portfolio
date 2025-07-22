"use client";

// 1. Importar useTheme desde 'next-themes' en lugar de tu antiguo contexto
import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  // 2. Obtener 'theme' y 'setTheme' del hook de next-themes
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-gray-400 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:bg-opacity-80"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
