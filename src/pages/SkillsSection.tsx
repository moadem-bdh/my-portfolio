import { useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { motion } from "framer-motion";
import ScrollFloat from "../components/scrollFloat";
import Skill from "../components/Skill";
import SkillOption from "../components/SkillOption";
import { MySkills } from "../data/data";

export default function SkillsSection() {
  type skillsType = {
    title: string;
    id: string;
    appear: boolean;
  };

  const skills: skillsType[] = [
    { title: "Design", id: "design", appear: true },
    { title: "Web devolopment", id: "dev", appear: true },
    { title: "Multimedia", id: "multimedia", appear: true },
    { title: "Soft skills", id: "softSkills", appear: true },
  ];
  

  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const changeTheSlide: (index: number) => void = (index) => {
    swiper?.slideTo(index); //THERE IS A PROBLEM HERE THAT NEED TO BE FIXED SOOOON
  };

  const [skill, setSkill] = useState<string>(skills[0].id);

  return (
    <section
      id="Skills"
      className="relative w-full z-10  md:min-h-240 px-4 md:px-20 md:pt-20 md:pb-0 pb-0  pt-16 bg-bgLight dark:bg-bgDark flex gap-8 md:gap-16 flex-col items-center "
    >
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=55%"
        stagger={0.03}
        textClassName="font-ncs text-[42px] md:text-[90px] text-bgDark dark:text-white"
      >
        Skills
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
        className=" md:flex-row flex-wrap border-bgDark dark:border-white items-center justify-center md:p-[4px] gap-2 md:gap-4 flex md:border-2 md:rounded-full "
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
                skill={s}
                currentSkill={skill}
              />
            )
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
          setSkill(MySkills[activeSlideIndex].skillName);
        }}
      >
        {MySkills.map(
          (skill) =>
            skill.appear && (
              <SwiperSlide className="  w-full" key={skill.skillName}>
                <div className=" overflow-hidden py-10 w-full min-h-max pt-10 grid gap-2 md:gap-x-6 gap-y-8 md:gap-y-12  [grid-template-columns:repeat(auto-fit,minmax(112px,1fr))]   md:[grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]">
                  {skill.skillsDetails.map((sk) => {
                    return (
                      sk.appear && (
                        <div
                          key={sk.name}
                          className=" w-full  h-max flex justify-center"
                        >
                          <SkillOption
                            field={skill.skillName}
                            bgColor={sk.bgColor}
                            image={sk.image}
                            title={sk.name}
                            percentage={sk.percentage}
                            outlineColor={sk.outlineColor}
                            textColor={sk.numberColor}
                          />
                        </div>
                      )
                    );
                  })}
                </div>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </section>
  );
}
