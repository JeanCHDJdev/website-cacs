import React from 'react';
import Image from 'next/image';

interface MemberDesc {
    image: string;
    first_name: string;
    last_name: string;
    mail: string;
    gpa_year: number;
    role: string;
    team: string;
    projects: string[];
    year: number;
    linkedin: string;
}
{/* would be amazing to add badges / achievements to each member !!!!!!!*/}
const Member: React.FC<MemberDesc> = ({
    image,
    first_name,
    last_name,
    mail,
    gpa_year,
    role,
    team,
    projects, 
    year,
    linkedin,
}) => {
    return (
        <div>
            <img src={image} alt={`${first_name} ${last_name}`} style={{width:'14rem', margin:'1rem'}} />
            <h2 className='regular-text mini navy' style={{ borderTop: '0.5rem solid darkblue', width:'14rem', margin:'1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{first_name} {last_name}</h2>
            <a href={linkedin}>
                <img className='clickable-mini-images' src="../layout_images/networks/linkedin.png" alt="LinkedIn" style={{ width: '1.5rem', marginLeft: '0.8rem' }} />
            </a> 
            <a href={mail}>
                <img className='clickable-mini-images' src="../layout_images/networks/mail_logo.png" alt="Mail icon" style={{ width: '2.25rem', height: '1.5rem', marginLeft: '0.9rem' }} />
            </a>
        </div>
    );
};

export default Member;
