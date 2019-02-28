import React from 'react';
import {Counter} from './components/Counter';
import TodoApp from './TodoApp';

export class App extends React.Component {
   
    render(){
        return (
            <div>
                <h2>My App</h2>
                <Counter text= "Chicken" />
                <Counter text= "Duck" />
                <TodoApp />
            </div>
        );
    }
}
