import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import Icons from '../../components/Icons';

function Aside(props, ref) {
    //Aside bar'ın içindeki menüler tanımlanıyor.
    const asideMenu = [
        { page: 'Home', url: '/', logo: <Icons.faHouse /> },
        { page: 'Categories', url: '/categories', logo: <Icons.faLayerGroup /> },
        { page: 'Premium', url: '/premium', logo: <Icons.faCoins /> },
        { page: 'Be Producer', url: '/be-producer', logo: <Icons.faUserTie /> },
        { page: 'About Us', url: '/about-us', logo: <Icons.faUsers /> },
        { page: 'Work With Us', url: '/work-with-us', logo: <Icons.faHandHoldingDollar /> },
    ];

    return (
        // Aside bar layout'u tanımlanıyor. Menü elemanları döndürülüyor. Gerekli referans tanımlanıyor.
        <aside 
            ref={ref} 
            id='aside' 
            className='aside z-30 fixed -translate-x-full min-w-52 h-full lg:mt-20 mt-16 px-8 py-12 transition-all duration-300 shadow-[0_0_8px_var(--border-color)]'
            style={{ backgroundColor: 'var(--background-primary)', color: 'var(--text-primary)' }}
            {...props}
        >
            <ul className='flex flex-col gap-4'>
                {asideMenu.map((menu) => (
                    <li key={menu.page}>
                        <NavLink 
                            to={menu.url} 
                            className='transition-all hover:opacity-60 hover:drop-shadow-md flex items-center'
                            style={{ color: 'var(--text-primary)' }}
                        >
                            {React.cloneElement(menu.logo, { 
                                className: 'w-4',
                                style: { color: 'inherit' }
                            })}&emsp;{menu.page}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

// Üst bileşenlerde Aside layout'una ref tanımlanabilmesi için Aside layout'u forwardRef ile tanımlanıyor.
Aside = forwardRef(Aside);

export default Aside;