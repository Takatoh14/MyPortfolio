import "../styles/common.scss";
import "../styles/header.scss";

import { Link, useNavigate } from "react-router-dom";

import { Profile } from "./Images";

const Header = () => {
  const navigate = useNavigate();

  /**
   * アンカーリンクのクリック時の処理
   */
  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    navigate("/", { state: { scrollToId: id } });
  };

  return (
    <header id="header" className="header">
      <div className="inner">
        <div className="headerFlex">
          {/* SPAのためLinkを使用 */}
          <Link to="/">
            <img src={Profile[0].src} alt={Profile[0].alt} className="headerImage" />
          </Link>

          <nav>
            <ul>
              <li>
                <a href="#">Top</a>
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
                <Link to="/Skill">Skill</Link>
              </li>
              <li>
                <Link to="/Portfolio">Portfolio</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
