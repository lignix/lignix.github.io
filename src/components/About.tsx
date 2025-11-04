import aboutLogo from '../assets/images/about.png';
import univPhoto from '../assets/images/université.jpg';
import efreiPhoto from '../assets/images/efrei.jpg';
import AboutBlock from './AboutBlock'

function About() {
  return (
    <section id="about" className="section about">
      <div className="title-container">
        <img src={aboutLogo} alt="logo about" />
        <h2>Mon Parcours</h2>
      </div>

      <AboutBlock
        imageSrc={univPhoto}
        imageAlt="Photo de l'IUT de Paris Descartes"
        imagePosition="left"
      >
        Après avoir obtenu un baccalauréat STI2D, spécialité Systèmes
        d’Information et Numérique (SIN), j’ai poursuivi mes études avec un
        BUT Informatique, que j’ai effectué sur une durée de trois ans.<br /><br />J'y
        ai acquis des compétences solides en développement web et en
        programmation. J'ai appris à travailler sur des projets concrets et à
        collaborer avec d'autres étudiants. Les projets clés réalisés durant
        cette formation seront listés ci-dessous.
      </AboutBlock>

      <AboutBlock
        imageSrc={efreiPhoto}
        imageAlt="Photo de l'Efrei"
        imagePosition="right"
      >
        À l’issue de ce parcours, j’ai choisi de continuer mon cursus en
        intégrant l’EFREI, une école d’ingénieurs spécialisée dans le
        numérique, afin de renforcer mes compétences et me préparer à une
        carrière dans les domaines de l’informatique et des nouvelles
        technologies. <br /><br />Je suis particulièrement intéressé par le
        développement web (avec plus d'attrait envers le frontend),
        l’intelligence artificielle et les jeux vidéo.
      </AboutBlock>
      
    </section>
  );
}

export default About;