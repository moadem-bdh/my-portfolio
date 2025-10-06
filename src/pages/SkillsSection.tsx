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

export default function SkillsSection() {
  type skillsType = {
    title: string;
    id: string;
  };
  const skills: skillsType[] = [
    { title: "Design", id: "design" },
    { title: "Web devolopment", id: "dev" },
    { title: "Multimedia", id: "multimedia" },
    { title: "Soft skills", id: "softSkills" },
  ];

  type skillType = {
    skill: string;
    image: string;
    name: string;
    description: string;
    appear: boolean;
    outlineColor: string;
    bgColor: string;
    numberColor: string;
    percentage: number;
  }[];

  const MySkills: skillType = [
    {
      skill: "design",
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
      skill: "design",
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
      skill: "design",
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
      skill: "design",
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
      skill: "design",
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
      skill: "design",
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
      skill: "design",
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
    {
      skill: "dev",
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
      skill: "dev",
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
      skill: "dev",
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
      skill: "dev",
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
      skill: "dev",
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
      skill: "dev",
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
      skill: "dev",
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
      skill: "dev",
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
      skill: "dev",
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
      skill: "dev",
      image: ts,
      name: "TypeScript",
      description: "",
      appear: true,
      outlineColor: "#004F85B2",
      bgColor: "bg-[#004F854D]",
      numberColor: "text-[#004F85]",
      percentage: 90,
    },
    {
      skill: "multimedia",
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
      skill: "multimedia",
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
      skill: "multimedia",
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
      skill: "multimedia",
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
    {
      skill: "softSkills",
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
      skill: "softSkills",
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
      skill: "softSkills",
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
      skill: "softSkills",
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
      skill: "softSkills",
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
      skill: "softSkills",
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
      skill: "softSkills",
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
  ];

  const [skill, setSkill] = useState<string>(skills[1].id);

  return (
    <section className=" w-full md:min-h-240 px-4 md:p-20 py-20  pt-5 bg-bgDark flex gap-16 flex-col items-center ">

      <h1 className=" md:text-[90px] text-[48px] font-ncs text-white ">Skills</h1>
      <div className=" md:border-0.5 md:flex-row flex-wrap border-white items-center justify-center md:p-[4px] gap-2 md:gap-4 flex md:border-2 md:rounded-full ">
        {skills.map((s) => (
          <Skill
            key={s.id}
            skill={s}
            currentSkill={skill}
            setSkill={setSkill}
          />
        ))}
      </div>

      <div className=" w-full min-h-max pt-10 grid gap-2 md:gap-x-6 gap-y-8 md:gap-y-12  [grid-template-columns:repeat(auto-fit,minmax(112px,1fr))]   md:[grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]">
        {MySkills.map((sk) => {
          if (sk.skill === skill) {
            return (
              <div  key={sk.name} className=" w-full h-max flex justify-center">
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
          }
        })}
      </div>
    </section>
  );
}
