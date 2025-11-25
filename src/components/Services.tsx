import { useInView } from 'react-intersection-observer';
import servicesLogo from '../assets/images/services.png';

const services = [
  {
    title: "Développement Web",
    icon: "💻", 
    desc: "Création de sites vitrines, applications web modernes (React, Tailwind) et dashboards interactifs."
  },
  {
    title: "Freelance & Renfort",
    icon: "🚀", 
    desc: "Disponible pour des missions ponctuelles ou pour renforcer vos équipes techniques sur le court terme."
  },
  {
    title: "Développement Jeu Vidéo",
    icon: "🎮", 
    desc: "Prototypage et développement de mécaniques de jeu (Gameplay programming) sous Unity / C#."
  }
];

function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="section">
      <div className="title-container">
        <img src={servicesLogo} alt="logo services" />
        <h2>Mes Services</h2>
      </div>
      
      <div 
        ref={ref}
        className={`project-grid animate-on-scroll ${inView ? 'is-visible' : ''}`}
        style={{ marginTop: '2rem' }}
      >
        {services.map((service, index) => (
          <div key={index} className="project-card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;