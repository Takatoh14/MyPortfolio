//画像、アイコン読み込み
import AWSIcon from '../../public/images/aws.svg';
import AiIcon from '../../public/images/adobe-illustrator.svg';
import CssIcon from '../../public/images/css.svg';
import DockerIcon from '../../public/images/docker.svg';
import GitHubIcon from '../../public/images/github.svg';
import GitIcon from '../../public/images/git.svg';
import HtmlIcon from '../../public/images/html.svg';
import InstagramIcon from '../../public/images/instagram.svg';
import JqueryIcon from '../../public/images/jquery.svg';
import JsIcon from '../../public/images/javascript.svg';
import LaravelIcon from '../../public/images/laravel.svg';
import LinuxIcon from '../../public/images/linux.svg';
import MysqlIcon from '../../public/images/mysql.svg';
import NPMIcon from '../../public/images/npm.svg';
import NextIcon from '../../public/images/nextjs.svg';
//import NoImageIcon from "../../public/images/no-image.svg";
import NodeIcon from '../../public/images/nodejs.svg';
import PHPicon from '../../public/images/php.svg';
//import Profile01 from "../../public/images/Portfolio.png";
import Profile01 from '../../public/images/MyPortfolio.png';
import Profile02 from '../../public/images/tools.png';
import ProfileImage from '../../public/images/icon01.png';
import PsIcon from '../../public/images/adobe-photoshop.svg';
import ReactIcon from '../../public/images/reactjs.svg';
import SassIcon from '../../public/images/sass.svg';
import SsmsIcon from '../../public/images/ssms.svg';
import TsIcon from '../../public/images/typescript.svg';
import WPIcon from '../../public/images/wordpress.svg';
import XIcon from '../../public/images/X.svg';
import XdIcon from '../../public/images/adobe-xd.svg';

//型定義
export type IconData = {
  src?: string;
  alt?: string;
  url?: string;
  level?: number;
  description?: string;
  icon?: string;
  title?: string;
};

export type IconListProps = {
  //IconData 型のオブジェクトを複数含む「配列」
  icons: IconData[];
  className?: string;
  slider?: string;
  loop?: string;
};

//オブジェクト

//フロントエンド
const Frontend = [
  {
    src: HtmlIcon,
    alt: 'HTML',
    level: 4,
    description: '独学で学習。基本的なことはできる。',
  },
  {
    src: CssIcon,
    alt: 'CSS',
    level: 4,
    description: '独学で学習。基本的なことはできる。',
  },
  {
    src: JsIcon,
    alt: 'JavaScript',
    level: 2,
    description: '独学で現在学習中。簡単なアニメーションなどの実装ができる。',
  },
  {
    src: TsIcon,
    alt: 'TypeScript',
    level: 2,
    description: '独学で現在学習中。このサイトにも使用している。',
  },
  {
    src: ReactIcon,
    alt: 'React',
    level: 2,
    description: '独学で現在学習中。このサイトにも使用している。',
  },
  {
    src: NextIcon,
    alt: 'Next',
    level: 1,
    description:
      '独学で現在学習中。Reactのフレームワークであまり理解ができていない。',
  },
  {
    src: JqueryIcon,
    alt: 'Jquery',
    level: 2,
    description:
      '独学で学習。JavaScriptのフレームワーク。現在はあまり使用していない。',
  },
  {
    src: SassIcon,
    alt: 'SASS',
    level: 3,
    description:
      '独学で学習。CSSを拡張したメタ言語でこのサイトにも使用している。',
  },
];

