import Image from "next/image";
import ZustandSvg from "./zustand-icon.svg";
import { useTheme } from "@/context/theme-context";

export function ZustandIcon() {
  const { theme } = useTheme();
  return (
    <Image
      src={ZustandSvg || "/placeholder.svg"}
      alt="Zustand Logo"
      className=""
      style={{
        width: "1.5em",
        height: "auto",
        filter: theme === "light" ? "invert(1) brightness(0.6)" : " invert(1)",
      }}
    />
  );
}
