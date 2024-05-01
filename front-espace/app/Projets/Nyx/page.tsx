"use client";
import React from 'react';
import RocketDetails from '../RocketDetails';
import ProjectHeader from '@/app/tools/global_layout/ProjectHeader';

const background_top_image = '/projets/Minif/Nyx/nyx.png';

const patch_image = '/home_page/main_imgs/Pole_Espace.png';

const dossier_prevol = '/pdfs/projets/Nyx/dossier_de_définition_Nyx.pdf';

const side_paragraphs = [
    ['Matrice de LEDs', 
    'La mini-fusée Nyx est équipée d\'une matrice de LEDs qui affiche des motifs lumineux lors du vol et pendant l\'utilisation. Ces matrices permettent d\'afficher ce qu\'on veut sur la fusée !',
    '/projets/Minif/Nyx/matrice.jpg'],
    ['Structure', 
    'Avec sa coiffe en PETG et son tube et ses ailerons en plexiglass, Nyx est quasi totalement transparente, laissant voir l\'architecture interne de la fusée, la matrice de LEDs, la lampe et le haut-parleur intégrés !',
    '/projets/Minif/Nyx/tube.jpg'],
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
                title="Nyx"
                subtitle="Présentation de Nyx"
                />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <RocketDetails
                        flightStatus='Inconnu' 
                        years='2023-2024'
                        launch_date='Inconnue'
                        project_type='Mini-fusée'
                        launch_location={'C\'Space, Tarbes'}
                        propulsion_type='Pro28'
                        diameter='80mm'
                        length='1.15m'
                        number_members={2}
                        prizes={['Première mini-fusée de l\'association, vise un vol de nuit']}
                        exps={['Matrice de LEDs', 'Haut-parleur', 'Lampe torche']}
                        exps_state={['Inconnu', 'Inconnu', 'Inconnu']}
                        rocket_image='/projets/Minif/Nyx/nyx_clear.png'
                        rocket_styles={{ height: '85rem', width: 'auto', marginRight: '4rem', marginLeft:'1rem'}}
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
