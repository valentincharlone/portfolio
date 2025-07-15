import LanguageSwitch from "./language-switch";
import ThemeSwitch from "./theme-switch";

export default function FloatingControls() {
  return (
    <div className="fixed bottom-5 right-5 z-[1000] flex items-center gap-3" >
      <LanguageSwitch />
      <ThemeSwitch />
    </div>
  );
}
