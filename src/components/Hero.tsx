function Hero() {
  return (
    <section id="top" className="hero">
      <h1>Hello 👋, je suis Charles Bouvier</h1>
      <p>
        Futur étudiant en école d'ingénieur à l'Efrei, passionné par le
        développement web.
      </p>
      <div id="cv">
        {/* Le CV.pdf doit être dans le dossier /public/ pour que ce lien fonctionne */}
        <a href="/CV.pdf?v=2" className="btn-cv">
          <span>Télécharger mon CV</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;