//バックエンド
const Backend = [
  {
    src: PHPicon,
    alt: 'PHP',
    level: 3,
    description: '独学で学習。基本的なことはできる。',
  },
  {
    src: LaravelIcon,
    alt: 'Laravel',
    level: 3,
    description: '独学で学習。PHPのフレームワークで基本的なことはできる。',
  },
  {
    src: NodeIcon,
    alt: 'Node',
    level: 1,
    description:
      '独学で現在学習中。サーバーサイドでJavaScriptを使うためのプラットフォームであまり理解ができていない。',
  },
  {
    src: MysqlIcon,
    alt: 'Mysql',
    level: 4,
    description: '独学で学習。基礎的な操作ができる。',
  },
  {
    src: SsmsIcon,
    alt: 'SSMS',
    level: 4,
    description: '独学で学習。基礎的な操作ができる。',
  },
];

//インフラ
const Infra = [
  {
    src: AWSIcon,
    alt: 'AWS',
    level: 1,
    description: 'クラウドサービス。あまり理解ができていない。',
  },
  {
    src: DockerIcon,
    alt: 'Docker',
    level: 1,
    description: 'コンテナ仮想化ツール。少しだけ操作ができる程度。',
  },
  {
    src: LinuxIcon,
    alt: 'Linux',
    level: 1,
    description: '基本的なコマンド操作ができる程度。',
  },
];

const Tool = [
  {
    src: GitIcon,
    alt: 'Git',
    level: 3,
    description: 'バージョン管理ツール。基本的なコマンド操作ができる程度。',
  },
  {
    src: GitHubIcon,
    alt: 'GitHub',
    level: 3,
    description: 'バージョン管理ツール。基本的なコマンド操作ができる程度。',
  },
  {
    src: NPMIcon,
    alt: 'npm',
    level: 1,
    description:
      'Node.jsのパッケージ管理システム。簡単なコマンド操作ができる程度。',
  },
];

//コンテンツ管理システム
const CMS = [
  {
    src: WPIcon,
    alt: 'WordPress',
    level: 1,
    description:
      'Webサイトやブログを簡単に作成・管理できるコンテンツ管理システム。あまり理解ができていない。',
  },
];

//デザイン
const Design = [
  {
    src: AiIcon,
    alt: 'Illustrator',
    level: 2,
    description:
      'テキストと画像を組み合わせたレイアウトの作成ができる。簡単な操作ができる程度',
  },
  {
    src: PsIcon,
    alt: 'Photoshop',
    level: 1,
    description: '画像編集ソフト。あまり理解ができていない。',
  },
  {
    src: XdIcon,
    alt: 'Xd',
    level: 2,
    description: 'UI/UXデザインに特化したツール。簡単な操作ができる程度。',
  },
];

//プロフィール画像
const Profile = [{ src: ProfileImage, alt: 'Profile' }];

//SNS
const SNS = [
  { src: GitHubIcon, alt: 'GitHUb', url: 'https://github.com/Takatoh14' },
  {
    src: InstagramIcon,
    alt: 'Instagram',
    url: 'https://www.instagram.com/t.takato523/',
  },
  { src: XIcon, alt: 'X', url: 'https://x.com/takato_H14' },
];

//その他
const Others = [
  {
    src: Profile01,
    alt: 'ポートフォリオサイト',
    description:
      'React、TypeScriptを使用して作成したポートフォリオサイトです。自己紹介やスキル、成果物などを掲載しています。',
    url: '/',
  },
  {
    src: Profile02,
    alt: 'データ変換サイト',
    description:
      'React、TypeScriptを使用して作成したデータ変換サイトです。データ置換やデータの差分確認、Json整形などが行えます。',
    url: '/tools',
  },
  // 今後追加可能
];

//Skillページに表示する
const Skills = [
  ...Frontend.slice(0, 5), // Frontend[0] 〜 Frontend[4]
  ...Backend.slice(0, 2), // Backend[0], Backend[1]
  Backend[3],
  Backend[4], // 個別指定
  Infra[2],
  Tool[0],
  Design[0],
  Design[2],
  // Design[0], Design[2]
];

//Portflioページに表示する
const Profiloes = [...Others];

export {
  Frontend,
  Backend,
  Infra,
  Tool,
  CMS,
  Design,
  Profile,
  SNS,
  Others,
  Skills,
  Profiloes,
};
