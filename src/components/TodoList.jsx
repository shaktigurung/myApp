import React from 'react';
import {TodoListItem} from './TodoListItem.jsx';

export class TodoList extends React.Component<any, any> {
  render() {
    const { filter, todos } = this.props;

    const filteredTodos = Object.keys(todos).filter(id => {
      return filter === 'all' || (filter === 'completed' && todos[id].completed) || (filter === 'active' && !todos[id].completed);
    });
    return (
      <ul className="todos">
        {filteredTodos.map(id => (
          <TodoListItem key={id} id={id} {...todos[id]} />
        ))}
      </ul>
    );
  }
}
