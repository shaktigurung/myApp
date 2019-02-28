import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = () =>{
 
    return(
        <ul className="todos">
            <TodoListItem value="1"/>
            <TodoListItem value="2"/>
            <TodoListItem value="3"/>
            <TodoListItem value="4"/>
       </ul>
    );
}
export default TodoList;