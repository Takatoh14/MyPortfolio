import "../styles/common.scss";
import "../styles/header.scss";

import { Link, useNavigate } from "react-router-dom";

import { Profile } from "./Images";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // アンカーリンクをクリックしたときの処理
  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    setMenuOpen(false); // モバイルメニューを閉じる
    navigate("/", { state: { scrollToId: id } });
  };

  // ハンバーガーメニューの開閉
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header" className="header">
      <div className="inner">
        <div className="headerFlex">
          {/* ロゴ */}
          <Link to="/">
            <img src={Profile[0].src} alt={Profile[0].alt} className="headerImage" />
          </Link>

          {/* ハンバーガーメニュー */}
          <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu} aria-label="menu">
            <span></span> {/* 中央線 */}
          </button>

          {/* デスクトップ用ナビゲーション */}
          <nav className="navMenu">
            <ul>
              <li>
                <a href="#" onClick={() => setMenuOpen(false)}>
                  Top
                </a>
              </li>
              <li>
                <a href="/#About" onClick={(e) => handleAnchorClick(e, "About")}>
                  About
                </a>
              </li>
              <li>
                <a href="/#SNS" onClick={(e) => handleAnchorClick(e, "SNS")}>
                  SNS
                </a>
              </li>
              <li>
                <Link to="/Skill" onClick={() => setMenuOpen(false)}>
                  Skill
                </Link>
              </li>
              <li>
                <Link to="/Portfolio" onClick={() => setMenuOpen(false)}>
                  Portfolio
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* モバイル用ナビゲーションメニュー */}
      <nav className={`mobile-nav ${menuOpen ? "show" : ""}`}>
        <ul>
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>
              Top
            </a>
          </li>
          <li>
            <a href="/#About" onClick={(e) => handleAnchorClick(e, "About")}>
              About
            </a>
          </li>
          <li>
            <a href="/#SNS" onClick={(e) => handleAnchorClick(e, "SNS")}>
              SNS
            </a>
          </li>
          <li>
            <Link to="/Skill" onClick={() => setMenuOpen(false)}>
              Skill
            </Link>
          </li>
          <li>
            <Link to="/Portfolio" onClick={() => setMenuOpen(false)}>
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
