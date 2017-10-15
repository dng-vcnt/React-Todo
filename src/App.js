import React, { Component } from 'react';
import Header from './Header';
import TodoForm from './TodoForm';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <TodoForm />
            </div>
        );
    }
}

export default App;
