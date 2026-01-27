//EXPORTATIONS
import Photoshop from "/assets/Photoshop.svg";
import InDesign from "/assets/id.svg";
import Lightroom from "/assets/lr.svg";
import Illustrator from "/assets/ai.svg";
import XD from "/assets/xd.svg";
import Figma from "/assets/figma.svg";
import Blender from "/assets/blender.svg";
import react from "/assets/react.svg";
import mongoDB from "/assets/mongoDB.svg";
import nodeJs from "/assets/nodeJs.svg";
import mySql from "/assets/mySql.svg";
import nextJs from "/assets/nextJs.svg";
import php from "/assets/php.svg";
import js from "/assets/js.svg";
import c from "/assets/C.svg";
import python from "/assets/python.svg";
import ts from "/assets/ts.svg";
import ae from "/assets/ae.svg";
import pr from "/assets/pr.svg";
import capcut from "/assets/capcut.svg";
import creativeThinking from "/assets/creativeThinking.svg";
import DecisionMaking from "/assets/DecisionMaking.svg";
import ladership from "/assets/ladership.svg";
import networking from "/assets/networking.svg";
import problemSolving from "/assets/problemSolving.svg";
import teamWork from "/assets/teamWork.svg";
import timePlaning from "/assets/timePlaning.svg";

//TYPES OF THE DATA (DATA STRUCTURE)

//TYPE EXPERIENCE
type experienceType = {
  id: number;
  experiencetName: string;
  experienceDescription: string;
  images: string[];
};

//TYPES SKILLS

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

//TYPE PROJECT
type projectType = {
  id: number;
  projectName: string;
  projectType: string;
  projectDescription: string;
  projectLink: string;
  images: string[];
};

//Type About Me
type aboutMeType = {
  FirstName: string;
  FamilyName: string;
  About: string;
  ocupation: string[];
  iamge: string;
};

//About Me SECTION
export const AboutMe: aboutMeType = {
  FirstName: "Mohamed Adem",
  FamilyName: "BOUDEHANE",
  About: "...",
  ocupation: ["Graphic & UI/UX Designer", "Full Stack Devoloper"],
  iamge: "...",
};

//Skills SECTION
//NOTE !! WHEN YOU WANT TO REMOVE ONE OF THE SKILLS MAKE IT FALSE AND MAKE THAT SKILL AT THE END OF THE ARRAY SO IT WORKS PWRFECTLY

export const MySkills: MyskillsType[] = [
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

//Experience SECTION
export const experiences: experienceType[] = [
  {
    id: 1,
    experiencetName: "PASCAL Training",
    experienceDescription: "....",
    images: ["..", ".."],
  },

  {
    id: 2,
    experiencetName: "CAA Training",
    experienceDescription: "....",
    images: ["..", ".."],
  },

  {
    id: 1,
    experiencetName: "ESMS Mentoring",
    experienceDescription: "....",
    images: ["..", ".."],
  },

  {
    id: 1,
    experiencetName: "DataHack Organizing",
    experienceDescription: "....",
    images: ["..", ".."],
  },

  {
    id: 1,
    experiencetName: "EntrepriseXplore Managing",
    experienceDescription: "....",
    images: ["..", ".."],
  },
];

//Project SECTION
export const projects: projectType[] = [
  {
    id: 1,
    projectName: ". Portfolio Website",
    projectType: "Devolopment & UI/UX project ",
    projectDescription: "...",
    projectLink: "...",
    images: ["..."],
  },

  {
    id: 2,
    projectName: ". Vamos Website",
    projectType: "Devolopment & UI/UX project ",
    projectDescription: "...",
    projectLink: "...",
    images: ["..."],
  },

  {
    id: 3,
    projectName: ".  ",
    projectType: "Devolopment & UI/UX project ",
    projectDescription: "...",
    projectLink: "...",
    images: ["..."],
  },
];
