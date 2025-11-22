import { useEffect, useState, useRef } from "react";
import image from "../assets/photos/picturs_experience_test.png";
import { useSwiper, useSwiperSlide } from "swiper/react";

export default function Experience({ changeEffect }: { changeEffect: number }) {
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null); //===============> copilot does that
  const duration: number = 1000 ; //the duration ofthe progress 1s => 100
  const swiper = useSwiperSlide();
  const swiperHandle = useSwiper()



  function handlePause() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    swiperHandle.autoplay.pause()

  }

  function handleResume() {
    autoProgress(duration);
    swiperHandle.autoplay.resume()
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
      <div className=" grid grid-cols-1 w-full ">   {/* grid grid-cols-4 w-full */}
        <img src={image} alt="" className="" />
      </div>

      <div className=" w-full md:w-70/100 bg-[#076C6980] rounded-full h-1.5 mb-4 dark:bg-[#076C6980] mt-4">
        <div
          className="bg-[#076C69] h-1.5 rounded-full dark:bg-[#076C69]"
          style={{
            width: `${swiper.isActive ? (progress * 100 / duration): "0"}%`,
          }}
        ></div>
      </div>
      <div className=" flex flex-col w-full gap-3">
        <h1 className=" font-ncs text-[34px] md:text-6xl text-bgDark dark:text-white ">CAA training</h1>
        <p className=" select-none text-bgDark dark:text-white font-roboto text-sm md:text-xl   ">
          Lorem ipsum dolor sit amet consectetur. Fermentum viverra enim viverra
          hendrerit sollicitudin gravida. Eget ipsum ante cursus aliquet quis in
          aliquam dignissim. Tortor sapien turpis ullamcorper aliquam venenatis
          non egestas in. Leo tincidunt tincidunt est adipiscing elementum quam
          proin diam. Volutpat quis vestibulum viverra massa semper malesuada.
          Erat volutpat amet libero arcu. Sem habitant consequat nisi tempor
          malesuada viverra et neque. Donec donec a egestas euismod hac vitae
          sed. Mi at tellus scelerisque nisl et. Adipiscing ultrices amet diam
          quis donec ultricies feugiat. Maecenas amet fusce gravida enim cursus
          amet mi. Nulla in nunc turpis et. Non dolor mattis mauris amet tellus
          quis a diam. Pharetra cras eu pulvinar habitant nec et.
        </p>
      </div>
    </div>
  );
}
