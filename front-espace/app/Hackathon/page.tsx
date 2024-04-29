import React from 'react';
import Header from '@/app/tools/global_layout/Header';
import Paragraph from '@/app/tools/text_display/Paragraph';
import Slideshow from '@/app/tools/Slideshow';

const background_top_image = '/hackathon/gda_rampe.jpg';

const minif_display = [
    <img src='/hackathon/group_photo_2023_2.jpg' key={1} />,
    <img src='/hackathon/lafabrique_logo.jpg' key={2} />,
    <img src='/hackathon/minif_halle.jpg' key={3} />,
    <img src='/hackathon/minif_para.jpg' key={4} />,
    <img src='/hackathon/minif_soudure.jpg' key={5} />,
    <img src='/hackathon/minif_trou.jpg' key={6} />,
    <img src='/hackathon/minif_vol.jpg' key={7} />,
    <img src='/hackathon/telem.jpg' key={8} />,
];

const Page: React.FC = () => {
    return (
        <div>
            <Header 
                bg={background_top_image}
                title="Hackathon mini-fusées"
                subtitle="Des mini-fusées en 1 week-end"
                />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Paragraph 
                    image = '/hackathon/minif_vol_3.jpg'
                    imageName='Minf_vol_3'
                    imagePosition='right'
                    imageWidth='40rem'
                    text="Le Hackathon mini-fusées est l'évènement d'intronisation annuel des nouveaux membres du pôle espace. Le challenge est de construire par petites équipes de 4 à 5 personnes une mini-fusée en 1 week-end et de valider ses contrôles, comme au C'Space, avec le cahier des charges des mini-fusées. Ces mini-fusées décollent jusqu'à 90m de haut, propulsées par un moteur à poudre et montées sur une rampe de notre propre fabrication. Les contrôles, assurées par les deuxièmes années et les anciens membres de l'association, donnent l'autorisation de participer à l'après-midi de tirs des mini-fusées, la semaine suivante."
                />
                <Paragraph 
                    image = '/hackathon/montage.jpg'
                    imageName='Montage'
                    imagePosition='left'
                    imageWidth='45rem'
                    text="Parmi les objectifs de ces mini-fusées, les premières années fraîchement arrivés doivent établir une électronique de déclenchement parachute fonctionnelle, détecter le décollage, installer un module de télémétrie, obtenir une mécanique fonctionnelle, créer leur parachute, respecter tout le cahier des charges, et vérifier la stabilité de la fusée."
                />
            </div>
            <Slideshow 
                content={minif_display}
                slideshow_styles={{ width: '70%', height: '40rem', marginTop:'2rem', marginLeft:'15%', marginRight:'15%', marginBottom:'2rem', objectFit:'cover', display: 'flex', justifyContent: 'center'  }}
            />
            <Paragraph 
                image = '/hackathon/landing.jpg'
                imageName='Photo_grp'
                imagePosition='right'
                imageWidth='45rem'
                text="La première édition a eu lieu en octobre 2023. Le hackathon a été une vraie réussite, toutes les fusées ont pu tirer et les nouveaux membres de l'association ont pu mettre en pratique les connaissances acquises lors des formations ainsi qu'apprendre à se connaître."
            />
        </div>
    );
};

export default Page;