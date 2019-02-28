import React from 'react';

class TodoHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { labelInput: '' };
  }

  _onChange = evt => {
    this.setState({ labelInput: evt.target.value });
  };

  _onAdd = () => {
    console.log(this.state.labelInput);
    this.setState({ labelInput: '' });
  };

  render(){
  const { filter } = this.props;
    return(
      <header>
      <h1>todos</h1>
      <div className="addTodo">
       <input value={this.state.labelInput} onChange={this._onChange} className="textfield" placeholder="add todo" />
        <button className="submit">Add</button>
      </div>
      <nav className="filter">
        <button className={filter === 'all' ? 'completed' : ''}>all</button>
        <button className={filter === 'active' ? 'completed' : ''}>active</button>
        <button className={filter === 'completed' ? 'completed' : ''}>completed</button>
      </nav>
    </header> 
    );
  }
}

export default TodoHeader;