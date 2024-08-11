import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { bgcolor } from '../store/Todoslice/ColorChangeslice';

const ColorChange = () => {
    const[val, setVal] = useState("");
    const dispatch = useDispatch();
    const change = useSelector(state=> state.bgcolor)
    function entercolor(event){
        setVal(event.target.value);
}
function clickme(event){

dispatch(bgcolor(val));
setVal("")

}

  return (
    <>
        <input type="text" placeholder='Enter color name' onChange={entercolor} value={val}/><br/><br/>
        <button onClick={clickme}>Change color</button><br/><br/>
        <div style={{width : "100px", height : "50px", backgroundColor : change , border: "2px solid black"}}></div>
    </>
  )
}

export default ColorChange