import { useMediaQuery } from "react-responsive";
import Highlight from "../components/Highlight";
import HighlightPhone from "../components/HighlightPhone";
import { motion } from "framer-motion";
import { useLanguage } from "../Contexts/LanguageContext";

export default function HighlightSection() {
  const desktop = useMediaQuery({ query: "(min-width: 768px)" });
  const { language } = useLanguage();
  const langKey = language === "fr" ? "fr" : "en";

  const heading = {
    en: "Highlights",
    fr: "Points forts",
  };

  const highlights: {
    number: string;
    title: { en: string; fr: string };
    description: { en: string; fr: string };
  }[] = [
    {
      number: "3+",
      title: {
        en: "Web Projects Completed",
        fr: "Projets Web Complétés",
      },
      description: {
        en: "Built and delivered multiple full-stack and frontend projects from scratch, showcasing strong skills in UI/UX design and modern web development.",
        fr: "Construit et livré plusieurs projets full-stack et frontend de A à Z, démontrant de solides compétences en design UI/UX et développement web moderne.",
      },
    },
    {
      number: "5+",
      title: {
        en: "Tech Skills Mastered",
        fr: "Compétences Tech Maîtrisées",
      },
      description: {
        en: "Proficient in ReactJS, TypeScript, Tailwind CSS, Figma, and animation libraries, applying modern tools to build clean, interactive interfaces.",
        fr: "Compétent en ReactJS, TypeScript, Tailwind CSS, Figma et bibliothèques d'animation, appliquant des outils modernes pour créer des interfaces propres et interactives.",
      },
    },
    {
      number: "100%",
      title: {
        en: "Fully Responsive Web Sites",
        fr: "Sites Web Entièrement Responsives",
      },
      description: {
        en: "Designed every project to adapt seamlessly across desktop, tablet, and mobile devices, ensuring an optimal experience for all users.",
        fr: "Conçu chaque projet pour s'adapter parfaitement sur ordinateur, tablette et mobile, garantissant une expérience optimale pour tous les utilisateurs.",
      },
    },
  ];

  return (
    <section className="overflow-hidden  w-full bg-bgLight  dark:bg-bgDark flex flex-col gap-4 md:gap-10 lg:gap-14 pt-4 md:pt-10 lg:pt-14 pb-4 md:pb-8 lg:pb-10 items-start px-4 md:px-10 lg:px-20  ">
      <motion.p
        initial={{
          x: -150,
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
        viewport={{ once: false, margin: "400px 0px -150px 0px" }}
        className=" font-ncs text-bgDark dark:text-white text-3xl md:text-5xl lg:text-6xl"
      >
        {heading[langKey]}
      </motion.p>

      <motion.div
        initial={{
          opacity: 0,
          translateY: "50px",
        }}
        whileInView={{
          translateY: "0px",
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: false, margin: "400px 0px -100px 0px" }}
        style={{ transformOrigin: "50% 200px" }}
        className=" flex md:flex-row flex-col w-full  pt-5 pb-0.5 justify-between gap-3  md:gap-6 lg:gap-8 xl:gap-10 "
      >
        {highlights.map((h) =>
          desktop ? (
            <Highlight
              key={h.number}
              number={h.number}
              title={h.title[langKey]}
              description={h.description[langKey]}
            />
          ) : (
            <HighlightPhone
              key={h.number}
              number={h.number}
              title={h.title[langKey]}
              description={h.description[langKey]}
            />
          ),
        )}
      </motion.div>
    </section>
  );
}
