import { useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { motion } from "framer-motion";
import ScrollFloat from "../components/scrollFloat";
import Skill from "../components/Skill";
import SkillOption from "../components/SkillOption";
import { MySkills } from "../data/data";
import { useLanguage } from "../Contexts/LanguageContext";

export default function SkillsSection() {
  const { language } = useLanguage();
  const langKey = language === "fr" ? "fr" : "en";

  const heading = {
    en: "Skills",
    fr: "Skills",
  };

  type skillsType = {
    title: { en: string; fr: string };
    id: string;
    appear: boolean;
  };

  const skills: skillsType[] = [
    { title: { en: "Design", fr: "Design" }, id: "design", appear: true },
    {
      title: { en: "Web development", fr: "Développement Web" },
      id: "dev",
      appear: true,
    },
    {
      title: { en: "Multimedia", fr: "Multimédia" },
      id: "multimedia",
      appear: true,
    },
    {
      title: { en: "Soft skills", fr: "Soft skills" },
      id: "softSkills",
      appear: true,
    },
  ];

  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const changeTheSlide: (index: number) => void = (index) => {
    swiper?.slideToLoop(index);
  };

  const [skill, setSkill] = useState<string>(skills[0].id);

  return (
    <section
      id="Skills"
      className="relative w-full z-10  lg:min-h-220 xl:min-h-240 px-4 md:px-10 lg:px-14 xl:px-16 lg:pt-20 lg:pb-0 pb-0  pt-16 bg-bgLight dark:bg-bgDark flex gap-8 md:gap-10 lg:gap-16 flex-col items-center "
    >
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
      <motion.div
        initial={{
          translateY: "30px",
        }}
        whileInView={{
          translateY: "0px",
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: false, margin: "400px 0px -100px 0px" }}
        style={{ transformOrigin: "50% 200px" }} // center OUTSIDE left side
        className=" lg:flex-row flex-wrap border-bgDark dark:border-white items-center justify-center lg:p-[4px] gap-2 lg:gap-3 flex lg:rounded-full xl:border-2 "
      >
        {skills.map(
          (s, index) =>
            s.appear && (
              <Skill
                onClick={() => {
                  changeTheSlide(index);
                  setSkill(s.id);
                }}
                key={s.id}
                skill={{ ...s, title: s.title[langKey] }}
                currentSkill={skill}
              />
            ),
        )}
      </motion.div>

      <Swiper
        onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
        className="w-full "
        spaceBetween={0}
        loop
        slidesPerView={1}
        onSlideChange={(swiper) => {
          const activeSlideIndex = swiper.realIndex;
          setSkill(MySkills[activeSlideIndex].skillName.en);
        }}
      >
        {MySkills.map(
          (skill) =>
            skill.appear && (
              <SwiperSlide className="  w-full" key={skill.skillName.en}>
                <div className=" overflow-hidden py-10 w-full min-h-max pt-10 grid gap-2 md:gap-3 lg:gap-x-6 gap-y-8 md:gap-y-9 lg:gap-y-12  [grid-template-columns:repeat(auto-fit,minmax(118px,1fr))] md:[grid-template-columns:repeat(auto-fit,minmax(140px,1fr))] lg:[grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]">
                  {skill.skillsDetails.map((sk) => {
                    return (
                      sk.appear && (
                        <div
                          key={sk.name.en}
                          className=" w-full  h-max flex justify-center"
                        >
                          <SkillOption
                            field={skill.skillName[langKey]}
                            bgColor={sk.bgColor}
                            image={sk.image}
                            title={sk.name[langKey]}
                            percentage={sk.percentage}
                            outlineColor={sk.outlineColor}
                            textColor={sk.numberColor}
                            description={sk.description[langKey]}
                          />
                        </div>
                      )
                    );
                  })}
                </div>
              </SwiperSlide>
            ),
        )}
      </Swiper>
    </section>
  );
}
