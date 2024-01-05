"use client";
import React, { useState, useEffect, useRef, use } from 'react';
import axios from 'axios';
// export default function Page() {
class Page extends React.Component {

  state = { details: {}};
  componentDidMount() {
    let models;
    axios.get('http://127.0.0.1:8000/')
    .then(res => {
      models = res.data;
      let results = {};
      for (let model in models) {
        let url = models[model]
        axios.get(url)
        .then(res => {
          interface Results {
            [key: string]: any;
          }

          // ...

          const results: Results = {};
          results[model] = res.data;
        })
      }
      this.setState({ details: results});
    })
    .catch(err => {});
  }

  render(){
    console.log(this.state.details);

  return (
    <>
      <div className="slideshow-container" style={{top: 0, left: 0, right: 0}}>
        <img src="/home_page/main_imgs/Pole_Espace.png" alt="Logo Pôle Espace" style={{ position: 'absolute', top: '23rem', left: '10.5rem', width: '15rem', height: 'auto' }} />
        <h1 
          className='title-text huge white' 
          style={{ 
          position: 'absolute',
          top: '23rem', 
          left: '28rem',
          whiteSpace: 'pre-wrap' 
        }}>
          Space Section{'\n'}CentraleSupélec
        </h1>
      </div>
        <div style={{ display: 'flex', justifyContent: 'center', position: 'absolute', top: '40rem', left: '28rem' }}>
          <a className="buttons" href='/Projets' style={{ marginRight: '4rem'}}>Découvrir nos projets</a>
          <a className="buttons" href='/Nous-Soutenir'>Nous soutenir</a>
        </div>
        {/*<Slideshow content={slideshow} timer={slideSwitchTimer} slideshow_styles={{display: 'flex', objectFit:'cover', width:'100%', height:'80rem'}}/>*/}
        <img src='/home_page/main_img_diapo/phenics_decollage.jpg' alt="Phenics Decollage" style={{objectFit:'cover', left:0, right:0}} />
        <div style={{position: 'relative'}}>
            <img src='/home_page/main_img_diapo/photo_grp_cspace_phenics.jpg' alt="Group Photo" style={{ filter: 'brightness(55%)', objectFit:'cover', left:0, right:0 }}/>
            <text className='title-text small white' style={{position: 'absolute', top: '36rem', left: '10rem', zIndex:10, whiteSpace: 'pre-wrap'}}>A propos de notre équipe</text>
            <p className='regular-text tiny white' style={{position: 'absolute', top: '40rem', left: '10rem', zIndex:10, whiteSpace: 'pre-wrap'}}>Le pôle espace a été fondé en 2021 avec le project AjaCS, première fusée expérimentale de CentraleSupélec.{'\n'}Nous expérimentons, améliorons et développons continuellement de nouvelles techniques en vue de vols toujours plus ambitieux.{'\n'}En 2023, nous avons accompli le premier vol supersonique nominal étudiant en France depuis plus de 10 ans.</p>
            <div style={{ display: 'flex', position: 'absolute', top: '48rem', left: '10rem' }}>
              <div style={{marginRight:'5rem', display: 'flex', flexDirection: 'column'}}>
              <text className='numbers' style={{position: 'relative'}}>30+</text>
                <text className='regular-text white' style={{position: 'relative', whiteSpace: 'pre-wrap'}}>Etudiants en{'\n'}1ère et{'\n'}2ème année</text>
              </div>
              <div style={{marginRight:'5rem', display: 'flex', flexDirection: 'column'}}>
                <text className='numbers' style={{position: 'relative'}}>2</text>
                <text className='regular-text white' style={{position: 'relative', whiteSpace: 'pre-wrap'}}>Lancements{'\n'}réussis</text>
              </div>
              <div style={{marginRight:'5rem', display: 'flex', flexDirection: 'column'}}>
                <text className='numbers' style={{position: 'relative'}}>1</text>
                <text className='regular-text white' style={{position: 'relative', whiteSpace: 'pre-wrap'}}>Prix Espace{'\n'}et Industrie</text>
              </div>
            </div>
          </div>
          <div style={{position: 'relative'}}>
              <text className='title-text small white' style={{position: 'absolute', top: '36rem', left: '10rem', zIndex:10, whiteSpace: 'pre-wrap'}}>Nos objectifs</text>
              <img src='/hackathon/group_photo_2023_2.jpg' alt = 'Hackathon 2023' style={{ filter: 'brightness(72%)' }}/>
              <p className='regular-text tiny white' style={{position: 'absolute', top: '40rem', left: '10rem', zIndex:10, whiteSpace: 'pre-wrap'}}>Chaque année, nous formons et acceuillons de nouveaux membres, commençons de nouveaux projets et{'\n'}développons notre savoir-faire aérospatial. Nous participons anuellement à la campagne C'Space,{'\n'}organisée par le CNES et PlanèteSciences. Nos prochains objectifs se situent dans les nouvelles altitudes{'\n'}en maîtrisant les systèmes de propulsion. Nous développons également actuellement{'\n'}un ambitieux projet de fusée bi-étage pour le C'Space 2024.</p>
              <div style={{ display: 'flex', justifyContent: 'center', position: 'absolute', top: '54rem', left: '10rem' }}>
                <a className="buttons" href='/Nous-rejoindre' style={{ marginRight: '4rem'}}>Nous rejoindre</a>
                <a className="buttons" href='/Membres'>Nos membres</a>
              </div>
            </div>
      </>
    );
  }
}

