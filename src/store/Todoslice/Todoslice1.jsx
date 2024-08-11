import {createSlice, nanoid} from '@reduxjs/toolkit';

const Todoslice1 = createSlice({
    name : "todo",
    initialState : {
        todos: []
    },
    reducers : {
        addTodo : (state, action)=>{
            const todo = {
                id : nanoid(),
                text : action.payload
            }
           state.todos.push(todo)
        },
        removeTodo : (state, action)=>{
            state.todos.filter((todo)=>{
                todo.id!==action.payload
            })
        }
    }

})

export const {addTodo, removeTodo} = Todoslice1.actions;

export default Todoslice1.reducer;