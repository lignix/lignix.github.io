import ReadabilityRadarImg from '../assets/images/readabilityRadar.png';
import lightsRemnantsGif from '../assets/images/lightsRemnants.gif';
import yatai8Gif from '../assets/images/Yatai8.gif';
import ProjectCard from './ProjectCard';
import { useLanguage } from '../context/LanguageContext';

function Projects() {
    const { lang, t } = useLanguage();

    return (
        <section id="projects" className="section">
            <div className="section-header">
                <h2 className="section-title">{t.header.projects}</h2>
                <p className="section-subtitle">
                    {lang === 'fr' ? "Sélection de réalisations techniques et personnelles" : "Selection of technical and personal projects"}
                </p>
            </div>

            <div className="projects-grid">
                <ProjectCard
                    title="Readability Radar"
                    description={
                        lang === 'fr'
                            ? "Outil d'évaluation instantanée de la difficulté de sous-titres, articles et textes japonais basé sur les niveaux JLPT."
                            : "Instant difficulty analysis tool for Japanese subtitles, articles, and text files based on JLPT levels."
                    }
                    link="https://github.com/lignix/readability-radar"
                    link2="https://radar.charlesbouvier.dev/"
                    imageUrl={ReadabilityRadarImg}
                />

                <ProjectCard
                    title="Plateforme de Vente P2P"
                    description={
                        lang === 'fr'
                            ? "Application web complète d'échange entre particuliers développée avec Spring Boot (Backend Java) et React (Frontend)."
                            : "Full-stack P2P marketplace application built with Spring Boot (Java Backend) and React (Frontend)."
                    }
                    link="https://github.com/lignix/amazing-site-vente"
                />

                <ProjectCard
                    title="Yatai 8"
                    description={
                        lang === 'fr'
                            ? "Jeu 3D d'exploration et de détection d'anomalies dans une boucle spatiale. Développé sous Unity en C#."
                            : "3D anomaly detection game set in a spatial loop. Built with Unity and C#."
                    }
                    link="https://github.com/lignix/Yatai-8"
                    link2="https://store.steampowered.com/app/5080810/Yatai_8/"
                    imageUrl={yatai8Gif}
                />

                <ProjectCard
                    title="Light's Remnants"
                    description={
                        lang === 'fr'
                            ? "Jeu de plateforme 2D avec gestion de physiques et mécaniques fluides sous Unity (C#)."
                            : "2D platformer game focusing on dynamic physics and fluid gameplay in Unity (C#)."
                    }
                    link="https://github.com/lignix/lights-remnants"
                    imageUrl={lightsRemnantsGif}
                />
            </div>
        </section>
    );
}

export default Projects;