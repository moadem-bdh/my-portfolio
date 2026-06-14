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
import java from "/assets/java.svg";

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
  skillName: string;
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
  image: string;
};

//HIFHLIGHT SECTION
export const highlights: {
  number: string;
  title: { en: string; fr: string };
  description: { en: string; fr: string };
}[] = [
  {
    number: "4+",
    title: {
      en: "Web Projects Completed",
      fr: "Web Projets Complétés",
    },
    description: {
      en: "Built and delivered multiple frontend projects from scratch, showcasing strong skills in UI/UX design and modern web development.",
      fr: "Créé et livré plusieurs projets frontend depuis zéro, montrant de solides compétences en UI/UX et développement web.",
    },
  },
  {
    number: "10+",
    title: {
      en: "Tech Skills Mastered",
      fr: "Tech skills Maîtrisées",
    },
    description: {
      en: "Proficient in ReactJS, TypeScript, Tailwind CSS, Figma, and animation libraries, applying modern tools to build clean, interactive interfaces.",
      fr: "Maîtrise de ReactJS, TypeScript, Tailwind CSS, et Figma, utilisant outils modernes pour créer interfaces claires.",
    },
  },
  {
    number: "100%",
    title: {
      en: "Fully Responsive Web Sites",
      fr: "Sites Web Entièrement Adaptés",
    },
    description: {
      en: "Designed every project to adapt seamlessly across desktop, tablet, and mobile devices, ensuring an optimal experience for all users.",
      fr: "Conçu chaque projet pour s'adapter sur ordinateur, tablette et mobile, garantissant une expérience optimale pour tous les utilisateurs.",
    },
  },
];

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
  en: `My name is Mohamed Adem Boudehane, and I am a second-year student at the École Nationale
Supérieure d'Informatique (ESI) with a strong passion for web development and UI/UX design.
I enjoy creating digital products that combine intuitive user experiences with reliable and
scalable functionality.

Through academic, personal, and freelance projects, I have gained experience building full-stack
web applications, designing user interfaces, and transforming ideas into practical solutions.
My work spans both front-end and back-end development, allowing me to approach projects with a
complete understanding of the product development process—from user experience and interface
design to application logic and database management.

I am particularly interested in crafting modern, accessible, and visually engaging web
experiences that solve real-world problems. Continuously learning and exploring new
technologies, I strive to build applications that are not only functional but also enjoyable
to use.

Beyond coding, I am driven by creativity, problem-solving, and the challenge of turning
complex requirements into elegant digital solutions that deliver meaningful value to users.`,

  fr: `Je suis Mohamed Adem Boudehane, étudiant en deuxième année à l'École Nationale
Supérieure d'Informatique (ESI), avec une forte passion pour le développement web et le design
UI/UX. J'aime concevoir des produits numériques qui allient une expérience utilisateur intuitive
à des solutions fiables et évolutives.

À travers des projets académiques, personnels et freelance, j'ai acquis de l'expérience dans le
développement d'applications web full-stack, la conception d'interfaces utilisateur et la
transformation d'idées en solutions concrètes. Mon travail couvre aussi bien le front-end que le
back-end, ce qui me permet d'avoir une vision globale du cycle de développement d'un produit,
de l'expérience utilisateur et du design d'interface jusqu'à la logique applicative et la gestion
des bases de données.

Je m'intéresse particulièrement à la création d'expériences web modernes, accessibles et
visuellement attractives qui répondent à de véritables problématiques. Toujours en quête
d'apprentissage, j'explore continuellement de nouvelles technologies afin de développer des
applications à la fois performantes et agréables à utiliser.

Au-delà du code, je suis motivé par la créativité, la résolution de problèmes et le défi de
transformer des besoins complexes en solutions numériques élégantes apportant une réelle valeur
aux utilisateurs.`,
},
  ocupation: [
    {
      en: "Frond-End Developer",
      fr: "Développeur Front-End",
    },
    {
      en: "UI/UX Designer",
      fr: "Designer UI/UX",
    },
  ],
  image: "...",
};

//Skills SECTION
//NOTE !! WHEN YOU WANT TO REMOVE ONE OF THE SKILLS MAKE IT FALSE AND MAKE THAT SKILL AT THE END OF THE ARRAY SO IT WORKS PWRFECTLY

