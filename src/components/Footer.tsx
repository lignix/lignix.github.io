// src/components/Footer.tsx
import githubLogo from '../assets/images/github-mark.svg';
import linkedInLogo from '../assets/images/LinkedIn_icon.svg';

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Charles Bouvier — Développeur Full Stack</p>
      <div className="socials">
        <a href="https://github.com/lignix" target="_blank" rel="noopener noreferrer" title="Mon profil GitHub">
          <img src={githubLogo} alt="logo github" />
        </a>
        <a href="https://www.linkedin.com/in/charles-bouvier/" target="_blank" rel="noopener noreferrer" title="Mon profil LinkedIn">
          <img src={linkedInLogo} alt="logo linkedIn" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;