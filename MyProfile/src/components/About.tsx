import "../styles/common.scss";
import "../styles/about.scss";

import { Profile } from "./IconList";

const About = () => {
  return (
    <div id="About" className="about">
      <div className="inner">
        <h2>About</h2>
        <div className="introduction">
          <img src={Profile[0].src} alt={Profile[0].alt} className="AboutImage " />
          <div>
            <p>
              フルスタックエンジニアになるために日々学習をしている
              <br />
              フリーランスエンジニアです。
            </p>
            <p>
              現在はデータベース、REST API 、バッチファイル操作などの
              <br />
              バックエンド開発を主に担当しております。
              <br />
              他にもフロントエンド開発で使用するReact、TypeScript
              <br />
              インフラ系のLinux、AWSなども学習しております。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
