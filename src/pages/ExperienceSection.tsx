import Experience from "../components/Experience";
import ExperienceSwiper from "../components/ExperienceSwiper";
import { SwiperSlide } from "swiper/react";
import ButtunArrow from "/assets/ButtunArrow.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import { experiences } from "../data/data";
import { useLanguage } from "../Contexts/LanguageContext";

export default function ExperienceSection() {
  const [swiperChanged, setSwiperChanged] = useState<number>(0);
  const { language } = useLanguage();
  const langKey = language === "fr" ? "fr" : "en";

  const heading = {
    en: "Experience",
    fr: "Expérience",
  };

  const visitAllText = {
    en: "Visit all experiences",
    fr: "Voir toutes les expériences",
  };

  return (
    <section
      id="Experience"
      className=" overflow-hidden  relative min-h-150 z-0 bg-bgL4 dark:bg-bgDark flex flex-col pt-14  items-center lg:pt-20 lg:items-end gap-18 lg:gap-20 px-4 md:px-10 lg:px-20"
    >
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
          className="font-ncs text-[42px] lg:text-[90px] text-bgDark dark:text-white"
        >
          {heading[langKey]}
        </motion.h1>
      </span>

      <ExperienceSwiper setSwiperChanged={setSwiperChanged}>
        {experiences.map((exp) => (
          <SwiperSlide key={exp.id}>
            <Experience
              changeEffect={swiperChanged}
              title={exp.experiencetName[langKey]}
              decreption={exp.experienceDescription[langKey]}
            />
          </SwiperSlide>
        ))}
      </ExperienceSwiper>
      <motion.span
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
        className=" group flex gap-3 lg:gap-4 items-center justify-center mt-[-50px]  "
      >
        <p className="  cursor-pointer font-ncs text-[18px] lg:text-[30px] text-bgDark dark:text-white ">
          {visitAllText[langKey]}
        </p>

        <div
          className={` group-hover:translate-x-2 cursor-pointer lg:border-2 rounded-[100px] h-max w-max lg:p-2.5 p-2 border-bgDark dark:border-white border-1  transition-all ease-in-out duration-300 group-hover:bg-bgDark group-hover:dark:bg-white hover:boeder-0`}
        >
          <img
            src={ButtunArrow}
            className={` h-[10px] lg:h-5 group-hover:rotate-45 invert dark:invert-0 group-hover:dark:invert group-hover:invert-0 transition-all ease-in-out duration-300`}
            alt="Arrow Icon"
          />
        </div>
      </motion.span>
    </section>
  );
}
