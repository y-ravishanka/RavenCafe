import { createSlice } from '@reduxjs/toolkit';

export const navIndexSlice=createSlice({
    name: 'navIndex',
    initialState:{
        value: 0
    },
    reducers: {
        updateNavIndex: (state,action)=>{
            state.value = action.payload
        }
    }
});

export const {updateNavIndex}=navIndexSlice.actions;

export default navIndexSlice.reducer;