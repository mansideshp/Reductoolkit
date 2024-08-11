import {createSlice} from '@reduxjs/toolkit';

const ColorChangeslice = createSlice({
    name : "ColorChange",
    initialState : "",
    reducers : {
        bgcolor : (state, action)=>{
            state = action.payload
            return state;
            
        }
    }

})

export const {bgcolor} = ColorChangeslice.actions;
export default ColorChangeslice.reducer;