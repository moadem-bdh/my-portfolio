import ButtonArrow from "../components/ButtonArrow";

export default function HeroSection() {
  return (
    <section className="w-full md:h-154  bg-bgDark grid grid-cols-20 grid-rows-17 md:grid-rows-20 mt-[68px] md:mt-[89px] pt-2 px-3 md:pl-10 md:pr-20">
      <div className=" col-start-1 row-start-2 row-end-16 col-end-16 flex justify-between flex-col  ">
      <p className=" font-ncs md:text-[150px] text-[52px] md:w-[850px] w-[322px] mt-5 md:mt-0 text-white leading-[70px] md:leading-[180px] ">
          Graphic <br />
          Designer
        </p>

        <hr className="md:w-[186px] mt-2 md:mt-0 w-[110PX] rounded border-2 border-white mb-4 " />

        <p className="md:w-[850px] mt-2 md:mt-0 w-[322px] text-xs font-ncs  md:text-[32px] text-greyPt ">
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
        <ButtonArrow
          divStyle="hover:rotate-[-180deg] border-[3.5px] p-[16px] "
          Arrowtyle=""
        />
      </div>
    </section>
  );
}
