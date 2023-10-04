import React from 'react';
import { MenuItem } from '../model/menu-item';
import Link from 'next/link';

type MenuProps = {
    items:MenuItem[],
    menuItemClassName?:string
}

const Menu: React.FC<MenuProps> = ({items, menuItemClassName = ""}) => {
    return (
        <ul className='flex flex-row gap-[20px]'>
            {items.map(item => (
                <li key={item.id}>
                    <Link href={item.url} className={menuItemClassName}>
                    {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Menu;