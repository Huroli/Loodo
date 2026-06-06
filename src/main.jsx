import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
    //Bütün proje genelinde istenilen state'lerin ortak kullanılabilmesi için Redux Toolkit aracılığıyla projemiz Provider olarak çevreleniyor.
    <Provider store={store}>
        {/* Geliştirme ortamında hata yönetimini daha iyi kontrol edebilmek için Strict Mode kullanılıyor. */}
        <StrictMode>
            <App />
        </StrictMode>
    </Provider>
)