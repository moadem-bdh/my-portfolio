import Outline from "./Outline";

type skillOptionProps = {
  field: string;
  title: string;
  description?: string;
  image?: string;
  percentage: number;
  bgColor: string;
  textColor: string;
  outlineColor: string;
};

export default function SkillOption({
  title = "Adobe phtoshop",
  bgColor,
  field,
  description,
  image,
  percentage = 96,
  textColor,
  outlineColor,
}: skillOptionProps) {
  return (
    <div className=" lg:w-[182px] md:w-36 w-28 hover:scale-108 group transition-all cursor-pointer ease-in-out duration-300">
      <div className=" h-26 md:h-[140px] lg:h-[160px] grid grid-cols-8 grid-rows-8 w-28 md:w-36 lg:w-45">
        <img
          src={image}
          className={`h-18 md:h-[110px] lg:h-max col-span-full row-span-full  ${
            title == "Cup Cut" || title == "Next JS" || field == "softSkills"
              ? " dark:invert-0 invert "
              : ""
          }`}
          alt="Skill icon"
        />
        {/* The progress circle  */}
        <div
          className={` ${bgColor} col-start-5 lg:col-start-4 col-end-8 rounded-full row-end-9 row-start-4 h-[42px] md:h-[64px] lg:h-[84px] w-[42px] md:w-[64px] lg:w-[84px] flex items-center justify-center relative `}
        >
          <p
            className={` font-ncs text-[9px] md:text-[11px] lg:text-sm ${textColor} absolute`}
          >
            {percentage}%
          </p>
          <Outline percentage={percentage} color={outlineColor} />
        </div>
      </div>
      <div className=" gap-2 flex flex-col  mt-[-10px]">
        <p className=" font-ncs lg:text-2xl md:text-xl text-bgDark dark:text-white text-sm lg:leading-7">
          {title}
        </p>
        <p className=" font-roboto w-26 md:w-32 lg:w-[168px] text-[9px] md:text-[11px] lg:text-[12px]  transition-all ease-in-out duration-300 text-greyPtLight dark:text-greyPt lg:opacity-35 font-medium group-hover:opacity-100 ">
          {description}
        </p>
      </div>
    </div>
  );
}
