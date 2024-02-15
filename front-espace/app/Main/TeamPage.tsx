"use client";
import React from 'react';

interface TeamPageProps {
    team_text : string;
    team_bg: string;
    patch: string;
}

const TeamPage: React.FC<TeamPageProps> = ({ patch, team_text, team_bg }) => {
        return (
            <div>
                <div className="slideshow-container" style={{top: 0, left: 0, right: 0}}>
                    <h1 
                        className='title-text huge white' 
                        style={{ 
                            position: 'absolute',
                            top: '70%', 
                            left: '20%',
                            whiteSpace: 'pre-wrap' 
                        }}
                    >
                        {team_text}
                    </h1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', position: 'absolute', top: '70%rem', left: '20%' }}>
                    <a className="buttons" href='/Projets' style={{ marginRight: '4rem'}}>Découvrir nos projets</a>
                    <a className="buttons" href='/Nous-Soutenir'>Nous soutenir</a>
                </div>
                <img 
                    src={patch} 
                    alt="patch" 
                    style={{ 
                        position: 'absolute', 
                        top: '24rem', 
                        left: '10.5rem', 
                        width: '15rem', 
                        height: 'auto' 
                    }} 
                />
            <div style={{ display: 'flex', justifyContent: 'center', position: 'absolute', top: '40rem', left: '28rem' }}>
            <a className="buttons" href='/Projets' style={{ marginRight: '4rem'}}>Découvrir nos projets</a>
            <a className="buttons" href='/Nous-Soutenir'>Nous soutenir</a>
            </div>
          <img src={team_bg} alt="Phenics Decollage" style={{objectFit:'cover', left:0, right:0}} />
        </div>
    );
};

export default TeamPage;
