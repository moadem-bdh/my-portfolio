import ButtunArrow from "../assets/photos/ButtunArrow.svg";
import Project from "../components/Project";

export default function ProjectsSection() {
  return (
    <section id="Projects" className=" w-full px-4 md:px-20 bg-bg dark:bg-bgDark flex flex-col items:center md:items-end pb-8 pt-16 md:pt-22 md:pb-22 gap-14 md:gap-20 ">
      <span className="w-full flex justify-center items-center ">
        <h1 className=" font-ncs text-bgDark dark:text-white md:text-[90px] text-[48px] ">Projects</h1>
      </span>

      <Project />
      <Project />

      <span className=" group flex gap-3 md:gap-4 items-center justify-center mt-0 md:mt-[-40px]  ">
        <p className="  cursor-pointer font-ncs text-[18px] md:text-[30px] text-bgDark dark:text-white ">
          Visit all projects
        </p>

        <div
          className={` group-hover:translate-x-2 cursor-pointer md:border-2 rounded-[100px] h-max w-max p-2 md:p-2.5 border-bgDark dark:border-white border-1  transition-all ease-in-out duration-300 group-hover:bg-bgDark group-hover:dark:bg-white hover:boeder-0`}
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
