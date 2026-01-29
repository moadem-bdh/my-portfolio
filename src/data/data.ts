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

//TYPE LANGUAGE SUPPORT
type LanguageContent = {
  en: string;
  fr: string;
};

//TYPE EXPERIENCE
type experienceType = {
  id: number;
  experiencetName: LanguageContent;
  experienceDescription: LanguageContent;
  images: string[];
};

//TYPES SKILLS

type SkillDetailsType = {
  image: string;
  name: LanguageContent;
  description: LanguageContent;
  appear: boolean;
  outlineColor: string;
  bgColor: string;
  numberColor: string;
  percentage: number;
};

type MyskillsType = {
  skillName: LanguageContent;
  appear: boolean;
  skillsDetails: SkillDetailsType[];
};

//TYPE PROJECT
type projectType = {
  id: number;
  projectName: LanguageContent;
  projectType: LanguageContent;
  projectDescription: LanguageContent;
  projectLink: string;
  images: string[];
};

//Type About Me
type aboutMeType = {
  FirstName: LanguageContent;
  FamilyName: LanguageContent;
  About: LanguageContent;
  ocupation: LanguageContent[];
  iamge: string;
};

//About Me SECTION
export const AboutMe: aboutMeType = {
  FirstName: {
    en: "Mohamed Adem",
    fr: "Mohamed Adem",
  },
  FamilyName: {
    en: "BOUDEHANE",
    fr: "BOUDEHANE",
  },
  About: {
    en: "...",
    fr: "...",
  },
  ocupation: [
    {
      en: "Graphic & UI/UX Designer",
      fr: "Designer Graphique & UI/UX",
    },
    {
      en: "Full Stack Developer",
      fr: "Développeur Full Stack",
    },
  ],
  iamge: "...",
};

//Skills SECTION
//NOTE !! WHEN YOU WANT TO REMOVE ONE OF THE SKILLS MAKE IT FALSE AND MAKE THAT SKILL AT THE END OF THE ARRAY SO IT WORKS PWRFECTLY

