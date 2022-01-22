import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';

import {
    toast
} from "react-toastify";
import axios from 'axios';

import {
    WRONG_LOGIN
} from '@/constants/index'

const initialState = {
    data: {}
};

export const fetchLogin = createAsyncThunk(
    'api/user/login',
    async (payload, {
        getState
    }) => {

        const {
            email,
            password,
        } = getState().loginForm.data

        const {
            data
        } = await axios.post('/api/user/login', {
            email,
            password,
        });

        data.success ? document.location.href = '/dashboard' : toast.error(WRONG_LOGIN);
    }
)

export const loginSlice = createSlice({
    name: 'login',
    initialState,

    reducers: {
        changeData: (state, action) => {
            state.data = {
                ...state.data,
                [action.payload.name]: action.payload.value
            }
        },
    },

});

export const {
    changeData
} = loginSlice.actions;

export default loginSlice.reducer;