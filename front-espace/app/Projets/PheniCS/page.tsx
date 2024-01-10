"use client";
import React from 'react';
import RocketDetails from '../RocketDetails';
import Slideshow from '@/app/tools/Slideshow';
import ProjectHeader from '@/app/tools/global_layout/ProjectHeader';

const background_top_image = '/home_page/main_img_diapo/phenics_decollage.jpg';

const patch_image = '/projets/patchs/patch PheniCS.png';
const img_styles : React.CSSProperties = {
    height: '40rem',
    width: '60rem',
    objectFit: 'cover',
};
const project_image_slides = [
    <img src='/home_page/main_img_diapo/photo_grp_cspace_phenics.jpg' style={img_styles} key={0}></img>,
    <img src='/projets/FusEx/PheniCS/vol_phenics.jpg' style={img_styles} key={1}></img>,
    <img src='/projets/FusEx/PheniCS/moteur_phenics.png' style={img_styles} key={2}></img>,
    <img src='/projets/FusEx/PheniCS/perce_nuages.png' style={img_styles} key={3}></img>,
    <img src='/projets/FusEx/PheniCS/tube_carbone.jpg' style={img_styles} key={4}></img>,
    <img src='/projets/FusEx/PheniCS/vue_rampe.png' style={img_styles} key={5}></img>,
    <img src='/projets/FusEx/PheniCS/qualification.png' style={img_styles} key={6}></img>,
]

const video_tableau_de_bord = '/videos/projets/PheniCS/Reconstruction_Phenics.mp4';
const video_decollage = '/videos/projets/PheniCS/decollage_phenics.mp4';

const dossier_postvol = '/pdfs/projets/PheniCS/dossier_Postvol_Phenics.pdf';

const side_paragraphs = [
    ['Avionique', 'L\'avionique de PheniCS se compose de 6 familles de cartes électroniques : 1 carte alimentation, 2 cartes de gestion des expériences, puis finalement en bas du stack électronique une carte séquenceur. Une carte micro stéréo et les capteurs de pression et température viennent compléter l\'architecture électronique.','/projets/FusEx/PheniCS/stack_cut.png'],
    ['Récupération', 'La récupération est assurée par un système de parachute double. Le parachute haute-vitesse amortit la vitesse juste avant l\'apogée, puis le parachute basse-vitesse se déclenche pour amener la fusée à 13m/s.','/projets/FusEx/PheniCS/crochet_cut.png'],
]
const Page: React.FC = () => {
    const handleDownload = () => {
        window.open(dossier_postvol, '_blank');
    };
{/*comment reset*/}
    return (
        <div>
            <ProjectHeader 
                bg={background_top_image}
                patch={patch_image}
                title="PheniCS"
                subtitle="Présentation de PheniCS"
                />
            <div style={{ display: 'flex', flexDirection: 'row', marginLeft:'20rem', marginRight:'20rem', marginTop:'3rem' }}>
                <video controls style={{ height: '28rem' }}>
                    <source src={video_decollage} type="video/mp4" />
                </video>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft:'4rem' }}>    
                    <p className='regular-text tiny navy' style={{marginBottom:'1rem'}}>PheniCS est la première fusée supersonique de l'association, et la première fusée supersonique nominale depuis plus de 10 ans en France pour les fusées expérimentales étudiantes. Lancée le 20 juillet lors du C'Space à proximité de Tarbes, elle atteint :</p>                    
                    <li className='list-statistics' key={'speed'}>Mach 1.04</li>
                    <li className='list-statistics' key={'supersonic time'}>Supersonique pendant 1.97s</li>
                    <li className='list-statistics' key={'time'}>4min27 de vol</li>
                    <li className='list-statistics' key={'alt'}>3200m de hauteur</li>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <RocketDetails
                        flightStatus='Nominal' 
                        years='2022-2023'
                        launch_date='20 juillet 2023'
                        project_type='Fusée expérimentale'
                        launch_location={'C\'Space, Tarbes'}
                        propulsion_type='Pro75'
                        diameter='90mm'
                        length='1.8m'
                        number_members={14}
                        prizes={['Prix Espace et Industrie 2023 MBDA']}
                        exps={['Accéléromètres','Gyromètres','Mesure de Pression', 'Mesure de Température', 'Télémétrie LoRA', 'Caméra', 'Micro-stéréo']}
                        exps_state={['Succès', 'Succès', 'Succès', 'Succès','Succès', 'Echec', 'Echec partiel']}
                        rocket_image='/projets/FusEx/PheniCS/phenics_cut.png'
                        rocket_styles={{ height: '80rem', width: 'auto', marginRight: '2rem', marginLeft:'2rem' }}
                        paragraph_array={side_paragraphs}
                    />
                </div>
                <Slideshow content={project_image_slides} slideshow_styles={{height:'40rem', width:'auto', marginLeft:'18.5rem', marginRight:'18.5rem'}}/>
                <h2 className='title-text navy tiny' style={{margin:'4rem'}}>Les expériences embarquées</h2>
                <div style={{ display: 'flex', flexDirection: 'row', marginLeft:'20rem', marginRight:'20rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', marginRight:'4rem' }}>    
                        <p className='regular-text tiny navy' style={{marginBottom:'1rem'}}>PheniCS avait pour ambition et objectif principal de créer un profil pression-température de l'onde de choc supersonique. Sur le tableau de bord reconstitué à droite, vous pouvez retrouver le retour de ces expériences pendant le vol, ainsi que l'état de la fusée. On observe bien le phénomène de surpression-dépression au niveau de la coiffe, qu'on retrouve également dans les simulations effectuées sous ANSYS Fluent par le groupe.</p>                    
                    </div>
                    <video controls style={{ height: '30rem' }}>
                        <source src={video_tableau_de_bord} type="video/mp4" />
                    </video>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginLeft:'20rem', marginRight:'20rem', marginTop:'4rem' }}>
                    <img src='/projets/FusEx/PheniCS/pression_phenics.png' style={{ height: '36rem', marginRight:'4rem' }} />
                    <img src='/projets/FusEx/PheniCS/fluent_phenics_cut.png' style={{ height: '36rem' }} />
                </div>
                <h2 className='title-text navy tiny' style={{margin:'4rem'}}>Prix Espace et Industrie 2023</h2>
                <div style={{ display: 'flex', flexDirection: 'row', marginLeft:'20rem', marginRight:'20rem'}}>
                    <img src='/projets/FusEx/PheniCS/prix_phenics.jpg' style={{ height: '31.5rem', marginRight:'2rem' }} />
                    <img src='/projets/FusEx/PheniCS/pei_phenics.jpg' style={{ height: '31.5rem', marginRight:'2rem' }} />
                    <div style={{display: 'flex', flexDirection: 'column' }}>
                        <text className='regular-text tiny navy'>PheniCS a également remporté le 16 février le Prix Espace et Industrie 2023 MBDA au siège social du CNES, à Paris. Ce prix récompense l'implication de nos membres et notre réalisation pour le C'Space 2023.</text>
                        <a className='alt-buttons' href='https://www.youtube.com/live/BuDKCX8IRCY?feature=shared&t=5868' target="_blank" rel="noopener noreferrer" style={{marginTop:'1rem'}}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                                <img src='/layout_images/networks/youtube.png' alt='Download icon' style={{ width: '2.1rem', height: 'auto', marginRight: '0.5rem' }} />
                                <span style={{ marginLeft: '0.5rem', fontSize: '1.2rem', marginRight: '0.5rem' }}>Revoir notre présentation</span>
                            </div>
                        </a>
                    </div>
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
