import React, {Component} from 'react';
import TodoItems from "../Todoitems/TodoItems";
import './App.css';

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      items: []
    };
  }

  deleteItem = (key) => {
    let filteredItems = this.state.items.filter((item) => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems
    });
  };

  addItem = (e) => {
    let itemArray = this.state.items;

    if (this._inputElement.value !== '') {
      itemArray.unshift({
        text: this._inputElement.value,
        key: Date.now()
      });

      this.setState({
        items: itemArray
      });

      this._inputElement.value = '';
      console.log(itemArray);

    }
    e.preventDefault();
  };

  render() {
    return (
      <div className="todolistMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input type="text"
                   ref={(a) => this._inputElement = a}
                   placeholder='Enter the task'/>
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoItems delete={this.deleteItem}
                   entries={this.state.items}/>
      </div>
    );
  }
}

export default App;
