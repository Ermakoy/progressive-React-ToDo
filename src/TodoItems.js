import React from 'react';

  class TodoItems extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }

  render() {
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="list">
        {listItems}
      </ul>
    );
  }

}
export default TodoItems;