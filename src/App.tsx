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
import SplashCursor from './components/SplashCursor'





function App() {
 

  return (
    <div  className=" flex flex-col relative ">
      <SplashCursor/>
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
