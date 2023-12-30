"use client";
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

export default function Page() {
  const [count, setCount] = useState(0);
  const numberRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start counting up to 30
          const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
          }, 100); // Adjust the interval as needed

          // Stop counting when reaching 30
          if (count >= 30) {
            clearInterval(interval);
          }
        }
      });
    }, options);

    if (numberRef.current) {
      observer.observe(numberRef.current);
    }

    return () => {
      if (numberRef.current) {
        observer.unobserve(numberRef.current);
      }
    };
  }, []);
  return (
    <>
      <div className="slideshow-container" style={{top: 0, left: 0, right: 0}}>
        <img src="/home_page/main_imgs/Pole_Espace.png" alt="Logo Pôle Espace" style={{ position: 'absolute', top: '23rem', left: '10.5rem', width: '15rem', height: 'auto' }} />
        <h1 
          className='title-text white' 
          style={{ 
          position: 'absolute',
          top: '23rem', 
          left: '28rem',
          whiteSpace: 'pre-wrap' 
        }}>
          Space Section{'\n'}CentraleSupélec
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center', position: 'absolute', top: '40rem', left: '28rem' }}>
          <a className="buttons" href='/Projets' style={{ marginRight: '4rem'}}>Découvrir nos projets</a>
          <a className="buttons" href='/Projets'>Nous soutenir</a>
        </div>
        {/*<Slideshow content={slideshow} timer={slideSwitchTimer} slideshow_styles={{display: 'flex', objectFit:'cover', width:'100%', height:'80rem'}}/>*/}
        <img src='/home_page/main_img_diapo/phenics_decollage.jpg' alt="Phenics Decollage" />
        <div style={{position: 'relative'}}>
            <img src='/home_page/main_img_diapo/photo_grp_cspace_phenics.jpg' alt="Group Photo" style={{ filter: 'brightness(60%)' }}/>
            <text className='title-text small white' style={{position: 'absolute', top: '36rem', left: '10rem', zIndex:10, whiteSpace: 'pre-wrap'}}>A propos de notre équipe</text>
            <a href='/Projets/PheniCS' className='regular-text tiny white' style={{position: 'absolute', top: '40rem', left: '10rem', zIndex:10, whiteSpace: 'pre-wrap'}}>Premier vol supersonique nominal{'\n'}en France depuis plus de 10 ans</a>
            <div style={{ display: 'flex', position: 'absolute', top: '48rem', left: '10rem' }}>
              <div style={{marginRight:'5rem', display: 'flex', flexDirection: 'column'}}>
              <text className='numbers' style={{position: 'relative'}} ref={numberRef}>30+</text>
                <text className='regular-text white' style={{position: 'relative', whiteSpace: 'pre-wrap'}}>Etudiants en{'\n'}1ère et{'\n'}2ème année</text>
              </div>
              <div style={{marginRight:'5rem', display: 'flex', flexDirection: 'column'}}>
                <text className='numbers' style={{position: 'relative'}} ref={numberRef}>2</text>
                <text className='regular-text white' style={{position: 'relative', whiteSpace: 'pre-wrap'}}>Lancements{'\n'}réussis</text>
              </div>
              <div style={{marginRight:'5rem', display: 'flex', flexDirection: 'column'}}>
                <text className='numbers' style={{position: 'relative'}}>1</text>
                <text className='regular-text white' style={{position: 'relative', whiteSpace: 'pre-wrap'}}>Prix Espace{'\n'}et Industrie</text>
              </div>
            </div>
          </div>
        <img src='/hackathon/group_photo_2023_2.jpg' alt = 'Hackathon 2023' style={{ filter: 'brightness(80%)' }}/>  
      </div>
    </>
  );
}
