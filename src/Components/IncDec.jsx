import React from 'react'
import {useSelector , useDispatch} from 'react-redux';
import {increment, decrement}  from '../store/Todoslice/Todoslice2'


const IncDec = () => {
   
    const dispatch = useDispatch();
    const num = useSelector(state => state.counter)
    function IncFunction(){
        dispatch((increment()))
    }

    function DecFunction(){
        dispatch((decrement()))
    }


  return (
    <>
    <button onClick={IncFunction}>Increment by 1</button>
    <button onClick={DecFunction}>Decrement by 1</button>
    <div>{num}</div>
    </>
  )
}

export default IncDec