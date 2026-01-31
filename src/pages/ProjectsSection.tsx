import ButtunArrow from "/assets/ButtunArrow.svg";
import Project from "../components/Project";
import { motion } from "framer-motion";
import ScrollFloat from "../components/scrollFloat";
import { projects } from "../data/data";
import { useLanguage } from "../Contexts/LanguageContext";
import { useNavigate } from "react-router";

export default function ProjectsSection() {
  const { language } = useLanguage();
  const langKey = language === "fr" ? "fr" : "en";
  const navigate = useNavigate();
  const heading = {
    en: "Projects",
    fr: "Projets",
  };

  const visitAllText = {
    en: "Visit all projects",
    fr: "Voir tous les projets",
  };

  return (
    <section
      id="Projects"
      className=" overflow-hidden  w-full px-4 lg:px-14 xl:px-20 bg-bg dark:bg-bgDark flex flex-col items:center lg:items-end pb-8 pt-16 lg:pt-20 xl:pt-22 lg:pb-16 xl:pb-22 gap-14 lg:gap-10 "
    >
      <span className="w-full flex justify-center items-center ">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=55%"
          stagger={0.03}
          textClassName="font-ncs text-[42px] md:text-[72px] lg:text-[80px] xl:text-[90px] text-bgDark dark:text-white"
        >
          {heading[langKey]}
        </ScrollFloat>
      </span>

      {projects.slice(0, 2).map((pr, index) => (
        <Project
          number={index}
          key={pr.id}
          page="section"
          title={pr.projectName[langKey]}
          subTitle={pr.projectType[langKey]}
          description={pr.projectDescription[langKey]}
        />
      ))}

      <motion.span
        onClick={() => navigate("/projetcs")}
        initial={{
          x: 150,
          opacity: 0,
        }}
        whileInView={{
          x: 0,

          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        viewport={{ once: false, margin: "400px 0px -70px 0px" }}
        style={{ transformOrigin: "50% 100px" }}
        className=" group flex gap-3 md:gap-3.5 lg:gap-3 xl:gap-4 items-center justify-center mt-0 md:mt-[25px] lg:mt-[15px] xl:mt-[30px]  "
      >
        <p className="  cursor-pointer font-ncs text-[18px] md:text-[26px] lg:text-[28px] xl:text-[30px] text-bgDark dark:text-white ">
          {visitAllText[langKey]}
        </p>

        <div
          className={` group-hover:translate-x-2 cursor-pointer md:border-2 lg:border-2 rounded-[100px] h-max w-max p-2 md:p-2.5 lg:p-2 xl:p-2.5 border-bgDark dark:border-white border-1  transition-all ease-in-out duration-300 group-hover:bg-bgDark group-hover:dark:bg-white hover:boeder-0`}
        >
          <img
            src={ButtunArrow}
            className={` h-[10px] md:h-4 lg:h-4 xl:h-5 group-hover:rotate-45 invert dark:invert-0 group-hover:dark:invert group-hover:invert-0 transition-all ease-in-out duration-300`}
            alt="Arrow Icon"
          />
        </div>
      </motion.span>
    </section>
  );
}
