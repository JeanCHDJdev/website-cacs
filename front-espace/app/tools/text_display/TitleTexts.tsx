import React from 'react';

interface TitleTextProps {
    title: string;
    color: string;
}

const TitleText: React.FC<TitleTextProps> = ({ title, color }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', zIndex: 5}}>
            <hr style={{ width: '100%' }} />
            <h1 className={`title-text ${color}`} style={{ textAlign: 'center' }}>{title}</h1>
            <hr style={{ width: '100%' }} />
        </div>
    );
};

export default TitleText;

