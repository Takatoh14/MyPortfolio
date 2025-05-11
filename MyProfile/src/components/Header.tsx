import "../../src/styles/main.scss";
import "../../src/styles/_header.scss";
import "../../src/styles/_responsive.scss";

import profileImg from "../../public/images/icon01.png";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // メニュー表示状態

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header__inner">
        <img src={profileImg} alt="Profile" className="header__logo" />

        {/* ハンバーガーボタン */}
        <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu} aria-label="menu">
          {menuOpen ? "×" : "≡"}
        </button>

        {/* PC用ナビゲーション */}
        <nav className="header__nav">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">SNS</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* モバイル用ナビゲーション（スライド） */}
      <nav className={`mobile-nav ${menuOpen ? "show" : ""}`}>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">SNS</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
