import React from 'react';

type RocketDetailsProps = {
    flightStatus: string;
    years: string;
    number_members: number;
    launch_date: string;
    launch_location: string;
    project_type: string;
    propulsion_type: string;
    exps: string[];
    exps_state: string[];
    prizes: string[];
    rocket_image: string;
    rocket_styles: React.CSSProperties;
    paragraph_array: string[][]; /* Structure : title, paragraph, (optional) image path */
};
function createDivContent(content: string[]): JSX.Element {
    return (
        <div>
            <p className='regular-text navy tiny' style={{ textDecoration: 'underline', marginTop:'3.5rem', justifyContent:'center', alignItems:'center', display:'flex' }}>{content[0]}</p>
            {content.length === 3 && (
                <div style={{justifyContent:'center', alignItems:'center', display:'flex' }}>
                    <img src={content[2]} alt='Rocket' style={{ height: '20rem', marginTop:'1rem', marginBottom:'1rem' }} />
                </div>
            )}
            <p className='regular-text navy tiny' style={{width:'25rem'}}>{content[1]}</p>
        </div>
    );
}

const RocketDetails: React.FC<RocketDetailsProps> = ({ 
    flightStatus, 
    years, 
    number_members, 
    prizes, 
    exps, 
    launch_date, 
    exps_state, 
    launch_location, 
    project_type, 
    propulsion_type,
    rocket_image, 
    rocket_styles,
    paragraph_array }) => {
    return (
        <div style={{justifyContent:'center', display:'flex', marginRight:'20rem', marginLeft:'20rem'}}>
            <div>
                <h1 style={{justifyContent:'center', display:'flex'}} className='regular-text navy'><strong>Détails</strong></h1>
                <p className='regular-text navy tiny'><strong>Type de projet :</strong> {project_type}</p>
                <p className='regular-text navy tiny'><strong>Type de propulsion :</strong> {propulsion_type}</p>
                <p className='regular-text navy tiny'><strong>Années de développement :</strong> {years}</p>
                <p className='regular-text navy tiny'><strong>Etat de vol :</strong> {flightStatus}</p>
                <p className='regular-text navy tiny'><strong>Date de lancement :</strong> {launch_date}</p>
                <p className='regular-text navy tiny'><strong>Lieu de lancement :</strong> {launch_location}</p>
                <p className='regular-text navy tiny'><strong>Nombre de membres :</strong> {number_members}</p>
                {paragraph_array.map((paragraph, index) => {
                    if (index % 2 === 0 && index < paragraph_array.length) {
                        return createDivContent(paragraph);
                    }
                    return null;
                })}
            </div>
            <div>
                <img src={rocket_image} alt='Rocket' style={rocket_styles} />
            </div>
            <div>
                <p className='regular-text navy tiny' style={{ textDecoration: 'underline', marginTop:'3.5rem'  }}>Prix et distinctions :</p>
                {prizes.map((prize, index) => (
                    <li className='list-statistics small' key={prize}>{prize}</li>
                ))}
                <p className='regular-text navy tiny' style={{ textDecoration: 'underline', marginTop:'1rem' }}>Expériences :</p>
                {exps.map((exp, index) => (
                    <li className='list-statistics small' key={exp}>{exp} : {exps_state[index]}</li>
                ))}
                {paragraph_array.map((paragraph, index) => {
                    if (index % 2 === 1 && index < paragraph_array.length) {
                        return createDivContent(paragraph);
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default RocketDetails;
