import buttonArrow from "/assets/ButtunArrow.svg";
import MenuArrow from "/assets/MenuArrow.svg";
import close from "/assets/close.svg";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { useLanguage } from "../Contexts/LanguageContext";

export default function Menu({
  handleParentClick,
  handleMenuAppear,
}: {
  handleParentClick: (e: React.MouseEvent) => void;
  handleMenuAppear: () => void;
}) {
  const { language } = useLanguage();
  const langKey = language === "fr" ? "fr" : "en";

  type menuType = {
    name: { en: string; fr: string };
    achorLink: string;
  };
  const menu: menuType[] = [
    {
      name: { en: "Home", fr: "Accueil" },
      achorLink: "Home",
    },
    {
      name: { en: "About Me", fr: "À propos" },
      achorLink: "About",
    },
    {
      name: { en: "Skills", fr: "Compétences" },
      achorLink: "Skills",
    },
    {
      name: { en: "Experience", fr: "Expérience" },
      achorLink: "Experience",
    },
    {
      name: { en: "Projects", fr: "Projets" },
      achorLink: "Projects",
    },
    {
      name: { en: "Contact me", fr: "Me contacter" },
      achorLink: "ContactMe",
    },
  ];

  const desktop = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <motion.menu
      onClick={(e) => handleParentClick(e)}
      className={`fixed h-full inset-0 z-40 
       transition-colors duration-1000 ease-in-out flex justify-end`}
      initial={{
        backgroundColor: "transpaernt",
      }}
      animate={{
        backgroundColor: "rgba(0,0,0,0.8)",
      }}
      exit={{
        backgroundColor: "transparent",
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.div
        initial={{
          x: desktop ? 900 : 0,
          y: desktop ? 0 : -600,
        }}
        animate={{
          x: 0,
          y: 0,
        }}
        exit={{
          x: desktop ? 900 : 0,
          y: desktop ? 0 : -600,
        }}
        transition={{
          duration: desktop ? 0.6 : 0.45,
          ease: "easeInOut",
        }}
        className="md:w-[700px] lg:w-[920px] w-full gap-1 md:gap-0 lg:gap-0 scrollbar scrollbar-track-transparent scrollbar-thumb-transparent bg-bgLight dark:bg-bgDark min-h-40 border-b-4 md:border-b-0 lg:border-b-0 md:border-l-4 lg:border-l-4 py-6  flex flex-col h-[470px] max-h-full md:h-full lg:h-full overflow-y-auto border-[#076C69]"
      >
        <div className=" w-full flex  mb-2  md:mb-6 lg:mb-8 px-4 md:px-8 lg:px-10  md:justify-start lg:justify-start justify-end">
          <button
            type="button"
            onClick={handleMenuAppear}
            className="p-2.5 w-max md:border-bgDark lg:border-bgDark md:dark:border-white lg:dark:border-white md:rounded-[100px] lg:rounded-[100px] md:border-2 lg:border-3 group cursor-pointer md:hover:bg-bgDark lg:hover:bg-bgDark md:dark:hover:bg-white lg:dark:hover:bg-white transition-all ease-in-out duration-200"
          >
            <img
              className="md:w-7 lg:w-10 group-hover:dark:invert group-hover:invert-0 dark:invert-0 invert hidden md:block lg:block"
              src={MenuArrow}
              alt="Arrow"
            />
            <img
              className="group-hover:dark:invert group-hover:invert-0 dark:invert-0 invert md:hidden lg:hidden block "
              src={close}
              alt="close icon"
            />
          </button>
        </div>
        {menu.map((option) => (
          <a
            onClick={handleMenuAppear}
            href={`#${option.achorLink}`}
            key={option.name.en}
          >
            <div className=" transition-all ease-in-out duration-300 cursor-pointer group hover:pl-6 flex w-full justify-between items-center px-4 md:px-8 lg:px-10 ">
              <h1 className="md:group-hover:[-webkit-text-stroke-width:0px] lg:group-hover:[-webkit-text-stroke-width:0px] text-bgDark dark:text-bgLight md:text-bgLight lg:text-bgLight md:dark:text-bgDark lg:dark:text-bgDark  md:group-hover:text-bgDark lg:group-hover:text-bgDark   md:group-hover:dark:text-white lg:group-hover:dark:text-white font-ncs text-[36px] md:text-[54px] lg:text-[64px] md:[-webkit-text-stroke-width:2px] lg:[-webkit-text-stroke-width:2.5px] [-webkit-text-stroke-color:black] dark:[-webkit-text-stroke-color:white]  ">
                {option.name[langKey]}
              </h1>
              <div
                className={` cursor-pointer md:border-2 lg:border-2 rounded-[100px] h-max w-max p-2 md:p-2.5 lg:p-2.5 border-bgDark  dark:border-white border-1 group-hover:rotate-45 transition-all ease-in-out duration-300 group-hover:bg-bgDark group-hover:dark:bg-white hover:boeder-0`}
              >
                <img
                  src={buttonArrow}
                  className={` h-[10px] md:h-4 lg:h-5 group-hover:invert-0 invert group-hover:dark:invert dark:invert-0   transition-all ease-in-out duration-300`}
                  alt="Arrow Icon"
                />
              </div>
            </div>
          </a>
        ))}
      </motion.div>
    </motion.menu>
  );
}
