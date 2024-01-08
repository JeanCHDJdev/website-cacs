import React from 'react';


interface MemberDesc {
    image: string;
    first_name: string;
    last_name: string;
    mail: string;
    gpa_year: number;
    roles_project: { [project: string]: string };
    teams_project: { [project: string]: string };
    linkedin?: string;
}

{/* would be amazing to add badges / achievements to each member !!!!!!!*/}
const Member: React.FC<MemberDesc> = ({
    image,
    first_name,
    last_name,
    mail,
    gpa_year,
    roles_project,
    teams_project,
    linkedin,
}) => {
    return (
        <div style={{display:'flex', flexDirection:'column', marginBottom:'0.5rem'}}>
            <img src={image} alt={`${first_name} ${last_name}`} style={{width:'14rem', objectFit:'cover', height:'14rem'}} />
            <h2 className='regular-text small navy' style={{ borderBottom: '0.5rem solid darkblue', width:'14rem', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom:'0.5rem' }}><strong>{first_name} {last_name}</strong></h2>
            <div className='regular-text small navy' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:'14rem', marginBottom:'0.5rem'}}>
                <ul>
                    {Object.keys(roles_project).map((project) => (
                        <li key={project}>
                            <strong>{project}</strong> - <i>{roles_project[project]}</i>
                        </li>
                    ))}
                </ul>
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
