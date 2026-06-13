import buttonArrow from "/assets/ButtunArrow.svg";
import MenuArrow from "/assets/MenuArrow.svg";
import { useMediaQuery } from "react-responsive";
import { useLanguage } from "../Contexts/LanguageContext";
import { useNavigate } from "react-router";
import { motion, type Variants } from "framer-motion";

export default function Menu({
  handleMenuAppear,
}: {
  handleMenuAppear: () => void;
}) {
  const { language } = useLanguage();
  const langKey = language === "fr" ? "fr" : "en";
  const navigate = useNavigate();
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
      name: { en: "Skills", fr: "Skills" },
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

  const listContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: desktop ? 0 : 0.08,
        delayChildren: desktop ? 0 : 0.1,
      },
    },
  };

  const listItemVariants: Variants = {
    hidden: {
      opacity: desktop ? 1 : 0,
      x: desktop ? 0 : -35,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
  };

  return (
    <motion.menu
      onClick={handleMenuAppear}
      className={`fixed h-full inset-0 z-10 md:z-40 
       transition-colors duration-1000 ease-in-out flex justify-end`}
      initial={{
        backgroundColor: "transparent",
      }}
      animate={{
        backgroundColor: "rgba(0,0,0,0.8)",
      }}
      exit={{
        backgroundColor: "transparent",
      }}
      transition={{
        duration: desktop ? 0.6 : 0.5,
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
          duration: desktop ? 0.5 : 0.45,
          ease: "easeInOut",
        }}
        onClick={(e) => e.stopPropagation()}
        className="md:w-[700px] lg:w-[920px] md:z-40 -z-10 w-full gap-1 md:gap-0 lg:gap-0 scrollbar scrollbar-track-transparent scrollbar-thumb-transparent bg-bgLight dark:bg-bgDark min-h-40 border-b-4 md:border-b-0 lg:border-b-0 md:border-l-4 lg:border-l-4 py-6  flex flex-col h-[470px] max-h-full md:h-full lg:h-full overflow-y-auto border-[#076C69]"
      >
        <div className=" w-full flex  mb-10  lg:mb-8 px-4 md:px-8 lg:px-10  md:justify-start lg:justify-start justify-end">
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
          </button>
        </div>
        <motion.div
          variants={listContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-1 md:gap-0"
        >
          {menu.map((option) => (
            <motion.a
              variants={listItemVariants}
              onClick={() => {
                handleMenuAppear();
                if (option.achorLink === "Experience") {
                  navigate("/experience");
                } else if (option.achorLink === "Projects") {
                  navigate("/projetcs");
                } else {
                  navigate("/");
                }
              }}
              href={
                option.achorLink === "Experience" ||
                  option.achorLink === "Projects"
                  ? undefined
                  : `#${option.achorLink}`
              }
              key={option.name.en}
            >
              <div className=" transition-all ease-in-out duration-300 cursor-pointer group hover:pl-6 flex w-full justify-between items-center px-4 md:px-8 lg:px-10 ">
                <h1 className="md:group-hover:[-webkit-text-stroke-width:0px] lg:group-hover:[-webkit-text-stroke-width:0px] text-bgDark dark:text-bgLight md:text-bgLight lg:text-bgLight md:dark:text-bgDark lg:dark:text-bgDark  md:group-hover:text-bgDark lg:group-hover:text-bgDark   md:group-hover:dark:text-white lg:group-hover:dark:text-white font-ncs text-[36px] md:text-[54px] lg:text-[64px] md:[-webkit-text-stroke-width:2px] lg:[-webkit-text-stroke-width:2.5px] [-webkit-text-stroke-color:black] dark:[-webkit-text-stroke-color:white]  ">
                  {option.name[langKey]}
                </h1>
                {desktop && (
                  <div
                    className={` cursor-pointer md:border-2 lg:border-2 rounded-[100px] h-max w-max p-2 md:p-2.5 lg:p-2.5 border-bgDark  dark:border-white border-1 group-hover:rotate-45 transition-all ease-in-out duration-300 group-hover:bg-bgDark group-hover:dark:bg-white hover:boeder-0`}
                  >
                    <img
                      src={buttonArrow}
                      className={` h-[10px] md:h-4 lg:h-5 group-hover:invert-0 invert group-hover:dark:invert dark:invert-0   transition-all ease-in-out duration-300`}
                      alt="Arrow Icon"
                    />
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.menu>
  );
}
