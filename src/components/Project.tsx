import ButtunArrow from "/assets/ButtunArrow.svg";
import ProjectLayouts from "./photos_layouts/projectLayouts";
import { motion } from "framer-motion";
import { useLanguage } from "../Contexts/LanguageContext";
import useToggle from "../costumHooks/useToggle";
import arrow from "/assets/arrowGreen.svg";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router";

export default function Project({
  number,
  title,
  subTitle,
  description,
  page = "section",
  projectLink = "",
}: {
  number: number;
  title: string;
  subTitle: string;
  description: string;
  page?: "section" | "page";
  projectLink?: string;
}) {
  const { language } = useLanguage();
  const langKey = language === "fr" ? "fr" : "en";
  const navigate = useNavigate();
  // Screen size detection
  const isMobile = useMediaQuery({ query: "(max-width: 639px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 640px) and (max-width: 1023px)",
  });
  const isLg = useMediaQuery({
    query: "(min-width: 1024px) and (max-width: 1279px)",
  });
  const isXl = useMediaQuery({ query: "(min-width: 1280px)" });

  // Determine device type for layouts (phone for mobile/tablet, desktop for lg/xl)
  const deviceType = isLg || isXl ? "desktop" : "phone";

  // Dynamic collapsed heights based on screen size
  const getCollapsedHeight = () => {
    if (isMobile) return 186;
    if (isTablet) return 186;
    if (isLg) return 350;
    if (isXl) return 356;
    return 352; // default
  };

  const viewAllText = {
    en: "View all projects",
    fr: "Voir tous les projets",
  };

  const visitWebsiteText = {
    en: "Visit website",
    fr: "Visiter le site",
  };

  const backHomeText = {
    en: "Back to home",
    fr: "Retour à l'accueil",
  };

  const readMoreText = {
    en: "Read more",
    fr: "Lire la suite",
  };

  const readLessText = {
    en: "Read less",
    fr: "Lire moins",
  };

  const [isExpanded, toggleExpanded] = useToggle(false);

  return (
    <div
      className={` ${number % 2 == 0 ? "lg:flex-row " : "lg:flex-row-reverse"} transition-all ease-in-out  items-start flex-col-reverse lg:flex-row flex w-full justify-between h-max gap-3 md:gap-4 lg:gap-7 xl:gap-8 `}
    >
      <motion.div
        initial={{
          x: number % 2 == 0 ? -150 : 150,
          opacity: 0,
          rotate: number % 2 == 0 ? "-3deg" : "3deg",
        }}
        whileInView={{
          x: 0,
          rotate: "0deg",
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        viewport={{ once: false, margin: "400px 0px -150px 0px" }}
        style={{ transformOrigin: "50% 100px" }}
        className=" w-full lg:w-1/2 items-end flex flex-col lg:px-6 xl:px-8 px-4 lg:pt-10 xl:pt-12 p-5 lg:pb-10 xl:pb-12 gap-3 lg:gap-6 bg-[#d2d2d2] dark:bg-[#1B1B1BB2] rounded-3xl"
      >
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : getCollapsedHeight() }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="flex flex-col w-full overflow-hidden"
          onClick={toggleExpanded}
        >
          <div className="  w-full items-start flex flex-col gap-2 ">
            <h1 className=" font-ncs text-bgDark dark:text-white text-[26px] lg:text-5xl xl:text-6xl  ">
              {`${number + 1}. ` + title}
            </h1>
            <h6 className=" font-ncs text-greyPtLight dark:text-greyPt text-sm lg:text-lg xl:text-xl lg:mb-1   ">
              {subTitle}
            </h6>
          </div>

          <p
            className={`cursor-pointer  transition-all duration-500 font-roboto text-sm lg:text-base xl:text-lg text-bgDark dark:text-white`}
          >
            {description}
          </p>
        </motion.div>

        <span
          onClick={toggleExpanded}
          className="w-max flex flex-row gap-1 items-center cursor-pointer font-roboto font-semibold text-[10px] sm:text-[12px] md:text-sm lg:text-base xl:text-lg text-[#076C69] underline hover:opacity-80 transition-opacity"
        >
          <p className="font-roboto font-semibold text-[12px] md:text-sm lg:text-base xl:text-lg text-[#076C69] underline hover:opacity-80 transition-opacity">
            {isExpanded ? readLessText[langKey] : readMoreText[langKey]}
          </p>
          <motion.img
            src={arrow}
            alt="Arrow"
            animate={{
              rotate: isExpanded ? 180 : 0,
              y: isExpanded ? 0 : [0, 4, 0],
            }}
            transition={{
              rotate: { duration: 0.3, ease: "easeInOut" },
              y: {
                duration: 1.2,
                ease: "easeInOut",
                repeat: isExpanded ? 0 : Infinity,
                repeatDelay: 0.3,
              },
            }}
            className="w-3 sm:w-4 md:w-5 lg:w-5 xl:w-6"
          />
        </span>

        <span
          onClick={() => {
            if (page === "page") {
              if (projectLink) {
                window.open(projectLink, "_blank");
              } else {
                navigate("/");
              }
            } else {
              navigate("/projetcs");
            }
          }}
          className=" group flex gap-2 lg:gap-3 xl:gap-4 items-center w-max  justify-end  pr-2 "
        >
          <p className=" cursor-pointer font-ncs text-sm lg:text-lg xl:text-[24px] text-bgDark dark:text-white ">
            {page === "page"
              ? projectLink
                ? visitWebsiteText[langKey]
                : backHomeText[langKey]
              : viewAllText[langKey]}
          </p>

          <div
            className={` group-hover:translate-x-2 cursor-pointer rounded-[100px] h-max w-max p-1.5 lg:p-2 xl:p-2.5 border-bgDark dark:border-white border-1  transition-all ease-in-out duration-300 group-hover:bg-bgDark group-hover:dark:bg-white hover:boeder-0`}
          >
            <img
              src={ButtunArrow}
              className={` h-2.5 lg:h-3.5 xl:h-4 group-hover:rotate-45 invert dark:invert-0 group-hover:invert-0 group-hover:dark:invert transition-all ease-in-out duration-300`}
              alt="Arrow Icon"
            />
          </div>
        </span>
      </motion.div>

      <motion.div
        className="w-full lg:w-1/2 "
        initial={{
          x: number % 2 == 0 ? 150 : -150,
          opacity: 0,
          rotate: number % 2 == 0 ? "3deg" : "-3deg",
        }}
        whileInView={{
          x: 0,
          rotate: "0deg",
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        viewport={{ once: false, margin: "400px 0px -150px 0px" }}
        style={{ transformOrigin: "50% 100px" }}
      >
        <ProjectLayouts deviceType={deviceType} />
      </motion.div>
    </div>
  );
}
