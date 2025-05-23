import "../styles/iconList.scss";

// 画像ファイルをインポート（各技術やツールのアイコン）
import AiIcon from "../../public/images/adobe-illustrator.svg";
import AwsIcon from "../../public/images/aws.svg";
import BootstrapIcon from "../../public/images/Bootstrap.svg";
import CssIcon from "../../public/images/css.svg";
import DockerIcon from "../../public/images/docker.svg";
import GitIcon from "../../public/images/git.svg";
import GithubIcon from "../../public/images/github.svg";
import HtmlIcon from "../../public/images/html.svg";
import InstagramIcon from "../../public/images/instagram.svg";
import JqueryIcon from "../../public/images/jquery.svg";
import JsIcon from "../../public/images/javascript.svg";
import LaravelIcon from "../../public/images/laravel.svg";
import LinuxIcon from "../../public/images/linux.svg";
import MySqlIcon from "../../public/images/mysql.svg";
import NPMIcon from "../../public/images/npm.svg";
import NextIcon from "../../public/images/nextjs.svg";
import NoImageIcon from "../../public/images/no-image.svg";
import NodeIcon from "../../public/images/nodejs.svg";
import PHPIcon from "../../public/images/php.svg";
import ProfileImage from "../../public/images/icon01.png";
import PsIcon from "../../public/images/adobe-photoshop.svg";
import ReactIcon from "../../public/images/reactjs.svg";
import SSMSIcon from "../../public/images/ssms.svg";
import SassIcon from "../../public/images/sass.svg";
import TsIcon from "../../public/images/typescript.svg";
import WPIcon from "../../public/images/wordpress.svg";
import XIcon from "../../public/images/X.svg";
import XdIcon from "../../public/images/adobe-xd.svg";

//プロフィール画像
const Profile = [{ src: ProfileImage, alt: "Profile" }];

//フロントエンド
const FrontEnd = [
  { src: HtmlIcon, alt: "HTML" },
  { src: CssIcon, alt: "CSS" },
  { src: JsIcon, alt: "JavaScript" },
  { src: TsIcon, alt: "TypeScript" },
  { src: ReactIcon, alt: "React" },
  { src: BootstrapIcon, alt: "Bootstrap" },
  { src: NextIcon, alt: "Next" },
  { src: JqueryIcon, alt: "Jquery" },
  { src: SassIcon, alt: "SASS" },
];

//バックエンド
const BackEnd = [
  { src: PHPIcon, alt: "PHP" },
  { src: NodeIcon, alt: "Node" },
  { src: LaravelIcon, alt: "Laravel" },
  { src: MySqlIcon, alt: "MySQL" },
  { src: SSMSIcon, alt: "SSMS" },
];

//インフラ
const Infra = [
  { src: AwsIcon, alt: "AWS" },
  { src: DockerIcon, alt: "Docker" },
  { src: LinuxIcon, alt: "Linux" },
];

//ツール
const Tools = [
  { src: GitIcon, alt: "Git" },
  { src: GithubIcon, alt: "GitHub" },
  { src: NPMIcon, alt: "npm" },
];

//コンテンツ管理システム
const CMS = [{ src: WPIcon, alt: "WordPress" }];

//デザイン
const Design = [
  { src: AiIcon, alt: "Illustrator" },
  { src: PsIcon, alt: "Photoshop" },
  { src: XdIcon, alt: "Xd" },
];

//SNS
const SNS = [
  { src: GithubIcon, alt: "GitHUb", url: "https://github.com/Takatoh14" },
  { src: InstagramIcon, alt: "Instagram", url: "https://www.instagram.com/t.takato523/" },
  { src: XIcon, alt: "X", url: "https://x.com/takato_H14" },
];

//その他
const Others = [{ src: NoImageIcon, alt: "画像がありません" }];

//型定義
type IconData = {
  src: string;
  alt: string;
  url?: string;
};

type IconListProps = {
  //IconData 型のオブジェクトを複数含む「配列」
  icons: IconData[];
  className?: string;
  animate?: string;
  loop?: string;
};

// IconListコンポーネントの定義。Reactの関数コンポーネントとして実装。
// propsとして icons（アイコンの配列）、className（CSSクラス名）、animate（アニメーション用のクラス名）、loop（ループ用のクラス名）を受け取る。
const IconList: React.FC<IconListProps> = ({ icons, className, animate, loop }) => {
  // icons配列を2回繰り返して複製し、無限ループのように見せるための配列を作成
  //const duplicatedIcons = [...icons, ...icons];

  return (
    // スライダー全体の外枠。loopクラスが適用されることで無限ループのスタイルを制御
    <div className={loop}>
      {/* スライダー内のアニメーション対象領域。animateクラスが適用される */}
      <div className={animate}>
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

//export

export default IconList;
export { Profile, FrontEnd, BackEnd, Infra, Tools, CMS, Design, SNS, Others };
