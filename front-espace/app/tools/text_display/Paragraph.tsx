"use client";
import React, { useEffect, useRef } from 'react';

type ParagraphProps = {
    title?: string;
    image: string;
    imageName: string;
    imagePosition: 'left' | 'right';
    imageWidth: string;
    imageHeight?: 'auto' | string;
    text: string;
};

const Paragraph: React.FC<ParagraphProps> = ({
    title,
    image,
    imageName,
    imagePosition,
    imageWidth,
    imageHeight = 'auto',
    text,
}) => {
    const paragraphRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const paragraphElement = paragraphRef.current;
        if (paragraphElement) {
            const fadeInAnimation = () => {
                const paragraphTop = paragraphElement.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (paragraphTop < windowHeight) {
                    paragraphElement.classList.add('fade-in');
                    window.removeEventListener('scroll', fadeInAnimation);
                }
            };
            window.addEventListener('scroll', fadeInAnimation);
            fadeInAnimation();
        }
    }, []);

    return (
        <div style={{ marginTop: '3rem', marginBottom:'3rem', marginLeft:'20rem', marginRight:'20rem' }} ref={paragraphRef}>
            {title && (
                <div className="title-text small navy" style={{marginTop:'2rem', marginBottom:'2rem'}}>
                    {title}
                </div>
            )}
            <div className="paragraph-content" style={{ display: 'flex', alignItems: 'center' }}>
                {imagePosition === 'left' && (
                    <>
                        <img src={image} alt={imageName} style={{ width: imageWidth, height: imageHeight, marginRight: '1.5rem' }} />
                        <div className="regular-text navy" style={{ marginLeft: '1.5rem' }}>{text}</div>
                    </>
                )}
                {imagePosition === 'right' && (
                    <>
                        <text className="regular-text navy" style={{ marginRight: '3.75rem' }}>{text}</text>
                        <img src={image} alt={imageName} style={{ width: imageWidth, height: imageHeight, marginLeft: '1.5rem' }} />
                    </>
                )}
            </div>
        </div>
    );
};

export default Paragraph;
