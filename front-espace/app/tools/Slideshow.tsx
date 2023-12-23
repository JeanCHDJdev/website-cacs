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

    return (
        <div>
            <img src={images[currentImageIndex]} alt="Slideshow Image" />
            <p>Current Slide: {currentImageIndex + 1}</p>
            <button style={{ cursor: 'pointer' }} onClick={handleClick}>Next Slide</button>
        </div>
    );
};

export default Slideshow;
