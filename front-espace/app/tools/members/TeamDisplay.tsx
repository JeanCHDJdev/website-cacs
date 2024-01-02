import React, { useState } from 'react';
import Member from './Member';

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
                            <Member image={member.image} first_name={member.first_name} last_name={member.last_name} mail={member.mail} gpa_year={member.gpa_year} role={member.role} team={member.team} projects={member.projects} year={member.year} linkedin={member.linkedin}/>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeamDisplay;
