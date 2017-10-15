import React from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends React.Component {
	render() { 
		return (
			<div className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
          		<h2>A Simple Todo App - React</h2>
        	</div>
		);
	}
}

export default Header;