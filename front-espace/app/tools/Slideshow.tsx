"use client";
import React, { useState, useEffect } from 'react';

interface SlideshowProps {
    content: React.ReactNode[];
    timer: number;
}

const Slideshow: React.FC<SlideshowProps> = ({ content, timer }) => {
    const [currentContentIndex, setCurrentContentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const clickPosition = event.clientX;
        const screenWidth = window.innerWidth;
        const halfScreenWidth = screenWidth / 2;

        setIsTransitioning(true);

        setTimeout(() => {
            if (clickPosition < halfScreenWidth) {
                setCurrentContentIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
            } else {
                setCurrentContentIndex((prevIndex) => (prevIndex + 1) % content.length);
            }
            setIsTransitioning(false);
        }, 500);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentContentIndex((prevIndex) => (prevIndex + 1) % content.length);
                setIsTransitioning(false);
            }, 1000);
        }, timer);

        return () => {
            clearInterval(interval);
        };
    }, [content.length, timer]);;

    return (
        <div>
            <div
                className={isTransitioning ? '' : ''}
            >
                {content[currentContentIndex]}
            </div>
        </div>
    );
};

export default Slideshow;