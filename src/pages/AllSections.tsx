import AboutSection from "./AboutSection";
import ConatctMeSection from "./ContactMeSection";
import ExperienceSection from "./ExperienceSection";
import HeroSection from "./HeroSetion";
import HighlightSection from "./HighlightsSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import { useLocation } from "react-router";
import { useEffect } from "react";

export default function AllSections() {
  const location = useLocation();

  // Scroll to top only when navigating to home page without hash
  useEffect(() => {
    if (location.pathname === "/" && !location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname,location.hash]);

  // Scroll to section by ID when on home page with hash
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const elementId = location.hash.replace("#", "");
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash, location.pathname]);
  return (
    <div className={` flex  flex-col relative w-full`}>
      <HeroSection />
      <HighlightSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ConatctMeSection />
    </div>
  );
}
