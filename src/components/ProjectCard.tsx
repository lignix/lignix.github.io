import CardBtn from "./CardBtn";

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    imageUrl?: string;
}

function ProjectCard(props: ProjectCardProps) {
    const { title, description, link, imageUrl } = props;

    return (
        <div className="project-card">
            <h3>{title}</h3>

            {imageUrl && (
                <img src={imageUrl} alt={`Aperçu du projet ${title}`} />
            )}

            <p>
                {description}
            </p>

            <CardBtn text="Voir le projet" link={link} />
        </div>
    );
}

export default ProjectCard;