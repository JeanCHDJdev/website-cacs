import React, { useState } from 'react';
import Member from './Member';

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

interface TeamDisplayProps {
    members: MemberDesc[];
}

const TeamDisplay: React.FC<TeamDisplayProps> = ({ members }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="box">
            <div className="box-header">
                <h2>Team Members</h2>
                <button onClick={toggleContent}>{isOpen ? 'Close' : 'Open'}</button>
            </div>
            {isOpen && (
                <div className="box-content">
                    <div className="member-row">
                        {members.map((member, index) => (
                            <Member image={member.image} name={member.name} prom={member.prom} role={member.role} team={member.team} projects={member.projects} year={member.year} socialMediaLinks={member.socialMediaLinks}/>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeamDisplay;
