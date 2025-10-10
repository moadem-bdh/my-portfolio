import './App.css'
import NavbBar from './pages/NavBar'
import HeroSection from './pages/HeroSetion'
import HighlightSection from './pages/HighlightsSection'
import AboutSection from './pages/AboutSection'
import SkillsSection from './pages/SkillsSection'
import ExperienceSection from './pages/ExperienceSection'
import ProjectsSection from './pages/ProjectsSection'
import ConatctMeSection from './pages/ContactMeSection'
import FooterSection from './pages/FooterSection'


function App() {
 

  return (
    <div  className=" flex flex-col bg-bgDark relative ">
<NavbBar/>
<HeroSection/>
<HighlightSection/>
<AboutSection/>
<SkillsSection/>
<ExperienceSection/>
<ProjectsSection/>
<ConatctMeSection/>
<FooterSection/>

    </div>
      
      
    
      

  )
}
export default App
