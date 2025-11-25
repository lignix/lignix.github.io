import expLogo from '../assets/images/experiences.png';
import ExperienceCard from './ExperienceCard';
import { useLanguage } from '../context/LanguageContext';

function Experiences() {
  const { lang } = useLanguage();

  return (
    <section id="experiences" className="section experiences">
      <div className="title-container">
        <img src={expLogo} alt="logo experiences" />
        <h2>{lang === 'fr' ? "Mes expériences" : "My Experiences"}</h2>
      </div>

      <ExperienceCard
        link="https://www.wolterskluwer.com/fr-fr/solutions/easyquorum/features"
        title={lang === 'fr' 
          ? "Stage chez Wolters Kluwer - 15 semaines" 
          : "Internship at Wolters Kluwer - 15 weeks"}
        description={lang === 'fr' 
          ? "Développement Frontend de modèles de documents et scripts d’exports de documents sur la plateforme easyQuorum"
          : "Frontend development of document templates and document export scripts on the easyQuorum platform"}
        ctaText={lang === 'fr' 
          ? "Cliquez pour voir la solution easyQuorum" 
          : "Click to see the easyQuorum solution"}
      />

      <ExperienceCard
        link="https://phraser.tech"
        title={lang === 'fr' 
          ? "Stage chez Phraser - 8 semaines" 
          : "Internship at Phraser - 8 weeks"}
        description={lang === 'fr' 
          ? "Développement Frontend d’un assistant IA pour artistes (React, Next.js, et Tailwind)"
          : "Frontend development of an AI assistant for artists (React, Next.js, and Tailwind)"}
        ctaText={lang === 'fr' 
          ? "Cliquez pour visiter Phraser" 
          : "Click to visit Phraser"}
      />
    </section>
  );
}

export default Experiences;