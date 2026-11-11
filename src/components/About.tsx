import univPhoto from '../assets/images/université.jpg';
import AboutBlock from './AboutBlock';
import { useLanguage } from '../context/LanguageContext';

function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <div className="section-header">
        <h2 className="section-title">{t.about.title}</h2>
      </div>

      <div className="about-block">
        <img src={univPhoto} alt="IUT de Paris" />
        <div>
          <p>{t.about.part1}</p>
          <br />
          <p>{t.about.part2}</p>
        </div>
      </div>
    </section>
  );
}

export default About;