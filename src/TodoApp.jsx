import React from 'react';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

class TodoApp extends React.Component{
    render(){
        return(
            <div>
                <TodoHeader />
                <TodoList />
                <TodoFooter />
            </div>
        )
    }
}
export default TodoApp;