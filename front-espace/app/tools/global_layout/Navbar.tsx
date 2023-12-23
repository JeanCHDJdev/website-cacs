"use client";
import React, { useState, useRef } from 'react';

const Navbar: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);
    const submenuRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        setShowMenu(true);
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            if (!submenuRef.current?.contains(document.activeElement)) {
                setShowMenu(false);
            }
        }, 200);
    };

    const handleMenuMouseEnter = () => {
        setShowMenu(true);
    };

    const handleMenuMouseLeave = () => {
        setTimeout(() => {
            if (!submenuRef.current?.contains(document.activeElement)) {
                setShowMenu(false);
            }
        }, 200);
    };

    return (
        <nav style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0, 0, 139, 0.2)', padding: '1rem', position: 'sticky', top: 0}}>
            <a href="/">
                <img src="../main_animations/cacs_animated_gif.gif" alt="Logo" style={{ marginRight: '3rem', marginLeft: '1rem', width: '32px', transform: 'scale(3)' }} />
            </a>
            <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none', padding: 0}}>
                <li style={{ marginRight: '2rem' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <a href="/PoleEspace">Pôle Espace</a>
                    {showMenu && (
                        <div style={{ backgroundColor: 'rgba(0, 0, 139, 0.2)', position: 'absolute', top: '100%', left: 0, padding: '1rem', maxHeight: '500px', overflowY: 'auto', zIndex: 5, flexDirection: 'column' }} onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave}>
                            <a href="/PoleEspace/Item1">Item 1</a>
                            <a href="/PoleEspace/Item2">Item 2</a>
                            <a href="/PoleEspace/Item3">Item 3</a>
                        </div>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
