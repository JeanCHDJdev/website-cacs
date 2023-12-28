"use client";
import React, { useEffect, useRef } from 'react';

type ParagraphProps = {
    title?: string;
    image: string;
    imagePosition: 'left' | 'right';
    imageWidth: string;
    imageHeight?: 'auto' | string;
    text: string;
};

const Paragraph: React.FC<ParagraphProps> = ({
    title,
    image,
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
        <div className="paragraph-container" style={{ margin: '1.5rem', padding: '1.5rem' }} ref={paragraphRef}>
            {title && (
                <div className="paragraph-title">
                    {title}
                </div>
            )}
            <div className="paragraph-content" style={{ display: 'flex', alignItems: 'center' }}>
                {imagePosition === 'left' && (
                    <>
                        <img src={image} alt="Paragraph Image" style={{ width: imageWidth, height: imageHeight, marginRight: '1.5rem' }} />
                        <div className="paragraph-text" style={{ marginLeft: '1.5rem' }}>{text}</div>
                    </>
                )}
                {imagePosition === 'right' && (
                    <>
                        <div className="paragraph-text" style={{ marginRight: '3.75rem' }}>{text}</div>
                        <img src={image} alt="Paragraph Image" style={{ width: imageWidth, height: imageHeight, marginLeft: '1.5rem' }} />
                    </>
                )}
            </div>
        </div>
    );
};

export default Paragraph;
