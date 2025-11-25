import githubLogo from '../assets/images/github-mark.svg';
import linkedInLogo from '../assets/images/LinkedIn_icon.svg';
import maltLogo from '../assets/images/malt.svg';


function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Charles Bouvier</p>
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
    </footer>
  );
}

export default Footer;