import React from 'react';

interface ProjectHeaderProps {
    bg: string;
    title: string;
    subtitle: string;
    patch: string;
    translateX?: number;
    translateY?: number;
}
const ProjectHeader: React.FC<ProjectHeaderProps> = ({bg, title, subtitle, patch}) => {
    return (
        <div>
            <div
                style={{
                backgroundPosition: 'center',
                height:'40vh', 
                width:'100vw',               
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                filter:'brightness(70%)',
                objectFit:'cover',
            }}/>
            <div style={{ display: 'flex', textAlign: 'center', justifyContent:'center', zIndex: 5, position:'relative', marginTop:'-12rem' }}>
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
