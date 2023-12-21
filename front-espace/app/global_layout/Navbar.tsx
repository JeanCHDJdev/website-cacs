import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'darkblue', padding: '1rem', position: 'sticky', top: 0 }}>
            <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
                <li style={{ marginRight: '1rem' }}>
                    <a href="/">Home</a>
                </li>
                <li style={{ marginRight: '1rem' }}>
                    <a href="/PoleEspace">Pôle Espace</a>
                </li>
                <li style={{ marginRight: '1rem' }}>
                    <a href="/PoleHelics">Pôle HéliCS</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
