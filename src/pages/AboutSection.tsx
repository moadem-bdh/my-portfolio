import myImg from "/assets/myPhott.jpg";
import Qots from "/assets/qhotes.svg";
import TextFilling from "../components/TextFilling";
import { motion } from "framer-motion";
import ScrollFloat from "../components/scrollFloat";

export default function AboutSection() {
  return (
    <section
      id="About"
      className=" overflow-hidden  px-4 lg:px-20 z-0 w-full lg:min-h-200 bg-bgLight dark:bg-bgDark gap-12 flex flex-col items-center justify-between pt-20 pb-0 lg:pb-10"
    >
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=55%"
        stagger={0.03}
        textClassName="font-ncs text-[48px] md:text-[72px] lg:text-[90px] text-bgDark dark:text-white"
      >
        About me
      </ScrollFloat>

      <div className="w-full flex flex-col h-max">
        <div className=" w-full lg:gap-0 flex flex-col gap-6 min-h-80 lg:grid lg:grid-cols-20 lg:grid-rows-10">
          <motion.div
            initial={{
              x: 150,
              opacity: 0,
              rotate: "3deg",
            }}
            whileInView={{
              x: 0,
              rotate: "0deg",
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: false, margin: "400px 0px -150px 0px" }}
            style={{ transformOrigin: "50% 100px" }} // center OUTSIDE left side
            className=" lg:col-start-15 lg:col-end-21 lg:row-start-1 lg:row-end-11 flex items-center justify-center"
          >
            <img
              src={myImg}
              alt="My Photo"
              className="rounded-full h-38 lg:h-60 xl:h-70 outline-2 lg:outline-4 outline-[#838383] outline-offset-4  lg:outline-offset-8 "
            />
          </motion.div>

          <div className=" gap-2 lg:col-start-1 lg:col-end-15 lg:row-start-3 lg:row-end-9 flex flex-col lg:items-start items-center justify-center">
            <motion.h1
              initial={{
                x: -150,
                opacity: 0,
                rotate: "-3deg",
              }}
              whileInView={{
                x: 0,
                rotate: "0deg",
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: false, margin: "400px 0px -150px 0px" }}
              style={{ transformOrigin: "50% 100px" }} // center OUTSIDE left side
              className="text-center  font-ncs lg:text-start text-[28px] lg:text-5xl xl:text-6xl lg:leading-none leading-8 text-greenPt  "
            >
              BOUDEHANE <br />
              <span className="text-bgDark dark:text-white ">Mohamed Adem</span>
            </motion.h1>
            <motion.p
              initial={{
                x: 150,
                opacity: 0,
                rotate: "3deg",
              }}
              whileInView={{
                x: 0,
                rotate: "0deg",
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: false, margin: "400px 0px -70px 0px" }}
              style={{ transformOrigin: "50% 100px" }} // center OUTSIDE left side
              className="font-roboto text-sm lg:text-xl lg:text-start text-center text-greyPtLight dark:text-greyPt leading-4.5 lg:leading-5.5  "
            >
              Graffic & UI/UX Designer <br /> Full Stack Devoloper
            </motion.p>
          </div>
          <hr className="  border-2 border-greyPtLight dark:border-greyPt rounded lg:w-130 xl:w-192 w-192 row-start-9 hidden lg:block  " />
        </div>

        <div className="   lg:row-start-11 relative lg:col-start-1 flex flex-col items-start lg:col-span-full lg:row-span-full mt-6 z-10 gap-5">
          <img
            className="h-5 lg:h-11 dark:invert-0 invert  "
            src={Qots}
            alt="Qote"
          />

          <TextFilling
            baseOpacity={0.2}
            enableBlur={false}
            baseRotation={0}
            blurStrength={0}
            textClassName="font-ncs text-sm lg:text-lg text-bgDark dark:text-white "
            wordAnimationEnd="bottom bottom-=15%"
          >
            I am Mohamed Adem Boudehane, a computer science student with a
            strong passion for technology and creativity. I enjoy working on web
            development, programming, and digital design, while also exploring
            areas like filmmaking and marketing. I am curious, motivated, and
            always looking to learn new skills that help me grow both personally
            and professionally. My goal is to combine technical knowledge with
            creative thinking to build projects that make a real impact.I am
            Mohamed Adem Boudehane, a computer science student with a strong
            passion for technology and creativity. I enjoy working on web
            development, programming, and digital design, while also exploring
            areas like filmmaking and marketing. I am curious, motivated, and
            always looking to learn new skills that help me grow both personally
            and professionally. My goal is to combine technical knowledge with
            creative thinking to build projects that make a real impact.
          </TextFilling>

          <span className="w-full flex justify-end">
            <img
              className="h-5 lg:h-11 dark:invert-0 invert  "
              src={Qots}
              alt="Qote"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
