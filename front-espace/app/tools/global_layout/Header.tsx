import React from 'react';

interface HeaderProps {
    bg: string;
    title: string;
    subtitle: string;
    paragraph?: string;
}
const Header: React.FC<HeaderProps> = ({bg, title, subtitle, paragraph}) => {
    return (
        <div>
            <img src={bg} style={{ objectFit: 'cover', objectPosition: 'center', filter: 'brightness(78%)',  height: '52rem', width:'100%',  position: 'relative', zIndex: 1}} />
            <text className='title-text huge white' style={{ textAlign: 'center', zIndex: '5', position: 'absolute', left: '10rem', top: '40rem'}}>{title}</text>
            <div style={{ marginTop: '5rem', display: 'flex', justifyContent: 'center', alignContent:'column', flexDirection:'column' }}>
                <text className='title-text navy' style={{textAlign:'center', display:'flex', justifyContent:'center', marginBottom:'4rem'}}>{subtitle}</text>
                {paragraph && <p className='regular-text tiny navy' style={{ marginLeft: '30rem', marginRight: '30rem' }}>{paragraph}</p>}
            </div>
        </div>
    );
};

export default Header;
