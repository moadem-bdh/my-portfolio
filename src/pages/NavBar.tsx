import logo from "../assets/photos/logoDesktop.svg";
import menuIcon from "../assets/photos/menu_icon_desktop.svg";
import LanguageToggle from "../components/LanguageToggle";

import Modetoggle from "../components/ModeToggle";
import useToggle from "../costumHooks/useToggle";
import Menu from "../modals/Menu";

export default function NavbBar( {setDark}:{setDark:(a:boolean)=> void} ) {
  const [menuAppear, setMenuAppear] = useToggle(false);

  function handleParentClick(e: React.MouseEvent): void {
    if (e.target === e.currentTarget) {
      setMenuAppear();
    }
  }

  return (
    <>
      <nav id="Home" className="w-full h-[68px] md:h-[89px]  ">
        <div className="z-10 w-full flex fixed top-0 py-4 md:py-6 px-4 md:px-10  items-center bg-bgLight  dark:bg-bgDark justify-between ">
          <img
            src={logo}
            className=" md:h-max h-8 dark:invert-0 invert dark:none-0"
            alt="Logo"
          />
          <div className=" flex gap-4 md:gap-4 items-center ">
            <Modetoggle setDark={setDark} />
            <LanguageToggle />
          </div>
          <div
            onClick={setMenuAppear}
            className="flex gap-4 items-center relative group"
          >
            <p className=" font-ncs opacity-0 z-0 -translate-x-10 w-30 text-bgDark dark:text-white text-3xl absolute group-hover:opacity-100 group-hover:-translate-x-30 transition-all ease-linear ">
              Menu
            </p>
            <span className="z-10 bg-bgLight dark:bg-bgDark ">
              <img
                className="cursor-pointer md:h-max h-8 z-15 dark:invert-0 invert rounded"
                src={menuIcon}
                alt="Menu"
              />
            </span>
          </div>
        </div>
      </nav>
      {menuAppear && (
        <Menu
          handleParentClick={handleParentClick}
          setMenuAppear={setMenuAppear}
        />
      )}
    </>
  );
}
