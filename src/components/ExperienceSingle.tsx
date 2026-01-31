import ExperienceLayouts from "./photos_layouts/experienceLayouts";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

export default function ExperienceSingle({
  title,
  decreption,
}: {
  title?: string;
  decreption?: string;
  index?: number;
}) {
  // Screen size detection
  const isLg = useMediaQuery({
    query: "(min-width: 1024px) and (max-width: 1279px)",
  });
  const isXl = useMediaQuery({ query: "(min-width: 1280px)" });

  // Determine device type for layouts (phone for mobile/tablet, desktop for lg/xl)
  const deviceType = isLg || isXl ? "desktop" : "phone";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      viewport={{ once: false, margin: "0px 0px -100px 0px" }}
      className="select-none w-full gap-6 flex z-10 flex-col pb-16 cursor-pointer "
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: false, margin: "0px 0px -20px 0px" }}
        className=" w-full"
      >
        <ExperienceLayouts deviceType={deviceType} />
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, margin: "0px 0px -50px 0px" }}
        style={{ originX: 0 }}
        className=" w-full md:w-70/100 lg:w-70/100 bg-[#076C6980] rounded-full h-1.5 mb-4 dark:bg-[#076C6980] mt-4"
      >
        <div className="bg-[#076C69] h-1.5 w-full rounded-full dark:bg-[#076C69]"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: false, margin: "0px 0px 0px 0px" }}
        className=" flex flex-col w-full gap-3"
      >
        <h1 className=" font-ncs text-[34px] md:text-5xl lg:text-6xl text-bgDark dark:text-white ">
          {title}
        </h1>
        <p className=" select-none text-bgDark dark:text-white font-roboto text-sm md:text-lg lg:text-xl   ">
          {decreption}
        </p>
      </motion.div>
    </motion.div>
  );
}
