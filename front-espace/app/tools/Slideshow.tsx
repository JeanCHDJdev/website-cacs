"use client";
import React, { useState, useEffect } from 'react';

interface SlideshowProps {
    content: React.ReactNode[];
    timer?: number;
    slideshow_styles: React.CSSProperties;
    showAdjacentSlides?: boolean;
}

const right_arrow = '/layout_images/other/arrow.png';
const Slideshow: React.FC<SlideshowProps> = ({ content, timer, slideshow_styles, showAdjacentSlides }) => {

    const [currentContentIndex, setCurrentContentIndex] = useState(0);
    const showNextContent = () => {
        setCurrentContentIndex((prevIndex) => (prevIndex + 1) % content.length);
    };
    const showPreviousContent = () => {
        setCurrentContentIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
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
        <div style={{width:"100%", height:"100%", position:'relative', ...slideshow_styles}}>
            {/*{showAdjacentSlides && (
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', position:'absolute' }}>
                    <div style={{width:"100%", height:"100%", display:"flex"}}>
                    {content.map(cont => (
                        <div>
                            <div className='slider-content' style={{ scale: currentContentIndex === 0 ? '1.2' : '1', translate: `${-100 * currentContentIndex}%`, opacity: currentContentIndex === 0 ? '1' : '0.8' }}>
                            {cont}
                            </div>
                        </div>))}
                    </div>
                    <button onClick={showPreviousContent}  className='slider-buttons' style={{ left:0 }}>
                        <img src={right_arrow} alt="Left Arrow" style={{ transform: 'scaleX(-1)' }} className='left'/>
                    </button>
                    <button onClick={showNextContent} className='slider-buttons' style={{ right:0 }}>
                        <img src={right_arrow} alt="Right Arrow" className='right'/>
                    </button>
                </div>
                    )}*/}
            {!showAdjacentSlides && (            
            <div style={{width:"100%", height:"100%", position:'relative', ...slideshow_styles}}>
                <div style={{width:"100%", height:"100%", display:"flex", overflow:"hidden"}}>
                    {content.map(cont => (
                        <div className='slider-content' style={{ translate: `${-100 * currentContentIndex}%`}}>
                        {cont}
                        </div>))}
                </div>
                    <button onClick={showPreviousContent}  className='slider-buttons' style={{ left:0 }}>
                        <img src={right_arrow} alt="Left Arrow" style={{ transform: 'scaleX(-1)' }} className='left'/>
                    </button>
                    <button onClick={showNextContent} className='slider-buttons' style={{ right:0 }}>
                        <img src={right_arrow} alt="Right Arrow" className='right'/>
                    </button>
            </div>)
            }
        </div>
    );
};

export default Slideshow;