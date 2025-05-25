import "../styles/common.scss";
import "../styles/portfolio.scss";

import Footer from "../components/Footer";
import Header from "../components/Header";
import PortflioCard from "../components/PortfolioCard";
import { Profiloes } from "../components/Images";

const Portflio = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <div id="Skill" className="skill">
          <div className="inner">
            <h2 className="skillTitle">Portfolio</h2>
            <div className="skillCards">
              {Profiloes.map((item, index) => (
                <PortflioCard key={index} icon={item.src} title={item.alt} description={item.description} url={item.url} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portflio;
