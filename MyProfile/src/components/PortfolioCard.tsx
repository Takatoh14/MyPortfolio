import "../styles/common.scss";
import "../styles/portfolioCard.scss";

import type { IconData } from "../components/Images";

const SkillCard = ({ icon, title, description, url }: IconData) => {
  return (
    <div className="skillsCard">
      <div className="skillsCardIcons">
        <a href={url}>
          <img src={icon} alt={title} className="skillCard_icon" />
        </a>
      </div>
      <h3 className="skillCard_title">{title}</h3>
      <p className="skillsClard_text">{description}</p>
    </div>
  );
};

export default SkillCard;
