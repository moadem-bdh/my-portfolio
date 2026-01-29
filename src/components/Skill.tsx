export default function Skill({
  onClick,
  skill,
  currentSkill,
}: {
  onClick: () => void;
  currentSkill: string;
  skill: { title: string; id: string };
}) {
  return (
    <div
      onClick={onClick}
      className={` cursor-pointer rounded-[50px] ${currentSkill == skill.id ? "bg-bgDark dark:bg-white" : "bg-bgLight dark:bg-bgDark hover:dark:bg-[#ffffff91] hover:bg-[#000000d2]"} transition-all ease-in-out duration-200 border-2 border-bgDark dark:border-white lg:border-2 xl:border-0 group flex px-3 md:px-4 lg:px-3 xl:px-[12px] pt-[10px] md:pt-[10px] lg:pt-[8px] xl:pt-[4px] pb-[8px] md:pb-[8px] lg:pb-[6px] xl:pb-[2px] justify-center items-center `}
    >
      <p
        className={` font-white font-ncs text-sm md:text-lg lg:text-[28px] xl:text-[32px]  ${currentSkill == skill.id ? " text-bgLight dark:text-bgDark" : "text-bgDark dark:text-white"} group-hover:dark:text-bgDark group-hover:text-bgLight transition-all ease-in-out duration-200 `}
      >
        {skill.title}
      </p>
    </div>
  );
}
