import logo from "../assets/photos/logoDesktop.svg";
import menuIcon from "../assets/photos/menu_icon_desktop.svg";
import LanguageToggle from "../components/LanguageToggle";

import Modetoggle from "../components/ModeToggle";

export default function NavbBar() {
  return (
    <nav id="NavBar" className="w-full h-[68px] md:h-[89px]" >
      <div className="z-10 w-full flex fixed top-0 py-4 md:py-6 px-4 md:px-10 items-center bg-bgDark justify-between ">
      <img src={logo} className=" md:h-max h-8 " alt="Logo" />
      <div className=" flex gap-4 md:gap-4 items-center ">
        <Modetoggle />
        <LanguageToggle />
      </div>
      <div className="flex gap-4 items-center relative group">
        <p className=" font-ncs opacity-0 z-0 -translate-x-10 text-white text-3xl absolute group-hover:opacity-100 group-hover:-translate-x-30 transition-all ease-linear ">
          Menu
        </p>
        <img
          className="cursor-pointer md:h-max h-8 z-10 bg-bgDark  rounded"
          src={menuIcon}
          alt="Menu"
        />
      </div>
      </div>
    </nav>
  );
}
