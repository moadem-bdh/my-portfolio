import lang from "../assets/photos/language.svg";
import arrow from "../assets/photos/arrow.svg";
import LanguageOption from "./LanguagrOption";
import useToggle from "../costumHooks/useToggle";
export default function LanguageToggle() {
  const languages: string[] = ["English", "French", "Arabic"];
  const [isOpen, setIsOpen] = useToggle(false);

  return (
    <div
      className=" flex items-center relative  cursor-pointer"
      onClick={setIsOpen}
    >
      <img src={lang} className=" md:h-max h-9 " alt="Language icon" />
      <img
        src={arrow}
        alt="arrow icon"
        className={` ${
          isOpen ? "rotate-0" : "rotate-180"
        } transition-all ease-in-out duration-300`}
      />
      {isOpen && (
        <div className=" flex p-[5px] flex-col justify-between items-center gap-[5px] w-[127px] rounded-[15px] bg-white absolute top-14 ">
          {" "}
          {languages.map((lang) => (
            <LanguageOption lang={lang} />
          ))}
        </div>
      )}
    </div>
  );
}
