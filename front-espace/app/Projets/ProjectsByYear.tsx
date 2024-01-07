import React from 'react';

interface Projects {
    names: string[];
    subtexts: string[];
    patches: string[];
    year: number;
}

const ProjectsByYear: React.FC<Projects> = ({ names, subtexts, patches, year}) => {
    return (
        <div style={{ width: '25rem', marginLeft:'3rem', textAlign:'center' }}>
            <text className='title-text small navy'>{year}</text>
            {patches.map((patch, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div>
                        <text className='regular-text navy'>{names[index]}</text>
                    </div>
                    <div style={{ marginTop: '1em' }}>
                        <a href={`/Projets/${names[index]}`}>
                            <img src={patch} alt={names[index]} style={{ width: '20rem', height: 'auto' }} key={names[index]}/>
                        </a>
                    </div>
                    <text className='regular-text tiny navy'>{subtexts[index]}</text>
                    <a className='alt-buttons' href={`/Projets/${names[index]}`} style={{ marginTop: '1em' }}>En savoir plus</a>
                </div>
            ))}
        </div>
    );
};

export default ProjectsByYear;
