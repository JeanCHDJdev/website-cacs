import React from 'react';

interface ProjectHeaderProps {
    bg: string;
    title: string;
    subtitle: string;
    patch: string;
}
const ProjectHeader: React.FC<ProjectHeaderProps> = ({bg, title, subtitle, patch}) => {
    return (
        <div>
            <img src={bg} style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'brightness(78%)',  height: '30rem', width:'100%',  position: 'relative', zIndex: 1 }} />
            <div style={{ display: 'flex', textAlign: 'center', justifyContent:'center', zIndex: 5, position:'relative', marginTop:'-15rem' }}>
                <img src={patch} alt='Patch' style={{ marginRight: '2rem', width: '10rem', height: 'auto' }} />
                <text className='title-text huge white'>{title}</text>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'8rem' }}>
                <h2 className='title-text navy tiny' style={{margin:'2rem'}}>{subtitle}</h2>
            </div>
        </div>
    );
};

export default ProjectHeader;
