interface CardBtnProps {
    text: string;
    link: string;
}

function CardBtn({ text, link }: CardBtnProps) {
    return (
        <a
            className="project-btn"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            {text}
        </a>
    );
}

export default CardBtn;
