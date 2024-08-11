import {createSlice} from '@reduxjs/toolkit';

const Todoslice2 = createSlice({
    name : "todo2",
    initialState : 0,
    reducers : {
        increment : (state,action)=>{
             return state+1;
        },
        decrement : (state,action)=>{
            return state-1;

        }
    }

})

export const {increment, decrement} = Todoslice2.actions;
export default Todoslice2.reducer;