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

//HIFHLIGHT SECTION
export const highlights: {
    number: string;
    title: { en: string; fr: string };
    description: { en: string; fr: string };
  }[] = [
  {
    number: "3+",
    title: {
      "en": "Web Projects Completed",
      "fr": "Web Projets Complétés"
    },
    description: {
      en: "Built and delivered multiple frontend projects from scratch, showcasing strong skills in UI/UX design and modern web development.",
      fr: "Créé et livré plusieurs projets frontend depuis zéro, montrant de solides compétences en UI/UX et développement web."
    }
  },
  {
    number: "10+",
    title: {
      en: "Tech Skills Mastered",
      fr: "Tech skills Maîtrisées"
    },
    description: {
      en: "Proficient in ReactJS, TypeScript, Tailwind CSS, Figma, and animation libraries, applying modern tools to build clean, interactive interfaces.",
      fr: "Maîtrise de ReactJS, TypeScript, Tailwind CSS, et Figma, utilisant outils modernes pour créer interfaces claires."
    }
  },
  {
    number: "100%",
    title: {
      en: "Fully Responsive Web Sites",
      fr: "Sites Web Entièrement Adaptés"
    },
    "description": {
      en: "Designed every project to adapt seamlessly across desktop, tablet, and mobile devices, ensuring an optimal experience for all users.",
      fr: "Conçu chaque projet pour s'adapter sur ordinateur, tablette et mobile, garantissant une expérience optimale pour tous les utilisateurs."
    }
  }
]

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
Supérieure d'Informatique (ESI), passionate about web development and UI/UX design. I specialize
in creating web applications that are both functional and visually appealing, combining my
programming skills with a user-centered approach. My academic and personal projects have allowed
me to gain hands-on experience in front-end development, interactive design, and algorithmic
problem solving through both coursework and freelance work. I have created a library management
system in C and built a personal portfolio website using React and Tailwind CSS to showcase my
skills. I have also explored algorithms, data structures, and computer architecture simulation,
strengthening my analytical and programming abilities. My technical skill set includes HTML,
CSS, JavaScript, TypeScript, React.js, Next.js, C, Figma, as well as version control with Git and
GitHub. I am motivated by turning ideas into practical and elegant solutions, bridging the gap
between code and design, and contributing to impactful and well-crafted digital products.`,

fr: `Je suis Mohamed Adem Boudehane, étudiant en 2eme année à l'École Nationale Supérieure
d'Informatique (ESI), passionné par le développement web et le design UI/UX. Je me spécialise
dans la création d'applications web à la fois fonctionnelles et esthétiques, alliant mes
compétences en programmation à une approche centrée sur l'utilisateur. Mes projets académiques
et personnels m'ont permis d'acquérir une expérience pratique en développement front-end,
design interactif et résolution algorithmique de problèmes, à travers mes études et mon travail
en freelance. J'ai développé un système de gestion de bibliothèque en C et conçu un site
portfolio personnel avec React et Tailwind CSS pour présenter mes compétences. J'ai également
exploré les algorithmes, les structures de données et la simulation d'architecture des
ordinateurs, renforçant mes capacités analytiques et techniques. Mon ensemble de compétences
inclut HTML, CSS, JavaScript, TypeScript, React.js, Next.js, C, Figma, ainsi que Git et GitHub.
Je suis motivé par la transformation d'idées en solutions pratiques et élégantes, en reliant
le code au design et en contribuant à des projets numériques impactants.`
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
  iamge: "...",
};

//Skills SECTION
//NOTE !! WHEN YOU WANT TO REMOVE ONE OF THE SKILLS MAKE IT FALSE AND MAKE THAT SKILL AT THE END OF THE ARRAY SO IT WORKS PWRFECTLY

export const MySkills: MyskillsType[] = [
  {
    skillName: { en: "design", fr: "Design" },
    appear: true,
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
    skillName: { en: "dev", fr: "Développement" },
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
        percentage: 95,
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
        percentage: 90,
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
        percentage: 80,
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
        percentage: 80,
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
        percentage: 20,
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
        percentage: 90,
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
        percentage: 90,
      },
      {
        image: python,
        name: { en: "Python", fr: "Python" },
        description: {
          en: "Intermediate Python skills for scripting, automation, and problem-solving.",
          fr: "Compétences intermédiaires en Python pour le scripting, l'automatisation et la résolution de problèmes.",
        },
        appear: true,
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
        percentage: 90,
      },
    ],
  },
  {
    skillName: { en: "multimedia", fr: "Multimédia" },
    appear: true,
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
  {
    skillName: { en: "softSkills", fr: "Compétences personnelles" },
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
        percentage: 95,
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
        percentage: 98,
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
        percentage: 97,
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
    images: ["..", ".."],
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
    images: ["..", ".."],
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
    images: ["..", ".."],
  },
  {
    id: 4,
    experiencetName: {
      en: "DataHack Organizing",
      fr: "Organisation DataHack",
    },
    experienceDescription: {
      en: `I was part of the organizing team for DataHack 2.0, an event hosted by the Club Scientifique de l'ESI, 
  where I actively contributed to the planning and execution of the event alongside a dedicated team. 
  Being involved in this initiative was a valuable learning experience that allowed me to develop strong 
  teamwork, coordination, and problem-solving skills while working in a dynamic and fast-paced environment. 
  I collaborated closely with other members to ensure effective communication, adapt quickly to unexpected 
  challenges, and maintain a positive experience for all participants throughout the event. This role 
  strengthened my ability to organize tasks, manage responsibilities efficiently, and work under pressure 
  while supporting collaboration and shared decision-making. Through this experience, I also gained insight 
  into how collective effort and clear coordination contribute to the success of large-scale events. Overall, 
  organizing DataHack 2.0 was a highly rewarding experience that enhanced my personal and professional growth 
  and reinforced the importance of teamwork, adaptability, and commitment.`,

      fr: `J'ai fait partie de l'équipe organisatrice de DataHack 2.0, un événement organisé par le Club Scientifique 
  de l'ESI, où j'ai contribué activement à la préparation et au bon déroulement de l'événement aux côtés 
  d'une équipe engagée. Participer à cette initiative a été une expérience d'apprentissage précieuse qui m'a 
  permis de développer des compétences solides en travail d'équipe, coordination et résolution de problèmes 
  dans un environnement dynamique. J'ai collaboré étroitement avec les autres membres afin d'assurer une 
  communication efficace, de m'adapter rapidement aux défis imprévus et de garantir une expérience positive 
  pour tous les participants. Ce rôle a renforcé ma capacité à organiser les tâches, gérer les responsabilités 
  efficacement et travailler sous pression tout en favorisant la collaboration et l'esprit d'équipe. Cette 
  expérience m'a également permis de mieux comprendre l'importance de l'effort collectif et de la coordination 
  dans la réussite d'événements d'envergure. Dans l'ensemble, organiser DataHack 2.0 a été très enrichissant, 
  contribuant à mon développement personnel et professionnel tout en renforçant des valeurs clés comme 
  l'engagement, l'adaptabilité et le travail collaboratif.`,
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
    projectLink: "https://portfolio-moadem.vercel.app/",
    images: [],
  },
  {
    id: 2,
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
    projectLink: "",
    images: [],
  },
  {
    id: 3,
    projectName: {
      en: "Todo List Website",
      fr: "Sit Webe Todo List",
    },
    projectType: {
      en: "Development & UI/UX project",
      fr: "Projet Développement & UI/UX",
    },
    projectDescription: {
  en: `I created the moadem To-Do List as a personal project to explore frontend development and 
  UI/UX design while building a functional productivity tool. This project allows users to organize 
  their tasks in two sections: a to-do list with cards and note fields, and a virtual sticky notes 
  section to replace physical notes on a wall. It solves the problem of managing tasks efficiently, 
  saving time, and improving personal organization. I designed the UI from scratch in Figma, defining 
  the visual identity, selecting colors, fonts, and icons, and designing each component for clarity 
  and usability. On the development side, I implemented the project using ReactJS, JavaScript, Tailwind 
  CSS, and additional libraries for animations and routing. I also focused on advanced functionality, 
  including page routing, card management, and storing tasks in local storage to prevent data loss. 
  A key highlight is the smooth animations and interactive user experience that makes managing tasks 
  simple and engaging. Overall, moadem To-Do List allowed me to combine design, development, and 
  practical problem-solving in a single project, demonstrating my ability to build a full-featured, 
  user-friendly web application from start to finish.`,
  
  fr: `J'ai créé moadem To-Do List en tant que projet personnel pour explorer le développement frontend 
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
  Dans l'ensemble, moadem To-Do List m'a permis de combiner design, développement et résolution de 
  problèmes pratiques dans un seul projet, démontrant ma capacité à créer une application web complète, 
  fonctionnelle et conviviale de A à Z.`,
    },
    projectLink: "https://moadem-todo-list.netlify.app/events",
    images: [],
  },
];
