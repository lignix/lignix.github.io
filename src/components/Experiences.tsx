import expLogo from '../assets/images/experiences.png';
import ExperienceCard from './ExperienceCard';

function Experiences() {
  return (
    <section id="experiences" className="section experiences">
      <div className="title-container">
        <img src={expLogo} alt="logo experiences" />
        <h2>Mes expériences</h2>
      </div>
      <ExperienceCard
        link="https://www.wolterskluwer.com/fr-fr/solutions/easyquorum/features"
        title="Stage chez Wolters Kluwer - 15 semaines"
        description="Développement Frontend de modèles de documents et scripts d’exports de documents sur la plateforme easyQuorum"
        ctaText="Cliquez pour voir la solution easyQuorum"
      />
      <ExperienceCard
        link="https://phraser.tech"
        title="Stage chez Phraser - 8 semaines"
        description="Développement Frontend d’un assistant IA pour artistes (React, Next.js, et Tailwind)"
        ctaText="Cliquez pour visiter Phraser"
      />
    </section>
  );
}

export default Experiences;