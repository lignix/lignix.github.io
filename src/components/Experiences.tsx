import ExperienceCard from './ExperienceCard';
import { useLanguage } from '../context/LanguageContext';

function Experiences() {
  const { lang, t } = useLanguage();

  return (
    <section id="experiences" className="section">
      <div className="section-header">
        <h2 className="section-title">{t.experiences.title}</h2>
        <p className="section-subtitle">
          {lang === 'fr' ? "Mon parcours récent en entreprise" : "My recent work experience"}
        </p>
      </div>

      <div className="cards-grid">
        <ExperienceCard
          link="https://www.sncf.com"
          title={lang === 'fr' 
            ? "Responsable Informatique (CSIE) — SNCF Voyageurs" 
            : "IT Manager (CSIE) — SNCF Voyageurs"}
          description={lang === 'fr' 
            ? "Octobre – Décembre 2026 | Gestion de parcs IT, pilotage et création d'applications internes, gestion des accès et coordination sécurité (SSI) avec e.SNCF."
            : "October – December 2026 | Management of IT assets & servers, internal app development, cybersecurity compliance (SSI), and coordination with e.SNCF."}
          ctaText={lang === 'fr' ? "Site SNCF Voyageurs →" : "Visit SNCF Voyageurs →"}
        />

        <ExperienceCard
          link="https://www.wolterskluwer.com/fr-fr/solutions/easyquorum/features"
          title={lang === 'fr' 
            ? "Stage Développeur Frontend — Wolters Kluwer" 
            : "Frontend Developer Intern — Wolters Kluwer"}
          description={lang === 'fr' 
            ? "Mars – Juin 2025 | Développement de scripts d’export de données (PDF, Excel) en TypeScript, automatisations multilingues et intégration web sur easyQuorum."
            : "March – June 2025 | Development of complex data export scripts (PDF, Excel) in TypeScript, automated generation, and frontend integration on easyQuorum."}
          ctaText={lang === 'fr' ? "Solution easyQuorum →" : "Visit easyQuorum →"}
        />

        <ExperienceCard
          link="https://phraser.tech"
          title={lang === 'fr' 
            ? "Stage Développeur Frontend — Phraser" 
            : "Frontend Developer Intern — Phraser"}
          description={lang === 'fr' 
            ? "Juin – Août 2024 | Développement de l'interface d'un assistant IA (React, Next.js, Tailwind) au sein d'une équipe technique internationale 100% en anglais."
            : "June – August 2024 | Building an AI assistant web application with React, Next.js, and TailwindCSS in a fully international, English-speaking environment."}
          ctaText={lang === 'fr' ? "Visiter Phraser →" : "Visit Phraser →"}
        />
      </div>
    </section>
  );
}

export default Experiences;