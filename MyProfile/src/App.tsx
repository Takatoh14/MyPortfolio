import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "./page/Index";
import Portfolio from "./page/Portfolio";
import Skill from "./page/Skill";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
