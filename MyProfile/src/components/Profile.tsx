import "../styles/profile.scss";
import "../styles/common.scss";

import { Backend, CMS, Design, Frontend, Infra, Tool } from "../components/Images";

import IconList from "./IconList";

const IconLists = [...Frontend, ...Backend, ...Infra, ...CMS, ...Design, ...Tool, ...Frontend, ...Backend, ...Infra, ...CMS, ...Design, ...Tool];

const Profile = () => {
  return (
    <div id="Profile" className="profile">
      <div className="inner">
        <h2>Takato Tanabe’s Portfolio</h2>
        <div className="iconLists">
          <IconList loop="icon-slider-wrapper" slider="icon-slider" className="profileIcon" icons={IconLists} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
