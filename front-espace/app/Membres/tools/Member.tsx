import React from 'react';

interface MemberDesc {
    image: string;
    first_name: string;
    last_name: string;
    mail: string;
    promo: number;
    roles_project: { [project: string]: string };
    linkedin?: string;
}

const TeamDropdown: React.FC<{ team: string; members: MemberDesc[] }> = ({ team, members }) => {
    return (
        <details>
            <summary className='regular-text small navy' style={{ borderBottom: '0.5rem solid darkblue', width:'16rem', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom:'0.5rem' }}><strong>{team}</strong></summary>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                {members.map((member) => (
                    <Member key={member.first_name} {...member} />
                ))}
            </div>
        </details>
    );
};

const Member: React.FC<MemberDesc> = ({
    image,
    first_name,
    last_name,
    mail,
    promo,
    roles_project,
    linkedin,
}) => {
    const registeredTeams = 
    {'Equipe Mécanique': '/members/badge/badge_meca.png',
    'Equipe Electronique': '/members/badge/badge_elec.png',
    'Equipe Software':'/members/badge/badge_soft.png',
    'Equipe Combustion':'/members/badge/badge_combustion.png',
    'Equipe Hydraulique':'/members/badge/badge_hydro.png'}

    const teams = Object.keys(roles_project).filter((project) => {
        const equipeName = Object.keys(registeredTeams).find((team) => roles_project[project].startsWith(team));
        return equipeName !== undefined;
    });

    return (
        <div style={{display:'flex', flexDirection:'column', padding:'1rem'}}>
            <div>
                <img src={`/members/P${promo}${image.replace('http://127.0.0.1:8000/myapi/static/myapi/images/membres', '')}`} alt={`${first_name} ${last_name}`} style={{width:'16rem', objectFit:'cover', height:'16rem'}} />
            </div>
            <h2 className='regular-text small navy' style={{ borderBottom: '0.5rem solid darkblue', width:'16rem', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom:'0.5rem' }}><strong>{first_name} {last_name}</strong></h2>
            <div className='regular-text small navy' style={{display: 'flex', flexDirection:'column', justifyContent: 'center', width:'16rem', marginBottom:'0.5rem'}}>
                {Object.keys(roles_project).filter((project) => !teams.includes(project)).map((project) => (
                    <li key={project}>
                        <strong>{project}</strong> - <i>{roles_project[project]}</i>
                    </li>
                    ))}
            </div>
            <div style={{ display: 'flex', alignContent:'center', flexDirection:'row'}}>
                <a href={linkedin}>
                    <img className='clickable-mini-images' src="/layout_images/networks/linkedin.png" alt="LinkedIn" style={{ width: '1.5rem', marginLeft:'5rem' }} />
                </a>
                <a href={mail}>
                    <img className='clickable-mini-images' src="/layout_images/networks/mail_logo.png" alt="Mail icon" style={{ width: '2.25rem', height: '1.5rem', marginLeft:'0.3rem' }} />
                </a>
            </div>
        </div>
    );
};

export default Member;
