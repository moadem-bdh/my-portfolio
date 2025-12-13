import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import SocialMedia from "../components/SocialMedia";

export default function ConatctMeSection() {
  return (
    <section
      id="ContactMe"
      className=" overflow-hidden  flex flex-col  items-center bg-bgLight dark:bg-bgDark py-18 gap-16 md:gap-20 px-4 md:px-20 "
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
          className="font-ncs text-center text-[42px] md:text-[90px] text-bgDark dark:text-white"
        >
          Let's work together
        </motion.h1>
      </span>
      <div className=" w-full md:flex-row flex-col flex gap-18 justify-between items-center ">
        <SocialMedia />
        <ContactForm />
      </div>
    </section>
  );
}
