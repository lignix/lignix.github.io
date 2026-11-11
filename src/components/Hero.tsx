// src/components/Hero.tsx
import { useLanguage } from '../context/LanguageContext';

function Hero() {
  const { t } = useLanguage();

  const mainTechs = [".NET / C#", "React", "TypeScript", "Java / Spring", "SQL / PostgreSQL", "Tailwind CSS"];

  return (
    <section id="top" className="hero">
      <h1>{t.hero.greeting}</h1>
      <p className="hero-subtitle">{t.hero.subtitle}</p>
      
      <div className="tech-pills">
        {mainTechs.map((tech) => (
          <span key={tech} className="tech-badge">{tech}</span>
        ))}
      </div>

      <p className="hero-status">{t.hero.status}</p>

      <div id="cv">
        <a href={t.hero.cvLink} className="btn-cv" target="_blank" rel="noopener noreferrer">
          <span>{t.hero.cvBtn}</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;