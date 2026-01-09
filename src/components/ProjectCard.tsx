import CardBtn from "./CardBtn";
import { useInView } from 'react-intersection-observer';

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    link2?: string;
    imageUrl?: string;
}

function ProjectCard(props: ProjectCardProps) {
    const { title, description, link, imageUrl, link2 } = props;
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div ref={ref}
            className={`project-card animate-on-scroll ${inView ? 'is-visible' : ''}`}>
            <h3>{title}</h3>

            {imageUrl && (
            <img src={imageUrl} alt={`Aperçu du projet ${title}`} />
            )}

            <p>
            {description}
            </p>

            <div className="button-container">
            <CardBtn text="Github" link={link} />
            {link2 && <CardBtn text="Visiter le projet" link={link2} />}
            </div>
        </div>
    );
}

export default ProjectCard;