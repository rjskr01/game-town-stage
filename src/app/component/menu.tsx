"use client"

import React, { useEffect, useRef } from 'react';
import { MenuItem } from '../model/menu-item';
import Link from 'next/link';

type MenuProps = {
    items: MenuItem[],
    menuItemClassName?: string,
    handleClick?: () => void;
}

const Menu: React.FC<MenuProps> = ({ items, menuItemClassName = "", handleClick }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                !(event.target as HTMLElement).classList.contains("menu-icon") &&
                !(event.target as HTMLElement).closest(".menu-icon")
            ) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className='flex flex-wrap items-center justify-between mx-auto h-[24px] md:h-auto relative'>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center w-[20px] h-[20px] justify-center text-sm text-inherit  md:hidden" aria-controls="navbar-default" aria-expanded="false" onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen) }}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="menu-icon w-[13px] h-[13px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div ref={menuRef} className={`w-max md:block md:w-auto bg-white md:bg-inherit text-black md:text-white z-10 absolute md:relative top-8 md:top-0 ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
                    <ul className='flex flex-col md:flex-row md:gap-[16px] border-solid border-black border-t border-b border-l border-r px-5 md:px-0 md:border-none'>
                        {items.map(item => (
                            <li key={item.id}>
                                <Link href={item.url} className={`${menuItemClassName} text-[13px]`} onClick={handleClick}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Menu;