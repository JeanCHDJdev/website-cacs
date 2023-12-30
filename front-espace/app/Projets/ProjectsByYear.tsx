import React from 'react';

interface Projects {
    names: string[];
    subtexts: string[];
    patches: string[];
}

const ProjectsByYear: React.FC<Projects> = ({ names, subtexts, patches }) => {
    return (
        <div>
            {patches.map((patch, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                    {patches.map((patch, patchIndex) => (
                        <div key={patchIndex} style={{ marginRight: '10px' }}>
                            <img src={patch} alt={`Project ${index + 1} Image ${patchIndex + 1}`} />
                            <text>{names[index]}</text>
                            <text>{subtexts[index]}</text>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ProjectsByYear;
