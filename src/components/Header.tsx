import githubLogo from '../assets/images/github-mark.svg';
import linkedInLogo from '../assets/images/LinkedIn_icon.svg';
import { useLanguage } from '../context/LanguageContext';

function Header() {
  const { t } = useLanguage();
  
  return (
    <header>
      <div className="logo">charlesbouvier<span>.dev</span></div>

      <div className="header-right">
        <nav>
          <a href="#top">{t.header.home}</a>
          <a href="#experiences">{t.header.experiences}</a>
          <a href="#projects">{t.header.projects}</a>
          <a href="#about">{t.header.about}</a>
          <a href="#contact">{t.header.contact}</a>
        </nav>

        <div className="socials">
          <a href="https://github.com/lignix" target="_blank" rel="noopener noreferrer" title="GitHub">
            <img src={githubLogo} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/charles-bouvier/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <img src={linkedInLogo} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;