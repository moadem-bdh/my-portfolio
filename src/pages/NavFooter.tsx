import NavbBar from "./NavBar";
import FooterSection from "./FooterSection";
import { Outlet } from "react-router";
import useToggle from "../costumHooks/useToggle";
import { usePageTitle } from "../costumHooks/usePageTitle";


export default function NavFooter() {
  const [isDark, setIsDark] = useToggle(true);
  usePageTitle();

  return (
    <div className={`${isDark ? "dark" : ""} flex  flex-col relative w-full`}>
      <NavbBar setDark={setIsDark} />
      <Outlet/>
      <FooterSection />
    </div>
  );
}