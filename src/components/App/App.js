import React, {Component} from 'react';
import TodoItems from "../Todoitems/TodoItems";
import './App.css';

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      items: [],
      done: 0,
      left: 0
    };
  }

  deleteItem = (key) => {
    let filteredItems = this.state.items.filter((item) => {
      return item.key !== key;
    });
    this.setState((prevState)=>{
      return {
        items: filteredItems,
        done: prevState.done+1,
        left: prevState.left-1
      }
    });
  };

  addItem = (e) => {
    let itemArray = this.state.items;

    if (this._inputElement.value !== '') {
      itemArray.unshift({
        text: this._inputElement.value,
        key: Date.now()
      });

      this.setState((prevState)=>{
        return {
          items: itemArray,
          left: prevState.left+1
        }
      });

      this._inputElement.value = '';

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
        <div>
          <span>Done: {this.state.done}</span>
          <span>Left: {this.state.left}</span>
        </div>
        <TodoItems delete={this.deleteItem}
                   entries={this.state.items}/>
      </div>
    );
  }
}

export default App;
