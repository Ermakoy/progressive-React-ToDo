import React from 'react';
import './TodoItems.css';

class TodoItems extends React.Component {

  delete = (key) => {
    console.log('del');
    this.props.delete(key);
  };

  createTask = (item) => {
    return <li onClick={() => this.delete(item.key)}
               key={item.key}>{item.text}</li>
  };

  render() {
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTask);

    return (
      <ul className="list">
        {listItems}
      </ul>
    );
  }

}

export default TodoItems;