export const MySkills: MyskillsType[] = [
  {
    skillName: {
      en: "design",
      fr: "design",
    },
    appear: true,
    skillsDetails: [
      {
        image: Photoshop,
        name: {
          en: "Adobe Photoshop",
          fr: "Adobe Photoshop",
        },
        description: {
          en: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci.",
          fr: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci.",
        },
        appear: true,
        outlineColor: "#31A8FFB2",
        bgColor: "bg-[#31A8FF4D]",
        numberColor: "text-[#31A8FF]",
        percentage: 80,
      },
      {
        image: InDesign,
        name: {
          en: "Adobe InDesign",
          fr: "Adobe InDesign",
        },
        description: {
          en: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci.",
          fr: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci.",
        },
        appear: true,
        outlineColor: "#FF5C85B2",
        bgColor: "bg-[#FF5C854D]",
        numberColor: "text-[#FF5C85]",
        percentage: 80,
      },
      {
        image: Lightroom,
        name: {
          en: "Adobe Lightroom",
          fr: "Adobe Lightroom",
        },
        description: {
          en: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci.",
          fr: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci.",
        },
        appear: true,
        outlineColor: "#31A8FFB2",
        bgColor: "bg-[#31A8FF4D]",
        numberColor: "text-[#31A8FF]",
        percentage: 85,
      },
      {
        image: Illustrator,
        name: {
          en: "Adobe Illustrator",
          fr: "Adobe Illustrator",
        },
        description: {
          en: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci.",
          fr: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci.",
        },
        appear: true,
        outlineColor: "#FFAA29B2",
        bgColor: "bg-[#FFAA294D]",
        numberColor: "text-[#FFAA29]",
        percentage: 100,
      },
      {
        image: XD,
        name: {
          en: "Adobe XD",
          fr: "Adobe XD",
        },
        description: {
          en: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci.",
          fr: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci.",
        },
        appear: true,
        outlineColor: "#FF61F6B2",
        bgColor: "bg-[#FF8AF84D]",
        numberColor: "text-[#FF61F6]",
        percentage: 80,
      },
      {
        image: Figma,
        name: {
          en: "Figma",
          fr: "Figma",
        },
        description: {
          en: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci.",
          fr: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci.",
        },
        appear: true,
        outlineColor: "#FF7262B2",
        bgColor: "bg-[#FF72624D]",
        numberColor: "text-[#FF7262]",
        percentage: 90,
      },
      {
        image: Blender,
        name: {
          en: "Blender",
          fr: "Blender",
        },
        description: {
          en: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci.",
          fr: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci.",
        },
        appear: true,
        outlineColor: "#FFF4EE",
        bgColor: "bg-[#E853004D]",
        numberColor: "text-[#FFF4EE]",
        percentage: 20,
      },
    ],
  },
  {
    skillName: {
      en: "dev",
      fr: "dev",
    },
    appear: true,
    skillsDetails: [
      {
        image: react,
        name: {
          en: "React JS",
          fr: "React JS",
        },
        description: {
          en: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
          fr: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
        },
        appear: true,
        outlineColor: "#89E3FCB2",
        bgColor: "bg-[#89E3FC4D]",
        numberColor: "text-[#89E3FC]",
        percentage: 85,
      },
      {
        image: mongoDB,
        name: {
          en: "Mongo DB",
          fr: "Mongo DB",
        },
        description: {
          en: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
          fr: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
        },
        appear: true,
        outlineColor: "#50B73E",
        bgColor: "bg-[#50B73E4D]",
        numberColor: "text-[#50B73E]",
        percentage: 95,
      },
      {
        image: nodeJs,
        name: {
          en: "Node JS",
          fr: "Node JS",
        },
        description: {
          en: "",
          fr: "",
        },
        appear: true,
        outlineColor: "#BDE191",
        bgColor: "bg-[#BDE1914D]",
        numberColor: "text-[#BDE191B2]",
        percentage: 90,
      },
      {
        image: mySql,
        name: {
          en: "My SQL",
          fr: "My SQL",
        },
        description: {
          en: "",
          fr: "",
        },
        appear: true,
        outlineColor: "#007EB3B2",
        bgColor: "bg-[#007EB34D]",
        numberColor: "text-[#61ACCB]",
        percentage: 80,
      },
      {
        image: nextJs,
        name: {
          en: "Next JS",
          fr: "Next JS",
        },
        description: {
          en: "",
          fr: "",
        },
        appear: true,
        outlineColor: "#8B8B8BB2",
        bgColor: "bg-[#8B8B8B4D]",
        numberColor: "text-[#8B8B8B]",
        percentage: 80,
      },
      {
        image: php,
        name: {
          en: "PHP",
          fr: "PHP",
        },
        description: {
          en: "",
          fr: "",
        },
        appear: true,
        outlineColor: "#C6C7DFB2",
        bgColor: "bg-[#C6C7DF4D]",
        numberColor: "text-[#C6C7DF]",
        percentage: 20,
      },
      {
        image: js,
        name: {
          en: "JavaScript",
          fr: "JavaScript",
        },
        description: {
          en: "",
          fr: "",
        },
        appear: true,
        outlineColor: "#B09C0FB2",
        bgColor: "bg-[#B09C0F4D]",
        numberColor: "text-[#B09C0F]",
        percentage: 90,
      },
      {
        image: c,
        name: {
          en: "C",
          fr: "C",
        },
        description: {
          en: "",
          fr: "",
        },
        appear: true,
        outlineColor: "#96CDFFB2",
        bgColor: "bg-[#0059AB4D]",
        numberColor: "text-white",
        percentage: 90,
      },
      {
        image: python,
        name: {
          en: "Python",
          fr: "Python",
        },
        description: {
          en: "",
          fr: "",
        },
        appear: true,
        outlineColor: "#387EB8B2",
        bgColor: "bg-[#387EB84D]",
        numberColor: "text-[#387EB8]",
        percentage: 45,
      },
      {
        image: ts,
        name: {
          en: "TypeScript",
          fr: "TypeScript",
        },
        description: {
          en: "",
          fr: "",
        },
        appear: true,
        outlineColor: "#004F85B2",
        bgColor: "bg-[#004F854D]",
        numberColor: "text-[#004F85]",
        percentage: 90,
      },
    ],
  },
  {
    skillName: {
      en: "multimedia",
      fr: "multimedia",
    },
    appear: true,
    skillsDetails: [
      {
        image: ae,
        name: {
          en: "Adobe After Effects",
          fr: "Adobe After Effects",
        },
        description: {
          en: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
          fr: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
        },
        appear: true,
        outlineColor: "#C2C2FFB2",
        bgColor: "bg-[#C2C2FF4D]",
        numberColor: "text-[#C2C2FF]",
        percentage: 85,
      },
      {
        image: pr,
        name: {
          en: "Adobe Premiere",
          fr: "Adobe Premiere",
        },
        description: {
          en: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
          fr: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
        },
        appear: true,
        outlineColor: "#C2C2FFB2",
        bgColor: "bg-[#C2C2FF4D]",
        numberColor: "text-[#C2C2FF]",
        percentage: 80,
      },
      {
        image: capcut,
        name: {
          en: "CapCut",
          fr: "CapCut",
        },
        description: {
          en: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
          fr: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
        },
        appear: true,
        outlineColor: "#8B8B8BB2",
        bgColor: "bg-[#8B8B8B4D]",
        numberColor: "text-[#8B8B8B]",
        percentage: 75,
      },
      {
        image: Blender,
        name: {
          en: "Blender",
          fr: "Blender",
        },
        description: {
          en: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci.",
          fr: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci.",
        },
        appear: true,
        outlineColor: "#FFF4EE",
        bgColor: "bg-[#E853004D]",
        numberColor: "text-[#FFF4EE]",
        percentage: 20,
      },
    ],
  },
  {
    skillName: {
      en: "softSkills",
      fr: "Compétences personnelles",
    },
    appear: true,
    skillsDetails: [
      {
        image: problemSolving,
        name: {
          en: "Problem solving",
          fr: "Résolution de problèmes",
        },
        description: {
          en: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
          fr: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
        },
        appear: true,
        outlineColor: "#8B8B8BB8",
        bgColor: "#8B8B8B4D",
        numberColor: "text-[#8B8B8B]",
        percentage: 95,
      },
      {
        image: creativeThinking,
        name: {
          en: "Creative thinking",
          fr: "Pensée créative",
        },
        description: {
          en: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
          fr: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
        },
        appear: true,
        outlineColor: "#8B8B8BB8",
        bgColor: "#8B8B8B4D",
        numberColor: "text-[#8B8B8B]",
        percentage: 93,
      },
      {
        image: DecisionMaking,
        name: {
          en: "Decision making",
          fr: "Prise de décision",
        },
        description: {
          en: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
          fr: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
        },
        appear: true,
        outlineColor: "#8B8B8BB8",
        bgColor: "#8B8B8B4D",
        numberColor: "text-[#8B8B8B]",
        percentage: 95,
      },
      {
        image: teamWork,
        name: {
          en: "Team working",
          fr: "Travail en équipe",
        },
        description: {
          en: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
          fr: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
        },
        appear: true,
        outlineColor: "#8B8B8BB8",
        bgColor: "#8B8B8B4D",
        numberColor: "text-[#8B8B8B]",
        percentage: 98,
      },
      {
        image: timePlaning,
        name: {
          en: "Time planning",
          fr: "Planification du temps",
        },
        description: {
          en: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
          fr: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
        },
        appear: true,
        outlineColor: "#8B8B8BB8",
        bgColor: "#8B8B8B4D",
        numberColor: "text-[#8B8B8B]",
        percentage: 90,
      },
      {
        image: ladership,
        name: {
          en: "Leadership",
          fr: "Leadership",
        },
        description: {
          en: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
          fr: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
        },
        appear: true,
        outlineColor: "#8B8B8BB8",
        bgColor: "#8B8B8B4D",
        numberColor: "text-[#8B8B8B]",
        percentage: 97,
      },
      {
        image: networking,
        name: {
          en: "Networking",
          fr: "Réseautage",
        },
        description: {
          en: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
          fr: "Lorem ipsum dolor sit amet consectetur. Tempor tristique aliquam et orci. Leo auctor dolor at leo urna vel.",
        },
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
    experiencetName: {
      en: "PASCAL Training",
      fr: "Formation PASCAL",
    },
    experienceDescription: {
      en: "....",
      fr: "....",
    },
    images: ["..", ".."],
  },
  {
    id: 2,
    experiencetName: {
      en: "CAA Training",
      fr: "Formation CAA",
    },
    experienceDescription: {
      en: "....",
      fr: "....",
    },
    images: ["..", ".."],
  },
  {
    id: 3,
    experiencetName: {
      en: "ESMS Mentoring",
      fr: "Mentorat ESMS",
    },
    experienceDescription: {
      en: "....",
      fr: "....",
    },
    images: ["..", ".."],
  },
  {
    id: 4,
    experiencetName: {
      en: "DataHack Organizing",
      fr: "Organisation DataHack",
    },
    experienceDescription: {
      en: "....",
      fr: "....",
    },
    images: ["..", ".."],
  },
  {
    id: 5,
    experiencetName: {
      en: "EntrepriseXplore Managing",
      fr: "Gestion EntrepriseXplore",
    },
    experienceDescription: {
      en: "....",
      fr: "....",
    },
    images: ["..", ".."],
  },
];

//Project SECTION
export const projects: projectType[] = [
  {
    id: 1,
    projectName: {
      en: "Portfolio Website",
      fr: "Site Web Portfolio",
    },
    projectType: {
      en: "Development & UI/UX project",
      fr: "Projet Développement & UI/UX",
    },
    projectDescription: {
      en: "...",
      fr: "...",
    },
    projectLink: "https://",
    images: [],
  },
  {
    id: 2,
    projectName: {
      en: "E-Commerce Platform",
      fr: "Plateforme E-Commerce",
    },
    projectType: {
      en: "Full Stack Development",
      fr: "Développement Full Stack",
    },
    projectDescription: {
      en: "...",
      fr: "...",
    },
    projectLink: "https://",
    images: [],
  },
  {
    id: 3,
    projectName: {
      en: "Mobile App",
      fr: "Application Mobile",
    },
    projectType: {
      en: "Mobile Development",
      fr: "Développement Mobile",
    },
    projectDescription: {
      en: "...",
      fr: "...",
    },
    projectLink: "https://",
    images: [],
  },
];