export default Page;

    {/*return (
      <>
        <div className="slideshow-container" style={{top: 0, left: 0, right: 0}}>
          <img src="/home_page/main_imgs/Pole_Espace.png" alt="Logo Pôle Espace" style={{ position: 'absolute', top: '23rem', left: '10.5rem', width: '15rem', height: 'auto' }} />
          <h1 
            className='title-text huge white' 
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
            <a className="buttons" href='/Nous-Soutenir'>Nous soutenir</a>
          </div>
          <img src='/home_page/main_img_diapo/phenics_decollage.jpg' alt="Phenics Decollage" />
          <div style={{position: 'relative'}}>
          <img src='/hackathon/group_photo_2023_2.jpg' alt = 'Hackathon 2023' style={{ filter: 'brightness(65%)', objectFit:'cover', left:0, right:0 }}/>
            <text className='title-text small white' style={{position: 'absolute', top: '36rem', left: '10rem', zIndex:10, whiteSpace: 'pre-wrap'}}>Nos objectifs</text>
            <p className='regular-text tiny white' style={{position: 'absolute', top: '40rem', left: '10rem', zIndex:10, whiteSpace: 'pre-wrap'}}>Chaque année, nous formons et acceuillons de nouveaux membres, commençons de nouveaux projets et{'\n'}développons notre savoir-faire aérospatial. Nous participons anuellement à la campagne C'Space,{'\n'}organisée par le CNES et PlanèteSciences. Nos prochains objectifs se situent dans les nouvelles altitudes{'\n'}en maîtrisant les systèmes de propulsion. Nous développons également actuellement{'\n'}un ambitieux projet de fusée bi-étage pour le C'Space 2024.</p>
            <div style={{ display: 'flex', justifyContent: 'center', position: 'absolute', top: '54rem', left: '10rem' }}>
              <a className="buttons" href='/Nous-rejoindre' style={{ marginRight: '4rem'}}>Nous rejoindre</a>
              <a className="buttons" href='/Membres'>Nos membres</a>
              <img src='/home_page/main_img_diapo/photo_grp_cspace_phenics.jpg' alt="Group Photo" style={{ filter: 'brightness(60%)' }}/>
              <text className='title-text small white' style={{position: 'absolute', top: '36rem', left: '10rem', zIndex:10, whiteSpace: 'pre-wrap'}}>A propos de notre équipe</text>
              <p className='regular-text tiny white' style={{position: 'absolute', top: '40rem', left: '10rem', zIndex:10, whiteSpace: 'pre-wrap'}}>Le pôle espace a été fondé en 2021 avec le project AjaCS, première fusée expérimentale de CentraleSupélec.{'\n'}Nous expérimentons, améliorons et développons continuellement de nouvelles techniques en vue de vols toujours plus ambitieux.{'\n'}En 2023, nous avons accompli le premier vol supersonique nominal étudiant en France depuis plus de 10 ans.</p>
              <div style={{ display: 'flex', position: 'absolute', top: '48rem', left: '10rem' }}>
                <div style={{marginRight:'5rem', display: 'flex', flexDirection: 'column'}}>
                <text className='numbers' style={{position: 'relative'}}>30+</text>
                  <text className='regular-text white' style={{position: 'relative', whiteSpace: 'pre-wrap'}}>Etudiants en{'\n'}1ère et{'\n'}2ème année</text>
                </div>
                <div style={{marginRight:'5rem', display: 'flex', flexDirection: 'column'}}>
                  <text className='numbers' style={{position: 'relative'}}>2</text>
                  <text className='regular-text white' style={{position: 'relative', whiteSpace: 'pre-wrap'}}>Lancements{'\n'}réussis</text>
                </div>
                <div style={{marginRight:'5rem', display: 'flex', flexDirection: 'column'}}>
                  <text className='numbers' style={{position: 'relative'}}>1</text>
                  <text className='regular-text white' style={{position: 'relative', whiteSpace: 'pre-wrap'}}>Prix Espace{'\n'}et Industrie</text>
                </div>
              </div>
            </div>
            <div style={{position: 'relative'}}>
              <text className='title-text small white' style={{position: 'absolute', top: '36rem', left: '10rem', zIndex:10, whiteSpace: 'pre-wrap'}}>Nos objectifs</text>
              <img src='/hackathon/group_photo_2023_2.jpg' alt = 'Hackathon 2023' style={{ filter: 'brightness(72%)' }}/>
              <p className='regular-text tiny white' style={{position: 'absolute', top: '40rem', left: '10rem', zIndex:10, whiteSpace: 'pre-wrap'}}>Chaque année, nous formons et acceuillons de nouveaux membres, commençons de nouveaux projets et{'\n'}développons notre savoir-faire aérospatial. Nous participons anuellement à la campagne C'Space,{'\n'}organisée par le CNES et PlanèteSciences. Nos prochains objectifs se situent dans les nouvelles altitudes{'\n'}en maîtrisant les systèmes de propulsion. Nous développons également actuellement{'\n'}un ambitieux projet de fusée bi-étage pour le C'Space 2024.</p>
              <div style={{ display: 'flex', justifyContent: 'center', position: 'absolute', top: '54rem', left: '10rem' }}>
                <a className="buttons" href='/Nous-rejoindre' style={{ marginRight: '4rem'}}>Nous rejoindre</a>
                <a className="buttons" href='/Membres'>Nos membres</a>
              </div>
            </div>
        </div>*/}