import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';
import servicesLogo from '../assets/images/services.png';

function Services() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const servicesData = [
    {
      title: t.services.web.title,
      icon: "💻",
      desc: t.services.web.desc
    },
    {
      title: t.services.freelance.title,
      icon: "🚀",
      desc: t.services.freelance.desc
    },
    {
      title: t.services.game.title,
      icon: "🎮",
      desc: t.services.game.desc
    }
  ];

  return (
    <section id="services" className="section">
      <div className="title-container">
        <img src={servicesLogo} alt="logo services" />
        <h2>{t.services.title}</h2>
      </div>

      <div
        ref={ref}
        className={`project-grid animate-on-scroll ${inView ? 'is-visible' : ''}`}
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
        {servicesData.map((service, index) => (
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