"use client";
import Paragraph from "../tools/text_display/Paragraph";
import Header from "../tools/global_layout/Header";

const CNESText = 'Le CNES est le Centre National des études Spatiales. Le CNES, en collaboration avec l\'association planète sciences, organise chaque année le C\'Space, la campagne de lancement de fusées expérimentales étudiantes nationale, à laquelle l\'association participe chaque année.'
const PlaneteSciencesText = 'Planète Sciences est une association qui a pour but de promouvoir les sciences et les techniques auprès des jeunes. Elle est composée de 12 délégations régionales, dont une en Île-de-France. L\'association organise de nombreux évènements, dont le C\'Space, un rassemblement de fusées expérimentales.'
const CSText = 'CentraleSupélec est notre école d\'ingénieur. Elle nous soutient dans nos projets, et nous met à disposition un local technique, que nous partageons également avec le Club Tech, l\'association de conception et robotique de CentraleSupélec.'
const EM2CText = 'L\'EM2C [Energétique Moléculaire et Macroscopique, Combustion] est un laboratoire de recherche de CentraleSupélec. Il nous aide dans le développement de nos moteurs-fusées, via les projets étudiants, leurs infrastructures, leur expertise et leur moyens expérimentaux.'
const LaFabriqueText = 'La Fabrique est le fablab de l\'école CentraleSupélec. Elle met à disposition ressources premières (plastique, bois, métaux, etc.) et machines (imprimantes 3D, découpe laser, fraiseuse, etc.) pour la réalisation de projets.'

const ArianeGroupText = 'ArianeGroup est l\'entreprise qui conçoit et fabrique les lanceurs spatiaux européens Ariane, mais également de nombreux systèmes aérospatiaux de défense et de mise en orbite. L\'entreprise nous soutient à la fois par son expertise technique et financièrement dans nos projets.'
const ArianeGroupSubText = 'ArianeGroup a notamment soutenu le projet PheniCS, notre fusée supersonique en 2023, ainsi que le projet Sirius, notre première fusée bi-étage en 2024. Ce partenaire historique et prestigieux est un soutien de taille pour l\'association, et plusieurs de nos membres rejoignent le leader européen des lanceurs spatiaux, ou ses filiales, en stage ou CDI.'
//const ArianeGroupConfText = "En Janvier 2024, M. Martin Sion, PDG d'Ariane Group, est venu donner une conférence passionante pour présenter ArianeGroup et ses activités aux élèves du campus."*

const ArcheryText = "Fondée en 2013 à Paris, Archery Strategic Consulting s'adresse aux grandes entreprises mondiales en leur proposant des solutions de conseil en stratégie et en transformation. Archery mise sur 3 secteurs : l'énergie-environnement, les transports et la logistique, et bien sûr l'aérospatial et la défense. Composée maintenant d'une équipe de 45 consultants, Archery a mené a bien plus de 300 projets depuis sa fondation.  Archery a soutenu le projet Sirius, notre première fusée bi-étage en 2024."
//const background_top_image = '/soutiens/bg_soutiens.jpg';
const background_top = '/soutiens/conf_ariane.jpg';

const Page = () => { 
    return (
        <div>
            <Header 
                bg={background_top} 
                title="Découvrir nos partenaires" 
                subtitle="Devenir Partenaire" 
                paragraph="Vous êtes professionel ou particulier et souhaitez aider un groupe de jeunes étudiants motivés et passionés dans la réalisation de projets toujours plus ambitieux ? Que ce soit par une aide financière, matérielle, ou une expertise technique, vous pouvez rejoindre nos partenaires :"
            />
            <div style={{ marginTop: '2rem', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                <a className='alt-buttons' href='/Devenir-Partenaire' style={{marginRight:'6rem'}}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginLeft: '0.5rem', fontSize: '1.2rem', marginRight: '0.5rem' }}>Devenir Partenaire</span>
                    </div>
                </a>
                <a className='alt-buttons' href='/Contact'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginLeft: '0.5rem', fontSize: '1.2rem', marginRight: '0.5rem' }}>Nous contacter</span>
                    </div>
                </a>
            </div>
            <div style={{marginTop:'4rem'}}>
                <text className='title-text navy' style={{textAlign:'center', display:'flex', justifyContent:'center', marginBottom:'4rem'}}>Nos Partenaires</text>
                <Paragraph 
                    image='/soutiens/arianegroup.png' 
                    title='ArianeGroup'
                    imageName="ArianeGroup"
                    imagePosition='right' 
                    imageWidth='30rem' 
                    text={ArianeGroupText}
                />
                <Paragraph 
                    image='/projets/FusEx/PheniCS/perce_nuages.png' 
                    imageName="PerceNuages"
                    imagePosition='left' 
                    imageWidth='35rem' 
                    text={ArianeGroupSubText}
                />
                <Paragraph 
                    image='/soutiens/archery.png' 
                    title='Archery Consulting'
                    imageName="Archery"
                    imagePosition='right' 
                    imageWidth='30rem' 
                    text={ArcheryText}
                />
                <text className='title-text navy' style={{textAlign:'center', display:'flex', justifyContent:'center', marginBottom:'4rem'}}>Nos Soutiens</text>
                <Paragraph 
                    image='/soutiens/lafabrique.png' 
                    imagePosition='right' 
                    imageName="LaFabrique"
                    title="La Fabrique"
                    imageWidth='150%' 
                    text={LaFabriqueText} 
                />
                <Paragraph 
                    image='/soutiens/planete-sciences.png'
                    imageName="PlaneteSciences"
                    title="Planète Sciences"
                    imagePosition='left' 
                    imageWidth='30rem' 
                    text={PlaneteSciencesText} 
                />
                <Paragraph 
                    image='/soutiens/cnes.png' 
                    imagePosition='right'
                    imageName="CNES"
                    title="CNES"
                    imageWidth='30rem'
                    text={CNESText} 
                />
                <Paragraph 
                    image='/soutiens/centralesupelec.png' 
                    imagePosition='left'
                    imageName="CentraleSupélec" 
                    imageWidth='30rem' 
                    title="CentraleSupélec"
                    text={CSText} 
                />
                <Paragraph 
                    image='/soutiens/EM2C.png' 
                    imagePosition='right' 
                    imageName="EM2C"
                    title="Laboratoire EM2C"
                    imageWidth='30rem' 
                    text={EM2CText} 
                />
          </div>
        </div>
    );
};

export default Page;