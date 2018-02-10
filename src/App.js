import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="todolistMain">
        <div className="header">
          <form action="">
            <input type="text" placeholder='Enter the task'/>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
