import React from 'react';

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

	handleChange(e){
		this.setState({[e.target.name]: e.target.value});
	}

	handleSubmit(e){
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
				<form onSubmit={this.handleSubmit}>
					<label>Task
						<input name="text" value={this.state.text} onChange={this.handleChange} type="text" placeholder="What is there to do?"/>
					</label>
					<br />
					<select name="priority" value={this.state.priority} onChange={this.handleChange}>
						<option value="1">High Priority</option>
						<option value="2">Medium Priority</option>
						<option value="3">Low Priority</option>
					</select>
					<br />
					<button>{'Add #' + (this.state.items.length + 1)}</button>
				</form>
				<TodoList items={this.state.items} />
			</div>
		);
	}
}

class TodoList extends React.Component {
	render(){
		return (
			<ul>
				{this.props.items.map(item => (
					<li key={item.id}>Priority: {item.priority} Task: {item.text}</li>
				))}
			</ul>
		);
	}
}

export default TodoForm;