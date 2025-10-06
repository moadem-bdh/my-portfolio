import Experience from "../components/Experience";
import ExperienceSwiper from "../components/ExperienceSwiper";
import { SwiperSlide } from "swiper/react";
import ButtunArrow from "../assets/photos/ButtunArrow.svg";
import { useState } from "react";

export default function ExperienceSection() {
  const [swiperChanged, setSwiperChanged] = useState<number>(0);

  return (
    <section className="min-h-150 bg-bgDark flex flex-col items-center md:items-end gap-20 px-4 md:px-20">
      <span className="w-full  flex justify-center">
        <h1 className=" font-ncs text-[48px] md:text-[90px] text-white ">Experience</h1>{" "}
      </span>
      <ExperienceSwiper setSwiperChanged={setSwiperChanged}>
        {/* =============================== */}

        <SwiperSlide>
          <Experience changeEffect={swiperChanged} />
        </SwiperSlide>
        <SwiperSlide>
          <Experience changeEffect={swiperChanged} />
        </SwiperSlide>
        <SwiperSlide>
          <Experience changeEffect={swiperChanged} />
        </SwiperSlide>

        {/* =============================== */}
      </ExperienceSwiper>
      <span className=" group flex gap-4 items-center justify-center mt-[-50px]  ">
        <p className="  cursor-pointer font-ncs text-[18px] md:text-[30px] text-white ">
          Visit all experiences
        </p>

        <div
          className={` group-hover:translate-x-2 cursor-pointer rounded-[100px] h-max w-max p-2.5 border-white border-2  transition-all ease-in-out duration-300 group-hover:bg-white hover:boeder-0`}
        >
          <img
            src={ButtunArrow}
            className={` h-3 md:h-5 group-hover:rotate-45 group-hover:invert transition-all ease-in-out duration-300`}
            alt="Arrow Icon"
          />
        </div>
      </span>
    </section>
  );
}
