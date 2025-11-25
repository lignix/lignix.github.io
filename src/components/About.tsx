// src/components/About.tsx
import aboutLogo from '../assets/images/about.png';
import univPhoto from '../assets/images/université.jpg';
import freelancePhoto from '../assets/images/freelance.png';
import AboutBlock from './AboutBlock';
import { useLanguage } from '../context/LanguageContext';

function About() {
  const { t } = useLanguage(); // ⬅️ HOOK

  return (
    <section id="about" className="section about">
      <div className="title-container">
        <img src={aboutLogo} alt="logo about" />
        <h2>{t.about.title}</h2>
      </div>

      <AboutBlock
        imageSrc={univPhoto}
        imageAlt="Photo IUT"
        imagePosition="left"
      >
        {t.about.part1}
      </AboutBlock>

      <AboutBlock
        imageSrc={freelancePhoto}
        imageAlt="Freelance setup"
        imagePosition="right"
      >
        {t.about.part2}
      </AboutBlock>
      
    </section>
  );
}

export default About;