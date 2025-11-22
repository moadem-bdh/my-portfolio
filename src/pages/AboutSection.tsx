import myImg from "../assets/photos/myPhott.jpg";
import Qots from "../assets/photos/qhotes.svg";
import TextFilling from "../components/TextFilling";

export default function AboutSection() {
  return (
    <section
      id="About"
      className=" md:px-20 px-4 z-0 w-full md:min-h-200 bg-bgDark md:gap-12 gap-12 flex flex-col items-center justify-between pt-20 pb-0 md:pb-10"
    >
      <h1 className=" font-ncs text-[48px] md:text-[90px] text-white ">
        About me
      </h1>
      <div className="w-full flex flex-col h-max">


      
      <div className=" w-full md:gap-0 flex flex-col gap-6 min-h-80 md:grid md:grid-cols-20 md:grid-rows-10">
        <div className=" md:col-start-15 md:col-end-21 md:row-start-1 md:row-end-11 flex items-center justify-center">
          <img
            src={myImg}
            alt="My Photo"
            className="rounded-full md:h-70 h-38 md:outline-4 outline-2 outline-[#838383] outline-offset-4  md:outline-offset-8 "
          />
        </div>

        <div className=" gap-2 md:col-start-1 md:col-end-15 md:row-start-3 md:row-end-9 flex flex-col md:items-start items-center justify-center">

   
          <h1 className="text-center  font-ncs md:text-start text-[28px] md:text-6xl md:leading-none leading-8 text-greenPt  ">
            BOUDEHANE <br/>
            <span className="text-white ">Mohamed Adem</span>
          </h1>
          <p className="font-roboto md:text-xl text-sm md:text-start text-center text-greyPt leading-4.5 md:leading-5.5  ">
            Graffic & UI/UX Designer <br /> Full Stack Devoloper
          </p>
        </div>
        <hr className="  border-2 border-greyPt rounded w-192 row-start-9 hidden md:block  " />

       
      </div>





       <div className="   md:row-start-11 relative md:col-start-1 flex flex-col items-start md:col-span-full md:row-span-full mt-6 z-10 gap-5">
          <img className="md:h-11 h-5     " src={Qots} alt="Qote" />

          <TextFilling
            baseOpacity={0.2}
            enableBlur={false}
            baseRotation={0}
            blurStrength={0}
            textClassName="font-ncs md:text-lg text-sm text-white "
            wordAnimationEnd = 'bottom bottom-=10%'
          >
            I am Mohamed Adem Boudehane, a computer science student with a
            strong passion for technology and creativity. I enjoy working on web
            development, programming, and digital design, while also exploring
            areas like filmmaking and marketing. I am curious, motivated, and
            always looking to learn new skills that help me grow both personally
            and professionally. My goal is to combine technical knowledge with
            creative thinking to build projects that make a real impact.I am
            Mohamed Adem Boudehane, a computer science student with a strong
            passion for technology and creativity. I enjoy working on web
            development, programming, and digital design, while also exploring
            areas like filmmaking and marketing. I am curious, motivated, and
            always looking to learn new skills that help me grow both personally
            and professionally. My goal is to combine technical knowledge with
            creative thinking to build projects that make a real impact.
          </TextFilling>

          <span className="w-full flex justify-end">
            <img className="md:h-11 h-5  " src={Qots} alt="Qote" />
          </span>
        </div>
        </div>
    </section>
  );
}
