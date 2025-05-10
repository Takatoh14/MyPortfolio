import "./styles/main.scss";

import React from "react";
import profileImg from "../../public/images/icon01.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header_inner">
        <img src={profileImg} alt="Profile" className="header_logo" />Ï
        <nav className="header_nav">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#sns">SNS</a>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Header;
