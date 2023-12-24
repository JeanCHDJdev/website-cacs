"use client";
import React, { useState, useRef } from 'react';
import DropdownMenu from './Dropdown';

interface Tab {
    label: string;
    options: string[];
    links: string[];
    showMenu: boolean; // Add the showMenu property
}

const Navbar: React.FC = () => {
    const [tabs, setTabs] = useState<Tab[]>([
        {
            label: 'Nos Activités',
            options: ['Space Section', 'Pôle HéliCS', 'Pôle Mongolfière'],
            links: ['/SpaceSection', '/HéliCS', '/Mongolfière'],
            showMenu: false,
        },
        {
            label: 'Nos Passions',
            options: ['Space Section', 'Pôle HéliCS', 'Pôle Mongolfière'],
            links: ['/SpaceSection', '/HéliCS', '/Mongolfière'],
            showMenu: false,
        },
        // Add more tabs here if needed
    ]);

    const handleTabClick = (index: number) => {
        setTabs((prevTabs) => {
            const updatedTabs = [...prevTabs];
            updatedTabs[index] = { ...updatedTabs[index], showMenu: !updatedTabs[index].showMenu };
            return updatedTabs;
        });
    };

    const handleBlur: React.FocusEventHandler<HTMLLIElement> = (event) => {
        // Find the index of the tab that contains the event target
        const index = tabs.findIndex((tab) => event.currentTarget.contains(event.relatedTarget as Node));
        if (index !== -1) {
            setTabs((prevTabs) => {
                const updatedTabs = [...prevTabs];
                updatedTabs[index] = { ...updatedTabs[index], showMenu: false };
                return updatedTabs;
            });
        }
    };

    const handleMouseEnter = (index: number) => {
        setTabs((prevTabs) => {
            const updatedTabs = [...prevTabs];
            updatedTabs[index] = { ...updatedTabs[index], showMenu: true };
            return updatedTabs;
        });
    };

    const handleMouseLeave = (index: number) => {
        setTabs((prevTabs) => {
            const updatedTabs = [...prevTabs];
            updatedTabs[index] = { ...updatedTabs[index], showMenu: false };
            return updatedTabs;
        });
    };

    return (
        <nav style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: '0.5rem 1rem', position: 'fixed', top: 0, width: "100%"}}>
            {/*CACS Home Logo*/}
            <a href="/">
                <img src="../main_animations/cacs_animated_gif.gif" alt="Logo" style={{ width: '25px', transform: 'scale(3)', marginRight: '1.5rem', marginLeft: '1rem' }} />
            </a>
            {/*Menus*/}
            <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none', padding: 0}}>
                {tabs.map((tab, index) => (
                    <li key={index} style={{ marginRight: '2rem' }} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)} onBlur={handleBlur} tabIndex={0}>
                        <div onClick={() => handleTabClick(index)}>{tab.label}</div>
                        {tab.showMenu && (
                            <div style={{ position: 'absolute', top: '100%' }}>
                                <DropdownMenu options={tab.options} links={tab.links} />
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            {/*Social Media*/}
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