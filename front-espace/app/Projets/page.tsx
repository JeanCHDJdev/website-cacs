import React from 'react';
import ProjectsByYear from './ProjectsByYear';
import Slideshow from '../tools/Slideshow';

const projects2024 = {
    names:['Sirius', 'HyMir', 'Nyx'],
    subtexts:['Notre première fusée bi-étage !', 'Projet de développement d\'un moteur fusée à ergols hybrides', 'Mini-fusée tirée de nuit bariolée de LEDs'],
    patches:['/projets/patchs/patch PheniCS.png', '/projets/patchs/patch PheniCS.png', '/projets/patchs/patch PheniCS.png'],
    path: ['/Projets/Sirius', '/Projets/HyMir', '/Projets/Nyx'],
};
const projects2023 = {
    names:['PheniCS'],
    subtexts:['Première fusée supersonique nominale depuis plus de 10 ans en France'],
    patches:['/projets/patchs/patch PheniCS.png'],
    path: ['/Projets/PheniCS'],
};
const projects2022 = {
    names:['AjaCS'],
    subtexts:['Première fusée de l\'association. Trajectographie inertielle et initiation au monde de l\'astromodélisme'],
    patches:['/projets/patchs/patch AjaCS.png'],
    path: ['/Projets/AjaCS'],
};

const project_slideshow = [
    <ProjectsByYear names={projects2024.names} subtexts={projects2024.subtexts} patches={projects2024.patches} year={2024}/>,
    <ProjectsByYear names={projects2023.names} subtexts={projects2023.subtexts} patches={projects2023.patches} year={2023}/>,
    <ProjectsByYear names={projects2022.names} subtexts={projects2022.subtexts} patches={projects2022.patches} year={2022}/>
];

const Page = () => {
    return (
        <div>
            <div style={{ position: 'relative', zIndex: '1', height: '70rem' }}>
                <img src="/projets/bg_projets.png" style={{ objectFit: 'cover', objectPosition: 'center', height: '100%', filter: 'brightness(72%)' }} />
                <text className='title-text huge white' style={{ textAlign: 'center', zIndex: '5', position: 'absolute', left: '10rem', top: '40rem'}}>Nos projets</text>
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '18rem', backgroundColor: 'white' }}>
                    <text className='title-text navy' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '4.5rem', marginBottom:'4.5rem', zIndex:3}}>Découvrez nos fusées expérimentales</text>
                    <p className='regular-text navy' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '20rem', marginRight: '20rem', marginBottom:'2rem', zIndex:3}}>Depuis 2021, nous acceuillons chaque année de nouveaux projets, des fusées expérimentales aux moteurs-fusées. Toujours plus exigeants et motivants, ils portent l'association vers de nouvelles altitudes. Vous pouvez ici découvrir un historique des projets du pôle espace.</p>
                </div>
            </div>
            <div style={{height:'200rem', marginRight:'25rem', marginLeft:'25rem', marginTop:'22rem', justifyContent:'center'}}>
            <Slideshow 
                    content={project_slideshow} 
                    slideshow_styles={{ marginTop: '12rem', marginBottom:'10rem', zIndex: '10', marginLeft:'0rem', marginRight:'0rem'}} 
                    showAdjacentSlides={true}/>
            </div>
        </div>
    );
};

export default Page;
