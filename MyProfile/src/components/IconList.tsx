import "../styles/iconList.scss";
import "../styles/common.scss";

import type { IconListProps } from "./Images";

// IconListコンポーネントの定義。Reactの関数コンポーネントとして実装。
// propsとして icons（アイコンの配列）、className（CSSクラス名）、silder（アニメーション用のクラス名）、loop（ループ用のクラス名）を受け取る。
const IconList = ({ icons, className, slider, loop }: IconListProps) => {
  return (
    // スライダー全体の外枠。loopクラスが適用されることで無限ループのスタイルを制御
    <div className={loop}>
      {/* スライダー内のアニメーション対象領域。animateクラスが適用される */}
      <div className={slider}>
        {/* 複製したアイコン配列をmapで回して、リンク付きまたは単なる画像として表示 */}
        {icons.map((icon, index) =>
          icon.url ? (
            // urlがある場合はリンク付きの画像を生成。新しいタブで開く設定付き
            <a key={index} href={icon.url} target="_blank" rel="noopener noreferrer">
              <img className={className} src={icon.src} alt={icon.alt} />
            </a>
          ) : (
            // urlがない場合は単純に画像だけを表示
            <img className={className} key={index} src={icon.src} alt={icon.alt} />
          )
        )}
      </div>
    </div>
  );
};

export default IconList;
