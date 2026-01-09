import { useLanguage } from '../context/LanguageContext';

function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="hero">
      <h1>{t.hero.greeting}</h1>
      <p>
        {t.hero.subtitle}<br />
        {t.hero.status}
      </p>
      <div id="cv">
        <a href={t.hero.cvLink} className="btn-cv">
          <span>{t.hero.cvBtn}</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;