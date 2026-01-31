import x from "/assets/twitter.svg";
import linkedin from "/assets/linkedin.svg";
import instagram from "/assets/instagram.svg";
import letter from "/assets/letter.svg";
import OneSocialMedia from "./OneScialMedia";
import phone from "/assets/phone.svg";
import location from "/assets/location.svg";
import github from "/assets/ghithub.svg";
import download from "/assets/download.svg";
import { motion } from "framer-motion";
import { useLanguage } from "../Contexts/LanguageContext";

export default function SocialMedia() {
  const { language } = useLanguage();
  const langKey = language === "fr" ? "fr" : "en";

  const content = {
    mailMe: { en: "Mail me", fr: "Envoyez un email" },
    contactMe: { en: "Contact me", fr: "Contactez-moi" },
    location: { en: "Location", fr: "Localisation" },
    locationSubtitle: { en: "Algiers, Algeria", fr: "Alger, Algérie" },
    github: { en: "Github", fr: "Github" },
    socialMedia: {
      en: "Also on social media",
      fr: "Aussi sur les réseaux sociaux",
    },
    downloadCV: { en: "Download my CV", fr: "Télécharger mon CV" },
  };

  const socialMedia = [
    {
      title: content.mailMe[langKey],
      subTitle: "moadembdh@gmail.com",
      image: letter,
      link: "",
    },
    {
      title: content.contactMe[langKey],
      subTitle: "0782351931",
      image: phone,
      link: "",
    },
    {
      title: content.location[langKey],
      subTitle: content.locationSubtitle[langKey],
      image: location,
      link: "",
    },
    {
      title: content.github[langKey],
      subTitle: "moadem-bdh",
      image: github,
      link: "https://github.com/moadem-bdh",
    },
  ];

  return (
    <motion.div
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
      className="  flex flex-col w-full gap-8 md:items-center"
    >
      <div className=" gap-4 md:gap-5 lg:gap-5 flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 xl:flex xl:flex-col md:gap-x-5 md:gap-y-5 lg:gap-x-5 lg:gap-y-5 md:max-w-[640px] lg:max-w-[640px] w-full md:justify-items-center lg:justify-items-center xl:justify-items-start ">
        {socialMedia.map((s) => (
          <OneSocialMedia
            key={s.title}
            title={s.title}
            subTitle={s.subTitle}
            image={s.image}
            link={s.link}
          />
        ))}
      </div>

      <p className=" text-center  md:text-center lg:text-center xl:text-start font-ncs text-base text-bgDark dark:text-white md:text-[24px] lg:text-[28px]  ">
        {content.socialMedia[langKey]}
      </p>

      <div className=" flex  gap-6 md:justify-center lg:justify-center xl:justify-start justify-center mt-[-20px] md:mt-[-12px] lg:mt-[-24px] ">
        <a target="_blank" href="https://www.instagram.com/moadem_boudehane/">
          <img
            src={instagram}
            className=" md:w-9 lg:w-max w-7 invert dark:invert-0 "
            alt="Instagram icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/mohamed-adem-boudehane-67926233b/"
          target="_blank"
        >
          <img
            src={linkedin}
            className="  md:w-9 lg:w-max w-7 invert dark:invert-0 "
            alt="Linkedin icon"
          />
        </a>
        <a href="https://x.com/moadem_bdh?s=21" target="_blank">
          <img
            src={x}
            className=" md:w-9 lg:w-max w-7 invert dark:invert-0"
            alt="X icon"
          />
        </a>
      </div>
      <span className=" md:mt-0 lg:mt-0 mt-4 w-full flex md:justify-center lg:justify-center xl:justify-start justify-center ">
        <a href="/files/Mohamed-Adem-Boudehane-CV.pdf" download>
          <button
            type="button"
            className=" px-3 py-2 md:px-3.5 lg:px-4 mt-2 md:py-2.5 lg:py-3 cursor-pointer hover:bg-[#b0b0b0] hover:dark:bg-[#2c2c2c] flex w-max gap-[6px] items-center text-sm md:text-lg lg:text-xl border-bgDark dark:border-white border-3 rounded-2xl md:rounded-[18px] lg:rounded-[20px] font-ncs text-bgDark dark:text-white "
          >
            <img
              src={download}
              className=" md:h-7 lg:h-max h-6  invert dark:invert-0"
              alt="Download icon"
            />{" "}
            {content.downloadCV[langKey]}
          </button>
        </a>
      </span>
    </motion.div>
  );
}