export const MySkills: MyskillsType[] = [
  {
    skillName: "dev",
    appear: true,
    skillsDetails: [
      {
        image: react,
        name: { en: "React JS", fr: "React JS" },
        description: {
          en: "Expert in building responsive and dynamic web applications using React.js and component-based architecture.",
          fr: "Expert dans la création d'applications web réactives et dynamiques avec React.js et une architecture basée sur les composants.",
        },
        appear: true,
        outlineColor: "#89E3FCB2",
        bgColor: "bg-[#89E3FC4D]",
        numberColor: "text-[#89E3FC]",
        percentage: 85,
      },
      {
        image: mongoDB,
        name: { en: "Mongo DB", fr: "Mongo DB" },
        description: {
          en: "Skilled in database design and management using MongoDB for scalable, NoSQL-based applications.",
          fr: "Compétent en conception et gestion de bases de données avec MongoDB pour des applications évolutives basées sur NoSQL.",
        },
        appear: true,
        outlineColor: "#50B73E",
        bgColor: "bg-[#50B73E4D]",
        numberColor: "text-[#50B73E]",
        percentage: 75,
      },
      {
        image: nodeJs,
        name: { en: "Node JS", fr: "Node JS" },
        description: {
          en: "Experienced in building server-side applications, APIs, and real-time applications using Node.js.",
          fr: "Expérimenté dans la création d'applications côté serveur, d'API et d'applications temps réel avec Node.js.",
        },
        appear: true,
        outlineColor: "#BDE191",
        bgColor: "bg-[#BDE1914D]",
        numberColor: "text-[#BDE191B2]",
        percentage: 76,
      },
      {
        image: java,
        name: { en: "Java", fr: "Java" },
        description: {
          en: "Experienced in Object-Oriented Programming (OOP) using Java.",
          fr: "Expérimenté en programmation orientée objet (POO) avec Java.",
        },
        appear: true,
        outlineColor: "#F89820",
        bgColor: "bg-[#F898204D]",
        numberColor: "text-[#F89820B2]",
        percentage: 80,
      },
      {
        image: mySql,
        name: { en: "My SQL", fr: "My SQL" },
        description: {
          en: "Proficient in relational database management, writing queries, and designing normalized schemas.",
          fr: "Compétent en gestion de bases de données relationnelles, écriture de requêtes et conception de schémas normalisés.",
        },
        appear: true,
        outlineColor: "#007EB3B2",
        bgColor: "bg-[#007EB34D]",
        numberColor: "text-[#61ACCB]",
        percentage: 70,
      },
      {
        image: nextJs,
        name: { en: "Next JS", fr: "Next JS" },
        description: {
          en: "Building SEO-friendly, server-side rendered web applications with Next.js for better performance.",
          fr: "Création d'applications web SEO-friendly et rendues côté serveur avec Next.js pour de meilleures performances.",
        },
        appear: true,
        outlineColor: "#8B8B8BB2",
        bgColor: "bg-[#8B8B8B4D]",
        numberColor: "text-[#8B8B8B]",
        percentage: 85,
      },
      {
        image: php,
        name: { en: "PHP", fr: "PHP" },
        description: {
          en: "Basic knowledge of PHP for server-side scripting and dynamic website functionality.",
          fr: "Connaissance de base de PHP pour le scripting côté serveur et les fonctionnalités dynamiques de sites web.",
        },
        appear: true,
        outlineColor: "#C6C7DFB2",
        bgColor: "bg-[#C6C7DF4D]",
        numberColor: "text-[#C6C7DF]",
        percentage: 50,
      },
      {
        image: js,
        name: { en: "JavaScript", fr: "JavaScript" },
        description: {
          en: "Expert in writing clean, efficient JavaScript code for front-end and interactive web development.",
          fr: "Expert dans l'écriture de code JavaScript propre et efficace pour le front-end et le développement web interactif.",
        },
        appear: true,
        outlineColor: "#B09C0FB2",
        bgColor: "bg-[#B09C0F4D]",
        numberColor: "text-[#B09C0F]",
        percentage: 87,
      },
      {
        image: c,
        name: { en: "C", fr: "C" },
        description: {
          en: "Proficient in C programming for systems programming, algorithms, and data structures.",
          fr: "Compétent en programmation C pour la programmation système, les algorithmes et les structures de données.",
        },
        appear: true,
        outlineColor: "#96CDFFB2",
        bgColor: "bg-[#0059AB4D]",
        numberColor: "text-white",
        percentage: 85,
      },
      {
        image: python,
        name: { en: "Python", fr: "Python" },
        description: {
          en: "Intermediate Python skills for scripting, automation, and problem-solving.",
          fr: "Compétences intermédiaires en Python pour le scripting, l'automatisation et la résolution de problèmes.",
        },
        appear: false,
        outlineColor: "#387EB8B2",
        bgColor: "bg-[#387EB84D]",
        numberColor: "text-[#387EB8]",
        percentage: 45,
      },
      {
        image: ts,
        name: { en: "TypeScript", fr: "TypeScript" },
        description: {
          en: "Skilled in TypeScript for type-safe JavaScript development, reducing bugs in complex applications.",
          fr: "Compétent en TypeScript pour un développement JavaScript sûr, réduisant les bugs dans les applications complexes.",
        },
        appear: true,
        outlineColor: "#004F85B2",
        bgColor: "bg-[#004F854D]",
        numberColor: "text-[#004F85]",
        percentage: 83,
      },
    ],
  },

  {
    skillName: "digitalMedia",
    appear: true,
    skillsDetails: [
      {
        image: Photoshop,
        name: { en: "Adobe Photoshop", fr: "Adobe Photoshop" },
        description: {
          en: "Expert in photo editing, graphic design, and digital artwork creation.",
          fr: "Expert en retouche photo, design graphique et création d'œuvres numériques.",
        },
        appear: true,
        outlineColor: "#31A8FFB2",
        bgColor: "bg-[#31A8FF4D]",
        numberColor: "text-[#31A8FF]",
        percentage: 76,
      },
      {
        image: Illustrator,
        name: { en: "Adobe Illustrator", fr: "Adobe Illustrator" },
        description: {
          en: "Experienced in vector graphics, logo design, and illustrations.",
          fr: "Expérimenté en graphisme vectoriel, création de logos et illustrations.",
        },
        appear: true,
        outlineColor: "#FFAA29B2",
        bgColor: "bg-[#FFAA294D]",
        numberColor: "text-[#FFAA29]",
        percentage: 80,
      },
      {
        image: Figma,
        name: { en: "Figma", fr: "Figma" },
        description: {
          en: "UI/UX design, prototyping, and interface design.",
          fr: "Design UI/UX, prototypage et conception d'interfaces.",
        },
        appear: true,
        outlineColor: "#FF7262B2",
        bgColor: "bg-[#FF72624D]",
        numberColor: "text-[#FF7262]",
        percentage: 85,
      },
      {
        image: Lightroom,
        name: { en: "Adobe Lightroom", fr: "Adobe Lightroom" },
        description: {
          en: "Photo enhancement and color correction.",
          fr: "Amélioration photo et correction des couleurs.",
        },
        appear: true,
        outlineColor: "#31A8FFB2",
        bgColor: "bg-[#31A8FF4D]",
        numberColor: "text-[#31A8FF]",
        percentage: 80,
      },
      {
        image: pr,
        name: { en: "Adobe Premiere", fr: "Adobe Premiere" },
        description: {
          en: "Video editing and content creation.",
          fr: "Montage vidéo et création de contenu.",
        },
        appear: true,
        outlineColor: "#C2C2FFB2",
        bgColor: "bg-[#C2C2FF4D]",
        numberColor: "text-[#C2C2FF]",
        percentage: 78,
      },
      {
        image: ae,
        name: { en: "Adobe After Effects", fr: "Adobe After Effects" },
        description: {
          en: "Motion graphics and visual effects.",
          fr: "Motion design et effets visuels.",
        },
        appear: false,
        outlineColor: "#C2C2FFB2",
        bgColor: "bg-[#C2C2FF4D]",
        numberColor: "text-[#C2C2FF]",
        percentage: 85,
      },
      {
        image: capcut,
        name: { en: "CapCut", fr: "CapCut" },
        description: {
          en: "Short-form video editing for social media.",
          fr: "Montage vidéo court pour les réseaux sociaux.",
        },
        appear: true,
        outlineColor: "#8B8B8BB2",
        bgColor: "bg-[#8B8B8B4D]",
        numberColor: "text-[#8B8B8B]",
        percentage: 82,
      },
      {
        image: Blender,
        name: { en: "Blender", fr: "Blender" },
        description: {
          en: "Basic 3D modeling and animation.",
          fr: "Modélisation 3D et animation de base.",
        },
        appear: false,
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
        name: { en: "Problem solving", fr: "Gestion de problèmes" },
        description: {
          en: "Ability to analyze issues, identify solutions, and implement effective strategies.",
          fr: "Capacité à analyser les problèmes, identifier des solutions et mettre en œuvre des stratégies efficaces.",
        },
        appear: true,
        outlineColor: "#8B8B8BB8",
        bgColor: "#8B8B8B4D",
        numberColor: "text-[#8B8B8B]",
        percentage: 95,
      },
      {
        image: creativeThinking,
        name: { en: "Creative thinking", fr: "Pensée créative" },
        description: {
          en: "Generating innovative ideas and approaches to solve challenges and enhance projects.",
          fr: "Générer des idées et approches innovantes pour résoudre des défis et améliorer les projets.",
        },
        appear: true,
        outlineColor: "#8B8B8BB8",
        bgColor: "#8B8B8B4D",
        numberColor: "text-[#8B8B8B]",
        percentage: 93,
      },
      {
        image: DecisionMaking,
        name: { en: "Decision making", fr: "Prise de décision" },
        description: {
          en: "Making informed, timely decisions to ensure project success and team efficiency.",
          fr: "Prendre des décisions éclairées et rapides pour assurer le succès du projet et l'efficacité de l'équipe.",
        },
        appear: true,
        outlineColor: "#8B8B8BB8",
        bgColor: "#8B8B8B4D",
        numberColor: "text-[#8B8B8B]",
        percentage: 85,
      },
      {
        image: teamWork,
        name: { en: "Team working", fr: "Travail en équipe" },
        description: {
          en: "Collaborating effectively with team members to achieve common goals.",
          fr: "Collaborer efficacement avec les membres de l'équipe pour atteindre des objectifs communs.",
        },
        appear: true,
        outlineColor: "#8B8B8BB8",
        bgColor: "#8B8B8B4D",
        numberColor: "text-[#8B8B8B]",
        percentage: 95,
      },
      {
        image: timePlaning,
        name: { en: "Time planning", fr: "Planification du temps" },
        description: {
          en: "Efficiently managing time, prioritizing tasks, and meeting deadlines consistently.",
          fr: "Gérer efficacement le temps, prioriser les tâches et respecter les délais de manière constante.",
        },
        appear: true,
        outlineColor: "#8B8B8BB8",
        bgColor: "#8B8B8B4D",
        numberColor: "text-[#8B8B8B]",
        percentage: 90,
      },
      {
        image: ladership,
        name: { en: "Leadership", fr: "Leadership" },
        description: {
          en: "Leading teams with motivation, guidance, and vision to achieve project objectives.",
          fr: "Diriger des équipes avec motivation, orientation et vision pour atteindre les objectifs du projet.",
        },
        appear: true,
        outlineColor: "#8B8B8BB8",
        bgColor: "#8B8B8B4D",
        numberColor: "text-[#8B8B8B]",
        percentage: 90,
      },
      {
        image: networking,
        name: { en: "Networking", fr: "Réseautage" },
        description: {
          en: "Building professional relationships to foster collaboration and opportunities.",
          fr: "Établir des relations professionnelles pour favoriser la collaboration et les opportunités.",
        },
        appear: true,
        outlineColor: "#8B8B8BB8",
        bgColor: "#8B8B8B4D",
        numberColor: "text-[#8B8B8B]",
        percentage: 85,
      },
    ],
  },

  {
    skillName: "design",
    appear: false,
    skillsDetails: [
      {
        image: Photoshop,
        name: { en: "Adobe Photoshop", fr: "Adobe Photoshop" },
        description: {
          en: "Expert in photo editing, graphic design, and creating visually appealing digital artwork using Photoshop.",
          fr: "Expert en retouche photo, design graphique et création d'œuvres numériques attrayantes avec Photoshop.",
        },
        appear: true,
        outlineColor: "#31A8FFB2",
        bgColor: "bg-[#31A8FF4D]",
        numberColor: "text-[#31A8FF]",
        percentage: 98,
      },
      {
        image: InDesign,
        name: { en: "Adobe InDesign", fr: "Adobe InDesign" },
        description: {
          en: "Skilled in designing brochures, flyers, magazines, and multi-page documents with professional layouts.",
          fr: "Compétent dans la conception de brochures, flyers, magazines et documents multipages avec des mises en page professionnelles.",
        },
        appear: true,
        outlineColor: "#FF5C85B2",
        bgColor: "bg-[#FF5C854D]",
        numberColor: "text-[#FF5C85]",
        percentage: 80,
      },
      {
        image: Lightroom,
        name: { en: "Adobe Lightroom", fr: "Adobe Lightroom" },
        description: {
          en: "Proficient in photo enhancement, color correction, and batch editing for professional photography.",
          fr: "Compétent en amélioration photo, correction des couleurs et retouche par lots pour la photographie professionnelle.",
        },
        appear: true,
        outlineColor: "#31A8FFB2",
        bgColor: "bg-[#31A8FF4D]",
        numberColor: "text-[#31A8FF]",
        percentage: 85,
      },
      {
        image: Illustrator,
        name: { en: "Adobe Illustrator", fr: "Adobe Illustrator" },
        description: {
          en: "Experienced in vector graphics, logo design, and creating scalable illustrations for web and print.",
          fr: "Expérimenté dans les graphiques vectoriels, la création de logos et d'illustrations évolutives pour le web et l'impression.",
        },
        appear: true,
        outlineColor: "#FFAA29B2",
        bgColor: "bg-[#FFAA294D]",
        numberColor: "text-[#FFAA29]",
        percentage: 100,
      },
      {
        image: XD,
        name: { en: "Adobe XD", fr: "Adobe XD" },
        description: {
          en: "Skilled in UI/UX design, wireframing, and prototyping interactive interfaces for web and mobile.",
          fr: "Compétent en design UI/UX, wireframing et prototypage d'interfaces interactives pour le web et le mobile.",
        },
        appear: true,
        outlineColor: "#FF61F6B2",
        bgColor: "bg-[#FF8AF84D]",
        numberColor: "text-[#FF61F6]",
        percentage: 80,
      },
      {
        image: Figma,
        name: { en: "Figma", fr: "Figma" },
        description: {
          en: "Proficient in collaborative UI/UX design, creating prototypes, and designing user-centered interfaces.",
          fr: "Compétent en design UI/UX collaboratif, création de prototypes et conception d'interfaces centrées utilisateur.",
        },
        appear: true,
        outlineColor: "#FF7262B2",
        bgColor: "bg-[#FF72624D]",
        numberColor: "text-[#FF7262]",
        percentage: 90,
      },
      {
        image: Blender,
        name: { en: "Blender", fr: "Blender" },
        description: {
          en: "Beginner in 3D modeling, animation, and rendering using Blender for creative projects.",
          fr: "Débutant en modélisation 3D, animation et rendu avec Blender pour des projets créatifs.",
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
    skillName: "multimedia",
    appear: false,
    skillsDetails: [
      {
        image: ae,
        name: { en: "Adobe After Effects", fr: "Adobe After Effects" },
        description: {
          en: "Creating motion graphics, visual effects, and animated sequences for videos.",
          fr: "Création de motion graphics, effets visuels et séquences animées pour les vidéos.",
        },
        appear: true,
        outlineColor: "#C2C2FFB2",
        bgColor: "bg-[#C2C2FF4D]",
        numberColor: "text-[#C2C2FF]",
        percentage: 85,
      },
      {
        image: pr,
        name: { en: "Adobe Premiere", fr: "Adobe Premiere" },
        description: {
          en: "Editing professional videos, color grading, and creating polished multimedia content.",
          fr: "Montage vidéo professionnel, étalonnage des couleurs et création de contenus multimédias soignés.",
        },
        appear: true,
        outlineColor: "#C2C2FFB2",
        bgColor: "bg-[#C2C2FF4D]",
        numberColor: "text-[#C2C2FF]",
        percentage: 80,
      },
      {
        image: capcut,
        name: { en: "CapCut", fr: "CapCut" },
        description: {
          en: "Editing short-form videos with creative effects for social media platforms.",
          fr: "Montage de vidéos courtes avec effets créatifs pour les réseaux sociaux.",
        },
        appear: true,
        outlineColor: "#8B8B8BB2",
        bgColor: "bg-[#8B8B8B4D]",
        numberColor: "text-[#8B8B8B]",
        percentage: 75,
      },
      {
        image: Blender,
        name: { en: "Blender", fr: "Blender" },
        description: {
          en: "Beginner in 3D modeling and animation for multimedia projects.",
          fr: "Débutant en modélisation 3D et animation pour des projets multimédia.",
        },
        appear: true,
        outlineColor: "#FFF4EE",
        bgColor: "bg-[#E853004D]",
        numberColor: "text-[#FFF4EE]",
        percentage: 20,
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
      en: `I led a Pascal programming training organized by the Club Scientifique de l'ESI 
  for first-year Computer Science students at Ecole Nationale Supérieure d'Informatique 
  (ESI). During this training, I guided students through the fundamentals of programming, 
  including variables, data types, conditional statements, and problem-solving techniques, 
  helping them build a solid foundation for their academic journey. I worked closely with 
  students to understand their individual strengths, identify areas needing additional support, 
  and adapt explanations to different learning styles and paces. I designed lessons that 
  gradually increased in complexity, encouraged interactive participation, and provided 
  personalized guidance, which strengthened my communication, instructional planning, 
  and mentorship skills. Engaging with learners also gave me insight into how students 
  approach challenges, emphasizing the importance of patience, clarity, and adaptability 
  in teaching. Overall, this experience allowed me to develop leadership skills and a 
  deeper understanding of effective instruction while contributing meaningfully to the 
  students' academic preparation.`,

      fr: `J'ai dirigé une formation en programmation Pascal organisée par le Club Scientifique 
  de l'ESI pour des étudiants de première année en informatique à l'École Nationale Supérieure 
  d'Informatique (ESI). Lors de cette formation, j'ai guidé les étudiants à travers les fondamentaux 
  de la programmation, notamment les variables, types de données, structures conditionnelles 
  et techniques de résolution de problèmes, afin de leur fournir une base solide pour leur parcours académique. 
  J'ai travaillé étroitement avec les étudiants pour comprendre leurs forces individuelles, identifier 
  les domaines nécessitant un soutien supplémentaire et adapter mes explications aux différents styles 
  et rythmes d'apprentissage. J'ai conçu des leçons progressives, favorisé la participation interactive 
  et offert un accompagnement personnalisé, ce qui a renforcé mes compétences en communication, planification 
  pédagogique et mentorat. Interagir avec les apprenants m'a également permis de comprendre comment 
  ils abordent les défis, soulignant l'importance de la patience, de la clarté et de l'adaptabilité 
  lors de l'enseignement. Dans l'ensemble, cette expérience m'a permis de développer mes capacités de leadership 
  et une meilleure compréhension de l'instruction efficace tout en contribuant significativement 
  à la préparation académique des étudiants.`,
    },
    images: [
      "/experiencePhotos/PASCAL01.png",
      "/experiencePhotos/PASCAL02.png",
      "/experiencePhotos/PASCAL03.png",
      "/experiencePhotos/PASCAL04.png",
    ],
  },
  {
    id: 2,
    experiencetName: {
      en: "CAA Training",
      fr: "Formation CAA",
    },
    experienceDescription: {
      en: `I led my first training session at CAA in Béjaïa as part of the CSE Around Algeria event 
  organized by the Club Scientifique de l'ESI, where we were warmly hosted by École Tusna. 
  During this session, I introduced participants to front-end development fundamentals, focusing 
  on HTML concepts such as headings, paragraphs, lists, links, and images, as well as basic CSS 
  techniques for styling text, colors, backgrounds, and simple layouts. I guided learners step by step 
  through building and styling web pages, explaining both the purpose of each element and how CSS 
  enhances presentation. This experience allowed me to interact closely with motivated participants, 
  answer their questions, and adapt explanations to different learning styles. It also strengthened 
  my public speaking, communication, and confidence in presenting technical topics clearly and 
  effectively. Working with students gave insight into how learners approach new concepts, emphasizing 
  the importance of patience, clarity, and interactive guidance. Overall, this opportunity enabled me 
  to share knowledge, inspire curiosity, and contribute to the growth of aspiring developers while 
  enhancing my teaching, mentorship, and instructional skills.`,

      fr: `J'ai dirigé ma première session de formation au CAA à Béjaïa dans le cadre de l'événement 
  CSE Around Algeria, organisé par le Club Scientifique de l'ESI, où nous avons été chaleureusement 
  accueillis par l'École Tusna. Lors de cette session, j'ai présenté aux participants les fondamentaux 
  du développement front-end, en mettant l'accent sur les concepts HTML tels que titres, paragraphes, 
  listes, liens et images, ainsi que sur les techniques CSS de base pour styliser le texte, les couleurs, 
  les arrière-plans et les mises en page simples. J'ai guidé les apprenants étape par étape dans la création 
  et le style de pages web, expliquant le rôle de chaque élément et comment le CSS améliore la présentation. 
  Cette expérience m'a permis d'interagir étroitement avec des participants motivés, de répondre à leurs questions 
  et d'adapter mes explications aux différents styles d'apprentissage. Elle a également renforcé mes compétences 
  en prise de parole, communication et confiance pour présenter des sujets techniques de manière claire et efficace. 
  Travailler avec les étudiants a donné un aperçu de leur approche des nouveaux concepts, soulignant l'importance 
  de la patience, de la clarté et de l'accompagnement interactif. Dans l'ensemble, cette opportunité m'a permis 
  de partager mes connaissances, susciter la curiosité et contribuer au développement de futurs développeurs, 
  tout en améliorant mes compétences en enseignement et mentorat.`,
    },
    images: [
      "/experiencePhotos/CAA02.png",
      "/experiencePhotos/CAA01.png",
      "/experiencePhotos/CAA03.png",
      "/experiencePhotos/CAA04.png",
    ],
  },
  {
    id: 3,
    experiencetName: {
      en: "ESMS Mentoring",
      fr: "Mentorat ESMS",
    },
    experienceDescription: {
      en: `I led a diverse team as part of the Simulation and Mentoring System event organized 
  by the Club Scientifique de l'ESI, coordinating developers, UI/UX designers, graphic designers, 
  multimedia and film members, and communication specialists. From planning to final delivery, I guided 
  my team in developing a cohesive contribution that included a website, visual identity, a promotional 
  teaser, and a communication plan. This experience allowed me to strengthen my leadership, team coordination, 
  and project management skills, ensuring that each member contributed effectively while meeting deadlines 
  and maintaining quality standards. I also enhanced my ability to foster collaboration across diverse roles, 
  solve challenges creatively, and adapt plans in real time to emerging needs. Delivering our portion of the 
  project and presenting it successfully was a highlight, demonstrating the team's creativity, technical execution, 
  and collective effort. Overall, leading this team was a highly rewarding experience that reinforced my skills 
  in leadership, teamwork, strategic planning, and communication, while providing valuable insight into managing 
  complex projects from start to finish.`,

      fr: `J'ai dirigé une équipe diversifiée dans le cadre de l'événement Simulation et Mentoring System 
  organisé par le Club Scientifique de l'ESI, en coordonnant développeurs, designers UI/UX, graphistes, 
  membres multimédia et cinéma, ainsi que spécialistes de la communication. Du plan initial à la livraison 
  finale, j'ai guidé mon équipe pour développer une contribution cohérente comprenant un site web, une identité 
  visuelle, un teaser promotionnel et un plan de communication. Cette expérience m'a permis de renforcer mes 
  compétences en leadership, coordination d'équipe et gestion de projet, en veillant à ce que chaque membre 
  contribue efficacement tout en respectant les délais et la qualité. J'ai également amélioré ma capacité à 
  favoriser la collaboration entre rôles divers, résoudre les problèmes de manière créative et adapter les plans 
  en temps réel selon les besoins. Présenter notre partie du projet avec succès a été un moment fort, démontrant 
  la créativité, l'exécution technique et l'effort collectif de l'équipe. Dans l'ensemble, diriger cette équipe 
  a été une expérience très enrichissante qui a renforcé mes compétences en leadership, travail d'équipe, 
  planification stratégique et communication, tout en apportant un aperçu précieux sur la gestion de projets 
  complexes du début à la fin.`,
    },
    images: [
      "/experiencePhotos/ESMS03.png",
      "/experiencePhotos/ESMS02.png",
      "/experiencePhotos/ESMS04.png",
      "/experiencePhotos/ESMS01.png",
    ],
  },
  {
    id: 4,
    experiencetName: {
      en: "DataHack Organizing",
      fr: "Organisation DataHack",
    },
experienceDescription: {
  en: `I was first part of the organizing team for DataHack 2.0, an event hosted by the Club Scientifique 
  de l'ESI, where I contributed to the preparation and smooth execution of the event alongside a motivated 
  team. This experience allowed me to develop strong teamwork, communication, and problem-solving skills in
  a fast-paced and collaborative environment.
  I was also part of DataHack 3.0, where I took on the role of External Relations Manager. In this position, 
  I co-led the sponsorship team, where I was responsible for reaching out to potential sponsors, building partnerships
  , and helping secure the necessary support for the event. I also contributed to the overall organization and 
  coordination of the event, working closely with different teams to ensure everything ran smoothly.
  Through these two experiences, I gained valuable insight into event organization at different levels of responsibility, 
  from team member to leadership role. They strengthened my ability to manage tasks, communicate effectively, 
  and take initiative in high-pressure situations, while also reinforcing the importance of teamwork and coordination 
  in delivering successful large-scale events.`,
  fr: `J'ai d'abord fait partie de l'équipe organisatrice de DataHack 2.0, un événement organisé par le Club Scientifique 
  de l'ESI, où j'ai contribué à la préparation et au bon déroulement de l'événement au sein d'une équipe dynamique. Cette 
  expérience m'a permis de développer de solides compétences en travail d'équipe, communication et résolution de problèmes 
  dans un environnement collaboratif et rapide.
J'ai également participé à DataHack 3.0, où j'ai occupé le rôle de External Relations Manager. À ce poste, j'ai co-dirigé 
l'équipe sponsoring, où j'étais chargé de contacter des sponsors potentiels, de développer des partenariats et de contribuer 
à la recherche de financements pour l'événement. J'ai également participé à l'organisation globale et à la coordination 
entre les différentes équipes afin d'assurer le bon déroulement de l'événement.
À travers ces deux expériences, j'ai acquis une vision plus complète de l'organisation d'événements, passant d'un rôle 
de membre d'équipe à un rôle de leadership. Elles ont renforcé mes compétences en gestion de tâches, communication et 
prise d'initiative dans des situations exigeantes, tout en consolidant l'importance du travail d'équipe et de la coordination.`,
},
    images: [
      "/experiencePhotos/DH03.png",
      "/experiencePhotos/DH01.png",
      "/experiencePhotos/DH04.png",
      "/experiencePhotos/DH02.png",
    ],
  },

  {
    id: 5,
    experiencetName: {
      en: "EntrepriseXplore Managing",
      fr: "Gestion EntrepriseXplore",
    },
    experienceDescription: {
      en: `I co-led the Enterprise Explorer project, an initiative created by the Club Scientifique de l'ESI, 
where I actively contributed to connecting students from École Nationale Supérieure d'Informatique (ESI) 
with the professional world through organized company visits. Being involved in this project was a valuable 
experience that allowed me to develop teamwork, coordination, and communication skills while working closely 
with my two partners. I collaborated with team members and external professionals to ensure smooth organization, 
adapt to different professional environments, and provide a meaningful experience for participating students. 
This role strengthened my ability to plan activities, coordinate responsibilities, and communicate effectively 
with diverse stakeholders. Through this experience, I gained insight into how academic learning can be linked 
to real-world practice. Overall, co-leading Enterprise Explorer was a rewarding experience that contributed to 
my personal and professional growth and reinforced the importance of professional exposure for students.`,

      fr: `J'ai co-dirigé le projet Enterprise Explorer, une initiative créée par le Club Scientifique de l'ESI, 
où j'ai contribué activement à connecter les étudiants de l'École Nationale Supérieure d'Informatique (ESI) 
au monde professionnel à travers des visites organisées d'entreprises. M'impliquer dans ce projet a été une 
expérience enrichissante qui m'a permis de développer des compétences en travail d'équipe, coordination et 
communication, en collaboration étroite avec mes deux partenaires. J'ai travaillé avec les membres de 
l'équipe et des professionnels externes afin d'assurer une organisation fluide, de m'adapter à différents 
environnements professionnels et d'offrir une expérience significative aux étudiants participants. Ce rôle 
a renforcé ma capacité à planifier des activités, coordonner les responsabilités et communiquer efficacement 
avec des acteurs variés. Grâce à cette expérience, j'ai mieux compris comment relier l'apprentissage 
académique à la pratique professionnelle. Dans l'ensemble, co-diriger Enterprise Explorer a été une 
expérience très enrichissante qui a contribué à mon développement personnel et professionnel et a souligné 
l'importance de l'exposition professionnelle pour les étudiants.`,
    },
    images: [
      "/experiencePhotos/EX01.png",
      "/experiencePhotos/EX04.png",
      "/experiencePhotos/EX02.png",
      "/experiencePhotos/EX03.png",
    ],
  },
];

//Project SECTION
export const projects: projectType[] = [
  {
    id: 4,
    projectName: {
      en: "Smart School Manager",
      fr: "Smart School Manager",
    },
    projectType: {
      en: "Development & UI/UX project",
      fr: "Projet Développement & UI/UX",
    },
    projectDescription: {
      en: `I contributed to the development of Smart School Manager, a comprehensive school management
      platform designed to improve organization, communication, and collaboration between all stakeholders
      within an educational institution. The platform connects students, teachers, parents, administrators,
      and managers through a centralized system that streamlines daily school operations and enhances the 
      overall educational experience. The project includes several key features such as timetable management,
      absence tracking, notification management, email broadcasting, and role-based access control, ensuring
      that each user has access only to the functionalities relevant to their responsibilities. The platform
      was developed as part of the multidisciplinary end-of-cycle project completed during the second year 
      of the preparatory cycle at the Higher National School of Computer Science. We worked as a team of six
      students, combining our technical and organizational skills to deliver a complete solution that 
      addresses real-world educational management needs. On the technical side, the web application was
      developed using HTML, CSS, and JavaScript for the frontend, while PHP was used for backend 
      development. In addition, a mobile application was built using Flutter to provide accessibility
      across multiple devices and platforms. My primary contribution focused on the design and frontend
      development aspects of the project. I participated in designing the web interfaces, ensuring they
      were intuitive, user-friendly, and visually consistent, and then implemented them using HTML, 
      CSS, and JavaScript. Through this experience, I strengthened my UI/UX design, frontend development,
      teamwork, and project management skills while contributing to the successful delivery of a complete educational
      management system.`,

      fr: `J'ai contribué au développement de Smart School Manager, une plateforme complète de gestion scolaire conçue pour
      améliorer l'organisation, la communication et la collaboration entre tous les acteurs d'un établissement éducatif. La
      plateforme connecte les élèves, les enseignants, les parents, les administrateurs et les gestionnaires à travers un 
      système centralisé qui simplifie les opérations quotidiennes et améliore l'expérience éducative globale. Le projet 
      comprend plusieurs fonctionnalités clés telles que la gestion des emplois du temps, le suivi des absences, la gestion 
      des notifications, l'envoi d'e-mails groupés et le contrôle d'accès basé sur les rôles, garantissant que chaque 
      utilisateur n'accède qu'aux fonctionnalités correspondant à ses responsabilités. La plateforme a été développée dans
      le cadre du projet pluridisciplinaire de fin de cycle préparatoire à l'École Nationale Supérieure d'Informatique. Nous
      avons travaillé en équipe de six étudiants, en combinant nos compétences techniques et organisationnelles afin de 
      proposer une solution complète répondant à des besoins réels de gestion scolaire. Sur le plan technique, l'application
      web a été développée avec HTML, CSS et JavaScript pour le frontend, tandis que PHP a été utilisé pour le backend. Une
      application mobile a également été développée avec Flutter afin d'assurer l'accessibilité sur différentes plateformes
      et appareils. Ma principale contribution a porté sur la conception et le développement frontend du projet. J'ai 
      participé à la création des interfaces web en veillant à leur ergonomie, leur clarté et leur cohérence visuelle, puis
      je les ai implémentées à l'aide de HTML, CSS et JavaScript. Cette expérience m'a permis de renforcer mes compétences
      en UI/UX, en développement frontend, en travail d'équipe et en gestion de projet tout en contribuant à la réalisation
      d'un système complet de gestion éducative.`,
    },
    projectLink: "",
    images: [
      "/mockUps/IpadsMockUpSchoolManager.png",
      "/mockUps/PhoneMockUpSchoolManager.png",
      "/mockUps/PhonesMockUpSchoolManager.png",
      "/mockUps/DesktopMockUpSchoolManager.png",
    ],
  },
  {
    id: 3,
    projectName: {
      en: "Boutique Vamos Website",
      fr: "Site Web Boutique Vamos",
    },
    projectType: {
      en: "Development & UI/UX project",
      fr: "Projet Développement & UI/UX",
    },
    projectDescription: {
      en: `I developed the Boutique Vamos Website as a freelance project, creating a professional 
  representative website for an online clothing store that specializes in jerseys and apparel. 
  This website serves to present the store's products, services, delivery prices across Algiers 
  and surrounding Wilayas, and social media channels, while also including a FAQ section to answer 
  common customer questions. The project solves the problem of repetitive client inquiries by 
  providing all relevant information in a single, accessible platform. I designed the user interface 
  from scratch in Figma, defining the visual identity, selecting colors, fonts, and layout, and then 
  implemented the website using ReactJS, TypeScript, Tailwind CSS, and animation libraries to ensure 
  a polished, interactive experience. A key highlight of this project is its professional presentation, 
  combining a clean design with practical functionality to provide customers with clear and immediate 
  information. Overall, Boutique Vamos Website demonstrates my ability to handle freelance projects, 
  from UI/UX design to frontend development, delivering a functional and visually appealing online platform.`,

      fr: `J'ai développé le site Boutique Vamos dans le cadre d'un projet freelance, en créant un site 
  vitrine professionnel pour une boutique de vêtements en ligne spécialisée dans les maillots et 
  autres articles d'habillement. Ce site permet de présenter les produits, services, frais de livraison 
  à travers Alger et les Wilayas environnantes, ainsi que les réseaux sociaux, tout en incluant une 
  section FAQ pour répondre aux questions courantes des clients. Le projet résout le problème des 
  demandes répétitives des clients en fournissant toutes les informations pertinentes sur une 
  plateforme unique et accessible. J'ai conçu l'interface utilisateur entièrement sur Figma, en 
  définissant l'identité visuelle, en choisissant les couleurs, polices et la mise en page, puis 
  j'ai implémenté le site avec ReactJS, TypeScript, Tailwind CSS et des bibliothèques d'animation 
  pour garantir une expérience interactive et soignée. Un point fort du projet est sa présentation 
  professionnelle, combinant un design épuré avec des fonctionnalités pratiques pour offrir aux 
  clients des informations claires et immédiates. Dans l'ensemble, Boutique Vamos Website démontre 
  ma capacité à gérer des projets freelance, de la conception UI/UX au développement frontend, 
  en livrant une plateforme en ligne fonctionnelle et attrayante.`,
    },
    projectLink: "https://boutique-vamos.vercel.app/",
    images: [
      "/mockUps/PhonesMockUpVamos.png",
      "/mockUps/PhoneMockUpVamos.png",
      "/mockUps/IpadsMockUpVamos.png",
      "/mockUps/DesktopMockUpVamos.png",
    ],
  },
  {
    id: 2,
    projectName: {
      en: "Portfolio Website",
      fr: "Site Web Portfolio",
    },
    projectType: {
      en: "Development & UI/UX project",
      fr: "Projet Développement & UI/UX",
    },
    projectDescription: {
      en: `I created my personal portfolio as a comprehensive representation of my work, experiences, 
  and skills as a computer science student, frontend web developer, and UI/UX designer. This project 
  showcases my projects, professional experiences, and contact information, acting as a digital CV that 
  communicates my abilities and identity. I built the portfolio entirely from scratch, starting with 
  the design in Figma, where I defined the visual identity, selected colors, fonts, and icons, and 
  designed each section for clarity and engagement. On the technical side, I implemented the portfolio 
  using ReactJS, TypeScript, and Tailwind CSS, integrating libraries for animations, smooth scrolling, 
  routing, and interactive elements. A key highlight of the project is its full responsiveness, supporting 
  all screen sizes, as well as dark and light modes for optimal user experience. It also supports both 
  English and French languages and includes automated contact form functionality. Overall, this portfolio 
  allowed me to combine design, development, and personal branding in a single project, demonstrating 
  my ability to handle end-to-end creation and providing a polished, professional platform that represents me effectively.`,

      fr: `J'ai créé mon portfolio personnel comme une représentation complète de mes travaux, expériences 
  et compétences en tant qu'étudiant en informatique, développeur frontend et designer UI/UX. Ce projet 
  présente mes projets, expériences professionnelles et informations de contact, servant de CV numérique 
  pour communiquer mes capacités et mon identité. J'ai construit le portfolio entièrement à partir de zéro, 
  en commençant par la conception sur Figma, où j'ai défini l'identité visuelle, choisi les couleurs, polices 
  et icônes, et conçu chaque section pour plus de clarté et d'engagement. Sur le plan technique, j'ai implémenté 
  le portfolio avec ReactJS, TypeScript et Tailwind CSS, en intégrant des bibliothèques pour les animations, 
  le défilement fluide, le routage et les éléments interactifs. Un point fort du projet est sa pleine adaptabilité, 
  prenant en charge toutes les tailles d'écran, ainsi que les modes clair et sombre pour une expérience utilisateur 
  optimale. Il prend également en charge les langues française et anglaise et inclut une fonctionnalité d'envoi 
  automatisé du formulaire de contact. Dans l'ensemble, ce portfolio m'a permis de combiner conception, développement 
  et personal branding dans un seul projet, démontrant ma capacité à gérer la création de A à Z et offrant une 
  plateforme professionnelle qui me représente efficacement.`,
    },
    projectLink: "https://www.moadem-portfolio.online/",
    images: [
      "/mockUps/IpadsMockUpPortfolio.png",
      "/mockUps/phoneMockUpPortfolio.png",
      "/mockUps/PhonesMockUpPortfolio.png",
      "/mockUps/DesktopMockUpPortfolio.png",
    ],
  },
  {
    id: 1,
    projectName: {
      en: "OrgaList Website",
      fr: "Sit Webe OrgaList",
    },
    projectType: {
      en: "Development & UI/UX project",
      fr: "Projet Développement & UI/UX",
    },
    projectDescription: {
      en: `I created the OrgaList To-Do List as a personal project to explore frontend development and 
  UI/UX design while building a functional productivity tool. This project allows users to organize 
  their tasks in two sections: a to-do list with cards and note fields, and a virtual sticky notes 
  section to replace physical notes on a wall. It solves the problem of managing tasks efficiently, 
  saving time, and improving personal organization. I designed the UI from scratch in Figma, defining 
  the visual identity, selecting colors, fonts, and icons, and designing each component for clarity 
  and usability. On the development side, I implemented the project using ReactJS, JavaScript, Tailwind 
  CSS, and additional libraries for animations and routing. I also focused on advanced functionality, 
  including page routing, card management, and storing tasks in local storage to prevent data loss. 
  A key highlight is the smooth animations and interactive user experience that makes managing tasks 
  simple and engaging. Overall, OrgaList To-Do List allowed me to combine design, development, and 
  practical problem-solving in a single project, demonstrating my ability to build a full-featured, 
  user-friendly web application from start to finish.`,

      fr: `J'ai créé OrgaList To-Do List en tant que projet personnel pour explorer le développement frontend 
  et le design UI/UX tout en réalisant un outil de productivité fonctionnel. Ce projet permet aux 
  utilisateurs d'organiser leurs tâches dans deux sections : une liste de tâches avec des cartes et 
  champs de notes, et une section de notes virtuelles pour remplacer les notes physiques sur un mur. 
  Il résout le problème de la gestion efficace des tâches, économisant du temps et améliorant l'organisation 
  personnelle. J'ai conçu l'interface utilisateur entièrement sur Figma, en définissant l'identité visuelle, 
  choisissant les couleurs, polices et icônes, et en concevant chaque composant pour plus de clarté et 
  d'utilisabilité. Sur le plan technique, j'ai implémenté le projet avec ReactJS, JavaScript, Tailwind CSS 
  et des bibliothèques supplémentaires pour les animations et le routage. J'ai également mis l'accent sur 
  des fonctionnalités avancées, notamment le routage des pages, la gestion des cartes et le stockage des 
  tâches dans le local storage pour éviter toute perte de données. Un point fort est la fluidité des 
  animations et l'expérience utilisateur interactive qui rend la gestion des tâches simple et agréable. 
  Dans l'ensemble, OrgaList To-Do List m'a permis de combiner design, développement et résolution de 
  problèmes pratiques dans un seul projet, démontrant ma capacité à créer une application web complète, 
  fonctionnelle et conviviale de A à Z.`,
    },
    projectLink: "https://orgalist.vercel.app/",
    images: [
      "/mockUps/IpadsMockUpOrgalist.png",
      "/mockUps/PhoneMockUpOrgalist.png",
      "/mockUps/PhonesMockUpOrgalist.png",
      "/mockUps/DesktopMockUpOrgalist.png",
    ],
  },
];
