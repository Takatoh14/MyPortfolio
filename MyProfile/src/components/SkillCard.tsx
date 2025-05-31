import "../styles/skillCard.scss";
import "../styles/common.scss";

import type { IconData } from "../components/Images";

const SkillCard = ({ icon, title, level = 0, description }: IconData) => {
  return (
    <div className="skillCard">
      <div className="skillCardIcons">
        <img src={icon} alt={title} className="skillCard_icon" />
      </div>
      <h3 className="skillCard_title">{title}</h3>
      <div className="skillCard_level">
        スキルレベル：
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={`star ${i < level ? "filled" : "empty"}`}>
            ★
          </span>
        ))}
      </div>
      <p className="skillCard_text">{description}</p>
    </div>
  );
};

export default SkillCard;
