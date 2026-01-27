import "./App.css";
import { Routes, Route } from "react-router";

import FullApp from "./pages/FullApp";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencesPage from "./pages/ExperiencesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FullApp />} />
      <Route path="/projetcs" element={<ProjectsPage />} />
      <Route path="/experience" element={<ExperiencesPage />} />
    </Routes>
  );
}
export default App;
