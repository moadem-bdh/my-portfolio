import "./App.css";
import { Routes, Route } from "react-router";
import { LanguageProvider } from "./Contexts/LanguageContext";
import AllSections from "./pages/AllSections";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencesPage from "./pages/ExperiencesPage";
import NavFooter from "./pages/NavFooter";

function App() {
  return (
    <LanguageProvider>
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
