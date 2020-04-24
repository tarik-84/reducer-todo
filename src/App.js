import React, { useState,useReducer } from 'react';
import { useForm } from 'react-hook-form'
import reducer, {initialState} from './reducers/reducer';
import TodoList from './components/TodoList';

function App() {

const {register} = useForm()
const [todo,setTodo] = useState({message:''})
const [state,dispatch] = useReducer(reducer,initialState)

const handleChange = e => {
  setTodo({message: e.target.value})
}

 const handleSubmit = (e) => {
    e.preventDefault()
   dispatch({type: 'ADD_TODO', payload: {id:Date.now(),completed:false, message: todo.message } })
 }



  return (
    <div className='App'>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="add todo" ref={register} name="todo" value={todo.message} onChange={e => handleChange(e)}></input>
          <input type="submit"></input>
          <button type="button" onClick={() =>  dispatch({type: "CLEAR_COMPLETED"})}>clear completed</button>
        </form>
        <TodoList todos={state.todos} dispatch={dispatch}/>
    </div>
  );
}

export default App