import { useInView } from 'react-intersection-observer';
interface ExperienceCardProps {
    link: string;
    title: string;
    description: string;
    ctaText: string;
}

function ExperienceCard(props: ExperienceCardProps) {
    const { link, title, description, ctaText } = props;
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    return (
        <a ref={ref}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
            className={`animate-on-scroll ${inView ? 'is-visible' : ''}`}
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