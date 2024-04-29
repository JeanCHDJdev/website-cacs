"use client";
import React from 'react';
// export default function Page() {
class Page extends React.Component {
  render(){
    
  return (
    <div>
        <div style={{height:'100vh', width:'100vw' }}>
          <div style={{
            height:'100%', 
            width:'100%', 
            backgroundImage: 'url(/home_page/main_img_diapo/phenics_decollage.jpg)',
            backgroundSize: 'cover',
            filter:'brightness(78%)'
          }} />
          <div style={{ display: 'flex', flexDirection:'column', position:'absolute', alignItems:'center', top: '50%', left: '10%', width:'50%'}}>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection:'row', alignItems:'center'}}>
              <img src="/home_page/main_imgs/Pole_Espace.png" alt="Logo Pôle Espace" style={{width:'20rem'}}/>
              <h1 
                className='title-text huge white' 
                style={{ whiteSpace: 'pre-wrap' }}>
                Pôle Espace{'\n'}CentraleSupélec
              </h1>
            </div>
              <div style={{ display: 'flex', marginLeft: '12.5rem', justifyContent: 'space-between', width:'40rem' }}>
              <a className="buttons" href='/Projets'>Découvrir nos projets</a>
              <a className="buttons" href='/Devenir-Partenaire'>Nous soutenir</a>
            </div>
          </div>
        </div>
        <div style = {{height:'100vh', 
          width:'100vw', }}>
          <div style={{
            height:'100%',
            width:'100%',
            backgroundImage: 'url(/home_page/main_img_diapo/photo_grp_cspace_phenics.jpg)',
            backgroundSize: 'cover',
            filter:'brightness(70%)'
            }}/>
            <div style={{ position:'absolute', display: 'flex', justifyContent: 'center'}}>
              <text className='title-text small white' style={{position: 'relative', top: '50%', left: '20%', zIndex:10, whiteSpace: 'pre-wrap'}}>A propos de notre équipe</text>
              <p className='regular-text tiny white' style={{top: '50%', left: '20%', zIndex:10, whiteSpace: 'pre-wrap'}}>Le pôle espace a été fondé en 2021 avec le project AjaCS, première fusée expérimentale de CentraleSupélec.{'\n'}Nous expérimentons, améliorons et développons continuellement de nouvelles techniques en vue de vols toujours plus ambitieux.{'\n'}En 2023, nous avons accompli le premier vol supersonique nominal étudiant en France depuis plus de 10 ans.</p>
              <div style={{ display: 'flex', top: '50%', left: '20%' }}>
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
          </div>
              <div style={{position: 'absolute'}}>
                <text className='title-text small white' style={{zIndex:10, whiteSpace: 'pre-wrap'}}>Nos objectifs</text>
                <p className='regular-text tiny white' style={{top: '4rem', zIndex:10, whiteSpace: 'pre-wrap'}}>Chaque année, nous formons et acceuillons de nouveaux membres, commençons de nouveaux projets et{'\n'}développons notre savoir-faire aérospatial. Nous participons anuellement à la campagne C'Space,{'\n'}organisée par le CNES et PlanèteSciences. Nos prochains objectifs se situent dans les nouvelles altitudes{'\n'}en maîtrisant les systèmes de propulsion. Nous développons également actuellement{'\n'}un ambitieux projet de fusée bi-étage pour le C'Space 2024.</p>
                <div style={{ display: 'flex', top: '18rem' }}>
                  <a className="buttons" href='/Nous-rejoindre' style={{ marginRight: '4rem'}}>Nous rejoindre</a>
                  <a className="buttons" href='/Membres'>Nos membres</a>
                </div>
              </div>
              <div style={{
            height:'100vh', 
            width:'100vw', 
            backgroundImage: 'url(/hackathon/group_photo_2023_2.jpg)',
            backgroundSize: 'cover',
            filter:'brightness(72%)'
            }}/>
            </div>
    );
  }
}

export default Page;

