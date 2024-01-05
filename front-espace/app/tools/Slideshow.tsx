"use client";
import React, { useState, useEffect } from 'react';

interface SlideshowProps {
    content: React.ReactNode[];
    timer?: number;
    content_styles?: React.CSSProperties;
    slideshow_styles: React.CSSProperties;
    showAdjacentSlides?: boolean;
}

const right_arrow = '/layout_images/other/arrow.png';
const Slideshow: React.FC<SlideshowProps> = ({ content, timer, slideshow_styles, showAdjacentSlides, content_styles }) => {

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
        }, 10);
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
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', position:'relative' }}>
                    <div onClick={handleClick} style={{ opacity: '0.5', ...content_styles}}>
                        {content[currentContentIndex - 1]}
                    </div>
                    <div style={{...content_styles}}>
                        {content[currentContentIndex]}
                    </div>
                    <div onClick={handleClick} style={{ opacity: '0.5', ...content_styles}}>
                        {content[currentContentIndex + 1]}
                    </div>
                </div>
            )}
            {!showAdjacentSlides && (            
            <div style={{width:"100%", height:"100%", position:'relative'}}>
                <img src={right_arrow} alt="Left Arrow" style={{transform: 'scaleX(-1)', left:0 }} className='img-slider-buttons' />
                    <div style={{...content_styles}}>
                        {content[currentContentIndex]}
                    </div>
                <img src={right_arrow} alt="Right Arrow" style={{ right:0 }} className='img-slider-buttons'/>
            </div>)
            }
        </div>
    );
};

export default Slideshow;