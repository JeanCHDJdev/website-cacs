"use client";
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Slideshow images={images} timer={slideSwitchTimer} />
    </main>
  );
}