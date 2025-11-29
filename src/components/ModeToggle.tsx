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
      translateX: "translate-x-[25px] md:translate-x-[27px]",
    },
    light: {
      bgColor: "bg-bgDark",
      buttonColor: "bg-white",
      translateX: "md:-translate-x-[1px] translate-x-[0.6px]",
    },
  }[isDark];

  return (
    <div
      className={`md:w-15  w-[52px] py-[2px] md:py-0.5 border-black border-[0.5px] dark:border-white px-[2px] md:px-[3.2px] justify-between flex rounded-[40px] cursor-pointer ${modes?.bgColor} relative items-center`}
    >
      <img src={sun} className=" md:h-max h-[21px] " alt="Sun icon" />
      <img src={moon} alt="moon icon" />
      <div
        className={`md:w-[26px] w-[22px] h-[22px] md:h-[26px] rounded-3xl absolute ${modes?.buttonColor} ${modes?.translateX} transition-all duration-300 ease-in-out`}
        onClick={toggle}
      ></div>
    </div>
  );
}
