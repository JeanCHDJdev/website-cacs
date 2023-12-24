"use client";
import React, { useState, useEffect } from 'react';

interface SlideshowProps {
    images: string[];
    timer: number;
}

const Slideshow: React.FC<SlideshowProps> = ({ images, timer }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        console.log("Slideshow.tsx: handleClick: currentImageIndex: ", currentImageIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, timer);

        return () => {
            clearInterval(interval);
        };
    }, [images.length, timer]);

    return (
        <div>
            <img src={images[currentImageIndex]} alt="Slideshow Image" onClick={handleClick} />
        </div>
    );
};

export default Slideshow;
