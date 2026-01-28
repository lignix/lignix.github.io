import projectsLogo from '../assets/images/projects.png';
import lightsRemnantsGif from '../assets/images/lightsRemnants.gif';
import ReadabilityRadarImg from '../assets/images/readabilityRadar.png';
import ProjectCard from './ProjectCard';
import { useLanguage } from '../context/LanguageContext';

function Projects() {
    const { lang, t } = useLanguage();

    return (
        <section id="projects" className="section projects">
            <div className="title-container">
                <img src={projectsLogo} alt="logo projects" />
                <h2>{t.header.projects}</h2>
            </div>

            <h3>{lang === 'fr' ? "Projets Scolaires notables" : "Notable School Projects"}</h3>
            
            <div className="masonry-grid">
                {/* === COLONNE DE GAUCHE === */}
                <div className="masonry-column">
                    <ProjectCard
                        title="ShopFinder"
                        description={
                            lang === 'fr'
                                ? "Une carte interactive pour trouver des magasins autour d'un point. Développée avec Leaflet et utilisant du php."
                                : "An interactive map to find stores around a location. Developed with Leaflet and PHP."
                        }
                        link="https://github.com/lignix/ShopFinder"
                    />
                    <ProjectCard
                        title="Light's Remnants"
                        description={
                            lang === 'fr'
                                ? "Un jeu de plateforme 2D développé sur Unity en C#. Le joueur incarne un personnage qui doit traverser des niveaux..."
                                : "A 2D platformer game developed on Unity in C#. The player embodies a character who must cross levels..."
                        }
                        link="https://github.com/lignix/lights-remnants" 
                        imageUrl={lightsRemnantsGif}
                    />
                </div>

                {/* === COLONNE DE DROITE === */}
                <div className="masonry-column">
                    <ProjectCard
                        title="Site de Vente"
                        description={
                            lang === 'fr'
                                ? "Plateforme de vente d'objets entre particuliers, développée en Spring Boot (backend) et React (frontend)."
                                : "P2P marketplace platform, developed with Spring Boot (backend) and React (frontend)."
                        }
                        link="https://github.com/lignix/amazing-site-vente"
                    />
                </div>
            </div>

            <h3>{lang === 'fr' ? "Projets Personnels" : "Personal Projects"}</h3>
            
            <div className="masonry-grid">
                {/* === COLONNE DE GAUCHE === */}
                <div className="masonry-column">
                    <ProjectCard
                        title="Portfolio"
                        description={
                            lang === 'fr'
                                ? "Le site sur lequel vous êtes actuellement. Présente mes compétences et mes projets. Codé avec React et TypeScript."
                                : "The website you are currently on. Showcases my skills and projects. Coded with React and TypeScript."
                        }
                        link="https://github.com/lignix/lignix.github.io"
                    />
                </div>

                {/* === COLONNE DE DROITE === */}
                <div className="masonry-column">
                    <ProjectCard
                        title="Readability Radar"
                        description={
                            lang === 'fr'
                                ? "Aide les apprenants en japonais à évaluer la difficulté de sous-titres, articles ou fichiers texte instantanément..."
                                : "Helps Japanese learners evaluate the difficulty of subtitles, articles, or text files instantly..."
                        }
                        link="https://github.com/lignix/readability-radar"
                        link2="https://radar.charlesbouvier.dev/"
                        imageUrl={ReadabilityRadarImg}
                    />
                </div>
            </div>
        </section>
    );
}

export default Projects;