import ButtunArrow from "../assets/photos/ButtunArrow.svg";
import Project1 from "../components/Project1";

export default function ProjectsSection() {
  return (
    <section className=" w-full px-4 md:px-20 bg-bgDark flex flex-col items-end py-22 gap-14 md:gap-20 ">
      <span className="w-full flex justify-center items-center ">
        <h1 className=" font-ncs text-white md:text-[90px] text-[48px] ">Projects</h1>{" "}
      </span>

      <Project1 />
      <Project1 />

      <span className=" group flex gap-4 items-center   mt-[-16px]  ">
        <p className=" cursor-pointer font-ncs text-[30px] text-white ">
          Visit all projects
        </p>
        <div
          className={`  border-white border-2 group-hover:translate-x-2 cursor-pointer rounded-[100px] h-max w-max p-2.5  transition-all ease-in-out duration-300 group-hover:bg-white hover:boeder-0`}
        >
          <img
            src={ButtunArrow}
            className={` h-5 group-hover:rotate-45 group-hover:invert transition-all ease-in-out duration-300`}
            alt="Arrow Icon"
          />
        </div>
      </span>
    </section>
  );
}
