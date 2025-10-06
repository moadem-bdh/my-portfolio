import x from "../assets/photos/x.svg";
import linkedin from "../assets/photos/linkedin.svg";
import instagram from "../assets/photos/instagram.svg";
import letter from "../assets/photos/letter.svg";
import OneSocialMedia from "./OneScialMedia";
import phone from "../assets/photos/phone.svg";
import location from "../assets/photos/location.svg";
import github from "../assets/photos/ghithub.svg";
import download from "../assets/photos/download.svg";

export default function SocialMedia() {
  const socialMedia = [
    {
      title: "Mail me",
      subTitle: "moadembdh@gmail.com",
      image: letter,
    },
    {
      title: "Contact me",
      subTitle: "0782351931",
      image: phone,
    },
    {
      title: "Location",
      subTitle: "Algiers, Algeria",
      image: location,
    },
    {
      title: "Github",
      subTitle: "moadem-bdh",
      image: github,
    },
  ];

  return (
    <div className="  flex flex-col w-full gap-8">
      <div className=" gap-4 md:gap-5 flex flex-col ">
        {socialMedia.map((s) => (
          <OneSocialMedia
            key={s.title}
            title={s.title}
            subTitle={s.subTitle}
            image={s.image}
          />
        ))}
      </div>

      <p className=" text-center  md:text-start font-ncs text-base text-white md:text-[28px]  ">Also on social media</p>

      <div className=" flex gap-6 md:justify-start justify-center mt-[-20px] md:mt-[-24px] ">
        <a  target="_blank" href="https://www.instagram.com/moadem_boudehane/">
          <img src={instagram} className=" md:w-max w-7 " alt="Instagram icon" />
        </a>
        <a href="https://www.linkedin.com/in/mohamed-adem-boudehane-67926233b/" target="_blank">
          <img src={linkedin} className=" md:w-max w-7 " alt="Linkedin icon" />
        </a>
        <a href="" target="_blank">
          <img src={x} className=" md:w-max w-7 " alt="X icon" />
        </a>

        
      </div>
      <span className=" md:mt-0 mt-4 w-full flex md:justify-start justify-center ">
<button type="button" className=" px-3 py-2 md:px-4 mt-2 md:py-3 cursor-pointer hover:bg-[#2c2c2c] flex w-max gap-[6px] items-center text-sm md:text-xl border-white border-3 rounded-2xl md:rounded-[20px] font-ncs text-white "><img src={download} className=" md:h-max h-6 " alt="Download icon" /> Download my CV</button>
      </span>
      
    </div>
  );
}
