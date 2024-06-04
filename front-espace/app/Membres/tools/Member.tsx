import React from 'react';
import DropdownTeamDisplay from './DropdownTeamDisplay';

interface MemberDesc {
    image: string;
    first_name: string;
    last_name: string;
    mail: string;
    promo: number;
    roles_project: { [project: string]: [string] };
    linkedin?: string;
}

const Member: React.FC<MemberDesc> = ({
    image,
    first_name,
    last_name,
    mail,
    promo,
    roles_project,
    linkedin,
}) => {

    // Split roles_project into nonTeamRoles and teamRoles
    const nonTeamRoles: { [project: string]: [string] } = {};
    const teamRoles: { [project: string]: [string] } = {};

    Object.entries(roles_project).forEach(([project, roles]) => {
        const nonTeamRolesArray = roles.filter(role => !role.startsWith('Equipe'));
        const teamRolesArray = roles.filter(role => role.startsWith('Equipe'));
        if (nonTeamRolesArray.length > 0) {
            nonTeamRoles[project] = nonTeamRolesArray as [string];
        }
        if (teamRolesArray.length > 0) {
            teamRoles[project] = teamRolesArray as [string];
        }
    });

    return (
        <div style={{display:'flex', flexDirection:'column', padding:'1rem'}}>
            <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 0, right: 0 }}>
                        <DropdownTeamDisplay project_team_dict={teamRoles} />
                    </div>
                <img src={`/members/P${promo}${image.replace('http://127.0.0.1:8000/myapi/static/myapi/images/membres', '')}`} alt={`${first_name} ${last_name}`} style={{ width: '16rem', objectFit: 'cover', height: '16rem' }} />
            </div>
            <h2 className='regular-text small navy' style={{ borderBottom: '0.5rem solid darkblue', width:'16rem', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom:'0.5rem' }}><strong>{first_name} {last_name}</strong></h2>
            <div className='regular-text small navy' style={{display: 'flex', flexDirection:'column', justifyContent: 'center', width:'16rem', marginBottom:'0.5rem'}}>
                {Object.keys(nonTeamRoles).map((project) => (
                    <li key={project}>
                        <strong>{project}</strong> - <i>{nonTeamRoles[project][0]}</i> {/* pulls the most important role per project */}
                    </li>
                ))}
            </div>
            <div style={{ display: 'flex', alignContent:'center', flexDirection:'row'}}>
                <a href={linkedin}>
                    <img className='clickable-mini-images' src="/layout_images/networks/linkedin.png" alt="LinkedIn" style={{ width: '1.5rem', marginLeft:'5rem' }} />
                </a>
                <a href={`mailto:${mail}`}>
                    <img className='clickable-mini-images' src="/layout_images/networks/mail_logo.png" alt="Mail icon" style={{ width: '2.25rem', height: '1.5rem', marginLeft:'0.3rem' }} />
                </a>
            </div>
        </div>
    );
};

export default Member;
