import { useEffect, useState, useRef } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import ExperienceLayouts from "./photos_layouts/experienceLayouts";
import { useMediaQuery } from "react-responsive";

export default function Experience({
  changeEffect,
  title,
  decreption,
}: {
  changeEffect: number;
  title?: string;
  decreption?: string;
}) {
  // Screen size detection
  const isLg = useMediaQuery({
    query: "(min-width: 1024px) and (max-width: 1279px)",
  });
  const isXl = useMediaQuery({ query: "(min-width: 1280px)" });

  // Determine device type for layouts (phone for mobile/tablet, desktop for lg/xl)
  const deviceType = isLg || isXl ? "desktop" : "phone";
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null); //===============> copilot does that
  const duration: number = 1000; //the duration ofthe progress 1s => 100
  const swiper = useSwiperSlide();
  const swiperHandle = useSwiper();

  function handlePause() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    swiperHandle.autoplay.pause();
  }

  function handleResume() {
    autoProgress(duration);
    swiperHandle.autoplay.resume();
  }

  const autoProgress: (value: number) => void = (value) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev < value) {
          return prev + 1; // increment
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return prev;
        }
      });
    }, 10);
  };

  useEffect(() => {
    setProgress(0);
    autoProgress(duration);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [changeEffect]);

  return (
    <div
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      onTouchEnd={handleResume}
      onTouchStart={handlePause}
      className="select-none w-full gap-6 flex z-10 flex-col pb-16 cursor-pointer "
    >
      <div className=" w-full">
        <ExperienceLayouts deviceType={deviceType} />
      </div>

      <div className=" w-full md:w-70/100 lg:w-70/100 bg-[#076C6980] rounded-full h-1.5 mb-4 dark:bg-[#076C6980] mt-4">
        <div
          className="bg-[#076C69] h-1.5 rounded-full dark:bg-[#076C69]"
          style={{
            width: `${swiper.isActive ? (progress * 100) / duration : "0"}%`,
          }}
        ></div>
      </div>
      <div className=" flex flex-col w-full gap-3">
        <h1 className=" font-ncs text-[34px] md:text-5xl lg:text-6xl text-bgDark dark:text-white ">
          {title}
        </h1>
        <p className=" select-none text-bgDark dark:text-white font-roboto text-sm md:text-lg lg:text-xl   ">
          {decreption}
        </p>
      </div>
    </div>
  );
}
