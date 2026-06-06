import { useRef, forwardRef, useImperativeHandle } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsAsideOpen } from '../../app/slices/appSlice';
import Home from '../../pages/Home/Home';
import Post from '../../pages/Post/Post';
import Register from '../../components/Register/Register';
import Login from '../../components/Login/Login';
import Profile from '../../pages/Profile/Profile';
import UploadMedia from '../../pages/UploadMedia/UploadMedia';
import Categories from '../../pages/Categories/Categories';
import Premium from '../../pages/Premium/Premium';
import BeProducer from '../../pages/BeProducer/BeProducer';
import AboutUs from '../../pages/AboutUs/AboutUs';
import WorkWithUs from '../../pages/WorkWithUs/WorkWithUs';
import ProtectedRouteForLogin from '../../components/ProtectedRouteForLogin';

function Main(props, ref) {
    // Redux action'larını çağırabilmek için dispatch tanımlanıyor.
    const dispatch = useDispatch();

    // Referanslar tanımlanıyor.
    const overlayRef = useRef(null);
    const mainRef = useRef(null);
    const registerRef = useRef(null);
    const loginRef = useRef(null);

    // useImperativeHandle kullanılarak referanslar kombinleniyor.
    useImperativeHandle(ref, () => ({
        overlay: overlayRef.current,
        main: mainRef.current,
        register: registerRef.current,
        login: loginRef.current,
    }));

    // Mobilde aside bar'ın dışına tıklandığında aside bar'ın kapatılması için gerekli fonksiyon tanımlanıyor.
    const handleClickOutsideForAsideBar = () => {
        if (overlayRef.current) {
            overlayRef.current.style.display = 'none';
        }
        dispatch(setIsAsideOpen(false));
    }

    return (
        // Main layout'u tanımlanıyor. Gerekli referans tanımlanıyor.
        <main 
            ref={mainRef} 
            id='main' 
            className='main relative lg:mt-24 mt-16 px-[2vw] py-8 flex flex-row grow transition-all duration-300 overflow-hidden'
            style={{ backgroundColor: 'var(--background-secondary)', color: 'var(--text-primary)' }}
            {...props}
        >
            {/* Aside bar açıldığında main alanını karartan ve üzerine tıklandığında aside bar'ı kapatan bir katman tanımlanıyor. Gerekli referans tanımlanıyor. */}
            <div 
                ref={overlayRef} 
                onClick={() => { handleClickOutsideForAsideBar() }} 
                className='overlay hidden absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20'
            ></div>
            {/* Route'lar tanımlanıyor */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile/*' element={<ProtectedRouteForLogin><Profile /></ProtectedRouteForLogin>} />
                <Route path='/upload-media/*' element={<ProtectedRouteForLogin><UploadMedia /></ProtectedRouteForLogin>} />
                <Route path='/categories' element={<Categories />} />
                <Route path='/premium' element={<Premium />} />
                <Route path='/be-producer' element={<BeProducer />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/work-with-us' element={<WorkWithUs />} />
                <Route path='/post/:id' element={<Post />} />
            </Routes>
            {/* Register ve login bileşenleri çağrılıyor. Gerekli referanslar tanımlanıyor. */}
            <Register ref={registerRef} />
            <Login ref={loginRef} />
        </main>
    )
}

// Üst bileşenlerde Main layout'una ref tanımlanabilmesi için Main layout'u forwardRef ile tanımlanıyor.
Main = forwardRef(Main);

export default Main;