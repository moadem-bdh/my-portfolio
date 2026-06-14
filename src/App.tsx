import "./App.css";
import { Routes, Route } from "react-router";
import { LanguageProvider } from "./Contexts/LanguageContext";
import AllSections from "./pages/AllSections";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencesPage from "./pages/ExperiencesPage";
import NavFooter from "./pages/NavFooter";
import SplashCursor from "./components/SplashCursor";


function App() {
  return (
    <LanguageProvider>
<SplashCursor
  DENSITY_DISSIPATION={3.5}
  VELOCITY_DISSIPATION={2}
  PRESSURE={0.1}
  CURL={3}
  SPLAT_RADIUS={0.2}
  SPLAT_FORCE={6000}
  COLOR_UPDATE_SPEED={10}
  SHADING
  RAINBOW_MODE={false}
  COLOR="#076C69"
/>
      <Routes>
        <Route element={<NavFooter />}>
          <Route path="/" element={<AllSections />} />
          <Route path="/projetcs" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencesPage />} />
        </Route>
      </Routes>
    </LanguageProvider>
  );
}
export default App;
