import sun from "/assets/sun.svg";
import moon from "/assets/moon.svg";
import { useState } from "react";

export default function Modetoggle({
  setDark,
}: {
  whatMode?: (mode: string) => void;
  setDark: (a: boolean) => void;
}) {
  const [isDark, setIsDark] = useState("dark");

  function toggle(): void {
    setIsDark(isDark === "light" ? "dark" : "light");
    setDark(isDark === "light" ? false : true);
  }

  const modes = {
    dark: {
      bgColor: "bg-white",
      buttonColor: "bg-bgDark",
      translateX: "translate-x-[25px] lg:translate-x-[27px]",
    },
    light: {
      bgColor: "bg-bgDark",
      buttonColor: "bg-white",
      translateX: "translate-x-[0.6px] lg:-translate-x-[1px]",
    },
  }[isDark];

  return (
    <div
      onClick={toggle}
      className={`w-[52px] lg:w-15 py-[2px] lg:py-0.5 border-black border-[0.5px] dark:border-white px-[2px] lg:px-[3.2px] justify-between flex rounded-[40px] cursor-pointer ${modes?.bgColor} relative items-center`}
    >
      <img src={sun} className=" h-[21px] lg:h-max " alt="Sun icon" />
      <img src={moon} alt="moon icon" />
      <div
        className={`w-[22px] lg:w-[26px] h-[22px] lg:h-[26px] rounded-3xl absolute ${modes?.buttonColor} ${modes?.translateX} transition-all duration-300 ease-in-out`}
      ></div>
    </div>
  );
}
