import React from 'react';
import TodoHeader from './components/TodoHeader';
import {TodoList} from './components/TodoList';
import TodoFooter from './components/TodoFooter';

class TodoApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          todos: {
            '04': {
              label: 'Todo 4',
              completed: true
            },
            '03': {
              label: 'Todo 3',
              completed: false
            },
            '02': {
              label: 'Todo 2',
              completed: false
            },
            '01': {
              label: 'Todo 1',
              completed: false
            }
          },
          filter: 'all'
        };
      }
    render(){
        const { filter, todos } = this.state;
        return(
            <div>
                <TodoHeader filter={filter} />
                <TodoList todos={todos} filter={filter} />
                <TodoFooter todos={todos} />
            </div>
        )
    }
}
export default TodoApp;