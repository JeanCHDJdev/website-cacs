"use client";
import React, { useState, useRef } from 'react';
import DropdownMenu from './Dropdown';

const Navbar: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleBlur: React.FocusEventHandler<HTMLLIElement> = (event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
            setShowMenu(false);
        }
    };
    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: '0.5rem 1rem', position: 'fixed', top: 0, width: "100%"}}>
            <a href="/">
                <img src="../main_animations/cacs_animated_gif.gif" alt="Logo" style={{ width: '25px', transform: 'scale(3)', marginRight: '1.5rem', marginLeft: '1rem' }} />
            </a>
            <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none', padding: 0}}>
                <li style={{ marginRight: '2rem' }} onMouseEnter={handleMenuClick} onBlur={handleBlur} tabIndex={0}>
                    <div onClick={handleMenuClick}>Nos Activités</div>
                    {showMenu && (
                        <div style={{ position: 'absolute', top: '100%', left: 0, marginLeft: '4rem' }}>
                            <DropdownMenu options={['Pôle Espace', 'Pôle HéliCS', 'Pôle Mongolfière']} links={['/Espace', '/HéliCS', '/Mongolfière']} />
                        </div>
                    )}
                </li>
            </ul>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                <a href="https://www.instagram.com/cacs_centralesupelec/">
                    <img src="../networks/instagram.png" alt="Instagram" style={{ width: '20px', marginLeft: '0.8rem' }} />
                </a>
                <a href="https://twitter.com/CercleAeroCS">
                    <img src="../networks/twitter.png" alt="Twitter" style={{ width: '20px', marginLeft: '0.8rem' }} />
                </a>
                <a href="https://www.linkedin.com/company/cercle-aeronautique-centralesupelec/mycompany/">
                    <img src="../networks/linkedin.png" alt="LinkedIn" style={{ width: '20px', marginLeft: '0.8rem' }} />
                </a>
                <a href="https://youtube.com/">
                    <img src="../networks/youtube.png" alt="Youtube" style={{ width: '20px', marginLeft: '0.8rem' }} />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;