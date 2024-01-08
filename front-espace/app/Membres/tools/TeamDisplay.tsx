import React, { useState } from 'react';

const TeamDisplay: React.FC<{ members: Array<JSX.Element> }> = ({ members }) => {
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
                        {members}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeamDisplay;
