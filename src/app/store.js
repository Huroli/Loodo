import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/appSlice';

// Bütün proje genelinde ortak kullanılacak state'ler Redux Toolkit aracılığıyla burada tanımlanıyor.
export const store = configureStore({
    // Reducer'lar tanımlanıyor.
    reducer: {
        app: appReducer,
    },
});

export default store;