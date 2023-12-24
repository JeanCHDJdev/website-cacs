import React from 'react';
import Slideshow from './tools/Slideshow';

export default function Home() {
  const images = [
    '/main_img_diapo/phenics_decollage.jpg',
    '/main_img_diapo/photo_grp_cspace.jpg',
    '/main_img_diapo/prix.jpg'
  ];
  const slideSwitchTimer = 5000;

  return (
    <div className="slideshow-container" style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
      <Slideshow images={images} timer={slideSwitchTimer} />
    </div>
    );
}