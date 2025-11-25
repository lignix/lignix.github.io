import githubLogo from '../assets/images/github-mark.svg';
import linkedInLogo from '../assets/images/LinkedIn_icon.svg';
import maltLogo from '../assets/images/malt.svg';
import { useLanguage } from '../context/LanguageContext';

function Header() {
  const { t } = useLanguage();
  
  return (
    <header>
      <div className="logo">charlesbouvier.dev</div>

      <div className="socials">
        <a href="https://github.com/lignix" target="_blank" rel="noopener noreferrer" title="Mon profil GitHub">
          <img src={githubLogo} alt="logo github" />
        </a>
        <a href="https://www.linkedin.com/in/charles-bouvier/" target="_blank" rel="noopener noreferrer" title="Mon profil LinkedIn">
          <img src={linkedInLogo} alt="logo linkedIn" />
        </a>
        <a href="https://www.malt.fr/profile/charlesbouvier" target="_blank" rel="noopener noreferrer" title="Mon profil Malt">
          <img src={maltLogo} alt="logo malt" />
        </a>
      </div>
      <nav>
        <a href="#top">{t.header.home}</a>
        <a href="#about">{t.header.about}</a>
        <a href="#projects">{t.header.projects}</a>
      </nav>
    </header>
  );
}

export default Header;