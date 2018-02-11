import React from 'react';
import './TodoItems.css';

class TodoItems extends React.Component {

  createTask = (item) => {
    return <li key={item.key}>{item.text}</li>
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