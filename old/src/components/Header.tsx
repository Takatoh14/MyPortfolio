import '../../src/styles/main.scss';
import '../../src/styles/_header.scss';
import '../../src/styles/_responsive.scss'
import profileImg from '../../public/images/icon01.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <img src={profileImg} alt="Profile" className='header__logo' />
        <nav className="header__nav">
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">SNS</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;