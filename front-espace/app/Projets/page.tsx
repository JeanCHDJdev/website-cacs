import React from 'react';
import ProjectsByYear from './ProjectsByYear';
import Header from '../tools/global_layout/Header';

const projects2024 = {
    names:['Sirius', 'HyMir', 'Nyx'],
    subtexts:['Notre première fusée bi-étage !', 'Projet de développement d\'un moteur fusée à ergols hybrides', 'Mini-fusée tirée de nuit bariolée de LEDs'],
    patches:['/home_page/main_imgs/Pole_Espace.png', '/home_page/main_imgs/Pole_Espace.png', '/home_page/main_imgs/Pole_Espace.png'],
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
    <ProjectsByYear names={projects2024.names} subtexts={projects2024.subtexts} patches={projects2024.patches} year={2024} key={2024}/>,
    <ProjectsByYear names={projects2023.names} subtexts={projects2023.subtexts} patches={projects2023.patches} year={2023} key={2023}/>,
    <ProjectsByYear names={projects2022.names} subtexts={projects2022.subtexts} patches={projects2022.patches} year={2022} key={2022}/>
];

const project_background = '/projets/bg_projets.png';

const Page = () => {
    return (
        <div>
            <Header 
                bg={project_background}
                title = 'Nos projets'
                subtitle='Découvrez nos fusées expérimentales'
                paragraph="Depuis 2021, nous accueillons chaque année de nouveaux projets, des fusées expérimentales aux moteurs-fusées. Toujours plus exigeants et motivants, ils portent l'association vers de nouvelles altitudes. Vous pouvez ici découvrir un historique des projets du pôle espace."
            />
            <div style={{height:'110rem', marginRight:'25rem', marginLeft:'25rem', marginTop:'5rem', justifyContent:'center', display:'flex', flexDirection:'row'}}>
                {project_slideshow} 
            </div>
        </div>
    );
};

export default Page;
