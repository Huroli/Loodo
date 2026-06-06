import { useEffect, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsRegisterOpen, setIsLoginOpen, setIsUserLogedIn, setIsLoading, setUserInformations, setTheme } from './app/slices/appSlice';
import { checkAuthStatus, fetchUserInformations } from './services/usersService';
import Header from './layouts/Header/Header';
import Aside from './layouts/Aside/Aside';
import Main from './layouts/Main/Main';
import Footer from './layouts/Footer/Footer';
import Cookies from 'js-cookie';

function App() {
  // Redux action'larını çağırabilmek için dispatch tanımlanıyor.
  const dispatch = useDispatch();

  // Redux store'dan gerekli state'ler useSelector ile alınıyor ve tanımlanıyor.
  const isAsideOpen = useSelector(state => state.app.isAsideOpen);
  const isRegisterOpen = useSelector(state => state.app.isRegisterOpen);
  const isLoginOpen = useSelector(state => state.app.isLoginOpen);
  const isUserLogedIn = useSelector(state => state.app.isUserLogedIn);
  const isLoading = useSelector(state => state.app.isLoading);
  const theme = useSelector(state => state.app.theme);

  // Referanslar tanımlanıyor.
  const bar = useRef();
  const aside = useRef();
  const mainRefs = useRef();

  // Initialize theme from cookie
  useEffect(() => {
    const savedTheme = Cookies.get('theme') || 'light';
    dispatch(setTheme(savedTheme));
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, [dispatch]);

  // Save theme to cookie when it changes
  useEffect(() => {
    Cookies.set('theme', theme, { expires: 365 }); // Cookie expires in 1 year
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Aside bar butonuna tıklandıktan sonraki stil işlemleri tanımlanıyor.
  useEffect(() => {
    if (mainRefs.current?.main && aside.current) {
      if (window.innerWidth > 900) {
        if (isAsideOpen) {
          aside.current.style.transform = 'translateX(0)';
          mainRefs.current.main.style.marginLeft = aside.current.offsetWidth + 'px';
          bar.current.style.color = '#5DE1E6';
          bar.current.style.opacity = '1';
        } else {
          aside.current.style.transform = 'translateX(-100%)';
          mainRefs.current.main.style.marginLeft = '0';
          bar.current.style.color = theme === 'light' ? 'black' : 'white';
          bar.current.style.opacity = '0.6';
        }
      } else {
        if (isAsideOpen) {
          aside.current.style.position = 'fixed';
          aside.current.style.transform = 'translateX(0)';
          mainRefs.current.overlay.style.display = 'block';
          bar.current.style.color = '#5DE1E6';
          bar.current.style.opacity = '1';
        } else {
          aside.current.style.transform = 'translateX(-100%)';
          mainRefs.current.overlay.style.display = 'none';
          bar.current.style.color = theme === 'light' ? 'black' : 'white';
          bar.current.style.opacity = '0.6';
        }
      }
    }
  }, [isAsideOpen, theme]);

  // Register butonuna tıklandıktan sonraki stil işlemleri tanımlanıyor.
  useEffect(() => {
    if (mainRefs.current?.register) {
      if (isRegisterOpen) {
        mainRefs.current.register.style.display = 'flex';
        // Reflow işlemi. (Register ve login butonlarına arka arkaya basıldığında oluşan animasyon hatasının önüne geçmek için kullanıldı.)
        mainRefs.current.register.getBoundingClientRect();
        setTimeout(() => {
          mainRefs.current.register.style.transform = 'translateY(0)';
          mainRefs.current.register.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        }, 0);
        setTimeout(() => {
          mainRefs.current.register.style.backdropFilter = 'blur(4px)';
        }, 400);
      } else {
        mainRefs.current.register.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0s cubic-bezier(0.4, 0, 0.2, 1)';
        mainRefs.current.register.style.backdropFilter = 'blur(0)';
        mainRefs.current.register.style.transform = 'translateY(-100%)';
        setTimeout(() => {
          mainRefs.current.register.style.display = 'none';
        }, 600);
      }
    }
  }, [isRegisterOpen]);

  // Login butonuna tıklandıktan sonraki stil işlemleri tanımlanıyor.
  useEffect(() => {
    if (mainRefs.current?.login) {
      if (isLoginOpen) {
        mainRefs.current.login.style.display = 'flex';
        // Reflow işlemi. (Register ve login butonlarına arka arkaya basıldığında oluşan animasyon hatasının önüne geçmek için kullanıldı.)
        mainRefs.current.login.getBoundingClientRect();
        setTimeout(() => {
          mainRefs.current.login.style.transform = 'translateY(0)';
          mainRefs.current.login.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        }, 0);
        setTimeout(() => {
          mainRefs.current.login.style.backdropFilter = 'blur(4px)';
        }, 400);
      } else {
        mainRefs.current.login.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0s cubic-bezier(0.4, 0, 0.2, 1)';
        mainRefs.current.login.style.backdropFilter = 'blur(0)';
        mainRefs.current.login.style.transform = 'translateY(-100%)';
        setTimeout(() => {
          mainRefs.current.login.style.display = 'none';
        }, 600);
      }
    }
  }, [isLoginOpen]);

  // Register içindeki form elementinin dışına tıklandığında register bileşenini kapatmak için gerekli fonksiyon tanımlanıyor.
  const handleClickOutsideForRegister = (event) => {
    if (mainRefs.current?.register && !Array.from(mainRefs.current?.register.children).some((child) =>
      child.contains(event.target))) {
      dispatch(setIsRegisterOpen(false));
    }
  }

  // Login içindeki form elementinin dışına tıklandığında login bileşenini kapatmak için gerekli fonksiyon tanımlanıyor.
  const handleClickOutsideForLogin = (event) => {
    if (mainRefs.current?.login && !Array.from(mainRefs.current?.login.children).some((child) =>
      child.contains(event.target))) {
      dispatch(setIsLoginOpen(false));
    }
  }

  // Register ve login bileşenlerinin içindeki form elementlerinin dışına tıklandığında bu bileşenlerin kapanmasını sağlayan işlem tanımlanıyor.
  useEffect(() => {
    document.addEventListener('click', handleClickOutsideForRegister);
    document.addEventListener('click', handleClickOutsideForLogin);
    return () => {
      document.removeEventListener('click', handleClickOutsideForRegister);
      document.removeEventListener('click', handleClickOutsideForLogin);
    }
  }, [dispatch]);

  // Kullanıcının oturum açıp açmadığını sorgulayan işlem tanımlanıyor.
  useEffect(() => {
    const fetchAuthStatus = async () => {
      const status = await checkAuthStatus();
      dispatch(setIsUserLogedIn(status));
      dispatch(setIsLoading(false));
    }

    fetchAuthStatus();
  }, [dispatch]);

  // Kullanıcı oturum açmış ise kullanıcı bilgilerini getiren işlem tanımlanıyor.
  useEffect(() => {
    const getUserInformations = async () => {
      const userData = await fetchUserInformations();
      dispatch(setUserInformations(userData));
    }

    getUserInformations();
  }, [isUserLogedIn, dispatch]);

  // Yüklenme sırasında gösterilecek içerik tanımlanıyor.
  if (isLoading) {
    return (
      <div 
        className="min-h-screen w-full flex justify-center items-center"
        style={{ 
          backgroundColor: 'var(--background-secondary)',
          color: 'var(--text-primary)'
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    //BrowserRouter'lar tanımlanıyor. Sitenin temel yapısını oluşturan layout'lar çağrılıyor. Gerekli referanslar ilgili bileşenlere iletilmek üzere tanımlanıyor.
    <BrowserRouter>
      <Header ref={bar} />
      <div className="mainAsideContainer flex flex-row grow">
        <Aside ref={aside} />
        <Main ref={mainRefs} />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App;