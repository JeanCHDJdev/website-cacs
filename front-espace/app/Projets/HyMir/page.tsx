import React from 'react';
import ProjectHeader from '@/app/tools/global_layout/ProjectHeader';
import Paragraph from '@/app/tools/text_display/Paragraph';

const background_top_image = '/projets/HyMir/bg_temp.jpg';
const patch_image = '/home_page/main_imgs/Pole_Espace.png';

const Page: React.FC = () => {
    return (
        <div>
            <ProjectHeader 
                bg={background_top_image}
                patch={patch_image}
                title="HyMir"
                subtitle="HyMir : Moteur-fusée hybride"
                />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Paragraph 
                    image = '/projets/HyMir/hymir.jpg'
                    imageName='HyMir'
                    imagePosition='right'
                    imageWidth='25rem'
                    text="HyMir est le projet de développement de propulsion au sein de l'association. Nous avons pour ambition de développer notre propre moteur hybride utilisant N2O et un ergol à base de paraffine et de poudre d'aluminium. La première itération de ce projet, développée en collaboration avec l'EM2C, vise à développer un banc d'essai, à essayer l'intégration d'un moteur hybride sur une fusée expérimentale, et enfin à développer un protocole et une structure de tests autour des moteurs. Nous développerons ensuite un moteur à poussée plus élevée."
                />
                <Paragraph 
                    image = '/soutiens/EM2C.png'
                    imageName='EM2C'
                    imagePosition='left'
                    imageWidth='25rem'
                    text="L'EM2C [Enérgie Moléculaire et Macroscopique, Combustion] est le laboratoire de combustion de CentraleSupélec. Le projet est encadré et soutenu par le laboratoire dans le cadre des projets de l'école et à l'aide des infrastructures, ressources, locaux et professeurs du laboratoire. Nous les remercions chaleuresement, sans mauvais jeu de mot, pour leur aide !"
                />
            </div>
        </div>
    );
};

export default Page;
