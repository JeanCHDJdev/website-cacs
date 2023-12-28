import React from 'react';
import Slideshow from './tools/Slideshow';

export default function Home() {
  const slideshow = [
    '/home_page/main_img_diapo/phenics_decollage.jpg',
    '/home_page/main_img_diapo/photo_grp_cspace.jpg',
    '/home_page/main_img_diapo/prix.jpg'
  ];
  const slideSwitchTimer = 10000;

  return (
    <main>
      <div className="slideshow-container" style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
        <Slideshow images={slideshow} timer={slideSwitchTimer} />
      </div>
      <div style={{ backgroundColor: 'rgb(0, 0, 50)', height: '75rem', width: '100%', marginTop: '52rem' }}></div>
    </main>
  );
}