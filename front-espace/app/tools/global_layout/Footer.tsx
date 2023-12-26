import React from 'react';
import SocialMedia from '../SocialMedia';

const Footer: React.FC = () => {
  const autres_assos = [
    { src: '../layout_images/footer/ViaRezo.png', alt: 'ViaRézo', text: 'ViaRézo est l\'association d\'informatique et de réseau de CentraleSupélec à Gif', link: 'https://viarezo.fr/', width: '42px', height: '30px', marginLeft: '36px' },
    { src: '../layout_images/footer/pics.png', alt: 'Pics', text: 'Pics est l\'association de photographie de CentraleSupélec', link: 'https://galerie.pics/galerie', width: '60px', height: '30px', marginLeft: '12px' },
    { src: '../layout_images/footer/Logo_Hyris_B.png', alt: 'Hyris', text: 'Hyris est l\'assocation d\'audiovisuel de CentraleSupélec', link: 'https://hyris.tv/', width: '30px', height: '30px', marginLeft: '35px' },
  ];

  return (
    <footer style={{ width: '100%', height: '300px', backgroundColor: 'rgb(0, 0, 50)', borderTop: '10px solid white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', height: '100%' }}>
        <div style={{ flex: '1', textAlign: 'center' }}>
          <p style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', marginTop: '10px' }}>D'autres assos qu'on apprécie</p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', marginLeft: '20px' }}>
            {autres_assos.map((image, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <a href={image.link} target="_blank" rel="noopener noreferrer">
                  <img className='clickable-mini-images' src={image.src} alt={image.alt} style={{ width: image.width, height: image.height, marginRight: '10px' }} />
                </a>
                <p style={{ color: 'white', fontSize: '12px', marginBottom: '0px', marginLeft: image.marginLeft, textAlign: 'left' }}>{image.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: '2', textAlign: 'center' }}>
          <p style={{ color: 'white', textAlign: 'center', fontSize: '30px', fontWeight: 'bold', marginBottom: '0px', fontStyle: 'italic' }}>CACS</p>
          <p style={{ color: 'white', textAlign: 'center', fontSize: '20px', marginBottom: '10px' }}>Cercle Aéronautique CentraleSupélec</p>
          <p style={{ color: 'white', textAlign: 'center', marginBottom: '10px' }}>Suivez-nous sur les réseaux sociaux: </p>
          <SocialMedia style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}/>
          <a style={{ color: 'white', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '60px' }} href="mailto:cercle.aero.cs@gmail.com">
            Nous contacter par mail
            <img className='clickable-mini-images' src="../layout_images/networks/mail_logo.png" alt="Mail icon" style={{ width: '30px', height: '20px', filter: 'invert(1)', marginLeft: '12px' }} />
          </a>
          <p style={{ color: 'white', textAlign: 'center', fontSize: '10px', marginBottom: '8px' }}>© 2023 - CACS - By Jean Choppin de Janvry & Anas Himmi (P25)</p>
          <p style={{ color: 'white', textAlign: 'center', fontSize: '10px', marginBottom: '10px' }}>Tous droits réservés</p>
        </div>
        <div style={{ flex: '1', textAlign: 'center' }}>
          <p style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', marginTop: '10px' }}>Partenaires</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;