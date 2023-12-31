"use client";
import React, { useState, useEffect } from 'react';

interface SlideshowProps {
    content: React.ReactNode[];
    timer?: number;
    slideshow_styles: React.CSSProperties;
    showAdjacentSlides?: boolean;
}

const Slideshow: React.FC<SlideshowProps> = ({ content, timer, slideshow_styles, showAdjacentSlides }) => {

    const [currentContentIndex, setCurrentContentIndex] = useState(0);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const clickPosition = event.clientX;
        const screenWidth = window.innerWidth;
        const halfScreenWidth = screenWidth / 2;

        setTimeout(() => {
            if (clickPosition < halfScreenWidth) {
                setCurrentContentIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
            } else {
                setCurrentContentIndex((prevIndex) => (prevIndex + 1) % content.length);
            }
        }, 1000);
    };

    useEffect(() => {
        if (timer) {
            const interval = setInterval(() => {
                setTimeout(() => {
                    setCurrentContentIndex((prevIndex) => (prevIndex + 1) % content.length);
                }, 1000);
            }, timer);

            return () => {
                clearInterval(interval);
            };
        }
    }, [content.length, timer]);

    return (
        <div style={{...slideshow_styles}}>
            {showAdjacentSlides && (
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    {content[currentContentIndex- 1] && <div onClick={handleClick} style={{opacity:'0.5'}}>
                        {content[(currentContentIndex - 1 + content.length) % content.length]}
                    </div>}
                    <div>
                        {content[currentContentIndex]}
                    </div>
                    {content[currentContentIndex + 1] && <div onClick={handleClick} style={{opacity:'0.5'}}>
                        {content[(currentContentIndex + 1) % content.length]}
                    </div>}
                </div>
            )}
            {!showAdjacentSlides && (            
            <div onClick={handleClick}>
                {content[currentContentIndex]}
            </div>)
            }
        </div>
    );
};

export default Slideshow;