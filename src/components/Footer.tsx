import githubLogo from '../assets/images/github-mark.svg';
import linkedInLogo from '../assets/images/LinkedIn_icon.svg';

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Charles Bouvier</p>
      <div className="socials">
        <a href="https://github.com/lignix" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="logo github" />
        </a>
        <a href="https://www.linkedin.com/in/charles-bouvier/" target="_blank" rel="noopener noreferrer">
          <img src={linkedInLogo} alt="logo linkedIn" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;