import React, { Component } from 'react';
import TodoForm from './TodoForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>A Simple Todo App - React</h2>
        </div>
        <TodoForm />
      </div>
    );
  }
}

export default App;
