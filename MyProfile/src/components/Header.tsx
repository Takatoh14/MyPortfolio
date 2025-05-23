import "../styles/common.scss";
import "../styles/header.scss";

import HeaderNav from "./HeaderNav";
import { Profile } from "./IconList";

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="inner">
        <a href="/#Profile">
          <img src={Profile[0].src} alt={Profile[0].alt} className="headerImage" />
        </a>
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
