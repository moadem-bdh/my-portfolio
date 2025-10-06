import sun from "../assets/photos/sun.svg";
import moon from "../assets/photos/moon.svg";
import { useState } from "react";

export default function Modetoggle({
  whatMode,
}: {
  whatMode?: (mode: string) => void;
}) {
  const [isDark, setIsDark] = useState("dark");

  function toggle(): void {
    setIsDark(isDark === "light" ? "dark" : "light");
    if (whatMode) whatMode(isDark);
  }

const modes = {
  dark: {
    bgColor: "bg-white",
    buttonColor: "bg-bgDark",
    translateX: "translate-x-[26px] md:translate-x-[28px]",
  },
  light: {
    bgColor: "bg-bgDark",
    buttonColor: "bg-white",
    translateX: "translate-x-0",
  },
}[isDark];


  return (
    <div
      className={`md:w-15  w-[52px] py-[2px] md:py-0.5 px-[2px] md:px-[3px] justify-between flex rounded-[40px] cursor-pointer ${modes?.bgColor} relative items-center`}
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
