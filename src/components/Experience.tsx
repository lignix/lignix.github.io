import expLogo from '../assets/images/experiences.png';

function Experiences() {
  return (
    <section id="experiences" className="section experiences">
      <div className="title-container">
        <img src={expLogo} alt="logo experiences" />
        <h2>Mes expériences</h2>
      </div>

      <a
        href="https://phraser.tech"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <div className="experience-card" style={{ cursor: 'pointer' }}>
          <h3>Stage chez Phraser - 8 semaines</h3>
          <p>
            Développement Frontend d’un assistant IA pour artistes (React,
            Next.js, et Tailwind)
          </p>
          <i>Cliquez pour visiter Phraser</i>
        </div>
      </a>
      <a
        href="https://www.wolterskluwer.com/fr-fr/solutions/easyquorum/features"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <div className="experience-card">
          <h3>Stage chez Wolters Kluwer - 15 semaines</h3>
          <p>
            Développement Frontend de modèles de documents et scripts d’exports
            de documents sur la plateforme easyQuorum
          </p>
          <i>Cliquez pour voir la solution easyQuorum</i>
        </div>
      </a>
    </section>
  );
}

export default Experiences;