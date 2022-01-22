import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';

import axios from 'axios';

const initialState = {
    data: {}
};

export const ListGames = createSlice({
    name: 'listGames',
    initialState,

    reducers: {

    },

});

export const {
    changeData
} = loginSlice.actions;

export default loginSlice.reducer;