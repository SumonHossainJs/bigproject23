import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    currentVideo: null,
    loading: false, 
    erorr :false,
}

const videoSlice = createSlice({
    name:'video',
    intialState,
    reducers:{
        fetchStart:(state)=> {
            state.loading = true;
        },
        fetchSuccess:(state,action)=>{
            state.loading= false;
            state.currentVideo = action.payload;
        },
        fetchFailure:(state)=>{
            state.loading = false,
            state.currentVideo = null;
            state.error = true;
        },
        like:(state,action) =>{
            if(!state.currentVideo.likes.includes(action.payload)){
                state.currentVideo.likes.push(action.payload);
                state.currentVideo.dislike.splice(
                    state.currentVideo.dislikes.findIndex(
                        (userId) => userId === action.payload
                    ),
                    1
                )
            }
        },
        dislike:(state,action)=>{
            if(!state.currentVideo.dislikes.includes(action.payload)){
                state.currentVideo.dislikes.push(action.payload);
                state.currentVideo.likes.splice(
                    state.currentVideo.likes.findIndex(
                        (userId) => userId === action.payload
                    ),
                    1
                )
            }

        }

    }
})

export const {fetchFailure, fetchStart, fetchSuccess, like, dislike} = videoSlice.actions;
export default videoSlice.reducer;