import instagramColored from "/assets/instagramColored.svg";
import LinkedInColored from "/assets/linkedinColored.svg";
import TwittwrColored from "/assets/twitterColored.svg";
import ButtonArrow from "../components/ButtonArrow";
import { useLanguage } from "../Contexts/LanguageContext";
import { useNavigate } from "react-router";

export default function FooterSection() {
  const { language } = useLanguage();
  const langKey = language === "fr" ? "fr" : "en";
  const navigate = useNavigate();

  const content = {
    beginning: {
      en: "This is just \nthe beginning",
      fr: "Ce n'est que \nle début",
    },
  };

  type menuType = {
    name: { en: string; fr: string };
    achorLink: string;
  };

  const menu: menuType[] = [
    {
      name: { en: "Home", fr: "Accueil" },
      achorLink: "Home",
    },
    {
      name: { en: "About Me", fr: "À propos" },
      achorLink: "About",
    },
    {
      name: { en: "Skills", fr: "Skills" },
      achorLink: "Skills",
    },
    {
      name: { en: "Experience", fr: "Expérience" },
      achorLink: "Experience",
    },
    {
      name: { en: "Projects", fr: "Projets" },
      achorLink: "Projects",
    },
    {
      name: { en: "Contact me", fr: "Me contacter" },
      achorLink: "ContactMe",
    },
  ];

  const scrollToTop = () => {
window.scrollTo(0,0);
  };

  return (
    <footer className="  w-full bg-bgLight dark:bg-bgDark gap-8 md:gap-10 lg:gap-16 pb-2 pt-42 flex flex-col items-center  ">
      <span className="px-4 md:px-10 lg:px-14 xl:px-20 w-full flex justify-end ">
        <button
          onClick={scrollToTop}
          className="cursor-pointer hover:scale-110 transition-transform duration-300"
        >
          <ButtonArrow
            divStyle=" border border-3 p-4 md:p-4 lg:p-5 hover:bg-bgDark hover:dark:bg-white "
            Arrowtyle=" hover:dark:invert dark:invert-0 invert hover:invert-0 w-6 lg:w-8 -rotate-45  "
          />
        </button>
      </span>

      <hr className=" w-96/100 rounded border-bgDark dark:border-white  " />

      <div className=" flex flex-row gap-3 md:flex-row lg:flex-row w-full justify-between px-4 md:px-10 lg:px-14 xl:px-20  ">
        <h1 className="font-ncs leading-[40px] lg:leading-[60px] text-[#076C69] text-2xl lg:text-5xl ">
          {content.beginning[langKey].split("\n")[0]} <br />
          {content.beginning[langKey].split("\n")[1]}
        </h1>

        <div className=" flex flex-col items-start gap-2 ">
          <h1 className=" text-xl lg:text-[42px] font-ncs text-bgDark dark:text-white  ">
            Contact
          </h1>
          <ul className=" pl-1 flex flex-col ">
            <li className=" text-sx lg:text-xl text-greyPtLight dark:text-greyPt font-roboto ">
              0782351931
            </li>
            <li className=" text-sx lg:text-xl text-greyPtLight dark:text-greyPt font-roboto ">
              moadem@gmail.com
            </li>
          </ul>
        </div>

        <div className=" hidden xl:block ">
          <h1 className=" text-bgDark dark:text-white font-ncs md:text-[42px]  ">
            Menu
          </h1>
          <ul className=" flex-wrap gap-x-3  gap-1 w-[340px] flex  ">
            {menu.map((option) => (
              <a
                onClick={() => {
                  if (option.achorLink === "Experience") {
                    navigate("/experience");
                  } else if (option.achorLink === "Projects") {
                    navigate("/projetcs");
                  } else {
                    navigate("/");
                  }
                }}
                href={
                  option.achorLink === "Experience" ||
                  option.achorLink === "Projects"
                    ? undefined
                    : `#${option.achorLink}`
                }
                key={option.name.en}
              >
                <li className=" cursor-pointer text-xl text-greyPtLight dark:text-greyPt font-roboto hover:text-bgDark hover:dark:text-white transition-colors duration-300 ">
                  {option.name[langKey]}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>

      <div className=" w-full items-center flex flex-col gap-4 px-4 md:px-10 lg:px-14 xl:px-20 ">
        <div className="flex gap-4">
          <a target="_blank" href="https://www.instagram.com/moadem_boudehane/">
            <img src={instagramColored} alt="Instagram" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mohamed-adem-boudehane-67926233b/"
          >
            <img src={LinkedInColored} alt="LinkedIn" />
          </a>
          <a target="_blank" href="https://x.com/moadem_bdh?s=21">
            <img
              className="invert dark:invert-0 "
              src={TwittwrColored}
              alt="X"
            />
          </a>
        </div>
        <p className=" text-greyPtLight dark:text-greyPt font-roboto text-sm  ">
          BY BOUDEHANE Mohamed Adem 2026 ©
        </p>
      </div>
    </footer>
  );
}
