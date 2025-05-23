import AIIcon from "../../public/images/adobe-illustrator.svg";
import AWSIcon from "../../public/images/aws.svg";
import BIcon from "../../public/images/Bootstrap.svg";
import CSSIcon from "../../public/images/css.svg";
import DockerIcon from "../../public/images/docker.svg";
import GitHubIcon from "../../public/images/github.svg";
import GitIcon from "../../public/images/git.svg";
import HTMLIcon from "../../public/images/html.svg";
import InstagramIcon from "../../public/images/instagram.svg";
import JSIcon from "../../public/images/javascript.svg";
import JqueryIcon from "../../public/images/jquery.svg";
import LaravelIcon from "../../public/images/laravel.svg";
import LinuxIcon from "../../public/images/linux.svg";
import MysqlIcon from "../../public/images/mysql.svg";
import NextIcon from "../../public/images/nextjs.svg";
import NodeIcon from "../../public/images/nodejs.svg";
import NpmIcon from "../../public/images/npm.svg";
import PHPIcon from "../../public/images/php.svg";
import PSIcon from "../../public/images/adobe-photoshop.svg";
import ReactIcon from "../../public/images/reactjs.svg";
import SASSIcon from "../../public/images/sass.svg";
import SSMSIcon from "../../public/images/ssms.svg";
import TSIcon from "../../public/images/typescript.svg";
import WPIcon from "../../public/images/wordpress.svg";
import XDIcon from "../../public/images/adobe-xd.svg";
import XIcon from "../../public/images/X.svg";

const icons = [
  { src: HTMLIcon, alt: "HTML" },
  { src: CSSIcon, alt: "CSS" },
  { src: JSIcon, alt: "JavaScript" },
  { src: TSIcon, alt: "TypeScript" },
  { src: PHPIcon, alt: "PHP" },
  { src: ReactIcon, alt: "React" },
  { src: NextIcon, alt: "Next.js" },
  { src: LaravelIcon, alt: "Laravel" },
  { src: BIcon, alt: "Bootstrap" },
  { src: JqueryIcon, alt: "jQuery" },
  { src: SASSIcon, alt: "Sass" },
  { src: GitIcon, alt: "Git" },
  { src: GitHubIcon, alt: "GitHub" },
  { src: NpmIcon, alt: "npm" },
  { src: NodeIcon, alt: "Node.js" },
  { src: WPIcon, alt: "WordPress" },
  { src: SSMSIcon, alt: "SSMS" },
  { src: AWSIcon, alt: "AWS" },
  { src: DockerIcon, alt: "Docker" },
  { src: LinuxIcon, alt: "Linux" },
  { src: MysqlIcon, alt: "MySQL" },
  { src: AIIcon, alt: "Adobe Illustrator" },
  { src: PSIcon, alt: "Adobe Photoshop" },
  { src: XDIcon, alt: "Adobe XD" },
];

const IconImages: React.FC = () => {
  return (
    <>
      {icons.map((icon, index) => (
        <img key={index} src={icon.src} alt={icon.alt} className="icon" />
      ))}
    </>
  );
};

const SnsIcons = [
  { src: GitHubIcon, alt: "GitHub", url: "https://github.com/Takatoh14" },
  { src: InstagramIcon, alt: "Instagram", url: "https://www.instagram.com/t.takato523/" },
  { src: XIcon, alt: "X (Twitter)", url: "https://x.com/takato_H14" },
];

export default IconImages;
export { SnsIcons };
