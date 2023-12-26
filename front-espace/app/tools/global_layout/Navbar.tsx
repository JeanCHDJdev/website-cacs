"use client";
import React, { useState, useRef } from 'react';
import DropdownMenu from './Dropdown';
import SocialMedia from '../SocialMedia';

interface Tab {
    label: string;
    options: string[];
    links: string[];
    showMenu: boolean;
}

const Navbar: React.FC = () => {
    const [tabs, setTabs] = useState<Tab[]>([
        {
            label: 'A propos',
            options: ['Projets', 'Membres'],
            links: ['/Projets', '/Membres'],
            showMenu: false,
        },
        {
            label: 'Rejoignez-nous!',
            options: ['Postes','Formations', 'Hackathon'],
            links: ['/Postes','/Formations', '/Hackathon'],
            showMenu: false,
        },
        {
            label: 'Partenariats',
            options: ['Nos Partenaires', 'Devenir Partenaire'],
            links: ['/Partenaires', '/nous-soutenir'],
            showMenu: false,
        },
        // Add more tabs here if needed
    ]);

    const timeoutRef = useRef<number | null>(null);

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
            timeoutRef.current = window.setTimeout(() => {
                setTabs((prevTabs) => {
                    const updatedTabs = [...prevTabs];
                    updatedTabs[index] = { ...updatedTabs[index], showMenu: false };
                    return updatedTabs;
                });
            }, 1000); // 1 second delay
        }
    };

    const handleMouseEnter = (index: number) => {
        clearTimeout(timeoutRef.current!);
        setTabs((prevTabs) => {
            const updatedTabs = [...prevTabs];
            updatedTabs[index] = { ...updatedTabs[index], showMenu: true };
            return updatedTabs;
        });
    };

    const handleMouseLeave = (index: number) => {
        timeoutRef.current = window.setTimeout(() => {
            setTabs((prevTabs) => {
                const updatedTabs = [...prevTabs];
                updatedTabs[index] = { ...updatedTabs[index], showMenu: false };
                return updatedTabs;
            });
        }, 1000); // 1000ms delay
    };

    return (
        <nav style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0, 0, 50, 0.4)', padding: '0.5rem 1rem', position: 'fixed', top: 0, width: "100%"}}>
            {/*CACS Home Logo*/}
            <a href="/">
                <img className='clickable-mini-images' src="../home_page/main_animations/cacs_animated_gif.gif" alt="Logo" style={{ width: '25px', transform: 'scale(4)', marginRight: '1.5rem', marginLeft: '1rem' }} />
            </a>
            {/*Menus*/}
            <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none', padding: 0, marginLeft: '1rem'}}>
                {tabs.map((tab, index) => (
                    <li key={index} style={{ marginRight: '0.5rem' }} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)} onBlur={handleBlur} tabIndex={0}>
                        <div onClick={() => handleTabClick(index)}>{tab.label}</div>
                        {tab.showMenu && (
                            <div style={{ position: 'absolute', top: '100%', marginLeft: '-0.5rem' }}>
                                <DropdownMenu options={tab.options} links={tab.links} />
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none', padding: 0, marginRight: 'auto' }}>
                <li style={{ marginRight: '2rem' }}>
                    <a href="/Contact">Contact</a>
                </li>
            </ul>
            {/*Social Media*/}
            <SocialMedia style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }} />
        </nav>
    );
};

export default Navbar;