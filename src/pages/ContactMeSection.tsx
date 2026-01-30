import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import SocialMedia from "../components/SocialMedia";
import { useLanguage } from "../Contexts/LanguageContext";

export default function ConatctMeSection() {
  const { language } = useLanguage();
  const langKey = language === "fr" ? "fr" : "en";

  const heading = {
    en: "Let's work together",
    fr: "Travaillons ensemble",
  };

  return (
    <section
      id="ContactMe"
      className=" overflow-hidden  flex flex-col  items-center bg-bgLight dark:bg-bgDark py-18 gap-16 lg:gap-20 px-4 md:px-10 lg:px-14 xl:px-20 "
    >
      <span className="w-full flex justify-center items-center ">
        <motion.h1
          initial={{
            opacity: 0,

            translateY: "50px",
          }}
          whileInView={{
            translateY: "0px",
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={{ once: false, margin: "400px 0px -100px 0px" }}
          style={{ transformOrigin: "50% 200px" }} // center OUTSIDE left side
          className="font-ncs text-center text-[42px] lg:text-[72px] xl:text-[90px] text-bgDark dark:text-white"
        >
          {heading[langKey]}
        </motion.h1>
      </span>
      <div className=" w-full flex-col flex gap-18 justify-between items-center xl:flex-row ">
        <SocialMedia />
        <ContactForm />
      </div>
    </section>
  );
}
