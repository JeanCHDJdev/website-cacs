"use client";
import React from 'react';
import RocketDetails from '../RocketDetails';
import Slideshow from '@/app/tools/Slideshow';

const background_top_image = '/projets/FusEx/AjaCS/ajacs en vol.jpg';

const patch_image = '/projets/patchs/patch AjaCS.png';

const slide_styles : React.CSSProperties = {
    height:'40rem',
    width:'60rem',
    objectFit:'cover',
}
const project_image_slides = [
    <img src='/projets/FusEx/AjaCS/ajacs_attente.jpg' style={slide_styles}></img>,
    <img src='/projets/FusEx/AjaCS/ajacs_dos.jpg' style={slide_styles}></img>,
    <img src='/projets/FusEx/AjaCS/ajacs_ramp.jpg' style={slide_styles}></img>,
    <img src='/projets/FusEx/AjaCS/ajacs_team_ramp.jpg' style={slide_styles}></img>,
    <img src='/projets/FusEx/AjaCS/ajacs_team.jpg' style={slide_styles}></img>,
    <img src='/projets/FusEx/AjaCS/en travail.jpg' style={slide_styles}></img>,
    <img src='/projets/FusEx/AjaCS/rce.jpg' style={slide_styles}></img>,
]

const video_decollage = '/videos/projets/AjaCS/decollage_AJACS.mp4';

const dossier_postvol = '/pdfs/projets/AjaCS/Dossier post vol.pdf';

const side_paragraphs = [
    ['Avionique', 'L\'avionique d\'AjaCS est composée de 2 cartes électroniques : 1 carte de gestion des expériences, et une carte séquenceur. La carte séquenceur est particulièrement originale, car entièrement analogique et designée à l\'aide de portes logiques. La carte expérience, munie d\'un capteur de pression-température et d\'un accéléromètre-gyroscope pour intégrer les données en temps réel.','/projets/FusEx/AjaCS/avionique.png'],
    ['Structure', 'La structure d\'AjaCS est maintenue par un tube en carbone confectionné par l\'association, ici composé de deux demi-coques, qui vient remplacer l\'originel tube en pvc. Le carbone offre un très bon compromis de résistance structurelle, épaisseur et légèreté.','/projets/FusEx/AjaCS/carbone_ajacs.png'],
]
const Page: React.FC = () => {
    const handleDownload = () => {
        window.open(dossier_postvol, '_blank');
    };

    return (
        <div>
            <img src={background_top_image} style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'brightness(78%)',  height: '30rem', width:'100%',  position: 'relative', zIndex: 1 }} />
            <div style={{ display: 'flex', textAlign: 'center', justifyContent:'center', zIndex: 5, position:'relative', marginTop:'-15rem' }}>
                <img src={patch_image} alt='Patch' style={{ marginRight: '2rem', width: '10rem', height: 'auto' }} />
                <text className='title-text huge white'>AjaCS</text>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'5rem' }}>
                <h2 className='title-text navy tiny' style={{margin:'2rem'}}>Présentation d'AjaCS</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginLeft:'20rem', marginRight:'20rem', marginTop:'3rem' }}>
                <video controls style={{ height: '28rem' }}>
                    <source src={video_decollage} type="video/mp4" />
                </video>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft:'4rem' }}>    
                    <p className='regular-text tiny navy' style={{marginBottom:'1rem'}}>AjaCS est la première fusée de l'association. Cette fusée a mis en place de nombreuses techniques de fabrication utilisées pour les projets suivants : tube en carbone, conception CAO avec SolidWorks, cartes électroniques, certaines expériences... AjaCS a atteint :</p>                    
                    <li className='list-statistics' key={'speed'}>Vitesse maximale de 205m/s</li>
                    <li className='list-statistics' key={'fall'}>Vitesse sous parachute de 10m/s</li>
                    <li className='list-statistics' key={'alt'}>1500m d'altitude</li>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <RocketDetails
                        flightStatus='Nominal' 
                        years='2021-2022'
                        launch_date='21 juillet 2022'
                        project_type='Fusée expérimentale'
                        launch_location={'C\'Space, Tarbes'}
                        propulsion_type='Pro54'
                        diameter='100mm'
                        length='1.6m'
                        number_members={8}
                        prizes={['Première fusée de l\'association']}
                        exps={['Accéléromètres','Gyromètres','Mesure de Pression', 'Mesure de Température', 'Télémétrie LoRA']}
                        exps_state={['Succès partiel', 'Succès partiel', 'Succès', 'Succès','Succès']}
                        rocket_image='/projets/FusEx/AjaCS/ajacs_cut.png'
                        rocket_styles={{ height: '85rem', width: 'auto', marginRight: '4rem', marginLeft:'1rem', transform: 'rotate(-4deg)' }}
                        paragraph_array={side_paragraphs}
                    />
                </div>
                <Slideshow content={project_image_slides} slideshow_styles={{height:'40rem', width:'auto', marginLeft:'18.5rem', marginRight:'18.5rem'}}/>
                <h2 className='title-text navy tiny' style={{margin:'4rem'}}>Les expériences embarquées</h2>
                <div style={{ display: 'flex', flexDirection: 'row', marginLeft:'20rem', marginRight:'20rem' }}>
                        <p className='regular-text tiny navy' style={{marginBottom:'1rem'}}>AjaCS avait pour ambition et objectif principal de créer un profil pression-température de l'atmosphère. Bien que les capteurs ont a priori bien fonctionné, l'inertie sur le capteur thermique n'a pas révélé la baisse de température attendue avec la montée en altitude. Cependant, la dépression observée par l'ascension s'est transcrite dans les données du vol.</p>                    
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft:'20rem', marginRight:'20rem', marginTop:'4rem' }}>
                    <img src='/projets/FusEx/AjaCS/pression_ajacs.png' style={{ height: '20rem'}} />
                    <img src='/projets/FusEx/AjaCS/temperature_ajacs.png' style={{ height: '20rem'}} />
                    <img src='/projets/FusEx/AjaCS/accel_ajacs.png' style={{ height: '20rem'}} />
                </div>
                <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}>
                    <p className='regular-text tiny navy' style={{ alignItems: 'column', marginLeft: '30rem', marginRight: '30rem' }}>Vous souhaitez découvrir plus de notre projet et de cette aventure ? Découvrez notre dossier post-vol, qui entre en détails dans nos choix techniques, notre organisation et les problèmes rencontrés dans le projet.</p>
                </div>
                <div style={{ marginTop: '2rem', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                    <button className='alt-buttons' onClick={handleDownload}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src='/layout_images/other/donwload_icon.png' alt='Download icon' style={{ width: '2.1rem', height: 'auto', marginRight: '0.5rem' }} />
                            <span style={{ marginLeft: '0.5rem', fontSize: '1.2rem', marginRight: '0.5rem' }}>Dossier Post-Vol</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;
