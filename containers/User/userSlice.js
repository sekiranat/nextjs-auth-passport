import {
    createSlice
} from '@reduxjs/toolkit';

const initialState = {
    user: null
};

export const headerContainerSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const user = action.payload ? action.payload : null
            return user
        },
    },
});

export const {
    setUser
} = headerContainerSlice.actions;

export default headerContainerSlice.reducer;