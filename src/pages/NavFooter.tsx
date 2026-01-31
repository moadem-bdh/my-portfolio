import NavbBar from "./NavBar";
import FooterSection from "./FooterSection";
import { Outlet } from "react-router";
import useToggle from "../costumHooks/useToggle";


export default function NavFooter() {
  const [isDark, setIsDark] = useToggle(true);

  return (
    <div className={`${isDark ? "dark" : ""} flex  flex-col relative w-full`}>
      <NavbBar setDark={setIsDark} />
      <Outlet/>
      <FooterSection />
    </div>
  );
}