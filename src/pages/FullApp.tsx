import useToggle from "../costumHooks/useToggle";
import AboutSection from "./AboutSection";
import ConatctMeSection from "./ContactMeSection";
import ExperienceSection from "./ExperienceSection";
import FooterSection from "./FooterSection";
import HeroSection from "./HeroSetion";
import HighlightSection from "./HighlightsSection";
import NavbBar from "./NavBar";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";


export default function FullApp() {

const [isDark , setIsDark ]  = useToggle(true)

  return (
    <div className= {`${ isDark ? "dark": "" } flex flex-col relative`}>
      <NavbBar setDark={setIsDark} />
      <HeroSection />
      <HighlightSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ConatctMeSection />
      <FooterSection />
    </div>
  );
}
