import {configureStore} from "@reduxjs/toolkit";
import Todoslice1 from "./Todoslice/Todoslice1";
import Todoslice2 from "./Todoslice/Todoslice2";
import ColorChangeslice from "./Todoslice/ColorChangeslice";


const store = configureStore({
 
    reducer : {
        users : Todoslice1,
        counter : Todoslice2,
        bgcolor : ColorChangeslice
    }

})
export default store;