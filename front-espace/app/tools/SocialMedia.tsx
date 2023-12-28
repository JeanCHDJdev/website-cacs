import React from 'react';

interface SocialMediaProps {
    style?: React.CSSProperties;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ style }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', ...style }}>
            <a href="https://www.instagram.com/cacs_centralesupelec/">
                <img className='clickable-mini-images' src="../layout_images/networks/instagram.png" alt="Instagram" style={{ width: '1.5rem', marginLeft: '0.8rem', filter: 'invert(100%)'  }} />
            </a>
            <a href="https://twitter.com/CercleAeroCS">
                <img className='clickable-mini-images' src="../layout_images/networks/twitter.png" alt="Twitter" style={{ width: '1.5rem', marginLeft: '0.8rem', filter: 'invert(100%)'  }} />
            </a>
            <a href="https://www.linkedin.com/company/cercle-aeronautique-centralesupelec/mycompany/">
                <img className='clickable-mini-images' src="../layout_images/networks/linkedin.png" alt="LinkedIn" style={{ width: '1.5rem', marginLeft: '0.8rem', filter: 'invert(100%)'  }} />
            </a>
            <a href="https://youtube.com/">
                <img className='clickable-mini-images' src="../layout_images/networks/youtube.png" alt="Youtube" style={{ width: '1.5rem', marginLeft: '0.8rem', filter: 'invert(100%)'  }} />
            </a>
        </div>
    );
};

export default SocialMedia;
