import Skill from "../components/Skill";
import SkillOption from "../components/SkillOption";
import Photoshop from "../assets/photos/Photoshop.svg";
import InDesign from "../assets/photos/id.svg";
import Lightroom from "../assets/photos/lr.svg";
import Illustrator from "../assets/photos/ai.svg";
import XD from "../assets/photos/xd.svg";
import Figma from "../assets/photos/figma.svg";
import Blender from "../assets/photos/blender.svg";
import react from "../assets/photos/react.svg";
import mongoDB from "../assets/photos/mongoDB.svg";
import nodeJs from "../assets/photos/nodeJs.svg";
import mySql from "../assets/photos/mySql.svg";
import nextJs from "../assets/photos/nextJs.svg";
import php from "../assets/photos/php.svg";
import js from "../assets/photos/js.svg";
import c from "../assets/photos/C.svg";
import python from "../assets/photos/python.svg";
import ts from "../assets/photos/ts.svg";
import ae from "../assets/photos/ae.svg";
import pr from "../assets/photos/pr.svg";
import capcut from "../assets/photos/capcut.svg";
import creativeThinking from "../assets/photos/creativeThinking.svg";
import DecisionMaking from "../assets/photos/DecisionMaking.svg";
import ladership from "../assets/photos/ladership.svg";
import networking from "../assets/photos/networking.svg";
import problemSolving from "../assets/photos/problemSolving.svg";
import teamWork from "../assets/photos/teamWork.svg";
import timePlaning from "../assets/photos/timePlaning.svg";
import { useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export default function SkillsSection() {
  type skillsType = {
    title: string;
    id: string;
    appear : boolean
  };
  const skills: skillsType[] = [
    { title: "Design", id: "design" , appear :true  },
    { title: "Web devolopment", id: "dev" , appear :true },
    { title: "Multimedia", id: "multimedia"  , appear :true},
    { title: "Soft skills", id: "softSkills" , appear :true },
  ];

  type SkillDetailsType = {
    image: string;
    name: string;
    description: string;
    appear: boolean;
    outlineColor: string;
    bgColor: string;
    numberColor: string;
    percentage: number;
  };

  type MyskillsType = {
    skillName: string;
    appear: boolean;
    skillsDetails: SkillDetailsType[];
  };




  //NOTE !! WHEN YOU WANT TO REMOVE ONE OF THE SKILLS MAKE IT FALSE AND MAKE THAT SKILL AT THE END OF THE ARRAY SO IT WORKS PWRFECTLY 

  const MySkills: MyskillsType[] = [
    {
      skillName: "design",
      appear: true,
      skillsDetails: [
        {
          image: Photoshop,
          name: "Adobe Photoshop",
          description:
            "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci.",
          appear: true,
          outlineColor: "#31A8FFB2",
          bgColor: "bg-[#31A8FF4D]",
          numberColor: "text-[#31A8FF]",
          percentage: 80,
        },
        {
          image: InDesign,
          name: "Adobe InDesign",
          description:
            "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci.",
          appear: true,
          outlineColor: "#FF5C85B2",
          bgColor: "bg-[#FF5C854D]",
          numberColor: "text-[#FF5C85]",
          percentage: 80,
        },
        {
          image: Lightroom,
          name: "Adobe Lightroom",
          description:
            "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci.",
          appear: true,
          outlineColor: "#31A8FFB2",
          bgColor: "bg-[#31A8FF4D]",
          numberColor: "text-[#31A8FF]",
          percentage: 85,
        },
        {
          image: Illustrator,
          name: "Adobe Illustrator",
          description:
            "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci.",
          appear: true,
          outlineColor: "#FFAA29B2",
          bgColor: "bg-[#FFAA294D]",
          numberColor: "text-[#FFAA29]",
          percentage: 100,
        },
        {
          image: XD,
          name: "Adobe XD",
          description:
            "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci.",
          appear: true,
          outlineColor: "#FF61F6B2",
          bgColor: "bg-[#FF8AF84D]",
          numberColor: "text-[#FF61F6]",
          percentage: 80,
        },
        {
          image: Figma,
          name: "Figma",
          description:
            "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci.",
          appear: true,
          outlineColor: "#FF7262B2",
          bgColor: "bg-[#FF72624D]",
          numberColor: "text-[#FF7262]",
          percentage: 90,
        },
        {
          image: Blender,
          name: "Blender",
          description:
            "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci.",
          appear: true,
          outlineColor: "#FFF4EE",
          bgColor: "bg-[#E853004D]",
          numberColor: "text-[#FFF4EE]",
          percentage: 20,
        },
      ],
    },
    {
      skillName: "dev",
      appear: true,
      skillsDetails: [
        {
          image: react,
          name: "React JS",
          description:
            "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
          appear: true,
          outlineColor: "#89E3FCB2",
          bgColor: "bg-[#89E3FC4D]",
          numberColor: "text-[#89E3FC]",
          percentage: 85,
        },
        {
          image: mongoDB,
          name: "Mongo DB",
          description:
            "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
          appear: true,
          outlineColor: "#50B73E",
          bgColor: "bg-[#50B73E4D]",
          numberColor: "text-[#50B73E]",
          percentage: 95,
        },
        {
          image: nodeJs,
          name: "Node JS",
          description: "",
          appear: true,
          outlineColor: "#BDE191",
          bgColor: "bg-[#BDE1914D]",
          numberColor: "text-[#BDE191B2]",
          percentage: 90,
        },
        {
          image: mySql,
          name: "My SQL",
          description: "",
          appear: true,
          outlineColor: "#007EB3B2",
          bgColor: "bg-[#007EB34D]",
          numberColor: "text-[#61ACCB]",
          percentage: 80,
        },
        {
          image: nextJs,
          name: "Next JS",
          description: "",
          appear: true,
          outlineColor: "#8B8B8BB2",
          bgColor: "bg-[#8B8B8B4D]",
          numberColor: "text-[#8B8B8B]",
          percentage: 80,
        },
        {
          image: php,
          name: "PHP",
          description: "",
          appear: true,
          outlineColor: "#C6C7DFB2",
          bgColor: "bg-[#C6C7DF4D]",
          numberColor: "text-[#C6C7DF]",
          percentage: 20,
        },
        {
          image: js,
          name: "JavaScript",
          description: "",
          appear: true,
          outlineColor: "#B09C0FB2",
          bgColor: "bg-[#B09C0F4D]",
          numberColor: "text-[#B09C0F]",
          percentage: 90,
        },
        {
          image: c,
          name: "C",
          description: "",
          appear: true,
          outlineColor: "#96CDFFB2",
          bgColor: "bg-[#0059AB4D]",
          numberColor: "text-white",
          percentage: 90,
        },
        {
          image: python,
          name: "Python",
          description: "",
          appear: true,
          outlineColor: "#387EB8B2",
          bgColor: "bg-[#387EB84D]",
          numberColor: "text-[#387EB8]",
          percentage: 45,
        },
        {
          image: ts,
          name: "TypeScript",
          description: "",
          appear: true,
          outlineColor: "#004F85B2",
          bgColor: "bg-[#004F854D]",
          numberColor: "text-[#004F85]",
          percentage: 90,
        },
      ],
    },
    {
      skillName: "multimedia",
      appear: true,
      skillsDetails: [
        {
          image: ae,
          name: "Adobe After Effects",
          description:
            "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
          appear: true,
          outlineColor: "#C2C2FFB2",
          bgColor: "bg-[#C2C2FF4D]",
          numberColor: "text-[#C2C2FF]",
          percentage: 85,
        },
        {
          image: pr,
          name: "Adobe Premier",
          description:
            "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
          appear: true,
          outlineColor: "#C2C2FFB2",
          bgColor: "bg-[#C2C2FF4D]",
          numberColor: "text-[#C2C2FF]",
          percentage: 80,
        },
        {
          image: capcut,
          name: "Cup Cut",
          description:
            "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
          appear: true,
          outlineColor: "#8B8B8BB2",
          bgColor: "bg-[#8B8B8B4D]",
          numberColor: "text-[#8B8B8B]",
          percentage: 75,
        },
        {
          image: Blender,
          name: "Blender",
          description:
            "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci.",
          appear: true,
          outlineColor: "#FFF4EE",
          bgColor: "bg-[#E853004D]",
          numberColor: "text-[#FFF4EE]",
          percentage: 20,
        },
      ],
    },
    {
      skillName: "softSkills",
      appear: true,
      skillsDetails: [
        {
          image: problemSolving,
          name: "Problem solving",
          description:
            "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
          appear: true,
          outlineColor: "#8B8B8BB8",
          bgColor: "#8B8B8B4D",
          numberColor: "text-[#8B8B8B]",
          percentage: 95,
        },
        {
          image: creativeThinking,
          name: "Creative thinking",
          description:
            "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
          appear: true,
          outlineColor: "#8B8B8BB8",
          bgColor: "#8B8B8B4D",
          numberColor: "text-[#8B8B8B]",
          percentage: 93,
        },
        {
          image: DecisionMaking,
          name: "Decision making",
          description:
            "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
          appear: true,
          outlineColor: "#8B8B8BB8",
          bgColor: "#8B8B8B4D",
          numberColor: "text-[#8B8B8B]",
          percentage: 95,
        },
        {
          image: teamWork,
          name: "Team working",
          description:
            "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
          appear: true,
          outlineColor: "#8B8B8BB8",
          bgColor: "#8B8B8B4D",
          numberColor: "text-[#8B8B8B]",
          percentage: 98,
        },
        {
          image: timePlaning,
          name: "Time planning",
          description:
            "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
          appear: true,
          outlineColor: "#8B8B8BB8",
          bgColor: "#8B8B8B4D",
          numberColor: "text-[#8B8B8B]",
          percentage: 90,
        },
        {
          image: ladership,
          name: "Leadership",
          description:
            "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
          appear: true,
          outlineColor: "#8B8B8BB8",
          bgColor: "#8B8B8B4D",
          numberColor: "text-[#8B8B8B]",
          percentage: 97,
        },
        {
          image: networking,
          name: "Networking",
          description:
            "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
          appear: true,
          outlineColor: "#8B8B8BB8",
          bgColor: "#8B8B8B4D",
          numberColor: "text-[#8B8B8B]",
          percentage: 89,
        },
      ],
    },
  ];


  const [swiper, setSwiper] = useState<SwiperType | null>(null);


  const changeTheSlide : (index :number)=> void = (index) =>{
  swiper?.slideTo(index)

  }

  const [skill, setSkill] = useState<string>(skills[0].id);

  return (
    <section id="Skills" className=" w-full  md:min-h-240 px-4 md:px-20 md:pt-20 md:pb-0 pb-14  pt-16 bg-bgDark flex gap-8 md:gap-16 flex-col items-center ">
      <h1 className=" md:text-[90px] text-[48px] font-ncs text-white ">
        Skills
      </h1>
      <div className=" md:border-0.5 md:flex-row flex-wrap border-white items-center justify-center md:p-[4px] gap-2 md:gap-4 flex md:border-2 md:rounded-full ">
        {skills.map((s, index) => (
         s.appear && <Skill
            onClick={() => {
              changeTheSlide(index);
              setSkill(s.id);
            }}
            key={s.id}
            skill={s}
            currentSkill={skill}
          />
        ))}
      </div>

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
        {MySkills.map((skill) => skill.appear && (
          <SwiperSlide className="w-full" key={skill.skillName}>
            <div className=" w-full min-h-max pt-10 grid gap-2 md:gap-x-6 gap-y-8 md:gap-y-12  [grid-template-columns:repeat(auto-fit,minmax(112px,1fr))]   md:[grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]">
              {skill.skillsDetails.map((sk) => {
                return (
                  sk.appear &&
                  <div
                    key={sk.name}
                    className=" w-full h-max flex justify-center"
                  >
                    <SkillOption
                      bgColor={sk.bgColor}
                      image={sk.image}
                      title={sk.name}
                      percentage={sk.percentage}
                      outlineColor={sk.outlineColor}
                      textColor={sk.numberColor}
                    />
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
