import "../styles/sns.scss";

import { useLocation, useNavigate } from "react-router-dom";

import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Profile from "../components/Profile";
import SNS from "../components/Sns";
import { useEffect } from "react";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && typeof location.state === "object") {
      const { scrollToId } = location.state as { scrollToId?: string };

      if (scrollToId) {
        const el = document.getElementById(scrollToId);
        if (el) {
          el.scrollIntoView({ behavior: "auto" });

          // スクロール後にstateをクリアして副作用を防ぐ
          navigate(location.pathname, { replace: true, state: {} });
        }
      }
    }
  }, [location.state, navigate, location.pathname]);

  return (
    <>
      <Header />
      <Profile />
      <About />
      <SNS />
      <Footer />
    </>
  );
};

export default Index;
