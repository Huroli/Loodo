import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRouteForLogin({ children }) {
    // Redux store'dan gerekli state useSelector ile alınıyor ve tanımlanıyor.
    const isUserLogedIn = useSelector(state => state.app.isUserLogedIn);

    // Kullanıcı giriş yapmamış ise ana sayfaya yönlendiren işlem tanımlanıyor.
    if (!isUserLogedIn) return <Navigate to='/' />;

    // Kullanıcı giriş yapmış ise protected route'un içerisine girilen children elementi döndürülüyor.
    return children;
}

export default ProtectedRouteForLogin;