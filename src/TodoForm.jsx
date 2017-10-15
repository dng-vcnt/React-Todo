import React from 'react';
import OutputList from './OutputList';
import { Button, ControlLabel, FormControl, FormGroup, Well } from 'react-bootstrap';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			items: [], 
			text: '', 
			priority: '2'
		};
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		var newItem = {
			id: Date.now(),
			text: this.state.text,
			priority: this.state.priority
		};
		this.setState((prevState) => ({
      		items: prevState.items.concat(newItem),
      		text: '',
      		priority: '2'
    	}));
	}

	render() {
		return (
			<div>
				<Well>
					<form onSubmit={this.handleSubmit}>
						<FormGroup controlId="TodoForm">
						<ControlLabel>Task</ControlLabel>
							<FormControl 
								name="text" 
								type="text" 
								value={this.state.text} 
								onChange={this.handleChange} 
								placeholder="What is there to do?"/>
						<br />
						<select name="priority" value={this.state.priority} onChange={this.handleChange}>
							<option value="1">High Priority</option>
							<option value="2">Medium Priority</option>
							<option value="3">Low Priority</option>
						</select>
						<br />
						<Button type="submit" bsStyle="primary">{'Add #' + (this.state.items.length + 1)}</Button>
						</FormGroup>
					</form>
				</Well>
				<OutputList items={this.state.items} />
			</div>
		);
	}
}

export default TodoForm;