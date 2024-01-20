"use client";
import React from 'react';
import RocketDetails from '../RocketDetails';
import Slideshow from '@/app/tools/Slideshow';
import ProjectHeader from '@/app/tools/global_layout/ProjectHeader';

const background_top_image = '/projets/FusEx/Sirius/sirius_bg.png';

const patch_image = '/home_page/main_imgs/Pole_Espace.png';

const dossier_prevol = '/pdfs/projets/Sirius/dossier_de_definition_SIRIUS.pdf';

const side_paragraphs = [
    ['Séparation', 'Le système de séparation est un système pneumatique inspiré du système utilisé sur la fusée HYDRA de la Supaéro Space Section développée dans le cadre du projet Perseus.','/projets/FusEx/Sirius/SSIE_Hydra.png'],
]
const Page: React.FC = () => {
    const handleDownload = () => {
        window.open(dossier_prevol, '_blank');
    };
    return (
        <div>
            <ProjectHeader 
                bg={background_top_image}
                patch={patch_image}
                title="Sirius"
                subtitle="Présentation de Sirius"
                />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <RocketDetails
                        flightStatus='Inconnu' 
                        years='2023-2024'
                        launch_date='Inconnue'
                        project_type='Fusée expérimentale'
                        launch_location={'C\'Space, Tarbes'}
                        propulsion_type='Pro75 & Pro54'
                        diameter='140mm'
                        length='3m [1m et 2m resp.]'
                        number_members={25}
                        prizes={['Première fusée bi-étage de l\'association']}
                        exps={['Séparation des étages', 'Retransmission live', 'Accéléromètres','Gyromètres', 'Télémétrie LoRA', '6 Caméras', 'Micro-stéréo']}
                        exps_state={['Inconnu','Inconnu', 'Inconnu', 'Inconnu', 'Inconnu','Inconnu', 'Inconnu']}
                        rocket_image='/projets/FusEx/Sirius/sirius_cut.png'
                        rocket_styles={{ height: '80rem', width: 'auto', marginRight: '2rem', marginLeft:'2rem' }}
                        paragraph_array={side_paragraphs}
                    />
                </div>
                <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}>
                    <p className='regular-text tiny navy' style={{ alignItems: 'column', marginLeft: '30rem', marginRight: '30rem' }}>Vous souhaitez découvrir plus de notre projet et de cette aventure ? Découvrez notre dossier pré-vol, qui entre en détails dans nos choix techniques, notre organisation et les problèmes rencontrés dans le projet.</p>
                </div>
                <div style={{ marginTop: '2rem', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                    <button className='alt-buttons' onClick={handleDownload}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src='/layout_images/other/donwload_icon.png' alt='Download icon' style={{ width: '2.1rem', height: 'auto', marginRight: '0.5rem' }} />
                            <span style={{ marginLeft: '0.5rem', fontSize: '1.2rem', marginRight: '0.5rem' }}>Dossier Pré-Vol</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;
