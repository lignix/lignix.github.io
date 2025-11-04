import React from 'react';

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
    <div className="about-container">
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