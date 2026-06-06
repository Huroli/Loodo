import { forwardRef, useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAsideOpen, setIsRegisterOpen, setIsLoginOpen, setTheme } from '../../app/slices/appSlice';
import Icons from '../../components/Icons';
import Logo from '../../../public/images/loodo-logo-transparent.png';
import { postsPrev } from '../../components/Posts';

function Header(props, ref) {
    // Redux action'larını çağırabilmek için dispatch tanımlanıyor.
    const dispatch = useDispatch();

    // Redux store'dan gerekli state'ler useSelector ile alınıyor ve tanımlanıyor.
    const isAsideOpen = useSelector(state => state.app.isAsideOpen);
    const isRegisterOpen = useSelector(state => state.app.isRegisterOpen);
    const isLoginOpen = useSelector(state => state.app.isLoginOpen);
    const isUserLogedIn = useSelector(state => state.app.isUserLogedIn);
    const currentTheme = useSelector(state => state.app.theme);

    // Arama fonksiyonalitesi için state'ler tanımlanıyor
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const searchRef = useRef(null);

    // Arama input'u değiştiğinde çalışacak fonksiyon
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.trim() === '') {
            setSearchResults([]);
            return;
        }

        // Gönderileri arama sorgusuna göre filtreleme
        const filteredPosts = postsPrev.filter(post => 
            // Sponsored videoları hariç tut
            !(post.type === 'video' && post.userName === 'Sponsored') &&
            (post.title.toLowerCase().includes(query.toLowerCase()) ||
            post.name.toLowerCase().includes(query.toLowerCase()))
        );

        setSearchResults(filteredPosts.slice(0, 5)); // Sadece ilk 5 sonucu göster
    };

    // Arama alanı dışına tıklandığında sonuçları kapat
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchResults([]);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Header alanındaki menüler tanımlanıyor. Değişiklik yapıldığında güncellenecek state değerleri birlikte tanımlanıyor.
    const menus = [
        { page: 'Register', state: isRegisterOpen, useState: (state) => dispatch(setIsRegisterOpen(state)) },
        { page: 'Login', state: isLoginOpen, useState: (state) => dispatch(setIsLoginOpen(state)) },
        { page: 'Profile', url: '/profile' },
        { page: 'Home', url: '/' },
    ];

    // Aside bar'ı açıp kapatmak için gerekli fonksiyon tanımlanıyor.
    const toggleAside = () => {
        dispatch(setIsAsideOpen(!isAsideOpen));
    }

    // Menüdeki elemanların tıklandığında state durumunu değiştirmek için gerekli fonksiyon tanımlanıyor.
    const handleDynamic = (menu) => {
        setTimeout(() => {
            menu.useState(!menu.state);
        }, 0);
    }

    // Theme toggle function
    const toggleTheme = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        dispatch(setTheme(newTheme));
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    useEffect(() => {
        // Set initial theme
        document.documentElement.setAttribute('data-theme', currentTheme);
    }, []);

    return (
        // Header layout'u tanımlanıyor.
        <header className='header z-50 fixed w-full lg:h-24 h-16 px-12 max-[425px]:px-6 flex flex-row lg:gap-12 justify-between items-center' {...props}>

            {/* Bar ikonu çağrılıyor. Gerekli referans tanımlanıyor. */}
            <Icons.faBars ref={ref} className='h-[1.1rem] md:mr-12 max-[425px]:-mr-3 cursor-pointer transition-all hover:text-[#5DE1E6] hover:drop-shadow-md hover:opacity-100' onClick={() => toggleAside()} />

            {/* Logo çağrılıyor. */}
            <Link to={menus[3].url} className='md:block hidden'><img src={Logo} alt='Loodo Logo' className='lg:h-12 h-10 my-6 transition-all hover:drop-shadow-md' /></Link>

            {/* Arama çubuğu tanımlanıyor. */}
            <div ref={searchRef} className='search min-[580px]:mx-12 mx-6 relative flex flex-row grow min-[580px]:max-w-full max-w-[7.4rem] shadow-md rounded-full max-[580px]:justify-center items-center'>
                <input 
                    type='text' 
                    placeholder='Gönderi Ara...' 
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className='font-light pl-4 pr-11 py-1 min-[580px]:max-w-full max-w-[7.4rem] grow rounded-full transition-all hover:shadow-md focus:outline-[#5DE1E6]'
                    style={{
                        backgroundColor: 'var(--background-primary)',
                        color: 'var(--text-primary)',
                        borderColor: 'var(--border-color)'
                    }}
                />
                <Link>
                    <Icons.faMagnifyingGlass 
                        className='absolute min-[580px]:right-[0.9rem] right-[0.7rem] top-[0.56rem] opacity-60 cursor-pointer transition-all hover:text-[#5DE1E6] hover:drop-shadow-md hover:opacity-100'
                        style={{ color: 'var(--text-primary)' }}
                    />
                </Link>
                
                {/* Arama Sonuçları Dropdown */}
                {searchResults.length > 0 && (
                    <div 
                        className="absolute top-full left-0 right-0 mt-2 rounded-lg shadow-lg overflow-hidden z-50 transition-colors duration-300"
                        style={{
                            backgroundColor: 'var(--background-primary)',
                            borderColor: 'var(--border-color)'
                        }}
                    >
                        {searchResults.map((post) => (
                            <Link to={`/post/${post.id}`} key={post.id} onClick={() => {setSearchResults([]); setSearchQuery('')}}>
                                <div 
                                    className="flex items-center gap-3 p-3 transition-colors duration-300"
                                    style={{
                                        '&:hover': {
                                            backgroundColor: 'var(--background-secondary)'
                                        }
                                    }}
                                >
                                    {post.type === '3d' ? (
                                        <model-viewer
                                            src={post.modelUrl}
                                            alt={post.name}
                                            auto-rotate
                                            camera-controls
                                            disable-zoom
                                            style={{ width: '48px', height: '48px' }}
                                            className="rounded-lg"
                                            camera-orbit="45deg 55deg 2.5m"
                                            interaction-prompt="none"
                                        ></model-viewer>
                                    ) : post.type === 'video' ? (
                                        <video
                                            src={post.url}
                                            className="w-12 h-12 object-cover rounded-lg"
                                            muted
                                            loop
                                            autoPlay
                                            playsInline
                                        />
                                    ) : (
                                        <img 
                                            src={post.url} 
                                            alt={post.name} 
                                            className="w-12 h-12 object-cover rounded-lg"
                                        />
                                    )}
                                    <div>
                                        <p 
                                            className="font-medium text-sm"
                                            style={{ color: 'var(--text-primary)' }}
                                        >
                                            {post.title}
                                        </p>
                                        <p 
                                            className="text-xs"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            {post.userName}
                                        </p>
                                        <p className="text-xs text-[#5DE1E6]">
                                            {post.type === '3d' ? '3D Model' : post.type === 'video' ? 'Video' : 'Görsel'}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            {/* Menü elemanları döndürülüyor. Kullanıcının oturum açma durumuna göre farklı elemanlar dönüyor. */}
            <nav id='navbar' className='navbar lg:mr-12 flex flex-row items-center'>
                <button
                    onClick={toggleTheme}
                    className="mr-8 p-2 rounded-full transition-all duration-500 hover:bg-opacity-10 hover:bg-current relative"
                    aria-label="Toggle theme"
                    style={{ color: 'var(--text-primary)' }}
                >
                    <div className="relative w-5 h-5">
                        <div
                            className={`absolute inset-0 transform transition-transform duration-500 ${
                                currentTheme === 'light' ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                            }`}
                        >
                            <Icons.faMoon className="w-5 h-5" />
                        </div>
                        <div
                            className={`absolute inset-0 transform transition-transform duration-500 ${
                                currentTheme === 'dark' ? 'scale-100 rotate-0' : 'scale-0 -rotate-180'
                            }`}
                        >
                            <Icons.faSun className="w-5 h-5" />
                        </div>
                    </div>
                </button>
                <ul className='flex flex-row gap-8'>
                    {!isUserLogedIn && menus.slice(0, 2).map((menu) => (
                        <li 
                            key={menu.page} 
                            className={`font-medium cursor-pointer transition-all hover:opacity-60 hover:drop-shadow-md ${menu.state ? 'active' : ''}`}
                            style={{ color: 'var(--text-primary)' }}
                            onClick={() => handleDynamic(menu)}
                        >
                            {menu.page}
                        </li>
                    ))}
                    {isUserLogedIn && menus.slice(2, 3).map((menu) => (
                        <li key={menu.page}>
                            <NavLink 
                                to={menu.url} 
                                className='font-medium transition-all hover:opacity-60 hover:drop-shadow-md'
                                style={{ color: 'var(--text-primary)' }}
                            >
                                {menu.page}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

// Üst bileşenlerde Header layout'una ref tanımlanabilmesi için Header layout'u forwardRef ile tanımlanıyor.
Header = forwardRef(Header);

export default Header;