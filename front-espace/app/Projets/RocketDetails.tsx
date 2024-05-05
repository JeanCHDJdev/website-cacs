import React from 'react';

type RocketDetailsProps = {
    flightStatus: string;
    years: string;
    number_members: number;
    launch_date: string;
    launch_location: string;
    project_type: string;
    propulsion_type: string;
    diameter: string;
    length: string;
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
                <div style={{justifyContent:'center', alignItems:'center', display:'flex' }} key={content[0]}>
                    <img src={content[2]} alt='Rocket' style={{ height: '20rem', marginTop:'1rem', marginBottom:'1rem' }} key={content[1]}/>
                </div>
            )}
            <p className='regular-text navy tiny' style={{}}>{content[1]}</p>
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
    launch_location, 
    exps_state, 
    project_type, 
    propulsion_type,
    diameter,
    length,
    rocket_image, 
    rocket_styles,
    paragraph_array 
}) => {
    return (
        <div style={{justifyContent:'center', display:'flex', marginRight:'10%', marginLeft:'10%'}}>
            <div style={{width:'50%', margin:'.5rem'}}>
                <h1 style={{justifyContent:'center', display:'flex'}} className='regular-text navy'><strong>Détails</strong></h1>
                <p className='regular-text navy tiny' key={1}><strong>Type de projet :</strong> {project_type}</p>
                <p className='regular-text navy tiny' key={2}><strong>Type de propulsion :</strong> {propulsion_type}</p>
                <p className='regular-text navy tiny' key={3}><strong>Longueur :</strong> {length}</p>
                <p className='regular-text navy tiny' key={4}><strong>Diamètre :</strong> {diameter}</p>
                <p className='regular-text navy tiny' key={5}><strong>Années de développement :</strong> {years}</p>
                <p className='regular-text navy tiny' key={6}><strong>Etat de vol :</strong> {flightStatus}</p>
                <p className='regular-text navy tiny' key={7}><strong>Date de lancement :</strong> {launch_date}</p>
                <p className='regular-text navy tiny' key={8}><strong>Lieu de lancement :</strong> {launch_location}</p>
                <p className='regular-text navy tiny' key={9}><strong>Nombre de membres :</strong> {number_members}</p>
                {paragraph_array.map((paragraph, index) => {
                    if (index % 2 === 0) {
                        return <div key={index}> {createDivContent(paragraph)} </div>;
                    }
                    return null;
                })}
            </div>
            <div key='1' className='hide-mobile small'>
                <img src={rocket_image} key='rocket' alt='Rocket' style={rocket_styles} />
            </div>
            <div style={{width:'50%', margin:'.5rem'}}>
                <p className='regular-text navy tiny' style={{ textDecoration: 'underline', marginTop:'3.5rem'  }}>Prix et distinctions :</p>
                {prizes.map((prize, index) => (
                    <li className='list-statistics small' key={index}>{prize}</li>
                ))}
                <p className='regular-text navy tiny' style={{ textDecoration: 'underline', marginTop:'1rem' }}>Expériences :</p>
                {exps.map((exp, index) => (
                    <li className='list-statistics small' key={index}>{exp} : {exps_state[index]}</li>
                ))}
                {paragraph_array.map((paragraph, index) => {
                    if (index % 2 === 1) {
                        return <div key={index}> {createDivContent(paragraph)} </div>;
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default RocketDetails;
