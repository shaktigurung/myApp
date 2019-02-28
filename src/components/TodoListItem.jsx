import React from 'react';

class TodoListItem extends React.Component{
    render(){
        const {value} = this.props;
        return(
        <div>
            <li className="todo">
            <label>
                <input type="checkbox"/> Todo {value}
            </label>
            </li>
       </div>
    );
  }
}

export default TodoListItem;