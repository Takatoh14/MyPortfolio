//import App from "./App";
import Header from './components/Header'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
  </StrictMode>
);
