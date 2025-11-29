import Experience from "../components/Experience";
import ExperienceSwiper from "../components/ExperienceSwiper";
import { SwiperSlide } from "swiper/react";
import ButtunArrow from "/assets/ButtunArrow.svg";
import { useState } from "react";
import { motion } from "framer-motion";



export default function ExperienceSection() {
  const [swiperChanged, setSwiperChanged] = useState<number>(0);

  return (
    <section
      id="Experience"
      className="min-h-150 bg-bgL4 dark:bg-bgDark flex flex-col items-center md:pt-20 md:items-end gap-20 px-4 md:px-20"
    >
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
      
      
       className=" font-ncs text-[48px] md:text-[90px] text-bgDark dark:text-white ">
        Experience
      </motion.h1>



      </span>
      <ExperienceSwiper setSwiperChanged={setSwiperChanged}>
        {/* =============================== */}

        <SwiperSlide>
          <Experience changeEffect={swiperChanged} />
        </SwiperSlide>

        <SwiperSlide>
          <Experience changeEffect={swiperChanged} />
        </SwiperSlide>

        <SwiperSlide>
          <Experience changeEffect={swiperChanged} />
        </SwiperSlide>

        {/* =============================== */}
      </ExperienceSwiper>
      <span className=" group flex gap-3 md:gap-4 items-center justify-center mt-[-50px]  ">
        <p className="  cursor-pointer font-ncs text-[18px] md:text-[30px] text-bgDark dark:text-white ">
          Visit all experiences
        </p>

        <div
          className={` group-hover:translate-x-2 cursor-pointer md:border-2 rounded-[100px] h-max w-max md:p-2.5 p-2 border-bgDark dark:border-white border-1  transition-all ease-in-out duration-300 group-hover:bg-bgDark group-hover:dark:bg-white hover:boeder-0`}
        >
          <img
            src={ButtunArrow}
            className={` h-[10px] md:h-5 group-hover:rotate-45 invert dark:invert-0 group-hover:dark:invert group-hover:invert-0 transition-all ease-in-out duration-300`}
            alt="Arrow Icon"
          />
        </div>
      </span>
    </section>
  );
}
