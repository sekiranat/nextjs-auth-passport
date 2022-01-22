import {
    configureStore
} from '@reduxjs/toolkit';
import loginReducer from '@/containers/forms/LoginForm/loginFormSlice';
import registerReducer from '@/containers/forms/RegisterForm/registerFormSlice'
import userReducer from '@/containers/User/userSlice'

export const store = configureStore({
    reducer: {
        loginForm: loginReducer,
        registerForm: registerReducer,
        user: userReducer
    },
});