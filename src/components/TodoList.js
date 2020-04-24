import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    console.log(props)
    return (
        <div>
            {props.todos.map((todo,i) => {
                return <Todo key={i} todo={todo} dispatch={props.dispatch}/>
            })}
        </div>
    );
}

export default TodoList