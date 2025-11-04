import projectsLogo from '../assets/images/projects.png';
import lightsRemnantsGif from '../assets/images/lightsRemnants.gif';
import ProjectCard from './ProjectCard';

function Projects() {
    return (
        <section id="projects" className="section projects">
            <div className="title-container">
                <img src={projectsLogo} alt="logo projects" />
                <h2>Mes Projets</h2>
            </div>
            <h3>Projets Scolaires notables</h3>
            <div className="project-grid">
                <ProjectCard
                    title="ShopFinder"
                    description="Une carte interactive pour trouver des magasins autour d'un point.
            Développée avec Leaflet et utilisant du php."
                    link="https://github.com/lignix/ShopFinder"
                />
                <ProjectCard
                    title="Site de Vente - Particulier à Particulier"
                    description="Plateforme de vente d'objets entre particuliers, développée en Spring Boot (backend) et React (frontend)."
                    link="https://github.com/lignix/amazing-site-vente"
                />
                <ProjectCard
                    title="Light's Remnants"
                    description="Un jeu de plateforme 2D développé sur Unity en C#. Le joueur incarne
            un personnage qui doit traverser des niveaux en évitant des
            obstacles et a pour objectif de rallumer des balises et éclairer le
            monde après un désastre. Le jeu est conçu pour être accessible à
            tous, avec des graphismes type pixel art."
                    link="https://github.com/lignix/amazing-site-vente"
                    imageUrl={lightsRemnantsGif}
                />
            </div>
            <h3>Projets Personnels</h3>
            <div className="project-grid">
                <ProjectCard
                    title="Portfolio"
                    description="Le site sur lequel vous êtes actuellement. Présente mes compétences
            et mes projets. Codé avec React et TypeScript."
                    link="https://github.com/lignix/lignix.github.io"
                />
            </div>
        </section>
    );
}

export default Projects;