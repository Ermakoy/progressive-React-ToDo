import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items : []
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(e) {
    e.preventDefault();
    const itemArray = this.state.items;

    if (this._inputValue !== ''){
      itemArray.unshift({
        text: this._inputValue,
        date: Date.now()
      });

      this.setState({
        items: itemArray
      });

      this._inputValue = '';
      console.log(itemArray);

    }
  }
  render() {
    return (
      <div className="todolistMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input type="text"
                   ref={(a) => this._inputValue = a}
                   placeholder='Enter the task'/>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
