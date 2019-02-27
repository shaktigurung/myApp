import React from 'react';
import {Button} from './Button';

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }
    onButtonClickIncrement = () => {
        this.setState({ counter: this.state.counter + 1});
    };
    onButtonClickDecrement = () => {
        this.setState({ counter: this.state.counter - 1});
    };
    render(){
        const {counter} = this.state;
        const {text} = this.props;

        return (
            <div>
                {text}: {counter}
                <Button onClick= {this.onButtonClickIncrement}> Increment +1  </Button>
                <Button onClick= {this.onButtonClickDecrement}> Decrement -1 </Button>
            </div>
        );
    }
}