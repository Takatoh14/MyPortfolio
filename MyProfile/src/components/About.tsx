import "../../src/styles/main.scss";
import "../../src/styles/_About.scss";
import "../../src/styles/_responsive.scss";

import { SnsIcons } from "./IconImages";
import profileImg from "../../public/images/icon01.png";

const About: React.FC = () => {
  return (
    <section className="about">
      <h2 id="About" className="scroll-offset">
        About
      </h2>
      <div className="about-content">
        <img src={profileImg} alt="Profile" className="profile-image" />
        <div className="about-text">
          <p>テキストテキストテキストテキストテキストテキストテキスト</p>
          <p>テキストテキストテキストテキストテキストテキストテキスト</p>
          <p>テキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
      </div>

      <h2 id="SNS" className="scroll-offset">
        SNS
      </h2>
      <div className="sns-icons">
        {SnsIcons.map((sns, index) => (
          <a key={index} href={sns.url} target="_blank" rel="noreferrer">
            <img src={sns.src} alt={sns.alt} className="icon" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default About;
