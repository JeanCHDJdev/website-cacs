import React from 'react';
import { useState } from 'react';

const TeamBadges: { [key: string]: string } = {
    'Mécanique': '/members/badges/badge_meca.png',
    'Electronique': '/members/badges/badge_elec.png',
    'Software':'/members/badges/badge_soft.png',
    'Propulsion':'/members/badges/badge_combustion.png',
};

interface DropdownTeamDisplayProps {
    project_team_dict: { [key: string]: [string] };
}


const DropdownTeamDisplay: React.FC<DropdownTeamDisplayProps> = ({ project_team_dict }) => {
    const team_project_dict: { [key: string]: [string] } = {};

    Object.entries(project_team_dict).forEach(([project, teams]) => {
        teams.forEach((team) => {
            if (team_project_dict[team.split(' ').slice(1, 2).join(' ')]) {
                team_project_dict[team.split(' ').slice(1, 2).join(' ')].push(project);
            } else {
                team_project_dict[team.split(' ').slice(1, 2).join(' ')] = [project];
            }
        });
    });

    const [hoveredTeam, setHoveredTeam] = useState<string | null>(null);

    return (
        <div>
            <div className="alt-dropdown-menu" style={{marginTop:'0.4rem', marginRight:'0.4rem'}}>
                {Object.entries(team_project_dict).map(([team, projects]) => (
                    <div key={team} className="dropdown-item" style={{ display: 'flex', flexDirection:'row' }}>
                        <div
                            onMouseEnter={() => setHoveredTeam(team)}
                            onMouseLeave={() => setHoveredTeam(null)}
                            style={{ position: 'relative' }}
                        >
                            <img src={TeamBadges[team]} alt={team} style={{ scale:'1', width:'2rem', height:'2rem', filter: 'invert(1)', padding:'0.1rem' }} />
                            {hoveredTeam === team && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '0%',
                                        left: '120%',
                                        backgroundColor: 'white',
                                        color: 'rgb(0,0,50)',
                                        padding: '0.5rem',
                                        width:'18rem',
                                        borderRadius: '4px',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                        display: 'flex', 
                                        flexDirection: 'column',
                                        flexWrap: 'wrap',
                                        zIndex: 100,
                                        filter:'',
                                    }}
                                >
                                    {projects.map((project) => (
                                        <li key={project}>{team} - {project}</li>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    };

export default DropdownTeamDisplay;
