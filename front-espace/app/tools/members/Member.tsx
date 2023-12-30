import React from 'react';
import Image from 'next/image';

interface MemberDesc {
    image: string;
    name: string;
    prom: number;
    role: string;
    team: string;
    projects: string[];
    year: number;
    socialMediaLinks: string[];
}
{/* would be amazing to add badges / achievements to each member !!!!!!!*/}
const Member: React.FC<MemberDesc> = ({
    image,
    name,
    prom,
    role,
    team,
    projects, 
    year,
    socialMediaLinks,
}) => {
    return (
        <div>
            <Image src={image} alt={name} />
            <div style={{ borderBottom: '2px solid darkblue' }} />
            <div>
                <h2>{name} P{prom}</h2>
            </div>
            <div>
                {/* Render social media component here */}
            </div>
        </div>
    );
};

export default Member;
