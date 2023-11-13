import {createSlice} from '@reduxjs/toolkit';
const intialState = {
    currentUser: null,
    loading: false,
    error:false,
}

export const userSlice = {
    name: 'user',
    intialState, 
    reducers:{
        loginStart: (state) =>{
            state.loading = true;
        },
        loginSuccess: (state) =>{
            state.loading = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) =>{
            state.loading = false;
            state.error = true;
        },
        logout: (state) =>{
            state.currentUser = null;
            state.loading = false;
            state.error = false;
        },
    }
}