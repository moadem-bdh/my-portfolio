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

  // Handle scrolling based on pathname and hash
  useEffect(() => {
    if (location.pathname === "/") {
      if (location.hash) {
        // Scroll to section by ID when there's a hash
        const elementId = location.hash.replace("#", "");
        const element = document.getElementById(elementId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      } else {
        // Scroll to top when no hash
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 0);
      }
    }
  }, [location.pathname, location.hash]);
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
