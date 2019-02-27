import React from 'react';
import {Counter} from './components/Counter';

export class App extends React.Component {
   
    render(){
        return (
            <div>
                <h2>My App</h2>
                <Counter text= "Chicken" />
                <Counter text= "Duck" />
            </div>
        );
    }
}
