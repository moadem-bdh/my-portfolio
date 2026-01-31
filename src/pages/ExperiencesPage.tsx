import { motion } from "framer-motion";
import { useLanguage } from "../Contexts/LanguageContext";
import ExperienceSingle from "../components/ExperienceSingle";
import { experiences } from "../data/data";
import ButtunArrow from "/assets/ButtunArrow.svg";
import { useNavigate, useLocation } from "react-router";
import { useEffect } from "react";

export default function ExperiencesPage() {
  const { language } = useLanguage();
  const langKey = language === "fr" ? "fr" : "en";
  const navigate = useNavigate();
  const location = useLocation();
  const heading = {
    en: "Experience",
    fr: "Expérience",
  };

  const visitAllText = {
    en: "Back to home",
    fr: "Retour à l'accueil",
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <section className=" overflow-hidden  w-full px-4 lg:px-14 xl:px-20 bg-bg dark:bg-bgDark flex flex-col items:center lg:items-end pb-8 pt-16 lg:pt-20 xl:pt-22 lg:pb-16 xl:pb-22 gap-14 lg:gap-10 ">
      <span className="w-full  flex justify-center">
        <motion.h1
          initial={{
            opacity: 0,

            translateY: "50px",
          }}
          whileInView={{
            translateY: "0px",
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={{ once: false, margin: "400px 0px -100px 0px" }}
          style={{ transformOrigin: "50% 200px" }} // center OUTSIDE left side
          className="font-ncs text-[42px] md:text-[90px] text-bgDark dark:text-white"
        >
          {heading[langKey]}
        </motion.h1>
      </span>

      {experiences.map((exp, index) => (
        <ExperienceSingle
          key={index}
          index={index}
          title={exp.experiencetName[langKey]}
          decreption={exp.experienceDescription[langKey]}
        />
      ))}

      <motion.span
        onClick={() => navigate("/")}
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
        className=" group flex gap-3 md:gap-3.5 lg:gap-3 xl:gap-4 items-center justify-center mt-0 md:mt-[-30px] lg:mt-[-20px] xl:mt-[-40px]  "
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
