import projectsLogo from '../assets/images/projects.png';
import lightsRemnantsGif from '../assets/images/lightsRemnants.gif';

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="title-container">
        <img src={projectsLogo} alt="logo projects" />
        <h2>Mes Projets</h2>
      </div>
      <h3>Projets Scolaires notables</h3>
      <div className="project-grid">
        <div className="project-card">
          {/* projets scolaires */}
          <h3>ShopFinder</h3>
          <p>
            Une carte interactive pour trouver des magasins autour d'un point.
            Développée avec Leaflet et utilisant du php.
          </p>
          <a href="https://github.com/lignix/ShopFinder">Voir</a>
        </div>
        <div className="project-card">
          <h3>Site de Vente - Particulier à Particulier</h3>
          <p>
            {/* TODO */}
          </p>
          <a href="https://github.com/lignix/amazing-site-vente">Voir</a>
        </div>
        <div className="project-card">
          <h3>Light's Remnants</h3>
          <img src={lightsRemnantsGif} alt="Aperçu du jeu Light's Remnants" />
          <p>
            Un jeu de plateforme 2D développé sur Unity en C#. Le joueur incarne
            un personnage qui doit traverser des niveaux en évitant des
            obstacles et a pour objectif de rallumer des balises et éclairer le
            monde après un désastre. Le jeu est conçu pour être accessible à
            tous, avec des graphismes type pixel art.
          </p>
          <a href="https://github.com/lignix/lights-remnants">Voir</a>
        </div>
      </div>
      {/* projets perso */}
      <h3>Projets Personnels</h3>
      <div className="project-grid">
        <div className="project-card">
          <h3>Portfolio</h3>
          <p>
            Le site sur lequel vous êtes actuellement. Présente mes compétences
            et mes projets. Codé en simple HTML/CSS et JS.
          </p>
          <a href="https://github.com/lignix/lignix.github.io">Voir le GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;