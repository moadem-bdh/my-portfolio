import lang from "/assets/language.svg";
import arrow from "/assets/arrow.svg";
import LanguageOption from "./LanguagrOption";
import useToggle from "../costumHooks/useToggle";
import { useLanguage } from "../Contexts/LanguageContext";

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
  const [isOpen, setIsOpen] = useToggle(false);
  const { language, setLanguage } = useLanguage();

  const currentLangKey = language === "fr" ? "fr" : "en";

  return (
    <div
      className=" flex items-center relative cursor-pointer"
      onClick={setIsOpen}
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
