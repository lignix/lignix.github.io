import React from 'react';
import { useInView } from 'react-intersection-observer';

interface AboutBlockProps {
    imageSrc: string;
    imageAlt: string;
    children: React.ReactNode;
    imagePosition?: 'left' | 'right';
}

const imgStyle = {
    width: '35%',
    flexShrink: 0,
    height: 'fit-content',
    objectFit: 'cover',
    borderRadius: '10px'
} as const;

const textStyle = {
    width: '65%',
    flexGrow: 1
} as const;


function AboutBlock(props: AboutBlockProps) {
    const { imageSrc, imageAlt, children, imagePosition = 'left' } = props;
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const imageElement = (
        <img
            className="photo"
            src={imageSrc}
            alt={imageAlt}
            style={imgStyle}
        />
    );

    const textElement = (
        <p style={textStyle}>
            {children}
        </p>
    );

    return (
        <div className={`about-container animate-on-scroll ${inView ? 'is-visible' : ''}`} ref={ref}>
            {imagePosition === 'left' ? (
                <>
                    {imageElement}
                    {textElement}
                </>
            ) : (
                <>
                    {textElement}
                    {imageElement}
                </>
            )}
        </div>
    );
}

export default AboutBlock;