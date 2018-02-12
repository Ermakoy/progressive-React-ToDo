import React from 'react';
import './TodoItems.css';
import FlipMove from 'react-flip-move';

class TodoItems extends React.Component {

  delete = (key) => {
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
        <FlipMove duration={250} easing="ease-out">
        {listItems}
        </FlipMove>
      </ul>
    );
  }

}

export default TodoItems;