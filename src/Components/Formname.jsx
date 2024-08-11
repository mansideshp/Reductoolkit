import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '../store/Todoslice/Todoslice1';
const Formname = () => {
  const [val, setVal] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector(state => state.users.todos)


  function deleteMe(id) {
    dispatch(removeTodo(id));

  }
  function onChange(event) {
    setVal(event.target.value);
  }
  function submit(event) {
    event.preventDefault();
    dispatch(addTodo(val));
    setVal("");

  }

  return (
    <>
      <form>
        <input type="text" placeholder='enter text' value={val} onChange={onChange} />
        <button onClick={submit}>Submit</button>
        <hr />

      </form>
      {todos.map((todo) => { return (<li key={todo.id}>{todo.text} &nbsp;&nbsp;<button onClick={() => { deleteMe(todo.id) }}>Delete</button></li>) })}
    </>
  )
}

export default Formname