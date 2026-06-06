// Kullanıcı bilgilerini almak için backend'e gönderilecek olan api isteğinin url adresi tanımlanıyor.
const API_URL = 'https://loodo-backend.onrender.com/api/users';

// Yeni kullanıcı oluşturmak için gerekli olan api iletişimini sağlayacak fonksiyon tanımlanıyor.
export const createUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/create-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
      credentials: 'include', // Cookie gibi tarayıcıda kaydedilen kimlik bilgilerini isteğe dahil eden işlem tanımlanıyor.
    });
    // Yanıt başarısız ise hata fırlatmayı sağlayan işlem tanımlanıyor.
    if (!response.ok) throw new Error('Failed to add user');
    // Backend'den gelen api yanıtı geriye döndürülüyor.
    return await response.json();
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
}

// Kullanıcının giriş yapması için gerekli olan api iletişimini sağlayacak fonksiyon tanımlanıyor.
export const loginUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/login-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
      credentials: 'include', // Cookie gibi tarayıcıda kaydedilen kimlik bilgilerini isteğe dahil eden işlem tanımlanıyor.
    });
    // Yanıt başarısız ise hata fırlatmayı sağlayan işlem tanımlanıyor.
    if (!response.ok) throw new Error('Failed to login');
    // Backend'den gelen api yanıtı geriye döndürülüyor.
    return await response.json();
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
}

// Kullanıcının giriş yapıp yapmadığını kontrol etmek için gerekli olan api iletişimini sağlayacak fonksiyon tanımlanıyor.
export const checkAuthStatus = async () => {
  try {
    const response = await fetch(`${API_URL}/is-authenticated`, {
      method: 'GET',
      credentials: 'include', // Cookie gibi tarayıcıda kaydedilen kimlik bilgilerini isteğe dahil eden işlem tanımlanıyor.
    });
    // Yanıt başarısız ise hata fırlatmayı sağlayan işlem tanımlanıyor.
    if (!response.ok) throw new Error('Authentication failed');
    // Backend'den gelen api yanıtının içerisinden sadece isLoggedIn alınıyor ve geriye döndürülüyor. Bu geriye true ya da false değer döndürür.
    const { isLoggedIn } = await response.json();
    return (isLoggedIn);
  } catch (error) {
    return false; // Hata alınırsa geriye false değer döndürülür.
  }
}

// Kullanıcının bilgilerini getirmek için gerekli olan api iletişimini sağlayacak fonksiyon tanımlanıyor.
export const fetchUserInformations = async () => {
  try {
    const response = await fetch(`${API_URL}/user-informations`, {
      method: 'GET',
      credentials: 'include', // Cookie gibi tarayıcıda kaydedilen kimlik bilgilerini isteğe dahil eden işlem tanımlanıyor.
    });
    // Yanıt başarısız ise hata fırlatmayı sağlayan işlem tanımlanıyor.
    if (!response.ok) throw new Error('User not authenticated');
    // Backend'den gelen api yanıtı geriye döndürülüyor.
    return await response.json();
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
}

// Kullanıcının çıkışını yapmak için gerekli olan api iletişini sağlayacak fonksiyon tanımlanıyor.
export const logoutUser = async () => {
  try {
    const response = await fetch(`${API_URL}/user-logout`, {
      method: 'POST',
      credentials: 'include', // Cookie gibi tarayıcıda kaydedilen kimlik bilgilerini isteğe dahil eden işlem tanımlanıyor.
    });
    // Yanıt başarısız ise hata fırlatmayı sağlayan işlem tanımlanıyor.
    if (!response.ok) throw new Error('Failed to logout');
    // Backend'den gelen api yanıtı geriye döndürülüyor.
    return await response.json();
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
}