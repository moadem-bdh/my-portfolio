import logo from "/assets/moademLogo.svg";
import menuIcon from "/assets/menu_icon_desktop.svg";
import LanguageToggle from "../components/LanguageToggle";
import Modetoggle from "../components/ModeToggle";
import useToggle from "../costumHooks/useToggle";
import Menu from "../modals/Menu";
import { AnimatePresence } from "framer-motion";
import {useNavigate} from "react-router"

export default function NavbBar({
  setDark,
}: {
  setDark: (a: boolean) => void;
}) {
  const [menuAppear, setMenuAppear] = useToggle(false);
  function handleMenuAppear() {
    setMenuAppear();
  }

 const navigate = useNavigate() ;

  return (
    <>
      <nav id="Home" className="w-full h-[68px] md:h-[76px] lg:h-[89px]  ">
        <div className=" z-30 w-full flex fixed top-0 py-4 md:py-5 lg:py-6 px-4 md:px-8 lg:px-10  items-center bg-bgLight  dark:bg-bgDark justify-between ">
          <img
            src={logo}
            className=" cursor-pointer md:h-9 lg:h-11 h-8 dark:invert-0 invert dark:none-0"
            alt="Logo"
            onClick={()=>navigate("/")}
          />
          <div className=" flex gap-4 md:gap-4 lg:gap-4 items-center ">
            <Modetoggle setDark={setDark} />
            <LanguageToggle />
          </div>
          <div
            onClick={handleMenuAppear}
            className="flex gap-4 items-center relative group"
          >
            <p className="hidden lg:block font-ncs opacity-0 z-0 -translate-x-10 w-30 text-bgDark dark:text-white text-3xl absolute group-hover:opacity-100 group-hover:-translate-x-30 transition-all ease-linear ">
              Menu
            </p>
            <span className="z-10 bg-bgLight dark:bg-bgDark ">
              <img
                className="cursor-pointer md:h-9 lg:h-max h-8 z-15 dark:invert-0 invert rounded"
                src={menuIcon}
                alt="Menu"
              />
            </span>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {menuAppear && (
          <Menu
            handleMenuAppear={handleMenuAppear}
          />
        )}
      </AnimatePresence>
    </>
  );
}
