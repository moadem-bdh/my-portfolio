import useToggle from "../costumHooks/useToggle";
import FooterSection from "./FooterSection";
import NavbBar from "./NavBar";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const [isDark, setIsDark] = useToggle(true);

  return (
    <div className={`${isDark ? "dark" : ""} flex  flex-col h-500 bg-bgDark relative w-full`}>
      <NavbBar setDark={setIsDark} />
      <span className="w-full  flex justify-center">
        <motion.h1
  
              initial={{
              opacity: 0,
          
              translateY:"50px"
            }}
            whileInView={{
  
             translateY:"0px",
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: false, margin: "400px 0px -100px 0px" }}
            style={{ transformOrigin: "50% 200px" }} // center OUTSIDE left side
          className="font-ncs text-[42px] md:text-[90px] text-bgDark md:pt-6 dark:text-white"
        >
          Projects
        </motion.h1>
      </span>

    
      <FooterSection />
    </div>
  );
}