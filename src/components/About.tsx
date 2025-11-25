// src/components/About.tsx
import aboutLogo from '../assets/images/about.png';
import univPhoto from '../assets/images/université.jpg';
import freelancePhoto from '../assets/images/freelance.png';
import AboutBlock from './AboutBlock';

function About() {
  return (
    <section id="about" className="section about">
      <div className="title-container">
        <img src={aboutLogo} alt="logo about" />
        <h2>Mon Parcours</h2>
      </div>

      <AboutBlock
        imageSrc={univPhoto}
        imageAlt="Photo de l'IUT"
        imagePosition="left"
      >
        Après avoir obtenu un baccalauréat STI2D (SIN), j’ai validé un
        BUT Informatique sur trois ans.
        <br /><br />
        J'y ai acquis des compétences solides en développement web et logiciel.
        J'ai appris à travailler sur des projets concrets, à collaborer en équipe 
        et à respecter des délais stricts.
      </AboutBlock>

      <AboutBlock
        imageSrc={freelancePhoto}
        imageAlt="Espace de travail"
        imagePosition="right"
      >
        Aujourd'hui, j'exerce en tant que <strong>Développeur Freelance</strong>. 
        Cela me permet de travailler sur des projets variés et de continuer à monter 
        en compétence sur mes technologies de prédilection (React, TypeScript, etc...).
        <br /><br />
        En parallèle, je suis <strong>activement à la recherche d'un CDI </strong> 
        pour intégrer une équipe technique ambitieuse et m'investir sur le long terme 
        dans des projets d'envergure.
      </AboutBlock>
      
    </section>
  );
}

export default About;