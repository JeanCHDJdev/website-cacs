"use client";
import React, { useState, useEffect } from 'react';

interface SlideshowProps {
    images: string[];
    timer: number;
}
const Slideshow: React.FC<SlideshowProps> = ({ images, timer }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const clickPosition = event.clientX;
        const screenWidth = window.innerWidth;
        const halfScreenWidth = screenWidth / 2;

        setIsTransitioning(true);

        setTimeout(() => {
            if (clickPosition < halfScreenWidth) {
                setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            } else {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }
            setIsTransitioning(false);
        }, 500);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsTransitioning(false);
            }, 1000); 
        }, timer);

        return () => {
            clearInterval(interval);
        };
    }, [images.length, timer]);

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <img
                src={images[currentImageIndex]}
                onClick={handleClick}
                style={{
                    transform: isTransitioning ? `translateX(-100%)` : 'none',
                    transition: 'transform 0.5s ease-in-out',
                }}
            />
            <img
                src={images[(currentImageIndex + 1) % images.length]}
                style={{
                    transform: isTransitioning ? 'none' : 'translateX(100%)',
                    transition: 'transform 0.5s ease-in-out',
                }}
            />
        </div>
    );
};

export default Slideshow;