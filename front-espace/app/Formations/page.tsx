import React from 'react';
import Header from '@/app/tools/global_layout/Header';
import Paragraph from '@/app/tools/text_display/Paragraph';

const background_top_image = '/formations/formation_matthieu.jpg';

const Page: React.FC = () => {
    return (
        <div>
            <Header 
                bg={background_top_image}
                title="Formations"
                subtitle="Formations des membres"
                />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Paragraph 
                    image = '/formations/formation_jean.jpg'
                    imageName='Forma_Jean'
                    imagePosition='right'
                    imageWidth='40rem'
                    text="Chaque année, nous formons nos nouveaux membres à toutes les techniques de fabrication et de conception nécessaires à la réalisation de nos projets. Ces formations traitent de la soudure, de la conception de cartes électroniques, des techniques de CAO, d'impression 3D, de programmation..."
                />
                <Paragraph 
                    image = '/formations/formation_dates.png'
                    imageName='Forma_Dates'
                    imagePosition='left'
                    imageWidth='50rem'
                    text="Ces formations sont souvent réalisées au profit des autres projets techniques de l'école également, tels que les projets du Club Tech ou les autres projets du CACS. Nous organisons en général des redondances des formations pour permettre à tous les élèves de l'école intéressés de pouvoir y participer."
                />
            </div>
        </div>
    );
};

export default Page;