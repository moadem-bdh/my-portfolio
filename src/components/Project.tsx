import ButtunArrow from "/assets/ButtunArrow.svg";
import test from "/assets/testimg two.png";

export default function Project() {
  return (
    <div className=" flex-col-reverse md:flex-row flex w-full justify-between items-center h-max gap-3 md:gap-12 ">
      <div className=" md:min-w-150  w-full items-end md:max-w-260 flex flex-col md:px-7 px-4 md:pt-11 p-5 md:pb-12 gap-6 bg-[#d2d2d2] dark:bg-[#1B1B1BB2] rounded-3xl">
        {/*   this onw need to be changed  */}
        <div className="  w-full items-start flex flex-col gap-2 ">
          <h1 className=" font-ncs text-bgDark dark:text-white text-[26px] md:text-6xl  ">
            1. Data hack
          </h1>
          <h6 className=" md:ml-14 ml-6.5 mt-[-8px] font-ncs text-greyPtLight dark:text-greyPt text-[9px] md:text-xl   ">
            Design project
          </h6>
        </div>
        <p className=" font-roboto text-sm md:text-lg text-bgDark dark:text-white ">
          Lorem ipsum dolor sit amet consectetur. Sit vitae vitae ut fringilla.
          Aliquam faucibus euismod praesent ut placerat est tempus. Egestas
          pharetra quis etiam faucibus neque enim consequat. Bibendum purus
          netus ac quis ullamcorper .Egestas pharetra quis etiam faucibus neque
          enim consequat. Bibendum purus netus ac quis ullamcorper .Egestas
          pharetra quis etiam faucibus neque enim consequat. Bibendum purus
          netus ac quis ullamcorper .Egestas pharetra quis etiam faucibus neque
          enim consequat.
        </p>
        <span className=" group flex gap-2 md:gap-4 items-center w-max  justify-end mt-[22px] pr-2 ">
          <p className=" cursor-pointer font-ncs text-sm md:text-[24px] text-bgDark dark:text-white ">
            View all projects
          </p>
          <div
            className={` group-hover:translate-x-2 cursor-pointer rounded-[100px] h-max w-max p-1.5 md:p-2.5 border-bgDark dark:border-white border-1  transition-all ease-in-out duration-300 group-hover:bg-bgDark group-hover:dark:bg-white hover:boeder-0`}
          >
            <img
              src={ButtunArrow}
              className={` h-2.5 md:h-4 group-hover:rotate-45 invert dark:invert-0 group-hover:invert-0 group-hover:dark:invert transition-all ease-in-out duration-300`}
              alt="Arrow Icon"
            />
          </div>
        </span>
      </div>

      <img src={test} className="  md:h-120 " alt="" />
    </div>
  );
}
