import githubLogo from '../assets/images/github-mark.svg';
import linkedInLogo from '../assets/images/LinkedIn_icon.svg';

function Header() {
  return (
    <header>
      <div className="logo">charlesbouvier.dev</div>
      <div className="socials">
        <a href="https://github.com/lignix" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="logo github" />
        </a>
        <a href="https://www.linkedin.com/in/charles-bouvier/" target="_blank" rel="noopener noreferrer">
          <img src={linkedInLogo} alt="logo linkedIn" />
        </a>
      </div>
      <nav>
        <a href="#top">Accueil</a>
        <a href="#about">Parcours</a>
        <a href="#projects">Projets</a>
      </nav>
    </header>
  );
}

export default Header;