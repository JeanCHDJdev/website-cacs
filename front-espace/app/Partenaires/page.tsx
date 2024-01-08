"use client";
import Paragraph from "../tools/text_display/Paragraph";

const CNESText = 'Le CNES est le Centre National des études Spatiales. Le CNES, en collaboration avec l\'association planète sciences, organise chaque année le C\'Space, la campagne de lancement de fusées expérimentales étudiantes nationale, à laquelle l\'association participe chaque année.'
const PlaneteSciencesText = 'Planète Sciences est une association qui a pour but de promouvoir les sciences et les techniques auprès des jeunes. Elle est composée de 12 délégations régionales, dont une en Île-de-France. L\'association organise de nombreux évènements, dont le C\'Space, un rassemblement de fusées expérimentales.'
const CSText = 'CentraleSupélec est notre école d\'ingénieur. Elle nous soutient dans nos projets, et nous met à disposition un local technique, que nous partageons également avec le Club Tech, l\'association de conception et robotique de CentraleSupélec.'
const EM2CText = 'L\'EM2C [Energétique Moléculaire et Macroscopique, Combustion] est un laboratoire de recherche de CentraleSupélec. Il nous aide dans le développement de nos moteurs-fusées, via les projets étudiants, leurs infrastructures, leur expertise et leur moyens expérimentaux.'
const LaFabriqueText = 'La Fabrique est le fablab de l\'école CentraleSupélec. Elle met à disposition ressources premières (plastique, bois, métaux, etc.) et machines (imprimantes 3D, découpe laser, fraiseuse, etc.) pour la réalisation de projets.'

const ArianeGroupText = 'ArianeGroup est l\'entreprise qui conçoit et fabrique les lanceurs spatiaux européens Ariane, mais également de nombreux systèmes aérospatiaux de défense et de mise en orbite. L\'entreprise nous soutient à la fois par son expertise technique et financièrement dans nos projets.'
const ArianeGroupSubText = 'ArianeGroup a notamment soutenu le projet PheniCS, notre fusée supersonique en 2023, ainsi que le projet Sirius, notre première fusée bi-étage en 2024. Ce partenaire historique et prestigieux est un soutien de taille pour l\'association, et plusieurs de nos membres rejoignent le leader européen des lanceurs spatiaux européens en stage ou CDI.'
const background_top_image = '/soutiens/bg_soutiens.jpg';

const Page = () => { 
    return (
        <div>
            <img src={background_top_image} style={{ objectFit: 'cover', objectPosition: 'center', filter: 'brightness(78%)',  height: '52rem', width:'100%',  position: 'relative', zIndex: 1}} />
            <text className='title-text huge white' style={{ textAlign: 'center', zIndex: '5', position: 'absolute', left: '10rem', top: '40rem'}}>Découvrir nos partenaires</text>
            <div style={{ marginTop: '6rem', display: 'flex', justifyContent: 'center', alignContent:'column', flexDirection:'column' }}>
                <text className='title-text navy' style={{textAlign:'center', display:'flex', justifyContent:'center', marginBottom:'4rem'}}>Devenir Partenaire</text>
                <p className='regular-text tiny navy' style={{ marginLeft: '30rem', marginRight: '30rem' }}>Vous êtes professionel ou particulier et souhaitez aider un groupe de jeunes étudiants motivés et passionés dans la réalisation de projets toujours plus ambitieux ? Que ce soit par une aide financière, matérielle, ou une expertise technique, vous pouvez rejoindre nos partenaires :</p>
            </div>
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
          </div>
        </div>
    );
};

export default Page;