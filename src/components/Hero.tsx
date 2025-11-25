function Hero() {
  return (
    <section id="top" className="hero">
      <h1>Hello 👋, je suis Charles Bouvier</h1>
      <p>
        Développeur Full Stack.<br />
        Actuellement <strong>Freelance</strong> et à l'écoute d'opportunités en <strong>CDI</strong>.
      </p>
      <div id="cv">
        <a href="/CV.pdf?v=3" className="btn-cv">
          <span>Télécharger mon CV</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;