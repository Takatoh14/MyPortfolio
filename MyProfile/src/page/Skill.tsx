import "../styles/common.scss";
import "../styles/skill.scss";

import Footer from "../components/Footer";
import Header from "../components/Header";
import SkillCard from "../components/SkillCard";
import { Skills } from "../components/Images";


const Skill = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // ページのトップにスクロール
  }, []);
  return (
    <>
      <Header />
      <div id="Skill" className="skill">
        <div className="inner">
          <h2 className="skillTitle">Skill</h2>
          <div className="skillCards">
            {Skills.map((item, index) => (
              <SkillCard key={index} icon={item.src} title={item.alt} level={item.level ?? 0} description={item.description} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Skill;
