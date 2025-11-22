import ButtonArrow from "../components/ButtonArrow";
import RotatingText from "../components/RotatingText";

export default function HeroSection() {
  return (
    <section  className="w-full md:h-154 bg-bgLight dark:bg-bgDark grid grid-cols-20 grid-rows-20 m  pt-14 px-3 md:pl-10 md:pr-20">
      <div className=" col-start-1 row-start-2 row-end-16 col-end-16 flex justify-between flex-col  ">

        <RotatingText
  texts={['Grphic \nDesigner ', 'UI/UX \nDesigner', 'Web \nDevoloper']}
  mainClassName="font-ncs md:text-[150px] text-[48px] md:w-[850px] w-[322px] mt-5 md:mt-0 text-white leading-[70px] md:leading-[180px]"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 text-bgDark dark:text-bgLight"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={4000}
        />



        <hr className="md:w-[186px] mt-2 md:mt-0 w-[110PX] rounded border-2 border-bgDark dark:border-white mb-4 " />

        <p className="md:w-[850px] mt-2 md:mt-0 w-[322px] text-xs font-ncs  md:text-[32px] text-greyPtLight dark:text-greyPt ">
          "Design with purpose, not just decoration." <br /> Simple, Impactful,
          True.
        </p>
      </div>
      <div className=" row-start-2 col-start-18 justify-end flex lea items-start col-end-21 row-span-full ">
        <p className=" font-ncs text-greenPt md:mt-0 mt-2 md:text-[100px]  text-[34px] [writing-mode:vertical-rl] leading-[40px] md:leading-[100px] ">
          Welcom <br/> in
        </p>
      </div>

      <div className="col-start-16 col-end-18 row-start-16 row-end-19 md:flex items-center hidden  justify-center ">
        <a href="#About" ><ButtonArrow
          divStyle="hover:rotate-[-180deg] border-[3.5px] p-[16px] "
          Arrowtyle=""
        /></a>
      </div>
    </section>
  );
}
