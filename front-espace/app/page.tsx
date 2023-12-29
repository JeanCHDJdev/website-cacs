import React from 'react';
import Slideshow from './tools/Slideshow';

export default function Home() {
  const slideshow = [
    <img src='/home_page/main_img_diapo/phenics_decollage.jpg'></img>,
    <img src='/home_page/main_img_diapo/prix.jpg'></img>
  ];
  const slideSwitchTimer = 10000;

  return (
    <main>
      <div className="slideshow-container" style={{ position: 'relative', top: 0, left: 0, right: 0, zIndex: -1 }}>
        <img src="../home_page/main_imgs/Pole_Espace.png" alt="Logo Pôle Espace" style={{ position: 'absolute', top: '40%', left: '30%', transform: 'translate(-50%, -50%)', width: '20rem', height: 'auto' }} />
        <h1 className='title-text' style={{ position: 'absolute', top: '35%', left: '57%', transform: 'translate(-50%, -50%)' }}>Pôle Espace CentraleSupélec</h1>
        <div style={{ display: 'flex', justifyContent: 'center', position: 'absolute', top: '43%', left: '56%', transform: 'translate(-50%, -50%)' }}>
          <a className="buttons" href='/Projets' style={{ marginRight: '10rem', zIndex: 4 }}>Nos Projets</a>
          <a className="buttons" href='/Nous-Soutenir' style={{ zIndex: 4 }}>Nous Soutenir</a>
        </div>
        <Slideshow content={slideshow} timer={slideSwitchTimer}/>
      </div>
      <div style={{ backgroundColor: 'rgb(0, 0, 50)', height: '75rem', width: '100%', marginTop: '-20rem' }}></div>
    </main>
  );
}
