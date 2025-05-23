import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "./page/Index";
import Project from "./page/Project";
import Skill from "./page/Skill";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
