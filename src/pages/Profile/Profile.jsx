import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsUserLogedIn } from '../../app/slices/appSlice';
import { logoutUser } from '../../services/usersService';
import { postsPrev } from '../../components/Posts';
import UploadMedia from '../UploadMedia/UploadMedia';
import Home from './profilePages/Home/Home';
import Gallery from './profilePages/Gallery/Gallery';
import Favorites from './profilePages/Favorites/Favorites';
import Post from './profilePages/Posts/Posts';
import About from './profilePages/About/About';

function Profile() {
    // Redux action'larını çağırabilmek için dispatch tanımlanıyor.
    const dispatch = useDispatch();

    // Redux store'dan gerekli state useSelector ile alınıyor ve tanımlanıyor.
    const userInformations = useSelector(state => state.app.userInformations);
    const theme = useSelector(state => state.app.theme);

    // Yönlendirme işlemleri için gerekli olan useNavigate hook'u tanımlanıyor.
    const navigate = useNavigate();

    // Kullanıcının oturumunu sonlandırması için gerekli fonksiyon tanımlanıyor.
    const handleLogoutUser = async () => {
        try {
            await logoutUser();
            dispatch(setIsUserLogedIn(false));
            navigate('/');
        } catch (error) {
            throw new Error('An error occurred while logging out');
        }
    }

    return (
        // Profile sayfası tanımlanıyor. Daha önce tanımlanan kullanıcı bilgileri çağrılıyor.
        <section id='profile' className='profile w-full p-8 rounded-2xl'>
            <div className='profileBanner relative text-white w-[calc(100%+4vw)] rounded-t-2xl h-60 -ml-[2vw] -mt-8 flex items-end overflow-hidden bg-[#0098B3]'>
                <img src='' alt='' className='w-full h-auto' />
                <div className='absolute m-6 pr-6 p-4 flex flex-row gap-6 shadow-md rounded-xl backdrop-blur-md'
                    style={{
                        backgroundColor: theme === 'light' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.6)'
                    }}
                >
                    <img src={postsPrev[0].userAvatar} alt='' className='w-20 h-20' />
                    <div className='flex flex-col justify-evenly'>
                        <h1 className='text-3xl font-medium'>{userInformations.firstName + ' ' + userInformations.lastName}</h1>
                        <div className='w-60 flex flex-row justify-between'>
                            <p>Posts</p>
                            <p>Views</p>
                            <p>Followers</p>
                        </div>
                    </div>
                </div>

                <button 
                    className='absolute right-6 bottom-6 font-light mt-4 px-4 py-2 shadow-md rounded-full transition-all duration-300'
                    style={{
                        backgroundColor: theme === 'light' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.6)',
                        '&:hover': {
                            backgroundColor: theme === 'light' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.7)'
                        }
                    }}
                    onClick={handleLogoutUser}
                >
                    Sign Out
                </button>
                <button 
                    className='absolute right-32 bottom-6 font-light mt-4 px-4 py-2 shadow-md rounded-full transition-all duration-300'
                    style={{
                        backgroundColor: theme === 'light' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.6)',
                        '&:hover': {
                            backgroundColor: theme === 'light' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.7)'
                        }
                    }}
                >
                    <NavLink to='../upload-media'>Upload Media</NavLink>
                </button>
            </div>

            <div className='profileNav w-[calc(100%+4vw)] -ml-[2vw] rounded-b-2xl'>
                <ul 
                    className='py-4 pl-6 flex flex-row gap-6 transition-colors duration-300 rounded-b-2xl'
                    style={{
                        backgroundColor: 'var(--background-primary)',
                        borderBottom: '1px solid var(--border-color)'
                    }}
                >
                    <li>
                        <NavLink 
                            to='/profile' 
                            end
                            style={({ isActive }) => ({
                                color: isActive ? 'var(--primary-color)' : 'var(--text-primary)'
                            })}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/profile/gallery'
                            style={({ isActive }) => ({
                                color: isActive ? 'var(--primary-color)' : 'var(--text-primary)'
                            })}
                        >
                            Gallery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/profile/favorites'
                            style={({ isActive }) => ({
                                color: isActive ? 'var(--primary-color)' : 'var(--text-primary)'
                            })}
                        >
                            Favorites
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/profile/posts'
                            style={({ isActive }) => ({
                                color: isActive ? 'var(--primary-color)' : 'var(--text-primary)'
                            })}
                        >
                            Posts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/profile/about'
                            style={({ isActive }) => ({
                                color: isActive ? 'var(--primary-color)' : 'var(--text-primary)'
                            })}
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='profileMain min-h-60'>
                <Routes>
                    <Route path='../upload-media' element={<UploadMedia />} />
                    <Route path='/' element={<Home />} />
                    <Route path='gallery' element={<Gallery />} />
                    <Route path='favorites' element={<Favorites />} />
                    <Route path='posts' element={<Post />} />
                    <Route path='about' element={<About />} />
                </Routes>
            </div>
        </section>
    )
}

export default Profile;