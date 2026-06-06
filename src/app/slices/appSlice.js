import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isAsideOpen: false,
        isRegisterOpen: false,
        isLoginOpen: false,
        isUserLogedIn: false,
        userInformations: {},
        isLoading: true,
        theme: 'light',
    },
    reducers: {
        setIsAsideOpen: (state, action) => { state.isAsideOpen = action.payload; },
        setIsRegisterOpen: (state, action) => { state.isRegisterOpen = action.payload; },
        setIsLoginOpen: (state, action) => { state.isLoginOpen = action.payload; },
        setIsUserLogedIn: (state, action) => { state.isUserLogedIn = action.payload; },
        setUserInformations: (state, action) => { state.userInformations = action.payload; },
        setIsLoading: (state, action) => { state.isLoading = action.payload; },
        setTheme: (state, action) => { state.theme = action.payload; },
    },
});

export const {
    setIsAsideOpen,
    setIsRegisterOpen,
    setIsLoginOpen,
    setIsUserLogedIn,
    setUserInformations,
    setIsLoading,
    setTheme,
} = appSlice.actions;

export default appSlice.reducer;