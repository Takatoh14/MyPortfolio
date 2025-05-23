import "../styles/headerNav.scss";

import { Link, useNavigate } from "react-router-dom";

const HeaderNav = () => {
  // ページ遷移をプログラム的に行うための関数を取得
  const navigate = useNavigate();

  /**
   * アンカーリンクのクリック時の処理
   * @param event - クリックイベント
   * @param id - スクロールさせたいセクションのID
   */
  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault(); // デフォルトのリンク遷移をキャンセル（ブラウザのページ移動を止める）

    // "/"（トップページ）に遷移しつつ、
    // stateにスクロール先のIDを渡しておく
    // これによりトップページ側でstateを受け取って指定の場所にスクロール可能
    navigate("/", { state: { scrollToId: id } });
  };

  return (
    <nav>
      <ul>
        <li>
          {/* Aboutはaタグのクリック時にhandleAnchorClickで制御 */}
          <a href="/#About" onClick={(e) => handleAnchorClick(e, "About")}>
            About
          </a>
        </li>
        <li>
          {/* Skill、Projectは通常のLinkコンポーネントでページ遷移 */}
          <Link to="/Skill">Skill</Link>
        </li>
        <li>
          <Link to="/Project">Project</Link>
        </li>
        <li>
          {/* SNSも同様にaタグ＋クリック制御 */}
          <a href="/#SNS" onClick={(e) => handleAnchorClick(e, "SNS")}>
            SNS
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
