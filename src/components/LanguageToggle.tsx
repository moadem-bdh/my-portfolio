import lang from "/assets/language.svg";
import arrow from "/assets/arrow.svg";
import LanguageOption from "./LanguagrOption";
import { useLanguage } from "../Contexts/LanguageContext";
import { useRef, useEffect, useState } from "react";

type Language = {
  id: "fr" | "en";
  name: {
    en: string;
    fr: string;
  };
};

export default function LanguageToggle() {
  const languages: Language[] = [
    { id: "fr", name: { en: "French", fr: "Francais" } },
    { id: "en", name: { en: "English", fr: "Anglais" } },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const currentLangKey = language === "fr" ? "fr" : "en";

  // Close dropdown when clicking anywhere outside this component
  useEffect(() => {
    if (!isOpen) return;
    function handleOutsideClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  return (
    <div
      ref={wrapperRef}
      className=" flex items-center relative cursor-pointer"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <img
        src={lang}
        className=" md:h-9 lg:h-max h-9 invert dark:invert-0 "
        alt="Language icon"
      />
      <img
        src={arrow}
        alt="arrow icon"
        className={` ${
          isOpen ? "rotate-0" : "rotate-180"
        } transition-all invert dark:invert-0 ease-in-out duration-300`}
      />
      {isOpen && (
        <div className="flex p-[4px] flex-col justify-between items-center gap-[5px] w-[130px] rounded-[15px] bg-bgDark dark:bg-white absolute top-14 ">
          {languages.map((item) => (
            <LanguageOption
              key={item.id}
              id={item.id}
              lang={item.name[currentLangKey]}
              selected={language}
              setLanguage={setLanguage}
            />
          ))}
        </div>
      )}
    </div>
  );
}
