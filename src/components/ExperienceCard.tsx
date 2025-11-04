interface ExperienceCardProps {
  link: string;
  title: string;
  description: string;
  ctaText: string;
}

function ExperienceCard(props: ExperienceCardProps) {
  const { link, title, description, ctaText } = props;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className="experience-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <i>{ctaText}</i>
      </div>
    </a>
  );
}

export default ExperienceCard;