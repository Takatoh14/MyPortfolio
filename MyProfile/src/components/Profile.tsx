import "../styles/common.scss";
import "../styles/profile.scss";

import IconList, { BackEnd, CMS, Design, FrontEnd, Infra, Tools } from "./IconList";

const iconLists = [...FrontEnd, ...BackEnd, ...Infra, ...Tools, ...CMS, ...Design, ...FrontEnd, ...BackEnd, ...Infra, ...Tools, ...CMS, ...Design];

const Profile = () => {
  return (
    <div className="profile">
      <div className="inner">
        <h2>Takato Tanabe’s Portfolio</h2>
        <div className="iconsList">
          <IconList loop="icon-slider-wrapper" animate="icon-slider" className="profileIcon" icons={iconLists} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
