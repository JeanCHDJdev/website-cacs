import React from 'react';
import ProjectsByYear from './ProjectsByYear';

const projects2024 = {
    names:['Sirius', 'HyMir', 'Nyx'],
    subtexts:['Notre première fusée bi-étage !', 'Projet de développement d\'un moteur fusée à ergols hybrides', 'Mini-fusée tirée de nuit bariolée de LEDs'],
    patches:['../../projets/FusEx/patch Sirius.png', '../../projets/FusEx/patch Hymir.png', '../../projets/FusEx/patch Nyx.png'],
    path: ['/Projets/Sirius', '/Projets/HyMir', '/Projets/Nyx'],
};

const projects2023 = {
    names:['Phenics'],
    subtexts:['Première fusée supersonique nominale depuis plus de 10 ans en France'],
    patches:['../../projets/FusEx/patch PheniCS.png'],
    path: ['/Projets/PheniCS'],
};

const projects2022 = {
    names:['AjaCS'],
    subtexts:['Première fusée de l\'association. Trajectographie inertielle et initiation au monde de l\'astromodélisme'],
    patches:['../../projets/FusEx/patch AjaCS.png'],
    path: ['/Projets/AjaCS'],
};

const Page = () => {
    return (
        <div>
            <ProjectsByYear names={projects2024.names} subtexts={projects2024.subtexts} patches={projects2024.patches}/>
            <ProjectsByYear names={projects2023.names} subtexts={projects2023.subtexts} patches={projects2023.patches}/>
            <ProjectsByYear names={projects2022.names} subtexts={projects2022.subtexts} patches={projects2022.patches}/>
        </div>
    );
};

export default Page;
