import ButtunArrow from "/assets/ButtunArrow.svg";
import ProjectLayouts from "./photos_layouts/projectLayouts";
import { motion } from "framer-motion";
import { useLanguage } from "../Contexts/LanguageContext";

export default function Project({
  number,
  title,
  subTitle,
  description,
}: {
  number: number;
  title: string;
  subTitle: string;
  description: string;
}) {
  const { language } = useLanguage();
  const langKey = language === "fr" ? "fr" : "en";

  const viewAllText = {
    en: "View all projects",
    fr: "Voir tous les projets",
  };

  return (
    <div className=" flex-col-reverse lg:flex-row flex w-full justify-between items-center h-max gap-3 md:gap-4 lg:gap-3 xl:gap-4 ">
      <motion.div
        initial={{
          x: -150,
          opacity: 0,
          rotate: "-3deg",
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
        className=" w-full lg:w-1/2 items-end flex flex-col lg:px-6 xl:px-8 px-4 lg:pt-10 xl:pt-12 p-5 lg:pb-10 xl:pb-12 gap-6 bg-[#d2d2d2] dark:bg-[#1B1B1BB2] rounded-3xl"
      >
        <div className="  w-full items-start flex flex-col gap-2 ">
          <h1 className=" font-ncs text-bgDark dark:text-white text-[26px] lg:text-5xl xl:text-6xl  ">
            {`${number + 1}. ` + title}
          </h1>
          <h6 className="  mt-[-8px] font-ncs text-greyPtLight dark:text-greyPt text-[9px] lg:text-lg xl:text-xl   ">
            {subTitle}
          </h6>
        </div>
        <p className=" font-roboto text-sm lg:text-base xl:text-lg text-bgDark dark:text-white ">
          {description}.
        </p>
        <span className=" group flex gap-2 lg:gap-3 xl:gap-4 items-center w-max  justify-end mt-[22px] pr-2 ">
          <p className=" cursor-pointer font-ncs text-sm lg:text-lg xl:text-[24px] text-bgDark dark:text-white ">
            {viewAllText[langKey]}
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
        className="w-full lg:w-1/2 lg:h-[300px] xl:h-[420px]"
        initial={{
          x: 150,
          opacity: 0,
          rotate: "3deg",
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
        <ProjectLayouts />
      </motion.div>
    </div>
  );
}
