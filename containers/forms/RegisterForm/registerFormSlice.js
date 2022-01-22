import axios from 'axios'
import {
    toast
} from "react-toastify";

import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';

const initialState = {
    data: {}
};

export const fetchRegister = createAsyncThunk(
    'api/user/signup',
    async (payload, {
        getState
    }) => {
        const {
            email,
            password,
            repeat_password
        } = getState().registerForm.data

        if (!email || !password || !repeat_password) {
            toast.warn("Fill in all the fields");
            return
        }

        if (password !== repeat_password) {
            toast.warn("Password mismatch");
            return
        }

        const {
            data
        } = await axios.post('/api/user/signup', {
            email,
            password,
            repeat_password
        });

        toast.success("Are you registered");
    }
)

export const registerSlice = createSlice({
    name: 'registerForm',
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
} = registerSlice.actions;

export default registerSlice.reducer;